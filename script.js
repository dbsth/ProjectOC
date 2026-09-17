const characters = {

    OwnerCha: {
        name: "Unknown",
        role: "Owner Character",
        images: [
            "images/OwnerCha.jpg",
            "images/OwnerCha2.jpg",
            "images/OwnerCha3.jpg"
        ],

        age: "Unknown",
        height: "160 cm",
        gender: "Female",
        occupation: "Unknown",

        description:
            "Owner Character.",

        story:
            "오너캐는 오너캐인데 관련 스토리가 없다.\n" +
            "근데 그런게 굳이 필요할까 그냥 이대로도 ㄱㅊ지 않나"

    },


    Cheongram: {
        name: "麗 淸藍",
        role: "Devil",
        images: [
            "images/Cheongram.jpg",
            "images/Cheongram2.jpg"
        ],
        
        age: "Unknown",
        height: "157 cm",
        gender: "Female",
        occupation: "Unknown",

        description:
            "화려한 게 좋은 히키코모리",

        story:
            "기본적으로 방에 틀어박혀 나가지 않는다.\n" +
            "인간관계 박살남.\n" +
            "오랫동안 목소리를 내지 않은 탓에 말하는 게 서툴다."
    },


    Neuru: {
        name: "느루",
        role: "Zombie",
        images: [
            "images/Neuru.jpg",
            "images/Neuru2.jpg",
            "images/Neuru3.jpg"
        ],

        age: "22",
        height: "162.7 cm",
        gender: "Female",
        occupation: "None",

        description:
            "죽어서 좀비가 된 이후 한 번 더 죽었다.",

        story:
            "좀비가 될 때 생전의 기억을 잃었다.\n" +
            "홀로 떠돌다 어느 생존자 집단에 속해 나름의 안정을 찾았으나\n" +
            "모종의 이유로 다시 혼자가 되었다. "
    }

};


/* =========================
   MODAL ELEMENTS
========================= */

const modal =
    document.getElementById("character-modal");

const modalImage =
    document.getElementById("modal-image");

const prevImage = document.getElementById("prev-image");
const nextImage = document.getElementById("next-image");

let currentCharacterImages = [];
let currentImageIndex = 0;

const modalRole =
    document.getElementById("modal-role");

const modalName =
    document.getElementById("modal-name");

const modalDescription =
    document.getElementById("modal-description");

const modalAge =
    document.getElementById("modal-age");

const modalHeight =
    document.getElementById("modal-height");

const modalGender =
    document.getElementById("modal-gender");

const modalOccupation =
    document.getElementById("modal-occupation");

const modalStory =
    document.getElementById("modal-story");


/* =========================
   OPEN MODAL
========================= */

document.querySelectorAll(".character-card").forEach(card => {
    card.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.character;
        const character = characters[id];

        if (!character) return;

       
        currentCharacterImages = character.images; 
        currentImageIndex = 0;

        updateModalImage();

        modalRole.textContent = character.role;
        modalName.textContent = character.name;
        modalDescription.textContent = character.description;

        modalAge.textContent = character.age;
        modalHeight.textContent = character.height;
        modalGender.textContent = character.gender;
        modalOccupation.textContent = character.occupation;

        modalStory.textContent = character.story;

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

function updateModalImage() {

    modalImage.src = currentCharacterImages[currentImageIndex];

    modalImage.alt = "캐릭터 이미지";

    if (currentCharacterImages.length <= 1) {
        prevImage.style.display = "none";
        nextImage.style.display = "none";
    } else {
        prevImage.style.display = "flex";
        nextImage.style.display = "flex";
    }

}

/* =========================
   CLOSE MODAL
========================= */

document
    .querySelector(".modal-close")
    .addEventListener("click", closeModal);


document
    .querySelector(".modal-background")
    .addEventListener("click", closeModal);


function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}

prevImage.addEventListener("click", event => {

    event.stopPropagation();

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = currentCharacterImages.length - 1;
    }

    updateModalImage();

});


nextImage.addEventListener("click", event => {

    event.stopPropagation();

    currentImageIndex++;

    if (currentImageIndex >= currentCharacterImages.length) {
        currentImageIndex = 0;
    }

    updateModalImage();

});


/* ESC 키로 닫기 */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});

/* =========================
   CATEGORY FILTER LOGIC
========================= */

// 현재 선택된 필터 상태를 저장하는 객체
const activeFilters = {
    gender: null,
    race: null,
    type: null
};

const filterButtons = document.querySelectorAll(".filter-btn");
const characterCards = document.querySelectorAll(".character-card");
const resetButton = document.getElementById("reset-filters");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        const value = button.dataset.value;

        // 같은 버튼을 또 누르면 선택 해제, 다른 버튼 누르면 선택
        if (activeFilters[category] === value) {
            activeFilters[category] = null;
            button.classList.remove("active");
        } else {
            // 같은 카테고리의 다른 버튼 active 제거
            document.querySelectorAll(`.filter-btn[data-category="${category}"]`)
                .forEach(btn => btn.classList.remove("active"));

            activeFilters[category] = value;
            button.classList.add("active");
        }

        applyFilters();
    });
});

// 초기화 버튼 이벤트
if (resetButton) {
    resetButton.addEventListener("click", () => {
        activeFilters.gender = null;
        activeFilters.race = null;
        activeFilters.type = null;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        applyFilters();
    });
}

// 필터 조건에 맞춰 카드 보이기/숨기기 함수
function applyFilters() {
    characterCards.forEach(card => {
        const cardGender = card.dataset.gender;
        const cardRace = card.dataset.race;
        const cardType = card.dataset.type;

        // 조건 체크 (선택 안 된 카테고리는 true로 통과)
        const matchGender = !activeFilters.gender || cardGender === activeFilters.gender;
        const matchRace = !activeFilters.race || cardRace === activeFilters.race;
        const matchType = !activeFilters.type || cardType === activeFilters.type;

        // 세 조건이 모두 맞으면 보이고, 하나라도 다르면 hidden 클래스 추가
        if (matchGender && matchRace && matchType) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}
