const card = document.querySelector("#profile-card");
const music = document.querySelector("#background-music");
const musicToggle = document.querySelector("#music-toggle");
const equalizer = document.querySelector("#equalizer");
const volumeSlider = document.querySelector("#volume-slider");
const currentTimeLabel = document.querySelector("#current-time");
const durationLabel = document.querySelector("#duration");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "--:--";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function setPlaying(isPlaying) {
  musicToggle.classList.toggle("is-playing", isPlaying);
  equalizer.classList.toggle("is-playing", isPlaying);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.setAttribute("aria-label", isPlaying ? "Tạm dừng nhạc nền" : "Phát nhạc nền");
}

function updateVolume() {
  const volume = Number(volumeSlider.value);
  music.volume = volume;
  volumeSlider.setAttribute("aria-valuetext", `${Math.round(volume * 100)}%`);
}

function updateDuration() {
  durationLabel.textContent = formatTime(music.duration);
}

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
    } catch (error) {
      setPlaying(false);
      musicToggle.title = "Trình duyệt chưa thể phát tệp nhạc. Hãy thử lại.";
      console.error("Không thể phát nhạc nền:", error);
    }
  } else {
    music.pause();
  }
});

volumeSlider.addEventListener("input", updateVolume);
music.addEventListener("play", () => setPlaying(true));
music.addEventListener("pause", () => setPlaying(false));
music.addEventListener("ended", () => setPlaying(false));
music.addEventListener("loadedmetadata", updateDuration);
music.addEventListener("durationchange", updateDuration);
music.addEventListener("timeupdate", () => {
  currentTimeLabel.textContent = formatTime(music.currentTime);
});

async function tryAutoplay() {
  try {
    await music.play();
    setPlaying(true);
    document.removeEventListener("pointerdown", resumeAfterInteraction);
    document.removeEventListener("keydown", resumeAfterInteraction);
  } catch {
    // Browsers may require a visitor gesture before allowing audio playback.
  }
}

function resumeAfterInteraction(event) {
  if (event.target instanceof Element && event.target.closest("#music-toggle")) return;
  void tryAutoplay();
}

document.addEventListener("pointerdown", resumeAfterInteraction);
document.addEventListener("keydown", resumeAfterInteraction);

function updateTilt(event) {
  if (reduceMotion.matches || !finePointer.matches) return;
  const bounds = card.getBoundingClientRect();
  const relativeX = (event.clientX - bounds.left) / bounds.width;
  const relativeY = (event.clientY - bounds.top) / bounds.height;
  const rotateY = (relativeX - 0.5) * 5;
  const rotateX = (0.5 - relativeY) * 4;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  card.style.setProperty("--pointer-x", `${relativeX * 100}%`);
  card.style.setProperty("--pointer-y", `${relativeY * 100}%`);
  card.classList.add("is-tilting");
}

function resetTilt() {
  card.style.transform = "";
  card.style.setProperty("--pointer-x", "50%");
  card.style.setProperty("--pointer-y", "50%");
  card.classList.remove("is-tilting");
}

card.addEventListener("pointermove", updateTilt);
card.addEventListener("pointerleave", resetTilt);
card.addEventListener("pointercancel", resetTilt);
reduceMotion.addEventListener?.("change", resetTilt);

music.volume = Number(volumeSlider.value);
volumeSlider.setAttribute("aria-valuetext", `${Math.round(music.volume * 100)}%`);
updateDuration();
void tryAutoplay();
