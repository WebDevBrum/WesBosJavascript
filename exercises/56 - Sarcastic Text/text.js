const textarea = document.querySelector("[name='text']");
const result = document.querySelector(".result");
// eslint-disable-next-line quotes
const filterInputs = document.querySelectorAll('[name="filter"]');

function transformText(text) {
  // take the text and loop over each letter
  result.textContent = text;
}

const filters = {
  sarcastic() {},
  funky() {},
  unable() {},
};

textarea.addEventListener("input", (e) => transformText(e.target.value));
