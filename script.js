const clearBtn = document.getElementById("clear-btn");
const btn = document.getElementById("submit-btn");
const charInput = document.getElementById("char");
const wordInput = document.getElementById("word");
const spanWord = document.querySelector(".span-word");
const spanWordLength = document.querySelector(".word-length");
const spanChar = document.querySelector(".span-char");
const spanCount = document.querySelector(".span-count");

const countChar = (string, char) => {
  string = wordInput.value.toLowerCase();
  char = charInput.value.toLowerCase();

  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) count++;
  }

  spanWord.innerText = string;
  spanWordLength.innerText = string.length;
  spanChar.innerText = char;
  spanCount.innerText = count;
};

clearBtn.addEventListener("click", () => {
  spanWord.innerText = "";
  spanWordLength.innerText = "";
  spanChar.innerText = "";
  spanCount.innerText = "";
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  countChar();
});
