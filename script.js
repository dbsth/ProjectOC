const characters = {

    character1: {
        name: "ARTHUR",
        role: "KNIGHT",
        image: "images/character1.jpg",

        age: "24",
        height: "188 cm",
        gender: "Male",
        occupation: "Knight",

        description:
            "A knight who has served the Northern Grand Duke since childhood.",

        story:
            "Arthur grew up alongside the Northern Grand Duke. " +
            "Once a cheerful and lively child, he gradually became " +
            "a blunt and disciplined knight as he grew older. " +
            "Despite his cold appearance, he remains deeply loyal " +
            "to the person he has protected all his life."
    },


    character2: {
        name: "ASTER",
        role: "MAGE",
        image: "images/character2.jpg",

        age: "21",
        height: "175 cm",
        gender: "Female",
        occupation: "Mage",

        description:
            "A young mage fascinated by forgotten magic.",

        story:
            "Aster was born into a noble family but chose to leave " +
            "the traditional path expected of her. " +
            "She spends most of her time researching ancient magic " +
            "and investigating strange phenomena."
    },


    character3: {
        name: "LUCIAN",
        role: "NOBLE",
        image: "images/character3.jpg",

        age: "27",
        height: "183 cm",
        gender: "Male",
        occupation: "Duke",

        description:
            "The young heir of an old and wealthy noble family.",

        story:
            "Lucian lost his parents at a young age and inherited " +
            "a family burden far earlier than expected. " +
            "Rather than relying solely on his inheritance, " +
            "he expanded the family's wealth through business and investment."
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

            const id =
                card.dataset.character;

            const character =
                characters[id];


            modalImage.src =
                character.image;

            modalImage.alt =
                character.name;


            modalRole.textContent =
                character.role;

            modalName.textContent =
                character.name;

            modalDescription.textContent =
                character.description;


            modalAge.textContent =
                character.age;

            modalHeight.textContent =
                character.height;

            modalGender.textContent =
                character.gender;

            modalOccupation.textContent =
                character.occupation;


            modalStory.textContent =
                character.story;


            modal.classList.add("active");

            document.body.style.overflow =
                "hidden";

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
