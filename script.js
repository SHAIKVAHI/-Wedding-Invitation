/**
 * @author Untoldcoding <vishaltewatiawork@gmail.com>
 */
(function ($) {
  "use strict";
  $(".untoldcoding-falling").sakura("start", {
    blowAnimations: ["blow-soft-left"],
    className: "sakura",
    fallSpeed: 2.5,
    maxSize: 12,
    minSize: 9,
    newOn: 250,
  });
})(jQuery);

let musicStarted = false;
let audioElement = null;

function startMusic() {
  if (musicStarted || !audioElement) return;

  audioElement.muted = false;
  audioElement.volume = 1;

  audioElement.play()
    .then(() => {
      musicStarted = true;
      console.log("🎵 Music started on first gesture");
    })
    .catch((err) => {
      console.log("Could not start music on gesture:", err);
    });
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

window.addEventListener("DOMContentLoaded", startMutedAudio);

document.addEventListener("scroll", startMusic, { once: true });
document.addEventListener("wheel", startMusic, { once: true });
document.addEventListener("touchmove", startMusic, { once: true });
document.addEventListener("mousemove", startMusic, { once: true });
document.addEventListener("pointermove", startMusic, { once: true });
document.addEventListener("keydown", startMusic, { once: true });

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