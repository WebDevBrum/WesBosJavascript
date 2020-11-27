const textarea = document.querySelector("[name='text']");
const result = document.querySelector(".result");
// eslint-disable-next-line quotes
const filterInputs = document.querySelectorAll('[name="filter"]');

const filters = {
  sarcastic(letter, index) {
    if (index % 2) {
      return letter.toUpperCase();
    }
    // so if it is even it will return lowercase
    return letter.toLowerCase();
  },
  funky() {},
  unable() {},
};

function transformText(text) {
  // take the text and loop over each letter
  const mod = Array.from(text).map(filters.sarcastic);
  console.log(mod);
  result.textContent = mod.join();
}

textarea.addEventListener("input", (e) => transformText(e.target.value));
