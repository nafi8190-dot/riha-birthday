const startButton = document.getElementById("startButton");
const loader = document.getElementById("loader");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");

const hearts = document.getElementById("hearts");
const balloons = document.getElementById("balloons");
const sparkles = document.getElementById("sparkles");

// Start experience
startButton.addEventListener("click", () => {
  loader.style.display = "none";
  mainContent.style.display = "block";

  music.play();

  createHearts();
  createBalloons();
  createSparkles();

  typeWriter();
});

// TYPEWRITER EFFECT
function typeWriter() {
  const text = document.getElementById("typingText");
  const content = text.innerHTML;
  text.innerHTML = "";

  let i = 0;
  function typing() {
    if (i < content.length) {
      text.innerHTML += content.charAt(i);
      i++;
      setTimeout(typing, 30);
    }
  }
  typing();
}

// HEARTS
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animation = "floatUp 5s linear";
    heart.style.bottom = "0px";

    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}

// BALLOONS
function createBalloons() {
  setInterval(() => {
    const balloon = document.createElement("div");
    balloon.innerHTML = "🎈";
    balloon.style.position = "absolute";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.fontSize = "25px";
    balloon.style.animation = "floatUp 7s linear";
    balloon.style.bottom = "0px";

    balloons.appendChild(balloon);

    setTimeout(() => {
      balloon.remove();
    }, 7000);
  }, 800);
}

// SPARKLES
function createSparkles() {
  setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.style.position = "absolute";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.fontSize = "15px";
    sparkle.style.animation = "floatUp 4s linear";
    sparkle.style.bottom = "0px";

    sparkles.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 4000);
  }, 200);
}