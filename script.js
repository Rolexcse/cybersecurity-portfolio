
// Portfolio website loaded successfully
console.log("Mohamed Ali - Cybersecurity Portfolio");

// Highlight navigation links when clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigated to: " + link.textContent);
    });
});

// Show current year in footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        "© " + new Date().getFullYear() +
        " Mohamed Ali | Cybersecurity Portfolio";
}
