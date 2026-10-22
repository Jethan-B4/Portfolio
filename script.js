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
    links: [
      { label: "Project Repo ↗", url: "https://github.com/Jethan-B4/Next.js-Project" }
    ]
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
  }, {
    title: "Networking Basics",
    provider: "Cisco",
    issued: "September 2026",
    certId: "37ab5164-da3c-402b-9907-288665de1837",
    description:
      "Cisco verifies the earner of this badge successfully completed the Networking Basics course and achieved this student level credential. Earner has knowledge of the types of networks, how they work, how devices send and receive data, the types of network cabling, how IP addresses find information on the Internet, how transport and applications operate, and has practiced building a home wireless network. Participated in up to 13 Cisco Packet Tracer activities.",
    link: "https://www.credly.com/badges/37ab5164-da3c-402b-9907-288665de1837/public_url" 
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

// Certifications beyond this index start out hidden, behind the
// "Show all" button rendered in renderSkills() / wired up in
// setupCertShowAll().
const CERTS_VISIBLE_DEFAULT = 4;

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
        const isExtra = i >= CERTS_VISIBLE_DEFAULT;

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

        // Certs past the default visible count start hidden; the
        // cert-card--extra class is what the show-all button looks for.
        return `
          <li class="cert-card${isExtra ? " cert-card--extra" : ""}"${isExtra ? " hidden" : ""}>
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

    // Only show the toggle button at all if there's actually something to hide
    const showAllBtn = document.getElementById("certShowAllBtn");
    if (showAllBtn) {
      const extraCount = CERTS.length - CERTS_VISIBLE_DEFAULT;
      if (extraCount > 0) {
        showAllBtn.hidden = false;
        showAllBtn.textContent = `Show all (+${extraCount})`;
        showAllBtn.setAttribute("aria-expanded", "false");
      } else {
        showAllBtn.hidden = true;
      }
    }
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

// Shows/hides every .cert-card--extra (certs past CERTS_VISIBLE_DEFAULT) at
// once, and flips the button between "Show all (+N)" and "Show less".
function setupCertShowAll() {
  const btn = document.getElementById("certShowAllBtn");
  const certList = document.getElementById("certList");
  if (!btn || !certList) return;

  btn.addEventListener("click", () => {
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    const extraCards = certList.querySelectorAll(".cert-card--extra");

    extraCards.forEach((card) => {
      card.hidden = isExpanded;
    });

    btn.setAttribute("aria-expanded", String(!isExpanded));
    btn.textContent = isExpanded ? `Show all (+${extraCards.length})` : "Show less";

    // Collapsing back: bring the button itself into view so the person
    // isn't left scrolled down next to now-hidden cards.
    if (isExpanded) {
      btn.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}

/* =========================================================
   INTERACTIONS
   ========================================================= */

/* =========================================================
   THEME SWITCH (light / dark)
   The inline script in index.html's <head> already set
   documentElement's data-theme before anything painted, so this
   just has to: sync the switch's visual/ARIA state to match, and
   handle the user actually clicking it.
   ========================================================= */
function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  if (!toggle) return;

  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = (theme, { persist } = {}) => {
    root.setAttribute("data-theme", theme);
    toggle.setAttribute("aria-checked", String(theme === "dark"));
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    if (persist) {
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {
        /* private browsing / storage disabled — the switch still works for this visit */
      }
    }
  };

  // Reflect whatever theme the <head> script already applied
  applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  toggle.addEventListener("click", () => {
    // Fade colors instead of snapping, but only for this user-initiated
    // change — never during the initial page load.
    document.body.classList.add("theme-transition");
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next, { persist: true });
    setTimeout(() => document.body.classList.remove("theme-transition"), 300);
  });

  // If the visitor never touched the switch (no saved preference), keep
  // following the OS/browser setting live if it changes mid-visit.
  systemPrefersDark.addEventListener("change", (e) => {
    let saved = null;
    try {
      saved = localStorage.getItem("theme");
    } catch (err) {
      /* ignore */
    }
    if (saved) return; // an explicit choice always wins
    applyTheme(e.matches ? "dark" : "light");
  });
}

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
   TOAST NOTIFICATIONS
   type is "success" | "failed" | "error" — matches the
   .toast--success / .toast--failed / .toast--error CSS.
   ========================================================= */
function showToast(type, title, message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.setAttribute("role", "status");
  toast.innerHTML = `
    <span class="toast-dot" aria-hidden="true"></span>
    <div class="toast-body">
      <p class="toast-title">${title}</p>
      <p class="toast-message">${message}</p>
    </div>
    <button type="button" class="toast-close" aria-label="Dismiss notification">&times;</button>
  `;
  container.appendChild(toast);

  // Next frame, so the opacity/transform transition actually runs
  requestAnimationFrame(() => toast.classList.add("is-visible"));

  let dismissTimer;
  const remove = () => {
    clearTimeout(dismissTimer);
    toast.classList.remove("is-visible");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  };

  toast.querySelector(".toast-close").addEventListener("click", remove);
  dismissTimer = setTimeout(remove, 6000);
}

/* =========================================================
   CONTACT MODAL
   ========================================================= */
function setupContactModal() {
  // TODO: replace YOUR_EMAIL_HERE with your real address — same one used
  // in the form's action="" attribute in index.html / contact-modal.html.
  // FormSubmit.co needs no account: the first real submission sends a
  // one-time confirmation email to that address, which you click once to
  // activate it. Docs: https://formsubmit.co/documentation
  const FORM_ENDPOINT = "https://formsubmit.co/ajax/93cc9484fd303ab92acc509fe96cbd46";

  const modal = document.getElementById("contactModal");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  const modalCancel = document.getElementById("modalCancel");
  const emailBtn = document.getElementById("emailBtn");
  const contactForm = document.getElementById("contactForm");

  if (!modal || !emailBtn) return;

  const openModal = () => {
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    // Focus on first input
    setTimeout(() => {
      const firstInput = modal.querySelector("input");
      if (firstInput) firstInput.focus();
    }, 100);
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  // Open modal when email button is clicked
  emailBtn.addEventListener("click", (e) => {
    openModal();
  });

  // Close modal when overlay is clicked
  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
  }

  // Close modal when close button is clicked
  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  // Close modal when cancel button is clicked
  if (modalCancel) {
    modalCancel.addEventListener("click", closeModal);
  }

  // Close modal when Escape key is pressed
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  // Handle form submission: POST straight to FormSubmit's AJAX endpoint
  // (no page reload, no mail client popup) and show a toast based on
  // whatever the fetch actually resolves to.
  if (contactForm) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    // A page opened straight from disk (file:///…/index.html, i.e. someone
    // just double-clicked it) can never fetch() a cross-origin URL — that's
    // a hard browser restriction tied to the file: scheme itself, not
    // something a server's CORS headers can opt back into. A *plain* <form>
    // POST navigation isn't subject to that restriction, though, so that's
    // the one case we deliberately don't intercept with JS at all.
    const canUseAjax = window.location.protocol !== "file:";

    // Point FormSubmit's non-AJAX redirect back at this exact page (with a
    // ?sent=true flag) instead of its generic "thank you" page, so a visitor
    // who lands on a *hosted* copy of the site (GitHub Pages, your own
    // domain, etc.) still sees our toast after the round trip — see
    // checkForRedirectToast() below. This has no effect on file:// (the
    // browser can't redirect a remote page back to a local file, so
    // FormSubmit's own thank-you page is shown there instead — expected).
    let nextField = contactForm.querySelector('input[name="_next"]');
    if (!nextField) {
      nextField = document.createElement("input");
      nextField.type = "hidden";
      nextField.name = "_next";
      contactForm.appendChild(nextField);
    }
    nextField.value = `${location.origin}${location.pathname}?sent=true`;

    contactForm.addEventListener("submit", async (e) => {
      // Respect the form's own HTML5 validation (required fields, email format)
      if (!contactForm.checkValidity()) {
        e.preventDefault();
        contactForm.reportValidity();
        return;
      }

      if (!canUseAjax) {
        // Let the browser submit the form the old-fashioned way, straight
        // to the plain (non-AJAX) FormSubmit endpoint already set as this
        // form's action="". No preventDefault — the email still sends.
        return;
      }

      e.preventDefault();

      const originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";

      const formData = new FormData(contactForm);
      // Use whatever the sender actually typed as the email's subject line
      const subject = formData.get("subject");
      if (subject) formData.set("_subject", subject);

      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });

        if (response.ok) {
          // Success: the message actually left the browser and was accepted
          showToast(
            "success",
            "Message sent",
            "Thanks for reaching out — I'll get back to you soon."
          );
          contactForm.reset();
          closeModal();
        } else {
          // Failed: we got a response, but the server reported a problem
          // (bad endpoint, unconfirmed address, rate limit, etc.)
          showToast(
            "failed",
            "Message not sent",
            "Something went wrong on the server's end. Please try again, or email me directly."
          );
        }
      } catch (err) {
        // Error: the fetch itself never completed — offline, blocked by an
        // extension or a host's CORS policy, DNS failure, etc. Rather than
        // just telling the visitor it failed (when the message might still
        // go through), fall back to a real form submission — exactly the
        // same path used for file:// above.
        showToast(
          "error",
          "Switching to backup delivery",
          "Your browser will redirect for a moment to finish sending this."
        );
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
        setTimeout(() => contactForm.submit(), 1200);
        return;
      }

      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    });
  }
}

// If FormSubmit's non-AJAX redirect (the "_next" field above) sent the
// visitor back here after a successful native submission, show the same
// success toast they'd have seen from the AJAX path, then clean the URL.
function checkForRedirectToast() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("sent") !== "true") return;

  showToast(
    "success",
    "Message sent",
    "Thanks for reaching out — I'll get back to you soon."
  );

  params.delete("sent");
  const query = params.toString();
  const cleanUrl = window.location.pathname + (query ? `?${query}` : "") + window.location.hash;
  window.history.replaceState({}, document.title, cleanUrl);
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  renderProjects();
  renderSkills();
  setupCertToggles();
  setupCertShowAll();
  setupNavToggle();
  setupScrollReveal();
  setupFooterYear();
  setupScrollSpy();
  setupContactModal();
  checkForRedirectToast();
});