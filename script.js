const menu = document.querySelector(".menu");
const navheader = document.querySelector(".navheader");

menu.addEventListener("click", function() {
    menu.classList.toggle("change");
    navheader.style.display = (navheader.style.display === "block") ? "none" : "block";
});

