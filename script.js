const projects = [
  {
    title: "Rahat-Sat — Retail Web Application",
    desc:
      "Built a web app to simplify retail operations: barcode scanning, price updates, VAT setup, stock tracking, and sales listings. Implemented REST API integration and a camera-based scanning component (BarcodeCamera.vue).",
    tags: ["Vue.js", "REST API", "Barcode", "Retail"],
    repo: "",
    live: ""
  },
  {
    title: "Data Cleaning & Similarity Detection",
    desc:
      "Worked on data cleaning, analysis, and ML workflows. Built preprocessing steps to improve data quality and usability for model development using common Python data/ML libraries.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Data"],
    repo: "",
    live: ""
  },
  {
    title: "PDOnline — Platform Contribution",
    desc:
      "Contributed to the development of a React-based platform during internship. Supported UI improvements and general frontend development tasks.",
    tags: ["React.js", "Frontend", "UI"],
    repo: "",
    live: ""
  },
];

const skills = [
  "HTML", "CSS", "JavaScript",
  "React.js", "Vue.js",
  "REST API", "JSON",
  "Python", "SQL",
  "Git", "GitHub",
  "Docker",
  "Agile/Scrum", "Jira"
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects.map(p => `
    <article class="project">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="projectLinks">
        ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Repo</a>` : ""}
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  const wrap = document.getElementById("skillChips");
  wrap.innerHTML = skills.map(s => `<span class="chip">${s}</span>`).join("");
}

function initMenu() {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("mobileNav");
  btn?.addEventListener("click", () => {
    const open = nav.hasAttribute("hidden") ? true : false;
    if (open) nav.removeAttribute("hidden");
    else nav.setAttribute("hidden", "");
    btn.setAttribute("aria-expanded", String(open));
  });

  // close on click
  nav?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

renderProjects();
renderSkills();
initMenu();
