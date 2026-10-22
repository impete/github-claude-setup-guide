const STORAGE_KEY = "gh_claude_course_progress_v1";
const THEME_KEY = "gh_claude_course_theme";
let course = null;
let currentModuleId = null;
let selectedPath = "beginner";

const qs = (s) => document.querySelector(s);
const qsa = (s) => Array.from(document.querySelectorAll(s));

function loadProgress() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}
function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}
function setTheme(theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  localStorage.setItem(THEME_KEY, theme);
  qs("#themeToggle").textContent = theme === "light" ? "🌙" : "☀️";
}
function getTheme() {
  return localStorage.getItem(THEME_KEY) || "dark";
}

async function loadCourse() {
  const res = await fetch("./data/course.json");
  course = await res.json();
}

function moduleVisible(m) {
  return m.path.includes(selectedPath);
}

function renderNav(filter = "") {
  const nav = qs("#moduleNav");
  nav.innerHTML = "";
  const p = loadProgress();
  const mods = course.modules.filter(moduleVisible).filter(m =>
    (m.title + " " + m.overview + " " + m.content.join(" ")).toLowerCase().includes(filter.toLowerCase())
  );

  mods.forEach(m => {
    const btn = document.createElement("button");
    btn.className = "module-link";
    if (p[m.id]?.done) btn.classList.add("done");
    btn.innerHTML = `${m.title} ${p[m.id]?.done ? "<span class='badge'>Done</span>" : ""}`;
    btn.onclick = () => showModule(m.id);
    nav.appendChild(btn);
  });

  if (!mods.length) {
    nav.innerHTML = "<p>No modules match your search.</p>";
  }
}

function renderCommands(commands) {
  const frag = document.createDocumentFragment();
  const tpl = qs("#commandTemplate");

  commands.forEach(cmd => {
    const node = tpl.content.cloneNode(true);
    const code = node.querySelector("code");
    const btn = node.querySelector(".copy-btn");
    code.textContent = cmd;
    btn.onclick = async () => {
      await navigator.clipboard.writeText(cmd);
      btn.textContent = "Copied!";
      setTimeout(() => btn.textContent = "Copy", 1000);
    };
    frag.appendChild(node);
  });

  return frag;
}

function showModule(id) {
  currentModuleId = id;
  const m = course.modules.find(x => x.id === id);
  const p = loadProgress();

  const area = qs("#contentArea");
  area.innerHTML = `
    <h2>${m.title}</h2>
    <p><em>${m.overview}</em></p>
    <h3>What you'll do</h3>
    <ul>${m.content.map(i => `<li>${i}</li>`).join("")}</ul>
    <h3>Commands</h3>
    <div id="cmdMount"></div>
  `;
  area.querySelector("#cmdMount").appendChild(renderCommands(m.commands));

  const cp = qs("#checkpointArea");
  cp.innerHTML = `<h3>Checkpoints</h3>`;
  m.checkpoints.forEach((c, idx) => {
    const row = document.createElement("label");
    row.className = "check-row";
    const key = `${m.id}_cp_${idx}`;
    const checked = !!p[key];
    row.innerHTML = `<input type="checkbox" ${checked ? "checked" : ""}/> ${c}`;
    row.querySelector("input").onchange = (e) => {
      const prog = loadProgress();
      prog[key] = e.target.checked;
      const allDone = m.checkpoints.every((_, i) => prog[`${m.id}_cp_${i}`]);
      prog[m.id] = { done: allDone, lastViewed: Date.now() };
      saveProgress(prog);
      updateProgressUI();
      renderNav(qs("#searchInput").value);
    };
    cp.appendChild(row);
  });

  const openProg = loadProgress();
  openProg[id] = { ...(openProg[id] || {}), lastViewed: Date.now() };
  saveProgress(openProg);
  updateProgressUI();
}

function updateProgressUI() {
  const p = loadProgress();
  const visible = course.modules.filter(moduleVisible);
  const done = visible.filter(m => p[m.id]?.done).length;
  const total = Math.max(visible.length, 1);
  const pct = Math.round((done / total) * 100);

  qs("#progressBar").style.width = pct + "%";
  qs("#progressText").textContent = `${pct}% complete (${done}/${total} modules)`;
}

function resumeLast() {
  const p = loadProgress();
  const visibleIds = new Set(course.modules.filter(moduleVisible).map(m => m.id));
  const entries = Object.entries(p)
    .filter(([k, v]) => visibleIds.has(k) && v?.lastViewed)
    .sort((a, b) => b[1].lastViewed - a[1].lastViewed);

  if (entries.length) showModule(entries[0][0]);
  else {
    const first = course.modules.find(moduleVisible);
    if (first) showModule(first.id);
  }
}

function initEvents() {
  qs("#searchInput").addEventListener("input", (e) => {
    renderNav(e.target.value);
  });

  qs("#themeToggle").onclick = () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  };

  qs("#resetProgressBtn").onclick = () => {
    if (!confirm("Reset all progress?")) return;
    localStorage.removeItem(STORAGE_KEY);
    updateProgressUI();
    renderNav(qs("#searchInput").value);
    resumeLast();
  };

  qs("#resumeBtn").onclick = resumeLast;

  qsa(".path-btn").forEach(btn => {
    btn.onclick = () => {
      selectedPath = btn.dataset.path;
      renderNav(qs("#searchInput").value);
      updateProgressUI();
      resumeLast();
    };
  });
}

async function boot() {
  setTheme(getTheme());
  await loadCourse();
  initEvents();
  renderNav();
  updateProgressUI();
  resumeLast();
}

boot();
