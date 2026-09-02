

const text = "Frontend Developer";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text[index];
    index++;

    setTimeout(typingEffect, 100);
  }
}

typingEffect();



const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});