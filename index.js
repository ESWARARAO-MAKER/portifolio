const toggleBtn = document.getElementsByClassName("menu-icon")[0];
const navItems = document.getElementsByClassName("nav-items")[0];

toggleBtn.addEventListener("click", () => {
    navItems.classList.toggle("active");
})

let showMoreBtn = document.getElementById("showMore");
let gotoGitBtn = document.getElementById("goToGitSection");

function changeButton() {
    showMoreBtn.classList.add("show-more");
    gotoGitBtn.classList.remove("goto-git");
}