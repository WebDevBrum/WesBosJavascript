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

console.log(superDiv);
// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
