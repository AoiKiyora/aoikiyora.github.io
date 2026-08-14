/* ========================================
   1. CONFIGURATION
   ======================================== */

const CONFIG = {
    githubUsername: 'AOIKIYORA',
    githubUrl: 'https://github.com/AOIKIYORA',
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2000,
};

const translations = {
    en: {
        hero_greeting: "HELLO, I'M",
        hero_tagline: "Code. Create. Anime. Repeat.",
        hero_explore: "EXPLORE",
        hero_github: "GITHUB",
        about_title: "About Me",
        about_p1: "I'm interested in programming, web development, technology and anime.",
        about_p2: "I enjoy learning new things and building projects to improve my coding skills.",
        about_p3: "Currently focusing on frontend development and creating cool web experiences.",
        skills_title: "Skills",
        projects_title: "Projects",
        anime_title: "Anime World",
        github_title: "GitHub",
        github_view: "VIEW GITHUB",
        terminal_title: "AOI@GITHUB:~",
        terminal_hint: "Type 'help' in terminal for available commands.",
        contact_title: "Contact",
        contact_text: "Get In Touch",
        contact_github: "GitHub",
        contact_email: "Email",
        contact_discord: "Discord",
        footer_text: "© 2026 Aoi Kiyora",
        footer_sub: "Made with HTML • CSS • JavaScript",
        footer_tagline: "Code. Create. Anime. Repeat.",
        egg_terminal_title: "TERMINAL — Ctrl+K to close",
        egg_welcome: "Welcome to Aoi Kiyora's terminal.",
        egg_help_hint: "Type <span class=\"terminal-cmd\">help</span> to see available commands.",
    },
    vi: {
        hero_greeting: "XIN CHÀO, TÔI LÀ",
        hero_tagline: "Code. Create. Anime. Repeat.",
        hero_explore: "KHÁM PHÁ",
        hero_github: "GITHUB",
        about_title: "Giới Thiệu",
        about_p1: "Tôi quan tâm đến lập trình, phát triển web, công nghệ và anime.",
        about_p2: "Tôi thích học những điều mới và xây dựng dự án để cải thiện kỹ năng lập trình.",
        about_p3: "Hiện đang tập trung vào phát triển frontend và tạo những trải nghiệm web độc đáo.",
        skills_title: "Kỹ Năng",
        projects_title: "Dự Án",
        anime_title: "Thế Giới Anime",
        github_title: "GitHub",
        github_view: "XEM GITHUB",
        terminal_title: "AOI@GITHUB:~",
        terminal_hint: "Nhập 'help' trong terminal để xem các lệnh khả dụng.",
        contact_title: "Liên Hệ",
        contact_text: "Liên Hệ",
        contact_github: "GitHub",
        contact_email: "Email",
        contact_discord: "Discord",
        footer_text: "© 2026 Aoi Kiyora",
        footer_sub: "Được tạo bằng HTML • CSS • JavaScript",
        footer_tagline: "Code. Create. Anime. Repeat.",
        egg_terminal_title: "TERMINAL — Ctrl+K để đóng",
        egg_welcome: "Chào mừng đến terminal của Aoi Kiyora.",
        egg_help_hint: "Nhập <span class=\"terminal-cmd\">help</span> để xem các lệnh khả dụng.",
    }
};

const skillTranslations = {
    en: {
        'FRONTEND': 'FRONTEND',
        'DATABASE': 'DATABASE',
        'TOOLS': 'TOOLS',
    },
    vi: {
        'FRONTEND': 'FRONTEND',
        'DATABASE': 'DATABASE',
        'TOOLS': 'CÔNG CỤ',
    }
};

let currentLang = 'en';

/* ========================================
   2. PROJECT DATA
   ======================================== */

const projects = [
    {
        name: 'Example Project',
        description: 'This is a sample project. Replace with your actual projects.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: '#',
        icon: '💻'
    },
    {
        name: 'Another Project',
        description: 'Another example project. Update the data in script.js to add your real projects.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: '#',
        icon: '🚀'
    },
    {
        name: 'Web App',
        description: 'Sample web application. Edit this section in script.js with your own projects.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: '#',
        icon: '⚡'
    }
];

/* ========================================
   3. ANIME DATA
   ======================================== */

const animeCharacters = [
    {
        name: 'Rintaro Tsumugi',
        anime: 'Character information',
        image: 'assets/Rintaro Tsumugi.jpg',
        description: 'I will be there for you, right here, and in the future... You have done so much for me, so now, let me protect you. Let me share your troubles and responsibilities. From now on, I will support you with everything I have.'
    },
    {
        name: 'Waguri Kaoruko',
        anime: 'Character information',
        image: 'assets/Waguri Kaoruko.jpg',
        description: 'If you are willing to go out with me, I could not be happier to go out with you! Because I love you, too, Rintaro-kun!'
    }
];

/* ========================================
   4. QUOTE DATA
   ======================================== */

const quotes = [
    { text: 'People die when they are killed.', author: '— Anime' },
    { text: 'Believe in yourself. Not in the you who believes in me.', author: '— Anime' },
    { text: 'The world isn\'t perfect. But it\'s there for us trying the best it can.', author: '— Anime' },
    { text: 'Hard work is worthless for those that don\'t believe in themselves.', author: '— Anime' },
    { text: 'No matter how hard or impossible it is, never lose sight of your goal.', author: '— Anime' },
    { text: 'If you don\'t take risks, you can\'t create a future.', author: '— Anime' },
];

/* ========================================
   5. SKILLS DATA
   ======================================== */

const skills = {
    'FRONTEND': [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
    ],
    'DATABASE': [
        { name: 'SQL Server', icon: '🗄️' },
    ],
    'TOOLS': [
        { name: 'Git', icon: '📦' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '💻' },
    ]
};

/* ========================================
   5b. LANGUAGE DATA
   ======================================== */

const projectData = {
    en: [
        {
            name: 'Example Project',
            description: 'This is a sample project. Replace with your actual projects.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: '#',
            demo: '#',
            icon: '💻'
        },
        {
            name: 'Another Project',
            description: 'Another example project. Update the data in script.js to add your real projects.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: '#',
            demo: '#',
            icon: '🚀'
        },
        {
            name: 'Web App',
            description: 'Sample web application. Edit this section in script.js with your own projects.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: '#',
            demo: '#',
            icon: '⚡'
        }
    ],
    vi: [
        {
            name: 'Dự Án Mẫu',
            description: 'Đây là dự án mẫu. Hãy thay thế bằng các dự án thực tế của bạn.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: '#',
            demo: '#',
            icon: '💻'
        },
        {
            name: 'Dự Án Khác',
            description: 'Dự án mẫu khác. Cập nhật dữ liệu trong script.js để thêm dự án thật.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: '#',
            demo: '#',
            icon: '🚀'
        },
        {
            name: 'Ứng Dụng Web',
            description: 'Ứng dụng web mẫu. Chỉnh sửa phần này trong script.js với dự án của bạn.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: '#',
            demo: '#',
            icon: '⚡'
        }
    ]
};

const animeData = {
    en: [
        {
            name: 'Rintaro Tsumugi',
            anime: 'Character information',
            image: 'assets/Rintaro Tsumugi.jpg',
            description: 'I will be there for you, right here, and in the future... You have done so much for me, so now, let me protect you. Let me share your troubles and responsibilities. From now on, I will support you with everything I have.'
        },
        {
            name: 'Waguri Kaoruko',
            anime: 'Character information',
            image: 'assets/Waguri Kaoruko.jpg',
            description: 'If you are willing to go out with me, I could not be happier to go out with you! Because I love you, too, Rintaro-kun!'
        }
    ],
    vi: [
        {
            name: 'Rintaro Tsumugi',
            anime: 'Thông tin nhân vật',
            image: 'assets/Rintaro Tsumugi.jpg',
            description: 'Tớ sẽ luôn ở bên cậu, ngay tại đây, và cả trong tương lai nữa... Cậu đã làm cho tớ nhiều điều như vậy, nên bây giờ, hãy để tớ bảo vệ cậu. Hãy để tớ san sẻ những phiền muộn và trách nhiệm cùng cậu. Từ giờ trở đi, tớ sẽ hỗ trợ cậu với tất cả những gì tớ có.'
        },
        {
            name: 'Waguri Kaoruko',
            anime: 'Thông tin nhân vật',
            image: 'assets/Waguri Kaoruko.jpg',
            description: 'Nếu cậu đồng ý hẹn hò với tớ, tớ sẽ rất vui! Bởi vì tớ cũng yêu cậu, Rintaro-kun!'
        }
    ]
};

const quoteData = {
    en: [
        { text: 'People die when they are killed.', author: '— Anime' },
        { text: 'Believe in yourself. Not in the you who believes in me.', author: '— Anime' },
        { text: 'The world isn\'t perfect. But it\'s there for us trying the best it can.', author: '— Anime' },
        { text: 'Hard work is worthless for those that don\'t believe in themselves.', author: '— Anime' },
        { text: 'No matter how hard or impossible it is, never lose sight of your goal.', author: '— Anime' },
        { text: 'If you don\'t take risks, you can\'t create a future.', author: '— Anime' },
    ],
    vi: [
        { text: 'Người ta chết khi bị giết.', author: '— Anime' },
        { text: 'Tin tưởng vào chính bạn. Không phải vào bạn của tôi.', author: '— Anime' },
        { text: 'Thế giới không hoàn hảo. Nhưng nó ở đó để chúng ta cố gắng hết sức.', author: '— Anime' },
        { text: 'Làm việc chăm chỉ vô nghĩa với những ai không tin vào bản thân.', author: '— Anime' },
        { text: 'Dù khó đến đâu, đừng bao giờ mất mục tiêu khỏi tầm nhìn.', author: '— Anime' },
        { text: 'Nếu bạn không chấp nhận rủi ro, bạn không thể tạo ra tương lai.', author: '— Anime' },
    ]
};

/* ========================================
   6. RENDER FUNCTIONS
   ======================================== */

function renderSkills(lang = 'en') {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    let html = '';
    for (const [group, items] of Object.entries(skills)) {
        const groupName = skillTranslations[lang]?.[group] || group;
        html += `<div class="skill-group reveal">
            <h3>${groupName}</h3>
            <div class="skill-cards">`;
        items.forEach(skill => {
            html += `
                <div class="skill-card">
                    <span class="skill-icon">${skill.icon}</span>
                    <span class="skill-name">${skill.name}</span>
                </div>`;
        });
        html += `</div></div>`;
    }
    grid.innerHTML = html;
}

function renderProjects(lang = 'en') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const data = projectData[lang] || projectData['en'];
    let html = '';
    data.forEach(project => {
        const techs = project.technologies.map(t => `<span>${t}</span>`).join('');
        html += `
            <div class="project-card reveal">
                <div class="project-header">
                    <span class="project-icon">${project.icon}</span>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="GitHub">⌘</a>
                        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Demo">↗</a>
                    </div>
                </div>
                <h3 class="project-name">${project.name}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">${techs}</div>
            </div>`;
    });
    grid.innerHTML = html;
}

function renderAnime(lang = 'en') {
    const grid = document.getElementById('anime-grid');
    if (!grid) return;

    const data = animeData[lang] || animeData['en'];
    let html = '';
    data.forEach(char => {
        html += `
            <div class="anime-card reveal">
                <div class="anime-image-wrap">
                    <img src="${char.image}" alt="${char.name}" loading="lazy">
                    <div class="anime-overlay"></div>
                </div>
                <div class="anime-info">
                    <h3 class="anime-character">${char.name}</h3>
                    <p class="anime-title">${char.anime}</p>
                    <p class="anime-desc">${char.description}</p>
                </div>
            </div>`;
    });
    grid.innerHTML = html;
}

/* ========================================
   7. NAVIGATION
   ======================================== */

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

/* ========================================
   8. MOBILE MENU
   ======================================== */

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.textContent = '☰';
        });
    });
}

/* ========================================
   9. TYPING EFFECT
   ======================================== */

function initTypingEffect() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const phrasesEN = ['IT Developer', 'Anime Fan', 'Creative Coder'];
    const phrasesVI = ['Lập Trình Viên', 'Fan Anime', 'Creative Coder'];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function getPhrases() {
        return currentLang === 'vi' ? phrasesVI : phrasesEN;
    }

    function type() {
        const phrases = getPhrases();
        const current = phrases[phraseIndex];
        if (isDeleting) {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? CONFIG.deletingSpeed : CONFIG.typingSpeed;

        if (!isDeleting && charIndex === current.length) {
            speed = CONFIG.pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    type();
}

/* ========================================
   10. SCROLL REVEAL
   ======================================== */

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
}

/* ========================================
   11. LANGUAGE
   ======================================== */

function updateStaticText(lang) {
    const t = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
        toggle.textContent = lang === 'vi' ? 'EN' : 'VN';
    }

    updateStaticText(lang);
    renderSkills(lang);
    renderProjects(lang);
    renderAnime(lang);
}

function initLanguage() {
    const toggle = document.getElementById('lang-toggle');
    const saved = localStorage.getItem('lang');

    if (saved === 'vi') {
        currentLang = 'vi';
        if (toggle) toggle.textContent = 'EN';
    }

    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const next = currentLang === 'en' ? 'vi' : 'en';
        switchLanguage(next);
    });
}

/* ========================================
   14. THEME
   ======================================== */

function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;

    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        body.classList.add('light-mode');
        if (toggle) toggle.textContent = '☀';
    }

    if (!toggle) return;

    toggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        toggle.textContent = isLight ? '☀' : '☾';
    });
}

/* ========================================
   15. TERMINAL EASTER EGG
   ======================================== */

function initTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');

    if (!overlay || !output || !input) return;

    const commands = {
        help: () => {
            if (currentLang === 'vi') {
                return `Các lệnh khả dụng:\n  about      - Giới thiệu\n  skills     - Kỹ năng\n  projects   - Dự án\n  anime      - Anime\n  github     - GitHub\n  contact    - Liên hệ\n  clear      - Xóa màn hình`;
            }
            return `Available commands:\n  about      - About me\n  skills     - My skills\n  projects   - My projects\n  anime      - Anime collection\n  github     - GitHub profile\n  contact    - Contact info\n  clear      - Clear terminal`;
        },
        about: () => currentLang === 'vi' ? 'Tôi là Aoi Kiyora — Lập trình viên IT và Fan Anime.' : 'I am Aoi Kiyora — IT Developer and Anime Fan.',
        skills: () => currentLang === 'vi' ? 'HTML5, CSS3, JavaScript, SQL Server, Git, GitHub, VS Code.' : 'HTML5, CSS3, JavaScript, SQL Server, Git, GitHub, VS Code.',
        projects: () => currentLang === 'vi' ? 'Xem phần Dự Án trên website này!' : 'Check the Projects section on this website!',
        anime: () => currentLang === 'vi' ? 'Người yêu anime. Xem phần Anime để xem bộ sưu tập.' : 'Anime lover. Check the Anime section for my collection.',
        github: () => `Visit: ${CONFIG.githubUrl}`,
        contact: () => currentLang === 'vi' ? 'GitHub, Email, Discord — xem phần Liên Hệ.' : 'GitHub, Email, Discord — see Contact section.',
        clear: () => '__CLEAR__'
    };

    function addLine(text) {
        const p = document.createElement('p');
        p.className = 'terminal-line';
        p.textContent = text;
        output.appendChild(p);
        output.scrollTop = output.scrollHeight;
    }

    function processCommand(cmd) {
        const trimmed = cmd.trim().toLowerCase();
        addLine(`<span class="terminal-prompt">AOI@TERMINAL:~$</span> ${cmd}`);

        if (trimmed === '') return;

        if (commands[trimmed]) {
            const result = commands[trimmed]();
            if (result === '__CLEAR__') {
                output.innerHTML = '';
                return;
            }
            addLine(result);
        } else {
            addLine(`Command not found: ${trimmed}. Type 'help' for available commands.`);
        }
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            processCommand(input.value);
            input.value = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            overlay.classList.toggle('open');
            if (overlay.classList.contains('open')) {
                setTimeout(() => input.focus(), 100);
            }
        }
        if (e.key === 'Escape') {
            overlay.classList.remove('open');
        }
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('open');
        }
    });
}

/* ========================================
   16. BACK TO TOP
   ======================================== */

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ========================================
   17. INIT
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    renderSkills(currentLang);
    renderProjects(currentLang);
    renderAnime(currentLang);
    initNavigation();
    initMobileMenu();
    initTypingEffect();
    initScrollReveal();
    initTheme();
    initTerminal();
    initBackToTop();
});
