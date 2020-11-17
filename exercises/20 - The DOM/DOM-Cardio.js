// Make a div
const superDiv = document.createElement("div");
// add a class of wrapper to it
superDiv.classList.add("wrapper");
// put it into the body
document.body.appendChild(superDiv);
// make an unordered list
// const superList = document.createElement("ul");
// add three list items with the words "one, two, three" in them
// const list1 = document.createElement("li");
// const list2 = document.createElement("li");
// const list3 = document.createElement("li");

// list1.textContent = "one";
// list2.textContent = "two";
// list3.textContent = "three";

// superList.appendChild(list1);
// superList.appendChild(list2);
// superList.appendChild(list3);

// SEE HOW ALL OF THIS WRITING CAN BE REDUCED BY

const superUl = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;

// put that list into the above wrapper
superDiv.innerHTML = superUl;

// create an image

const superImage = document.createElement("img");

// set the source to an image

superImage.setAttribute("src", "https://picsum.photos/200");

// set the width to 250

superImage.setAttribute("width", 250);

// add a class of cute
superImage.classList.add("cute");

// add an alt of Cute Puppy

superImage.setAttribute("alt", "cute puppy");

console.log(superImage);

// Append that image to the wrapper

superDiv.appendChild(superImage);

// with HTML string, make a div, with two paragraphs inside of it

const superHtml = `
  <div>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>`;
// put this div before the unordered list from above

const superDuperUl = document.querySelector("ul");

console.log(superDuperUl);

superDuperUl.insertAdjacentHTML("beforebegin", superHtml);

// ANOTHER OPTION IS insertAdjacentElement THIS WILL NOT RECOGNISE THE PRE PARSED superHtml

// add a class to the second paragraph called warning

const pList = document.querySelectorAll("p");

console.log(pList);

pList[1].classList.add("warning");

// remove the first paragraph

pList[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  return `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height}cm and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!
  <button class="delete" type="button">&times; Delete</button></p>
  
  </div>

`;
}

console.log(generatePlayerCard("scott", 37, 200));

// make a new div with a class of cards

const newDiv = document.createElement("div");
newDiv.classList.add("cards");

// make 4 player cards using generatePlayerCard

let cardHtml = generatePlayerCard("Scott", 37, 200);
cardHtml += generatePlayerCard("Jenny", 35, 180);
cardHtml += generatePlayerCard("Sophia", 4, 100);
cardHtml += generatePlayerCard("Bella", 1, 80);

console.log(cardHtml);

// append those cards to the div

newDiv.innerHTML = cardHtml;

//

console.log(newDiv);

// put the div into the DOM just before the wrapper element

superDiv.insertAdjacentElement("beforebegin", newDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!

const buttons = document.querySelectorAll(".delete");

// make out delete function

function deleteCards(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest(".playerCard").remove();
}

// loop over them and attach a listener

buttons.forEach((button) => button.addEventListener("click", deleteCards));
