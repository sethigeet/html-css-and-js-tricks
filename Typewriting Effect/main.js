const texts = ["The Great", "Geet", "The Best"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function removeText() {
    const newText = document.querySelector(".typing").textContent;
    for (let i = 0; i < newText.length; i++) {
        document.querySelector(".typing").textContent = newText.slice(
            0,
            newText.length - i
        );
        await sleep(200);
    }
}

(async function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        await sleep(2000);
        await removeText();
    }

    setTimeout(type, 200);
})();
