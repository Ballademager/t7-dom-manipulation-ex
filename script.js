//Write your own code here
//DON'T touch any other files!

const allBr = document.querySelectorAll("br");

allBr.forEach((a) => {
  a.remove();
});

const secs = document.querySelectorAll("section");

secs.forEach((sec) => {
  sec.classList.add("filled");
});

secs.forEach((sec) => {
  sec.previousElementSibling.remove();
});
