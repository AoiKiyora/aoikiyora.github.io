/* ============================================
   AOIKIYORA — Personal Bio
   Script: theme, render, animations, particles
   ============================================ */

const socialLinks = [
  {
    name: "Discord",
    username: "@AoiKiyora",
    url: "https://discord.com/invite/hxrQ4PTkWA",
    icon: "fa-brands fa-discord",
  },
  {
    name: "YouTube",
    username: "AoiKiyora",
    url: "https://www.youtube.com/@aoikiyora",
    icon: "fa-brands fa-youtube",
  },
  {
    name: "Facebook",
    username: "AoiKiyora",
    url: "https://www.facebook.com/AoiKiyora",
    icon: "fa-brands fa-facebook-f",
  },
  {
    name: "TikTok",
    username: "@aoikiyora",
    url: "YOUR_TIKTOK_LINK",
    icon: "fa-brands fa-tiktok",
  },
  {
    name: "gun.lol",
    username: "AoiKiyora",
    url: "https://guns.lol/aoikiyora",
    icon: "fa-solid fa-crosshairs",
  },
  {
    name: "ganknow.com",
    username: "AoiKiyora",
    url: "https://ganknow.com/aoikiyora",
    icon: "fa-solid fa-gamepad",
  },
  {
    name: "konect.gg",
    username: "AoiKiyora",
    url: "https://konect.gg/aoikiyora",
    icon: "fa-solid fa-globe",
  },
  {
    name: "GitHub",
    username: "AoiKiyora",
    url: "https://github.com/AoiKiyora",
    icon: "fa-brands fa-github",
  },
];

const projects = [
  {
    name: "Manga Online",
    description: "Online manga management and shopping system.",
    tech: ["HTML", "CSS", "JS", "PHP"],
    github: "YOUR_GITHUB_MANGA_LINK",
    demo: null,
  },
  {
    name: "Personal Website",
    description: "AoiKiyora personal website.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/AoiKiyora",
    demo: null,
  },
  {
    name: "GitHub Projects",
    description: "My experiments, projects and code.",
    tech: ["Various"],
    github: "https://github.com/AoiKiyora?tab=repositories",
    demo: null,
  },
];

/* --- Theme --- */
function initTheme() {
  const html = document.documentElement;
  const btn = document.getElementById("themeBtn");
  const saved = localStorage.getItem("theme");

  if (saved) {
    html.setAttribute("data-theme", saved);
  }

  btn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* --- Navigation --- */
function initNavigation() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const allLinks = links.querySelectorAll("a");
  const sections = document.querySelectorAll("section[id]");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    links.setAttribute("aria-hidden", String(!isOpen));
  });

  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          allLinks.forEach((l) => {
            l.classList.toggle("active", l.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

/* --- Render Social Links --- */
function renderSocialLinks() {
  const grid = document.getElementById("socialGrid");
  grid.innerHTML = socialLinks
    .map(
      (s) => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="card fade-up">
      <div class="card-icon"><i class="${s.icon}"></i></div>
      <div>
        <div class="card-name">${s.name}</div>
        <div class="card-username">${s.username}</div>
      </div>
    </a>
  `
    )
    .join("");
}

/* --- Render Projects --- */
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects
    .map(
      (p) => `
    <div class="card fade-up">
      <div class="card-name">${p.name}</div>
      <p class="card-username" style="margin-top:4px;">${p.description}</p>
      <div class="tags" style="margin-top:10px;">
        ${p.tech.map((t) => `<span class="tag" style="font-size:0.75rem;padding:4px 10px;">${t}</span>`).join("")}
      </div>
      <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;">
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="card-link">
          <i class="fa-brands fa-github" style="margin-right:6px;"></i> GitHub
        </a>
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="card-link">
          <i class="fa-solid fa-arrow-up-right-from-square" style="margin-right:6px;"></i> Demo
        </a>` : ""}
      </div>
    </div>
  `
    )
    .join("");
}

/* --- Scroll Animations --- */
function initAnimations() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    document.querySelectorAll(".fade-up").forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}

/* --- View Counter --- */
function initCounter() {
  const el = document.getElementById("visitorCount");
  const key = "aoikiyora_visitors";

  let count = localStorage.getItem(key);
  if (!count) {
    count = String(Math.floor(Math.random() * 5000) + 1200);
  } else {
    count = String(parseInt(count, 10));
  }

  localStorage.setItem(key, count);
  el.textContent = String(count).padStart(6, "0");
}

/* --- Cursor Glow --- */
function initCursorGlow() {
  if (window.matchMedia("(hover: none)").matches) return;

  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);

  document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

/* --- Particles Background --- */
function initParticles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let width, height, particles;
  const PARTICLE_COUNT = 45;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(140, 120, 255, ${p.opacity})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });
}

/* --- Footer Links --- */
function renderFooterLinks() {
  const container = document.getElementById("footerLinks");
  const wanted = ["GitHub", "Discord", "YouTube"];
  const filtered = socialLinks.filter((s) => wanted.includes(s.name));
  container.innerHTML = filtered
    .map(
      (s) => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.name}</a>
  `
    )
    .join("");
}

/* --- Music Player --- */
function initMusic() {
  const audio = document.getElementById("bgAudio");
  const playBtn = document.getElementById("playBtn");
  const playIcon = document.getElementById("playIcon");
  const progress = document.getElementById("musicProgress");
  const bars = document.getElementById("musicBars");

  if (!audio) return;

  const updateUI = () => {
    if (audio.paused) {
      playIcon.className = "fa-solid fa-play";
      playBtn.setAttribute("aria-label", "Play");
      if (bars) bars.style.opacity = "0.4";
    } else {
      playIcon.className = "fa-solid fa-pause";
      playBtn.setAttribute("aria-label", "Pause");
      if (bars) bars.style.opacity = "1";
    }
  };

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      progress.style.width = `${pct}%`;
    }
  });

  audio.addEventListener("ended", () => {
    progress.style.width = "0%";
    updateUI();
  });

  audio.addEventListener("play", updateUI);
  audio.addEventListener("pause", updateUI);

  audio.play().catch(() => {
    updateUI();
  });
}

/* --- Init --- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  renderSocialLinks();
  renderProjects();
  renderFooterLinks();
  initAnimations();
  initCounter();
  initCursorGlow();
  initParticles();
  initMusic();
});
