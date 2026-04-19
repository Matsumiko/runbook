<div align="center">

<img
  src="https://capsule-render.vercel.app/api?type=waving&height=240&color=0:0D1117,40:0F2027,70:203A43,100:2C5364&text=RunBook&fontAlign=50&fontAlignY=40&fontColor=E8F4FD&fontSize=80&desc=Lapisan%20instruksi%20operasional%20untuk%20AI%20coding%20agent&descAlign=50&descAlignY=60&descSize=17&animation=fadeIn"
  alt="RunBook Banner"
  width="100%"
/>

<br/>

<!-- Animated Typing -->
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=15&duration=2600&pause=900&color=38BDF8&center=true&vCenter=true&width=900&lines=Audit+dulu.+Implementasi+hati-hati.+Verifikasi+jujur.;Memori+proyek+yang+tahan+lama+untuk+AI+coding+agent.;Native+adapters+untuk+Codex%2C+Claude%2C+Cursor%2C+Copilot+%26+lebih." alt="Typing SVG" />

<br/><br/>

<!-- Badges - Version & License -->
<a href="https://www.npmjs.com/package/@matsumiko/runbook">
  <img alt="npm" src="https://img.shields.io/npm/v/@matsumiko/runbook?style=for-the-badge&color=38bdf8&labelColor=0d1117&logo=npm&logoColor=white">
</a>
&nbsp;
<a href="LICENSE">
  <img alt="License" src="https://img.shields.io/badge/lisensi-MIT-a78bfa?style=for-the-badge&labelColor=0d1117">
</a>
&nbsp;
<a href="https://github.com/Matsumiko/runbook">
  <img alt="GitHub" src="https://img.shields.io/badge/github-runbook-58a6ff?style=for-the-badge&logo=github&labelColor=0d1117">
</a>
&nbsp;
<img alt="npm downloads" src="https://img.shields.io/npm/dm/@matsumiko/runbook?style=for-the-badge&color=34d399&labelColor=0d1117&label=unduhan%2Fbulan">

<br/><br/>

<!-- Agent Compatibility Badges -->
<img alt="Codex" src="https://img.shields.io/badge/OpenAI%20Codex-siap-10a37f?style=flat-square&logo=openai&logoColor=white">
&nbsp;
<img alt="Claude" src="https://img.shields.io/badge/Claude-siap-cc785c?style=flat-square">
&nbsp;
<img alt="Cursor" src="https://img.shields.io/badge/Cursor-siap-111111?style=flat-square">
&nbsp;
<img alt="Copilot" src="https://img.shields.io/badge/GitHub%20Copilot-siap-2f81f7?style=flat-square&logo=githubcopilot&logoColor=white">
&nbsp;
<img alt="Node" src="https://img.shields.io/badge/node-%3E%3D18-3fb950?style=flat-square&logo=node.js&logoColor=white">

<br/><br/>

<p>
  <b>RunBook memberi AI coding agent lapisan operasi yang disiplin:</b><br/>
  memori proyek yang tahan lama, eksekusi terstruktur, konsistensi frontend,<br/>
  review keamanan backend, dan verifikasi yang jujur.
</p>

<br/>

<!-- Divider Snake -->
<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%"/>

</div>

<br/>

## 📦 Instalasi

Tambahkan RunBook ke proyek mana pun hanya dengan satu perintah:

```bash
npx @matsumiko/runbook init
```

Tambahkan file instruksi native untuk agent tertentu:

```bash
# Untuk Claude Code
npx @matsumiko/runbook init --agent claude

# Untuk beberapa agent sekaligus
npx @matsumiko/runbook init --agent cursor,copilot

# Untuk semua agent
npx @matsumiko/runbook init --agent all
```

Preview instalasi tanpa menulis file apapun:

```bash
npx @matsumiko/runbook init --agent all --dry-run
```

Install ke direktori tertentu:

```bash
npx @matsumiko/runbook init ./my-app --agent codex
```

> 💡 File yang sudah ada akan dilewati secara default. Gunakan `--force` hanya jika kamu benar-benar ingin menimpa file RunBook yang sudah ada.

<br/>

---

## 🤔 Kenapa RunBook?

AI coding agent itu powerful — tapi mudah keluar jalur tanpa konteks proyek yang tahan lama dan aturan eksekusi yang jelas.

<br/>

<div align="center">

| 😵 **Tanpa RunBook** | ✅ **Dengan RunBook** |
|:---|:---|
| Konteks hilang setiap sesi | Memori proyek tersimpan di file permanen |
| Agent menebak-nebak konvensi proyek | Agent audit dulu sebelum mengubah apapun |
| Output frontend melenceng dari DNA produk | Implementasi tetap kecil dan mudah di-revert |
| Security review bergantung pada keberuntungan prompting | Pekerjaan sensitif mengikuti checklist terstruktur |
| "Selesai" bisa berarti "sudah digenerate", bukan diverifikasi | Laporan mencakup verifikasi dan risiko residual |

</div>

<br/>

---

## 📁 Apa Saja yang Terinstall

```
📂 RunBook/
├── 📄 AGENTS.md                       ← Panduan operasi utama untuk AI agent
├── 📄 CODER.md                        ← Memori proyek: perintah, arsitektur, gotcha
├── 📄 PLAN.md                         ← Rencana eksekusi aktif antar sesi
├── 📄 TODO.md                         ← Backlog strategis berdasarkan nilai & dampak
├── 📄 CHANGELOG.md                    ← Catatan perubahan bermakna yang selesai
├── 📄 FRONTEND-DNA.md                 ← Aturan visual & interaksi frontend
├── 📄 BACKEND-SECURITY-CHECKLIST.md   ← Checklist security untuk backend sensitif
└── 📄 AGENT-VARIANTS.md               ← Catatan kompatibilitas berbagai AI agent
```

<br/>

<div align="center">

| File | Fungsi |
|:---|:---|
| `AGENTS.md` | Panduan operasi utama untuk AI coding agent |
| `CODER.md` | Memori proyek tahan lama: perintah, arsitektur, gotcha, catatan environment |
| `PLAN.md` | Rencana eksekusi aktif yang bertahan melewati batas sesi |
| `TODO.md` | Backlog strategis berperingkat berdasarkan nilai dan dampak |
| `CHANGELOG.md` | Catatan terstruktur untuk perubahan bermakna yang sudah selesai |
| `FRONTEND-DNA.md` | Aturan visual dan interaksi untuk pekerjaan frontend |
| `BACKEND-SECURITY-CHECKLIST.md` | Checklist review security untuk permukaan backend sensitif |
| `AGENT-VARIANTS.md` | Catatan kompatibilitas untuk berbagai AI coding agent |

</div>

<br/>

---

## ⚙️ Alur Kerja Agent

RunBook menstandarisasi loop pengiriman:

```
🔁 MULAI SESI
  │
  ├── 📖  Baca memori proyek
  │
  ├── 🔍  Inspeksi permukaan yang terpengaruh
  │
  ├── 📝  Tulis rencana konkret
  │
  ├── 🔨  Implementasi perubahan terkecil yang efektif
  │
  ├── ✅  Verifikasi hasilnya
  │
  └── 📊  Laporkan perubahan, pemeriksaan, dan risiko residual
```

Model operasi default mendorong agent untuk:

- 🔍 **Audit sebelum implementasi** yang berarti
- 🏗️ **Pertahankan arsitektur** dan pola UI/UX yang sudah ada
- 🚫 **Hindari refactor** yang tidak berkaitan
- 🔒 **Perlakukan keamanan backend** sebagai kebutuhan default
- ✅ **Verifikasi** dengan pemeriksaan terbaik yang tersedia
- 🚨 **Jangan klaim selesai** ketika validasi belum dilakukan

<br/>

---

## 🤖 Agent yang Didukung

<div align="center">

| Agent | Path instruksi native |
|:---|:---|
| 🟢 OpenAI Codex | `AGENTS.md` |
| 🟠 Claude Code | `CLAUDE.md` |
| ⬛ Cursor | `.cursor/rules/*.mdc` |
| 🔵 GitHub Copilot | `.github/copilot-instructions.md` + `.github/instructions/*.instructions.md` |
| 🔷 Gemini CLI | `GEMINI.md` |
| 🌊 Windsurf | `.windsurf/rules/*.md` |
| 🟣 Cline | `.clinerules/*.md` |
| 🟡 Aider | `CONVENTIONS.md` + `.aider.conf.yml` |

</div>

Lihat semua adapter yang tersedia:

```bash
npx @matsumiko/runbook list
```

<br/>

---

## 🖥️ Referensi CLI

```text
runbook init [target] [--agent <nama|all|none>] [--force] [--dry-run]
runbook list
runbook help
```

<div align="center">

| Opsi | Deskripsi |
|:---|:---|
| `--agent codex` | Install workflow inti `AGENTS.md` yang kompatibel dengan Codex *(default)* |
| `--agent claude` | Tambahkan `CLAUDE.md` |
| `--agent cursor` | Tambahkan `.cursor/rules/10-core.mdc` |
| `--agent copilot` | Tambahkan file instruksi GitHub Copilot |
| `--agent gemini` | Tambahkan `GEMINI.md` |
| `--agent windsurf` | Tambahkan `.windsurf/rules/10-core.md` |
| `--agent cline` | Tambahkan `.clinerules/core.md` |
| `--agent aider` | Tambahkan `CONVENTIONS.md` dan `.aider.conf.yml` |
| `--agent all` | Tambahkan semua adapter native (selain Codex) |
| `--agent none` | Install hanya file inti RunBook |
| `--force` | Timpa file yang sudah ada |
| `--dry-run` | Tampilkan operasi file yang direncanakan tanpa menulis |

</div>

<br/>

---

## 🚀 Setup yang Direkomendasikan

Setelah instalasi, ikuti langkah berikut:

**1️⃣** Isi `CODER.md` dengan perintah proyek, catatan arsitektur, environment variable, dan gotcha yang diketahui.

**2️⃣** Isi `FRONTEND-DNA.md` sebelum memberikan pekerjaan frontend ke agent.

**3️⃣** Gunakan `TODO.md` untuk item backlog strategis — bukan catatan sementara.

**4️⃣** Biarkan `PLAN.md` tersedia untuk rencana eksekusi spesifik per tugas.

**5️⃣** Simpan `CHANGELOG.md` khusus untuk perubahan bermakna yang sudah selesai.

**6️⃣** Tambahkan ini ke entry prompt agent kamu:

```text
Baca AGENTS.md sebelum melakukan perubahan.
Ikuti panduan operasi dan pertahankan konvensi proyek yang sudah ada.
```

<br/>

---

## 💬 Penggunaan Token

> RunBook secara sengaja menukar penggunaan konteks tambahan demi disiplin pengiriman yang lebih kuat.

Ini cocok untuk proyek di mana **konsistensi, kemudahan review, dan keamanan** lebih penting daripada meminimalkan setiap token. Untuk tugas kecil satu kali, file instruksi yang lebih ringan mungkin sudah cukup.

<br/>

---

## 🗂️ Struktur Repositori

```
.
├── bin/
│   └── runbook.js
├── templates/
│   └── core/
├── variants/
├── AGENTS.md
├── AGENT-VARIANTS.md
├── FRONTEND-DNA.md
├── BACKEND-SECURITY-CHECKLIST.md
├── package.json
└── README.md
```

<br/>

---

## 🤝 Kontribusi

Issue dan pull request sangat disambut!

Perubahan pada sistem instruksi harus **konkret dan dapat dipertahankan**. Utamakan peningkatan yang membuat perilaku agent lebih aman, lebih jelas, lebih konsisten, atau lebih mudah diaudit.

<br/>

---

## 📄 Lisensi

MIT. Lihat [LICENSE](LICENSE).

<br/>

<div align="center">

<!-- Stats -->
<img src="https://img.shields.io/github/stars/Matsumiko/runbook?style=social" alt="GitHub Stars">
&nbsp;&nbsp;
<img src="https://img.shields.io/github/forks/Matsumiko/runbook?style=social" alt="GitHub Forks">
&nbsp;&nbsp;
<img src="https://img.shields.io/github/watchers/Matsumiko/runbook?style=social" alt="GitHub Watchers">

<br/><br/>

<sub>Dibuat dengan ❤️ untuk developer yang ingin AI agent-nya bekerja dengan lebih disiplin.</sub>

<br/>

<img
  src="https://capsule-render.vercel.app/api?type=waving&height=140&section=footer&color=0:2C5364,50:203A43,100:0D1117"
  alt=""
  width="100%"
/>

</div>