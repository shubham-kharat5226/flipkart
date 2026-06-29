// Grab Mobile Navigation Elements
const hamburger = document.getElementById("hamburger");
const navActions = document.getElementById("nav-actions");

// Toggle class on hamburger click
hamburger.addEventListener("click", () => {
  navActions.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Optional structural animation effect for hamburger transformation
if (hamburger) {
  hamburger.addEventListener("click", () => {
    const bars = document.querySelectorAll(".bar");
    if (navActions.classList.contains("active")) {
      bars[0].style.transform = "rotate(-45deg) translate(-4px, 5px)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "rotate(45deg) translate(-4px, -5px)";
    } else {
      bars[0].style.transform = "none";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "none";
    }
  });
}

// dark mode

function darkMode() {
  document.body.classList.toggle("dark");

  let btn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark")) {
    btn.innerHTML = "☀️ Light Mode";
  } else {
    btn.innerHTML = "🌙 Dark Mode";
  }
}
