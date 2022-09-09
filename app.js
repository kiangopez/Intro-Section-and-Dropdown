const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector("#overlay");

burger.addEventListener("click", () => {
  navLinks.classList.add("active");
  overlay.classList.add("active-overlay");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active-overlay");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active-overlay");
});

const dropdown = document.querySelectorAll(".dropdown-trigger");
const dropdownContent = document.querySelectorAll(".dropdown");

dropdown.forEach((el) => {
  el.addEventListener("click", () => {
    const nextSibling = el.nextElementSibling;
    nextSibling.classList.toggle("active-dropdown");
    // const svg = el.childNodes[1]; // here i tried to access the svg by the <p> child node
    // console.log(svg.getAttribute("path")); // failed to replace the chevron icon
  });
});
