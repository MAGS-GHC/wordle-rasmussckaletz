let words;
let splitSecretWord;
let validInput;

function inputValidation() {
    let inputFromHTML = document.getElementById("input").value.toLowerCase();
    let validInput = /^[a-z]+$/.test(inputFromHTML);

    if (!validInput) {
        alert("Dit input er ikke valid. Bogstaver kun.")

    } else if (inputFromHTML.length !== 5) {
        alert("Dit input er ikke 5 bogstaver langt.")

    } else if (!words.includes(inputFromHTML)) {
        alert("Dit ord er ikke i listen")
        
    } else if (validInput && inputFromHTML.length === 5 && words.includes(inputFromHTML)) {
        return inputFromHTML;
    }
}

function uiUpdater(splitSecretWord) {
    validInput = inputValidation();
    let inputSplitArray = validInput.split("");
    let rowSelector = document.getElementById("row1");
    let count = 0;

    for (element of rowSelector.getElementsByTagName("div")) {
        let currentLetterInSecretWord = splitSecretWord[count];
        let currentLetterInGuessedWord = inputSplitArray[count];

        element.innerHTML = currentLetterInGuessedWord;

        if (currentLetterInSecretWord === currentLetterInGuessedWord) {
            element.style.backgroundColor = "rgb(0, 153, 0)";
        } else if (splitSecretWord.includes(currentLetterInGuessedWord)) {
            element.style.backgroundColor = "rgb(255, 215, 0)";
        } else {
            element.style.backgroundColor = "rgb(50, 50, 50)";
        }

        count++;
    }
    count = 0;
}

fetch("/Assets/valid-wordle-words.txt")
  .then((response) => response.text())
  .then((data) => {
    words = data.split(" ");
    const randomWord = Math.floor(Math.random() * words.length);
    console.log(words[randomWord]);

    let word = words[randomWord];
    splitSecretWord = word.split("");
  });