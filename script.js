//Write your own code here
//DON'T touch any other files!

// document.body.innerHTML = document.body.innerHTML.replace(/<br>/gi, "");

function removeBreaks() {
  console.log("first assignment");
  const allBreaks = document.querySelectorAll("br");
  allBreaks.forEach((a) => {
    a.remove();
  });
}

removeBreaks();

function addFilled() {
  console.log("adding a class");
  const allSecs = document.querySelectorAll("section");

  allSecs.forEach((a) => {
    a.classList.add("filled");
  });
}

addFilled();

function removeBefore() {
  console.log("removing elements that comes before a sec");
  const secs = document.querySelectorAll("section");
  // do the rest
}

removeBefore();
