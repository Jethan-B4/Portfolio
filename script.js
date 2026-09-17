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
  "Mobile App Development",
  "Database Management",
  "Internet of Things (IoT)",
  "Design & Visualization"
];

const CERTS = [
  {
    title: "Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)",
    provider: "Microsoft",
    issued: "December 2023"
  },
  {
    title: "PhilNITS Information Technology Passport Certification",
    provider: "PhilNITS",
    issued: "April 2025"
  },
  {
    title: "Introduction to Cybersecurity 1",
    provider: "East West International Educational Specialists, Inc.",
    issued: "August 2026"
  },
  {
    title: "Next.js App Router Fundamentals",
    provider: "Vercel",
    issued: "September 2026"
  }
];

/* =========================================================
   RENDERING
   ========================================================= */

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
      .map(
        (cert) => `
        <li>
          <span class="stamp-mark">[✓]</span>
          <span class="cert-info">
            <span class="cert-title">${cert.title}</span>
            <span class="cert-meta">${cert.provider} &middot; ${cert.issued}</span>
          </span>
        </li>`
      )
      .join("");
  }
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

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  setupNavToggle();
  setupScrollReveal();
  setupFooterYear();
});