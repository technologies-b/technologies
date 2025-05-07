// Show welcome message once (in index.html)
window.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("welcomeShown")) {
    alert("👋 Welcome to our elegant website!");
    sessionStorage.setItem("welcomeShown", "true");
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Add button click animation
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 200);
  });
});

// Contact form validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert("❗ Please fill out all fields before sending your message.");
    }
  });
}
