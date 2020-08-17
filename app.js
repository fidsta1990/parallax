// Show Date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// Toggle Sidebar
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu-toggle");
const closed = document.getElementById("close-btn");

menu.addEventListener("click", () => {
  sidebar.classList.add("show-bar");
});

closed.addEventListener("click", () => {
  sidebar.classList.remove("show-bar");
});
