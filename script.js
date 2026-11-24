
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Mobile navigation menu
if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        menuBtn.textContent = navMenu.classList.contains("active")
            ? "✕"
            : "☰";
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }
    });
});

// Highlight the current page in the navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("#navMenu a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});
