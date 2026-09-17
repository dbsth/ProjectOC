const characters = {

    OwnerCha: {
        name: "Unknown",
        role: "Owner Character",
        image: "images/OwnerCha.jpg",

        age: "Unknown",
        height: "160 cm",
        gender: "Female",
        occupation: "Unknown",

        description:
            "Owner Character.",

        story:
            "오너캐는 오너캐인데 관련 스토리가 없다.\n" +
            "오너캐 이름 어케 정하는데..."

    },


    Cheongram: {
        name: "麗 淸藍",
        role: "Devil",
        image: "images/Cheongram.jpg",

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
        image: "images/Neuru.jpg",

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

document
    .querySelectorAll(".character-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            console.log("캐릭터 카드 클릭됨");

            const id = card.dataset.character;

            console.log("캐릭터 ID:", id);

            const character = characters[id];

            console.log("캐릭터 정보:", character);

            if (!character) {
                console.log("캐릭터 정보를 찾을 수 없습니다.");
                return;
            }

            modalImage.src = character.image;
            modalImage.alt = character.name;

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


/* ESC 키로 닫기 */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});
