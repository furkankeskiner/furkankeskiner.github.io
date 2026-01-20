const projects = [
  {
    title: "RahatSat — Retail Web Application",
    desc:
      "A web application developed to simplify small retail operations. The system supports barcode scanning via camera, product and price management, VAT configuration, stock tracking, and sales listing through a REST-based backend.",
    tags: ["Vue.js", "REST API", "Barcode Scanning", "Retail Systems"],
    repo: "",
    live: ""
  },
  {
    title: "Job Data Cleaning & Similarity Analysis",
    desc:
      "Worked on data cleaning and preprocessing pipelines for job position datasets. Improved data quality and applied similarity detection techniques to support more accurate analysis and model readiness.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Data Cleaning"],
    repo: "",
    live: ""
  },
  {
    title: "PDOnline — Frontend Contribution",
    desc:
      "Contributed to a React-based psychological support platform during internship. Supported UI development, component improvements, and general frontend tasks within a collaborative team environment.",
    tags: ["React.js", "Frontend", "UI Components"],
    repo: "",
    live: ""
  }
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
  const overlay = document.getElementById("mobileOverlay");
  const closeBtn = document.getElementById("closeBtn");

  function openMenu() {
    overlay.removeAttribute("hidden");
    btn?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    overlay.setAttribute("hidden", "");
    btn?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  btn?.addEventListener("click", () => {
    const isHidden = overlay.hasAttribute("hidden");
    isHidden ? openMenu() : closeMenu();
  });

  closeBtn?.addEventListener("click", closeMenu);

  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay) closeMenu();
  });

  overlay?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hasAttribute("hidden")) closeMenu();
  });
}


document.getElementById("year").textContent = new Date().getFullYear();

renderProjects();
renderSkills();
initMenu();
