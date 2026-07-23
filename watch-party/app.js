/**
 * [INPUT]: Uses the watch-party DOM, six local MP4 masters, and three poster images.
 * [OUTPUT]: Provides playlist rendering, film switching, auto-advance, fullscreen, and keyboard controls.
 * [POS]: watch-party interaction controller, consumed only by index.html.
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

const films = [
  {
    module: "Campaign Management",
    type: "Business scenario",
    title: "Campaign Management: Business Overview",
    duration: "01:37",
    src: "videos/campaign-business.mp4?v=20260723-logo-fix",
    poster: "posters/campaign.jpg",
  },
  {
    module: "Campaign Management",
    type: "Training guide",
    title: "Campaign Management: Step-by-Step Guide",
    duration: "04:31",
    src: "videos/campaign-training.mp4?v=20260723-logo-fix",
    poster: "posters/campaign.jpg",
  },
  {
    module: "Knowledge Management",
    type: "Business scenario",
    title: "Knowledge Management: Business Overview",
    duration: "01:56",
    src: "videos/knowledge-business.mp4?v=20260723-logo-fix",
    poster: "posters/knowledge.jpg",
  },
  {
    module: "Knowledge Management",
    type: "Training guide",
    title: "Knowledge Management: Step-by-Step Guide",
    duration: "05:38",
    src: "videos/knowledge-training.mp4?v=20260723-logo-fix",
    poster: "posters/knowledge.jpg",
  },
  {
    module: "Access Management",
    type: "Business scenario",
    title: "Access Management: Business Overview",
    duration: "02:09",
    src: "videos/access-business.mp4?v=20260723-logo-fix",
    poster: "posters/access.jpg",
  },
  {
    module: "Access Management",
    type: "Training guide",
    title: "Access Management: Step-by-Step Guide",
    duration: "05:15",
    src: "videos/access-training.mp4?v=20260723-logo-fix",
    poster: "posters/access.jpg",
  },
];

const player = document.querySelector("#player");
const playlist = document.querySelector("#playlist");
const nowKicker = document.querySelector("#nowKicker");
const nowTitle = document.querySelector("#nowTitle");
const autoAdvance = document.querySelector("#autoAdvance");
let activeIndex = 0;

function renderPlaylist() {
  playlist.replaceChildren(
    ...films.map((film, index) => {
      const button = document.createElement("button");
      button.className = "playlist-item";
      button.type = "button";
      button.dataset.index = String(index);
      button.setAttribute("aria-current", String(index === activeIndex));
      button.innerHTML = `
        <span class="playlist-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="playlist-copy">
          <strong>${film.module}</strong>
          <span>${film.type}</span>
        </span>
        <span class="playlist-duration">${film.duration}</span>
      `;
      button.addEventListener("click", () => loadFilm(index, true));
      return button;
    }),
  );
}

function loadFilm(index, shouldPlay = false) {
  activeIndex = (index + films.length) % films.length;
  const film = films[activeIndex];
  player.pause();
  player.src = film.src;
  player.poster = film.poster;
  player.load();
  nowKicker.textContent = `${film.module} · ${film.type}`;
  nowTitle.textContent = film.title;
  renderPlaylist();

  if (shouldPlay) {
    player.play().catch(() => {});
    document.querySelector("#screening").scrollIntoView({ block: "center" });
  }
}

function move(direction, shouldPlay = true) {
  loadFilm(activeIndex + direction, shouldPlay);
}

document.querySelector("#previousButton").addEventListener("click", () => move(-1));
document.querySelector("#nextButton").addEventListener("click", () => move(1));
document.querySelector("#fullscreenButton").addEventListener("click", () => {
  if (player.requestFullscreen) player.requestFullscreen();
});

document.querySelectorAll("[data-play]").forEach((button) => {
  button.addEventListener("click", () => loadFilm(Number(button.dataset.play), true));
});

player.addEventListener("ended", () => {
  if (autoAdvance.checked && activeIndex < films.length - 1) move(1);
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, button")) return;
  if (event.key === "ArrowRight") move(1);
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === " ") {
    event.preventDefault();
    player.paused ? player.play() : player.pause();
  }
});

renderPlaylist();
