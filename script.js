/**
 * @author Untoldcoding <vishaltewatiawork@gmail.com>
 */
(function ($) {
  "use strict";
  $(".untoldcoding-falling").sakura("start", {
    blowAnimations: ["blow-soft-left", "blow-medium-left", "blow-soft-right"],
    className: "sakura",
    fallSpeed: 2.7,
    maxSize: 13,
    minSize: 8,
    newOn: 300,
  });
})(jQuery);

function spawnWeddingParticle() {
  const container = document.querySelector('.muslim-wedding-animation');
  if (!container) return;

  const types = ['crescent', 'star', 'glow'];
  const type = types[Math.floor(Math.random() * types.length)];
  const element = document.createElement('span');
  element.className = type;
  const size = Math.floor(Math.random() * 22) + 18;
  const drift = Math.floor(Math.random() * 120) - 60;
  const x = Math.floor(Math.random() * 100);
  const duration = Math.random() * 6 + 8;
  const delay = Math.random() * 3;

  element.style.setProperty('--size', `${size}px`);
  element.style.setProperty('--drift', `${drift}px`);
  element.style.setProperty('--duration', `${duration}s`);
  element.style.left = `${x}%`;
  element.style.bottom = `-40px`;
  element.style.animationDelay = `${delay}s`;
  element.style.opacity = '0';

  container.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, (duration + delay + 1) * 1000);
}

function startWeddingParticles() {
  spawnWeddingParticle();
  window.weddingParticleInterval = window.setInterval(spawnWeddingParticle, 700);
}

let musicStarted = false;
let audioElement = null;

function startMusic() {
  if (musicStarted || !audioElement) return;

  audioElement.muted = false;
  audioElement.volume = 1;

  audioElement.play()
    .then(() => {
      musicStarted = true;
      console.log("🎵 Music started when invitation opened");
    })
    .catch((err) => {
      console.log("Could not start music on open:", err);
    });
}

function animateCoverAndOpen() {
  const cover = document.getElementById("invitation-cover");
  if (!cover) return;

  cover.classList.add("opening");
  setTimeout(() => {
    cover.classList.remove("opening");
    openInvitation();
  }, 350);
}

function openInvitation() {
  const invitationContainer = document.getElementById("invitation-container");
  if (!invitationContainer || !invitationContainer.classList.contains("closed")) return;

  invitationContainer.classList.remove("closed");
  invitationContainer.classList.add("open");
  invitationContainer.setAttribute("aria-label", "Invitation opened");
  startMusic();
}

function startMutedAudio() {
  audioElement = document.getElementById("my_audio");
  if (!audioElement) return;

  audioElement.muted = true;
  audioElement.volume = 1;
  audioElement.preload = "auto";
  audioElement.load();

  audioElement.play().catch((err) => {
    console.log("Muted autoplay blocked:", err);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  startMutedAudio();
  startWeddingParticles();

  const invitationCover = document.getElementById("invitation-cover");
  if (invitationCover) {
    invitationCover.addEventListener("click", animateCoverAndOpen);
    invitationCover.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        animateCoverAndOpen();
      }
    });
  }
});

function pauseAudio() {
  document.getElementById("my_audio").pause();
  console.log("Shaadi me pakka aana");
  event.stopPropagation();
}
var countDownDate = new Date("2026-08-15T00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML =
    "<div class='container'><div class='days block'>" +
    days +
    "<br>Days</div>" +
    "<div class='hours block'>" +
    hours +
    "<br>Hours</div>" +
    "<div class='minutes block'>" +
    minutes +
    "<br>Minutes</div>" +
    "<div class='seconds block'>" +
    seconds +
    "<br>Seconds</div></div>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Wedding Completed !!";
  }
}, 1000);

var styles = [
  "background: linear-gradient(#D33106, #571402)",
  "border: 1px solid red",
  "color: white",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "line-height: 40px",
  "text-align: center",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

var styles1 = [
  "color: #FF6C37",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
  "line-height: 40px",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

var styles2 = [
  "color: teal",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
  "line-height: 40px",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

console.log("\n\n%c SAVE THE DATE: 15th Aug, 2026", styles);