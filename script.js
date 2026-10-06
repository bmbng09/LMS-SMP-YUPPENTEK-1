"use strict";
/* ================= DATA HARDCODE ================= */
const courseData = {
  title: "Informatika Kelas VIII – Fungsi Logika IF, AND, OR, dan Nested IF",
  short: "Informatika Kelas VIII",
  sub: "Fungsi Logika IF, AND, OR, dan Nested IF",
  teacher: "Bambang Istijab", className: "VIII", subject: "Informatika",
  element: "Analisis Data", duration: "3 JP", status: "Aktif", school: "SMP YUPPENTEK 1 Legok",
  description: [
    "Selamat datang di pembelajaran Informatika Kelas VIII.",
    "Pada course ini peserta didik akan mempelajari fungsi logika IF, AND, OR, dan IF Bertingkat (Nested IF) menggunakan aplikasi spreadsheet seperti Microsoft Excel atau Google Sheets.",
    "Melalui pembelajaran ini, peserta didik akan memahami bagaimana spreadsheet dapat digunakan untuk mengambil keputusan secara otomatis berdasarkan kondisi tertentu.",
    "Peserta didik akan mempelajari struktur fungsi IF, menerapkan fungsi IF untuk menentukan status berdasarkan data, menggunakan fungsi AND dan OR untuk mengolah beberapa kondisi, serta menerapkan IF Bertingkat (Nested IF) untuk menghasilkan beberapa kategori keputusan."
  ]
};
const materials = [
  { id: 1, title: "Fungsi IF", content: "Fungsi IF digunakan untuk menghasilkan keputusan berdasarkan suatu kondisi.",
    syntax: "=IF(kondisi, nilai_jika_benar, nilai_jika_salah)", example: '=IF(B2>=75,"Lulus","Tidak Lulus")',
    explain: 'Jika nilai pada B2 lebih besar atau sama dengan 75, spreadsheet menampilkan "Lulus". Jika tidak, menampilkan "Tidak Lulus".' },
  { id: 2, title: "Fungsi IF + AND", content: "Fungsi AND digunakan ketika beberapa kondisi harus terpenuhi secara bersamaan.",
    example: '=IF(AND(B2>=75,C2="Hadir"),"Lulus","Tidak Lulus")',
    explain: 'Hasil "Lulus" muncul hanya jika nilai >= 75 DAN kehadiran "Hadir".' },
  { id: 3, title: "Fungsi IF + OR", content: "Fungsi OR digunakan ketika cukup salah satu kondisi terpenuhi.",
    example: '=IF(OR(B2>=90,C2="Juara"),"Berprestasi","Belum")',
    explain: 'Hasil "Berprestasi" muncul jika nilai >= 90 ATAU C2 berisi "Juara".' },
  { id: 4, title: "Nested IF", content: "Nested IF adalah penggunaan fungsi IF secara bertingkat untuk menghasilkan beberapa kategori keputusan.",
    example: '=IF(B2>=90,"Sangat Baik",IF(B2>=80,"Baik",IF(B2>=75,"Cukup","Kurang")))',
    explain: "Spreadsheet memeriksa kondisi dari atas ke bawah sampai ada yang benar.",
    table: [[">= 90", "Sangat Baik"], [">= 80", "Baik"], [">= 75", "Cukup"], ["< 75", "Kurang"]] }
];
const quizQuestions = [
  { question: "Fungsi yang digunakan untuk menghasilkan keputusan berdasarkan suatu kondisi adalah...", options: ["SUM", "AVERAGE", "IF", "COUNT"], answer: 2, explanation: "IF menghasilkan nilai berbeda tergantung kondisi benar atau salah." },
  { question: "Rumus yang tepat untuk menentukan siswa lulus jika nilainya minimal 75 adalah...", options: ['=IF(B2<75,"Lulus","Tidak Lulus")', '=IF(B2>=75,"Lulus","Tidak Lulus")', '=IF(B2=75,"Tidak Lulus","Lulus")', '=IF(B2>50,"Lulus","Tidak Lulus")'], answer: 1, explanation: '"Minimal 75" berarti >= 75, sehingga hasil benar adalah "Lulus".' },
  { question: "Fungsi AND digunakan ketika...", options: ["Cukup satu kondisi terpenuhi", "Semua kondisi harus terpenuhi", "Tidak ada kondisi yang digunakan", "Data harus berupa teks"], answer: 1, explanation: "AND bernilai benar hanya jika semua kondisi benar." },
  { question: "Fungsi OR digunakan ketika...", options: ["Semua kondisi wajib benar", "Tidak ada kondisi yang diperlukan", "Cukup salah satu kondisi terpenuhi", "Hanya terdapat satu data"], answer: 2, explanation: "OR bernilai benar jika minimal satu kondisi benar." },
  { question: 'Perhatikan rumus:\n=IF(AND(B2>=75,C2="Hadir"),"Lulus","Tidak Lulus")\nAgar menghasilkan "Lulus", maka...', options: ["Nilai >=75 saja", "Status hadir saja", "Nilai >=75 dan status Hadir", "Nilai <75 dan status Hadir"], answer: 2, explanation: "Karena memakai AND, kedua syarat harus terpenuhi." },
  { question: "Fungsi IF bertingkat digunakan untuk...", options: ["Menghapus data", "Membuat beberapa kategori berdasarkan kondisi", "Mengubah warna komputer", "Mengurutkan data secara otomatis"], answer: 1, explanation: "Nested IF menghasilkan lebih dari dua kemungkinan hasil." },
  { question: "Jika nilai siswa adalah 85 berdasarkan kategori Nested IF, predikatnya adalah...", options: ["Sangat Baik", "Baik", "Cukup", "Kurang"], answer: 1, explanation: "85 tidak >= 90, tetapi >= 80, sehingga predikatnya Baik." },
  { question: "Jika nilai siswa adalah 72, predikatnya adalah...", options: ["Sangat Baik", "Baik", "Cukup", "Kurang"], answer: 3, explanation: "72 di bawah 75, sehingga semua kondisi salah dan hasilnya Kurang." }
];
const assignments = [{
  id: 1, title: "Tugas Praktik – Membuat Keputusan Otomatis dengan Spreadsheet",
  description: "Buatlah sebuah tabel data nilai siswa menggunakan Microsoft Excel atau Google Sheets.",
  columns: "No, Nama, Nilai, Kehadiran, Status, Predikat",
  rules: ["Gunakan fungsi IF untuk menentukan Lulus/Tidak Lulus.", "Gunakan fungsi AND atau OR untuk membuat keputusan berdasarkan lebih dari satu kondisi.", "Gunakan Nested IF untuk menentukan predikat: >=90 Sangat Baik, >=80 Baik, >=75 Cukup, <75 Kurang."],
  fileType: ".xlsx", fileName: "Nama_Kelas_TugasIF.xlsx", dueDate: "2026-10-13"
}];
const announcements = [
  { id: 1, title: "Selamat Datang di LMS Informatika Kelas VIII", date: "2026-10-05",
    content: "Selamat datang di LMS pembelajaran Informatika Kelas VIII.\n\nSilakan mengikuti pembelajaran dengan urutan:\n1. Baca petunjuk pembelajaran.\n2. Pelajari materi.\n3. Kerjakan kuis.\n4. Kerjakan tugas praktik spreadsheet.\n5. Upload hasil pekerjaan.\n6. Periksa kembali pekerjaan sebelum mengirimkan tugas.\n\nGunakan LMS secara bertanggung jawab dan sesuai dengan ketentuan pembelajaran." },
  { id: 2, title: "Petunjuk Pengumpulan Tugas", date: "2026-10-06",
    content: "Pastikan file tugas menggunakan format .xlsx dan diberi nama:\n\nNama_Kelas_TugasIF.xlsx\n\nPeriksa kembali file sebelum melakukan pengumpulan." }
];
const guideSteps = ["Masuk ke dashboard.", "Pilih course Informatika Kelas VIII.", "Pelajari materi secara berurutan.", "Kerjakan kuis.", "Kerjakan tugas praktik.", "Upload file tugas.", "Periksa status pengumpulan."];
const PASS = 75, KEY = "lms-yuppentek-v1", L = ["A", "B", "C", "D"];

/* ================= STATE & UTIL ================= */
const $ = s => document.querySelector(s);
const e = s => String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const badge = (t, k) => `<span class="badge ${k}">${t}</span>`;
const bar = v => `<div class="bar"><i style="width:${v}%"></i></div>`;
const fmtDate = d => new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
const fmtSize = b => b < 1048576 ? (b / 1024).toFixed(1) + " KB" : (b / 1048576).toFixed(2) + " MB";
const code = t => `<pre class="code">${e(t)}</pre>`;

const defaults = () => ({ done: [], quiz: null, task: null });
function load() { try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY))); } catch (_) { return defaults(); } }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (_) { /* storage tidak tersedia */ } }
let S = load();

/* Bobot progres: materi 40%, kuis 30%, tugas 30% */
function progress() {
  const m = Math.round(S.done.length / materials.length * 40), q = S.quiz ? 30 : 0, t = S.task ? 30 : 0;
  return { m, q, t, total: m + q + t };
}

function toast(msg, type = "ok") {
  const t = document.createElement("div");
  t.className = "toast " + type; t.textContent = msg; $("#toasts").append(t);
  setTimeout(() => t.remove(), 3000);
}
let modalActs = [];
function modal(title, body, actions = [{ label: "Tutup" }]) {
  modalActs = actions;
  $("#modal").innerHTML = `<div class="dialog" role="dialog" aria-modal="true"><h2>${title}</h2>${body}<div class="row end">${actions.map((a, i) => `<button class="btn ${a.cls || "ghost"}" data-m="${i}">${a.label}</button>`).join("")}</div></div>`;
  $("#modal").hidden = false;
}
const closeModal = () => { $("#modal").hidden = true; };

/* ================= HALAMAN ================= */
function rDash() {
  const p = progress(), any = S.done.length || S.quiz || S.task;
  const act = [
    ["📖 Materi Pembelajaran", `${S.done.length}/${materials.length} selesai`, S.done.length === materials.length],
    ["📝 Kuis Informatika", S.quiz ? `Nilai ${S.quiz.score}` : "Belum dikerjakan", !!S.quiz],
    ["📊 Tugas Spreadsheet", S.task ? "Sudah dikumpulkan" : "Belum dikumpulkan", !!S.task]
  ];
  return `<div class="hero"><h1>Selamat Datang, Bambang!</h1><p>Kelola pembelajaran Informatika Kelas VIII secara terstruktur.</p></div>
  <div class="grid stats">
    <div class="stat"><b>1</b>Course</div><div class="stat"><b>${materials.length}</b>Materi</div>
    <div class="stat"><b>1</b>Kuis</div><div class="stat"><b>${assignments.length}</b>Tugas</div>
  </div>
  <div class="card"><h2>Progress Pembelajaran: ${p.total}%</h2>${bar(p.total)}
    <small class="muted">Materi ${p.m}/40% · Kuis ${p.q}/30% · Tugas ${p.t}/30%</small></div>
  <div class="card"><h2>Course Aktif</h2><b>${courseData.short}</b><p class="muted">${courseData.sub}</p>
    <p>Guru: ${courseData.teacher}</p>${bar(p.total)}
    <button class="btn" data-go="materi">Lanjutkan Pembelajaran</button></div>
  <div class="card"><h2>Aktivitas Terbaru</h2>${any ? `<ul class="list">${act.map(a => `<li><span>${a[0]}</span><span>${a[1]} ${badge(a[2] ? "Selesai" : "Belum", a[2] ? "ok" : "warn")}</span></li>`).join("")}</ul>` : `<div class="empty">📭 Belum ada aktivitas. Mulai dari materi pertama.</div>`}</div>`;
}

function rCourse() {
  const c = courseData, p = progress();
  const info = [["Mata Pelajaran", c.subject], ["Kelas", c.className], ["Guru", c.teacher], ["Elemen", c.element], ["Alokasi waktu", c.duration], ["Status", c.status]];
  return `<h1>${c.title}</h1><div class="card">${c.description.map(d => `<p>${d}</p>`).join("")}
    <div class="info-list">${info.map(i => `<div><small>${i[0]}</small><b>${i[1]}</b></div>`).join("")}</div></div>
    <div class="card"><h2>Progress: ${p.total}%</h2>${bar(p.total)}<button class="btn" data-go="materi">Mulai Belajar</button></div>`;
}

let mi = 0, open = [true, false, false, false];
function rMateri() {
  const mods = materials.map((m, i) => `<div class="card mod ${open[i] ? "open" : ""} ${i === mi ? "current" : ""}">
    <button class="mod-head" data-act="toggle" data-i="${i}" aria-expanded="${open[i]}"><span>Modul ${m.id}: ${m.title}</span>
    <span>${S.done.includes(m.id) ? badge("Selesai", "ok") : badge("Belum", "warn")} ${open[i] ? "▲" : "▼"}</span></button>
    <div class="mod-body"><p>${m.content}</p>${m.syntax ? `<b>Struktur:</b>${code(m.syntax)}` : ""}<b>Contoh:</b>${code(m.example)}
    <p>${e(m.explain)}</p>${m.table ? `<table><tr><th>Nilai</th><th>Kategori</th></tr>${m.table.map(r => `<tr><td>${e(r[0])}</td><td>${r[1]}</td></tr>`).join("")}</table>` : ""}</div></div>`).join("");
  const done = S.done.includes(materials[mi].id);
  return `<h1>Materi</h1><p class="muted">Modul aktif: ${mi + 1} dari ${materials.length}</p>${mods}
    <div class="card"><b>Progress materi: ${S.done.length}/${materials.length} selesai</b>${bar(S.done.length / materials.length * 100)}
    <div class="row"><button class="btn ghost" data-act="prev" ${mi ? "" : "disabled"}>← Materi Sebelumnya</button>
    <button class="btn ${done ? "ghost" : "ok"}" data-act="done">${done ? "✔ Batalkan Tanda Selesai" : "Tandai Selesai"}</button>
    <button class="btn ghost" data-act="next" ${mi < materials.length - 1 ? "" : "disabled"}>Materi Berikutnya →</button></div></div>`;
}

let qs = { i: 0, ans: Array(quizQuestions.length).fill(null), retake: false };
function rQuiz() {
  const n = quizQuestions.length, title = "<h1>Kuis Fungsi Logika IF, AND, OR, dan Nested IF</h1>";
  if (S.quiz && !qs.retake) {
    const r = S.quiz, ok = r.score >= PASS;
    const fb = r.score >= 90 ? "Luar biasa! Pemahaman Anda sangat baik." : ok ? "Bagus! Anda mencapai batas ketuntasan." : "Belum tuntas. Pelajari ulang materi, lalu coba lagi.";
    return `${title}<div class="card"><h2>Hasil Kuis</h2><div class="score">${r.score}</div>
      <p>${badge(ok ? "Tuntas" : "Belum Tuntas", ok ? "ok" : "bad")} (batas ketuntasan ${PASS})</p>
      <div class="info-list"><div><small>Jumlah benar</small><b>${r.correct}</b></div><div><small>Jumlah salah</small><b>${r.wrong}</b></div><div><small>Persentase</small><b>${r.score}%</b></div></div>
      <p style="margin-top:12px">${fb}</p><button class="btn" data-act="retake">Ulangi Kuis</button></div>
      <div class="card"><h2>Pembahasan</h2>${quizQuestions.map((q, i) => { const right = r.ans[i] === q.answer;
        return `<div class="review ${right ? "right" : "wrong"}"><b>${i + 1}. ${e(q.question)}</b><br>Jawaban Anda: ${r.ans[i] === null ? "–" : L[r.ans[i]] + ". " + e(q.options[r.ans[i]])} ${badge(right ? "Benar" : "Salah", right ? "ok" : "bad")}<br>Jawaban benar: <b>${L[q.answer]}. ${e(q.options[q.answer])}</b><p class="muted">${q.explanation}</p></div>`; }).join("")}</div>`;
  }
  const q = quizQuestions[qs.i], last = qs.i === n - 1;
  return `${title}<div class="card"><div class="row between" style="margin:0"><b>Soal ${qs.i + 1} dari ${n}</b>${badge(qs.ans.filter(a => a !== null).length + " terjawab", "info")}</div>${bar((qs.i + 1) / n * 100)}
    <p class="q">${e(q.question)}</p>${q.options.map((o, i) => `<label class="opt"><input type="radio" name="q" value="${i}" ${qs.ans[qs.i] === i ? "checked" : ""}><span><b>${L[i]}.</b> ${e(o)}</span></label>`).join("")}
    <div class="row between"><button class="btn ghost" data-act="qprev" ${qs.i ? "" : "disabled"}>Sebelumnya</button>
    ${last ? `<button class="btn ok" data-act="qsubmit">Kirim Jawaban</button>` : `<button class="btn" data-act="qnext">Berikutnya</button>`}</div></div>`;
}
function submitQuiz() {
  const correct = qs.ans.filter((a, i) => a === quizQuestions[i].answer).length, n = quizQuestions.length;
  S.quiz = { ans: qs.ans.slice(), correct, wrong: n - correct, score: Math.round(correct / n * 100) };
  save(); qs = { i: 0, ans: Array(n).fill(null), retake: false };
  toast("Kuis berhasil dikirim"); render();
}

let file = null;
function rTask() {
  const a = assignments[0], t = S.task;
  return `<h1>Tugas</h1><div class="card"><div class="row between" style="margin:0"><h2>${a.title}</h2>${t ? badge("Sudah Dikumpulkan", "ok") : badge("Belum Dikumpulkan", "warn")}</div>
    <p>${a.description}</p><p><b>Kolom minimal:</b> ${a.columns}</p><b>Ketentuan:</b><ol style="margin:6px 0 10px 20px">${a.rules.map(r => `<li>${e(r)}</li>`).join("")}</ol>
    <p><b>Pengumpulan:</b> file ${a.fileType}, nama file <code>${a.fileName}</code>. Batas: ${fmtDate(a.dueDate)}.</p></div>
    ${t ? `<div class="card box-ok"><b>✅ Tugas berhasil dikumpulkan</b><br>File: ${e(t.name)} (${fmtSize(t.size)})<br>Waktu pengumpulan: ${t.time}</div>` : ""}
    <div class="card"><h2>${t ? "Kumpulkan Ulang" : "Upload Tugas"}</h2><div class="drop">
    <input type="file" id="file" accept=".xlsx"><p id="finfo" class="muted" style="margin:8px 0 0">Belum ada file dipilih (simulasi, file tidak dikirim ke server).</p></div>
    <div class="row"><button class="btn" id="upBtn" data-act="upload" disabled>Upload Tugas</button></div>
    <div hidden id="upWrap"><div class="bar"><i id="upBar" style="width:0"></i></div><small id="upPct">0%</small></div></div>`;
}
function upload() {
  if (!file) return toast("Pilih file .xlsx terlebih dahulu", "bad");
  $("#upBtn").disabled = true; $("#upWrap").hidden = false;
  let p = 0;
  const iv = setInterval(() => { // progres upload simulasi
    p = Math.min(100, p + Math.random() * 15 + 6);
    $("#upBar").style.width = p + "%"; $("#upPct").textContent = Math.round(p) + "%";
    if (p >= 100) {
      clearInterval(iv);
      S.task = { name: file.name, size: file.size, time: new Date().toLocaleString("id-ID", { dateStyle: "long", timeStyle: "short" }) };
      save(); file = null; toast("Tugas berhasil dikumpulkan"); render();
    }
  }, 150);
}

const rAnn = () => `<h1>Pengumuman</h1>` + [...announcements].sort((a, b) => b.date.localeCompare(a.date)).map(a =>
  `<div class="card"><div class="row between" style="margin:0"><h2>${a.title}</h2>${badge(fmtDate(a.date), "info")}</div><p style="white-space:pre-line">${e(a.content)}</p></div>`).join("");

const rProfile = () => `<h1>Profil</h1><div class="card"><div class="row" style="margin:0"><span class="avatar" style="width:64px;height:64px;font-size:1.4rem">BI</span><div><h2 style="margin:0">${courseData.teacher}</h2><span class="muted">Guru Informatika</span></div></div>
  <div class="info-list">${[["Sekolah", courseData.school], ["Mata Pelajaran", courseData.subject], ["Kelas", courseData.className]].map(i => `<div><small>${i[0]}</small><b>${i[1]}</b></div>`).join("")}</div></div>
  <div class="grid stats"><div class="stat"><b>1</b>Course aktif</div><div class="stat"><b>${materials.length}</b>Materi</div><div class="stat"><b>1</b>Kuis</div><div class="stat"><b>${assignments.length}</b>Tugas</div></div>`;

/* ================= ROUTER ================= */
const pages = {
  dashboard: { label: "Dashboard", icon: "🏠", render: rDash }, course: { label: "Course Saya", icon: "📚", render: rCourse },
  materi: { label: "Materi", icon: "📖", render: rMateri }, kuis: { label: "Kuis", icon: "📝", render: rQuiz },
  tugas: { label: "Tugas", icon: "📤", render: rTask }, pengumuman: { label: "Pengumuman", icon: "📢", render: rAnn },
  profil: { label: "Profil", icon: "👤", render: rProfile }
};
let cur = "dashboard";
const buildNav = () => { $("#nav").innerHTML = Object.entries(pages).map(([k, p]) => `<button class="nav-btn ${k === cur ? "active" : ""}" data-go="${k}">${p.icon} ${p.label}</button>`).join(""); };
const render = () => { $("#main").innerHTML = pages[cur].render(); };
function go(p) {
  cur = p; buildNav(); toggleMenu(false);
  $("#main").innerHTML = `<div class="loading"><i></i>Memuat…</div>`;
  setTimeout(render, 120); scrollTo(0, 0);
}
function toggleMenu(force) {
  const o = force === undefined ? !$("#sidebar").classList.contains("open") : force;
  $("#sidebar").classList.toggle("open", o); $("#overlay").classList.toggle("show", o);
}

/* ================= AKSI & EVENT ================= */
const actions = {
  menu: () => toggleMenu(),
  help: () => modal("Petunjuk Penggunaan", `<ol class="steps">${guideSteps.map(s => `<li><span><b>Langkah:</b> ${s}</span></li>`).join("")}</ol>`),
  notif: () => modal("Notifikasi", `<ul class="list">${announcements.map(a => `<li><span>📢 ${a.title}</span><small>${fmtDate(a.date)}</small></li>`).join("")}</ul>`),
  toggle: d => { open[+d.i] = !open[+d.i]; mi = +d.i; render(); },
  prev: () => { mi--; open[mi] = true; render(); },
  next: () => { mi++; open[mi] = true; render(); },
  done: () => {
    const id = materials[mi].id, has = S.done.includes(id);
    S.done = has ? S.done.filter(x => x !== id) : [...S.done, id]; save();
    toast(has ? "Tanda selesai dibatalkan" : `Modul ${id} ditandai selesai. Progress ${progress().total}%`); render();
  },
  qprev: () => { qs.i--; render(); },
  qnext: () => { qs.i++; render(); },
  qsubmit: () => {
    const empty = qs.ans.filter(a => a === null).length;
    modal("Kirim Jawaban?", `<p>${empty ? `Masih ada <b>${empty}</b> soal belum dijawab. ` : ""}Jawaban tidak dapat diubah setelah dikirim.</p>`,
      [{ label: "Batal" }, { label: "Ya, Kirim", cls: "ok", fn: submitQuiz }]);
  },
  retake: () => { qs.retake = true; render(); },
  upload
};
document.addEventListener("click", ev => {
  const m = ev.target.closest("[data-m]");
  if (m) { const a = modalActs[+m.dataset.m]; closeModal(); if (a.fn) a.fn(); return; }
  if (ev.target.id === "modal") return closeModal();
  const g = ev.target.closest("[data-go]"); if (g) return go(g.dataset.go);
  const a = ev.target.closest("[data-act]"); if (a && actions[a.dataset.act]) actions[a.dataset.act](a.dataset);
});
document.addEventListener("change", ev => {
  const t = ev.target;
  if (t.name === "q") qs.ans[qs.i] = +t.value;
  if (t.id === "file") {
    const f = t.files[0]; file = null;
    if (f && !f.name.toLowerCase().endsWith(".xlsx")) { t.value = ""; toast("Hanya file .xlsx yang diterima", "bad"); }
    else if (f) file = f;
    $("#finfo").innerHTML = file ? `📄 <b>${e(file.name)}</b> · ${fmtSize(file.size)}` : "Belum ada file dipilih.";
    $("#upBtn").disabled = !file;
  }
});
document.addEventListener("keydown", ev => { if (ev.key === "Escape") closeModal(); });

/* ================= INIT ================= */
$("#tbCourse").textContent = courseData.title;
buildNav(); render();