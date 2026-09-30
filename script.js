/* =========================================================
   EDITABLE CONTENT
   Change the arrays below to update the site — no HTML/CSS
   knowledge needed. Everything else in this file just renders
   this data and wires up small interactions.
   ========================================================= */

const PROJECTS = [
  {
    status: "In development",
    title: "DAR–PMAS: Procurement Management & Automation System",
    description:
      "A web-based system built for the Department of Agrarian Reform–Camarines Sur 1 during practicum. Role-based access, real-time process monitoring, and automated file generation replace a paper-heavy procurement workflow. Built as front-end and database admin on a team of Computer Science and Information Systems students.",
    tags: ["React", "TypeScript", "Database Admin", "Government / Civic Tech"],
    links: [
      { label: "Web repo ↗", url: "https://github.com/Jethan-B4/DAR-PMAS-Web" },
      { label: "Mobile repo ↗", url: "https://github.com/Jethan-B4/DAR-PMAS-Mobile" }
    ]
  },
  {
    status: "Capstone, 2025–2026",
    title: "Salubako: Gamified Cultural Tourism for Tinambac",
    description:
      "An academic capstone exploring how game mechanics can preserve and promote local culture. Salubako layers gameplay on top of real information about the town of Tinambac, Camarines Sur, turning a local-history lesson into something players actually want to explore.",
    tags: ["Game Design", "Cultural Preservation", "Capstone Research"],
    links: [
      { label: "Paper repo ↗", url: "https://github.com/Jethan-B4/LaTeX_Salubako" }
    ]
  },
  {
    status: "Course project, 2026",
    title: "Full-Stack Financial Dashboard (Next.js App Router)",
    description:
      "A hands-on build from Vercel's Next.js App Router Fundamentals course. Covers the App Router, React Server Components, styling with CSS Modules and Tailwind, data fetching and mutations via Server Actions, PostgreSQL integration, static vs. dynamic rendering, search and pagination, authentication, and deployment to Vercel.",
    tags: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    links: []
  }
];

const SKILLS = [
  "Web Development",
  "Cybersecurity",
  "Mobile App Development",
  "Database Management",
  "Internet of Things (IoT)",
  "Design & Visualization"
];


const CERTS = [
  {
    title: "Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)",
    provider: "Microsoft",
    issued: "December 2023",
    certId: "d2f4b84c-e171-401e-877f-a7ff4c8f5bf4",
    description:
      "Microsoft Excel certification earners have a fundamental understanding of Excel and the ability to complete tasks independently. Earners have proven they can create and edit a workbook with multiple sheets, and use graphic elements to represent data visually including professional-looking budgets, financial statements, performance charts, and data-entry logs. Excel earners include students, business professionals, clerical workers, bookkeepers, and others.",
    link: "https://www.credly.com/badges/d2f4b84c-e171-401e-877f-a7ff4c8f5bf4/public_url"
  },
  {
    title: "PhilNITS Information Technology Passport Certification",
    provider: "PhilNITS",
    issued: "April 2025",
    certId: "IP10-0044",
    description:
      'Information Technology Professionals Examination Council (hereinafter called "ITPEC") is the organization for a common IT examination in Asian countries, ITPEC Examination. It was formed on November 2005 to co-ordinate all efforts of the member countries for ITPEC Examination in cooperation with IPA, Japan. ITPEC includes members from 6 countries (Philippines, Thailand, Vietnam, Myanmar, Mongolia, and Bangladesh).',
    link: "https://www.itpec.org/statsandresults/all-passers-information/Philippines/2025S_IP.pdf" 
  },  {
    title: "Introduction to Cybersecurity",
    provider: "Cisco",
    issued: "September 2026",
    certId: "e222ede1-5359-421f-9026-f3ac039925ab",
    description:
      "Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course. The holder of this student-level credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession. They understand vulnerabilities and threat detection and defense. They also have insight into opportunities available with pursuing cybersecurity certifications.",
    link: "https://www.credly.com/badges/e222ede1-5359-421f-9026-f3ac039925ab/public_url" 
  },
  {
    title: "Introduction to Cybersecurity 1",
    provider: "East West International Educational Specialists, Inc.",
    issued: "August 2026",
    certId: "ad71faa4-9b90-4ed1-9ffb-12efa82e01f5",
    description:
      "Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices, and data. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks, and technologies.",
    link: "https://www.credly.com/badges/ad71faa4-9b90-4ed1-9ffb-12efa82e01f5/public_url" 
  },
  {
    title: "Next.js App Router Fundamentals",
    provider: "Vercel",
    issued: "September 2026",
    description:
      "A hands-on course by Vercel that teaches the fundamentals of Next.js by building a full-stack financial dashboard app. It covers the App Router, React Server Components, styling (CSS Modules, Tailwind), routing and navigation, data fetching with Server Components, PostgreSQL integration, static vs. dynamic rendering, streaming, search and pagination, mutations with Server Actions, error handling, accessibility, and authentication, finishing with deployment to Vercel.",
    link: "https://nextjs.org/learn/certificate?course=dashboard-app&user=169321&certId=dashboard-app-169321-1789282799769" 
  }
];

/* =========================================================
   RENDERING
   ========================================================= */

// A small badge icon reused for every certification card.
const CERT_ICON = `
  <svg class="cert-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="6" y="4" width="22" height="30" rx="3" fill="var(--surface-2)" stroke="var(--border)" stroke-width="1.5"/>
    <line x1="11" y1="12" x2="23" y2="12" stroke="var(--accent-2)" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="11" y1="17" x2="23" y2="17" stroke="var(--border)" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="11" y1="22" x2="19" y2="22" stroke="var(--border)" stroke-width="1.4" stroke-linecap="round"/>
    <circle cx="27" cy="27" r="8" fill="var(--accent)" stroke="var(--bg)" stroke-width="2"/>
    <path d="M23.6 27.1l2 2 4-4.4" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

function renderProjects() {
  const list = document.getElementById("projectList");
  if (!list) return;

  list.innerHTML = PROJECTS.map((project, i) => {
    const index = String(i + 1).padStart(2, "0");
    const tags = project.tags
      .map((tag) => `<span class="project-tag">${tag}</span>`)
      .join("");
    const links = project.links
      .map((link) => `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`)
      .join("");

    return `
      <article class="project-card reveal">
        <p class="project-index">${index}</p>
        <div>
          <p class="project-status"><span class="dot small"></span>${project.status}</p>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">${tags}</div>
        </div>
        <div class="project-links">${links}</div>
      </article>
    `;
  }).join("");
}

function renderSkills() {
  const skillList = document.getElementById("skillList");
  const certList = document.getElementById("certList");
  if (skillList) {
    skillList.innerHTML = SKILLS.map((skill) => `<li>${skill}</li>`).join("");
  }
  if (certList) {
    certList.innerHTML = CERTS
      .map((cert, i) => {
        const descId = `cert-desc-${i}`;
        const hasDescription = Boolean(cert.description);

        const idRow = cert.certId
          ? `<p class="cert-meta">Certification ID: ${cert.certId}</p>`
          : "";

        const actions = `
          <div class="cert-actions">
            ${
              hasDescription
                ? `<button type="button" class="cert-toggle" data-target="${descId}" aria-expanded="false">Show description</button>
                   <span class="cert-actions-sep">&middot;</span>`
                : ""
            }
            <a class="cert-link" href="${cert.link || "#"}" target="_blank" rel="noopener">View certification link</a>
          </div>`;

        const description = hasDescription
          ? `<p class="cert-desc" id="${descId}" hidden>${cert.description}</p>`
          : "";

        return `
          <li class="cert-card">
            <div class="cert-icon-wrap">${CERT_ICON}</div>
            <div class="cert-body">
              <p class="cert-title">${cert.title}</p>
              <p class="cert-meta">Provider: ${cert.provider}</p>
              <p class="cert-meta">Issued: ${cert.issued}</p>
              ${idRow}
              ${actions}
              ${description}
            </div>
          </li>`;
      })
      .join("");
  }
}

function setupCertToggles() {
  const certList = document.getElementById("certList");
  if (!certList) return;

  certList.addEventListener("click", (event) => {
    const button = event.target.closest(".cert-toggle");
    if (!button) return;

    const target = document.getElementById(button.dataset.target);
    if (!target) return;

    const isHidden = target.hasAttribute("hidden");
    if (isHidden) {
      target.removeAttribute("hidden");
      button.textContent = "Hide description";
      button.setAttribute("aria-expanded", "true");
    } else {
      target.setAttribute("hidden", "");
      button.textContent = "Show description";
      button.setAttribute("aria-expanded", "false");
    }
  });
}

/* =========================================================
   INTERACTIONS
   ========================================================= */

function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu after a nav link is tapped
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupScrollReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

function setupFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// Highlights the nav link for whichever section currently sits in the
// vertical center band of the viewport, as the user scrolls.
function setupScrollSpy() {
  const navLinks = Array.from(document.querySelectorAll(".nav a"));
  if (!navLinks.length || !("IntersectionObserver" in window)) return;

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  setupCertToggles();
  setupNavToggle();
  setupScrollReveal();
  setupFooterYear();
  setupScrollSpy();
});