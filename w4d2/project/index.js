console.log("Yo yo yo");

const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

const colorString = `rgb(${r}, ${g}, ${b})`;

console.log(colorString);

/* DOM ! */

// Document Object Model

const selectQuizMessage = (value) => {
  if (value === "bad") {
    return "UNACEPPTAAAAABLE";
  }
  if (value === "best") {
    return "Good.";
  }
  return "What happened ?!";
};

const headerH1 = document.children[0].children[1].children[2].children[0];

document.addEventListener("DOMContentLoaded", () => {
  console.log("THE PAGE IS READY !");

  const headerH1Also = document.getElementsByTagName("h1")[0];
  headerH1Also.innerText = "Super Potato Quiz!";

  // document.getElementsByTagName("body")[0].style.backgroundColor = colorString;

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.addEventListener("click", (event) => {
      const result = selectQuizMessage(event.target.value);

      const newP = document.createElement("p");
      const newPContent = document.createTextNode(result);

      newP.appendChild(newPContent);

      document.querySelector(".result p").append(newP);
    });
  }
});
