<div align="center">

# 〔 RunBook 〕

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=14&duration=3000&pause=1000&color=6E7681&center=true&vCenter=true&multiline=true&width=620&height=50&lines=%22Seorang+agent+yang+tidak+membaca+dokumentasi...%22;%22...adalah+agent+yang+menunggu+giliran+merusak+production.%22" alt="typing quote" />

<br/>

[![License](https://img.shields.io/badge/license-MIT-6e40c9?style=flat-square&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Made for Codex](https://img.shields.io/badge/made%20for-OpenAI%20Codex-10a37f?style=flat-square&logo=openai&logoColor=white)](https://openai.com/codex)
[![Works with Claude](https://img.shields.io/badge/works%20with-Claude-cc785c?style=flat-square)](https://anthropic.com)
[![Works with Cursor](https://img.shields.io/badge/works%20with-Cursor-1a1a1a?style=flat-square)](https://cursor.sh)
[![Markdown](https://img.shields.io/badge/format-Markdown-3d7eeb?style=flat-square&logo=markdown&logoColor=white)]()

<br/>

**RunBook** adalah sistem file operasional untuk AI coding agents —<br/>
dirancang agar agent bekerja dengan disiplin, konsisten, dan tidak asal tembak.

Bukan framework. Bukan library.<br/>
Ini adalah **otak bersama** antara kamu dan agent-mu.

<br/>

</div>

---

## 〔 Isi Repo 〕

```
RunBook/
│
├── 📋 AGENTS.md                     ← aturan operasional utama, dibaca agent tiap sesi
├── 🧠 CODER.md                      ← memori proyek: command, arsitektur, gotcha
├── 📐 PLAN.md                       ← rencana eksekusi aktif, bertahan antar sesi
├── 📝 CHANGELOG.md                  ← catatan semua perubahan bermakna
├── ✅ TODO.md                       ← backlog strategis, ranked by value bukan by vibes
├── 🎨 FRONTEND-DNA.md               ← DNA visual & interaksi frontend
└── 🔒 BACKEND-SECURITY-CHECKLIST.md ← checklist keamanan backend, per fitur bukan sekali
```

---

## 〔 Kenapa Ada Ini 〕

AI coding agents itu kuat — tapi tanpa struktur, mereka seperti karakter isekai yang OP tapi nggak punya tujuan hidup.

Tanpa **RunBook**, agent-mu akan:

|  | Masalah | Dampak |
|--|---------|--------|
| 👻 | Lupa konteks antar sesi | Nanya hal yang sama berulang kali |
| 🎨 | Bikin UI yang visually asing | Produk jadi nggak konsisten |
| 🔓 | Skip security review | *"Kayaknya aman"* — famous last words |
| ✅ | Nulis "done" padahal belum diverifikasi | Bug masuk production |
| 🌀 | Refactor sambil bugfix | Dua masalah jadi empat |

**RunBook** hadir untuk mencegah semua itu.

---

## 〔 Cara Pakai 〕

### Step 1 — Ambil filenya

### Opsi cepat - pakai npm / npx

```bash
# Install core RunBook ke project saat ini
npx @matsumiko/runbook init

# Install core kit + adapter Claude
npx @matsumiko/runbook init --agent claude

# Install core kit + beberapa adapter agent
npx @matsumiko/runbook init --agent cursor,copilot

# Lihat file yang akan dibuat tanpa menulis apa pun
npx @matsumiko/runbook init --agent all --dry-run
```

Default CLI aman untuk repo yang sudah ada: file existing akan di-skip. Pakai `--force` hanya kalau memang mau overwrite file RunBook yang sudah ada.

Agent yang didukung CLI: `codex`, `claude`, `cursor`, `copilot`, `gemini`, `windsurf`, `cline`, `aider`, `all`, dan `none`.

Untuk maintainer sebelum publish:

```bash
npm test
npm run pack:dry-run
npm publish
```

Nama `runbook` di npm sudah dipakai package lain, jadi package ini disiapkan sebagai `@matsumiko/runbook`. Publish scoped package publik dengan `npm publish --access public`.

### Opsi manual - clone / copy

```bash
# Clone repo ini
git clone https://github.com/Matsumiko/runbook.git

# Atau copy langsung ke proyekmu
cp -r runbook /path/to/your/project/
```

### Step 2 — Isi sesuai urutan ini

| # | File | Yang harus diisi duluan |
|---|------|------------------------|
| 1 | `CODER.md` | Project overview, commands, env vars |
| 2 | `FRONTEND-DNA.md` | Color palette, typography, component patterns |
| 3 | `TODO.md` | P0 dan P1 yang aktif sekarang |
| 4 | `PLAN.md` | Biarkan kosong — agent yang isi saat mulai task |
| 5 | `CHANGELOG.md` | Biarkan kosong — agent yang isi setelah selesai |

### Step 3 — Kasih tau agent-mu

Tambahkan ini di system prompt atau instruksi awal agent:

```
Baca AGENTS.md sebelum melakukan apapun.
Ikuti semua aturan di dalamnya tanpa pengecualian.
```

> Agent sekarang punya otak. ✦

---

## 〔 Alur Kerja Agent 〕

```
╔══════════════════════════════════════════════════╗
║            ⚡  SESSION START  ⚡                 ║
║  Baca: CODER → PLAN → TODO → CHANGELOG           ║
║  + FRONTEND-DNA & SECURITY-CHECKLIST jika perlu  ║
╚═══════════════════════╦══════════════════════════╝
                        ║
                        ▼
╔══════════════════════════════════════════════════╗
║             🔍  UNDERSTAND                       ║
║  Pahami task. Identifikasi surface yang kena.    ║
║  Temukan ambiguitas — surface, jangan diam.      ║
╚═══════════════════════╦══════════════════════════╝
                        ║
                        ▼
╔══════════════════════════════════════════════════╗
║             📐  PLAN                             ║
║  Tulis ke PLAN.md. Bukan di kepala. Bukan chat.  ║
║  Definisikan rollback plan sebelum mulai.        ║
╚═══════════════════════╦══════════════════════════╝
                        ║
                        ▼
╔══════════════════════════════════════════════════╗
║             ⚙️  EXECUTE                          ║
║  Satu perubahan logis dalam satu waktu.          ║
║  Jangan refactor sambil bugfix.                  ║
║  Update status PLAN.md secara real-time.         ║
╚═══════════════════════╦══════════════════════════╝
                        ║
                        ▼
╔══════════════════════════════════════════════════╗
║             🧪  VERIFY                           ║
║  Test. Lint. Typecheck. Manual trace.            ║
║  Kalau belum diverifikasi, belum selesai.        ║
╚═══════════════════════╦══════════════════════════╝
                        ║
                        ▼
╔══════════════════════════════════════════════════╗
║             📋  REPORT                           ║
║  Update CHANGELOG.md. Update TODO.md.            ║
║  Archive plan. State residual risk. Done. ✓      ║
╚══════════════════════════════════════════════════╝
```

---

## 〔 File Highlights 〕

<details>
<summary><b>📋 AGENTS.md</b> — Hukum Dasar</summary>
<br/>

Aturan operasional lengkap. Agent **wajib** baca ini setiap sesi.

- **5-fase execution model** — Understand → Plan → Execute → Verify → Report
- **Ambiguity protocol** — kapan harus tanya, kapan boleh assume+flag
- **Error recovery protocol** — apa yang dilakukan kalau sesuatu meledak di tengah jalan
- **Prohibited behaviors** — daftar hal yang tidak pernah boleh dilakukan agent
- **Quick reference checklist** — ringkasan yang bisa di-scan dalam 30 detik

<br/>
</details>

<details>
<summary><b>🧠 CODER.md</b> — Ingatan Proyek</summary>
<br/>

Agent tidak punya memori antar sesi. File ini yang menggantikan memori itu.

Isinya: project overview, semua command penting (dev/build/test/db/deploy), arsitektur non-obvious, routing map, gotcha yang pernah menggigit, third-party integrations, dan deployment quirks.

<br/>
</details>

<details>
<summary><b>📐 PLAN.md</b> — Rencana yang Bertahan</summary>
<br/>

Rencana yang hanya ada di konteks chat akan mati saat sesi berakhir. `PLAN.md` tidak.

Template lengkap dengan: status markers `[ ]` `[~]` `[x]` `[!]`, tabel ambiguity resolution, risk assessment, rollback plan wajib, blocker log, replan log, dan archive section.

<br/>
</details>

<details>
<summary><b>🎨 FRONTEND-DNA.md</b> — Identitas Visual</summary>
<br/>

Tanpa file ini, setiap agent baru akan menghasilkan UI yang terasa datang dari proyek yang berbeda.

Isinya: hex values palette, typography scale, spacing tokens, DO/DON'T per komponen, states wajib (hover/focus/loading/empty/error), dan **Forbidden Outcomes** — hal yang tidak boleh pernah terjadi di UI.

<br/>
</details>

<details>
<summary><b>🔒 BACKEND-SECURITY-CHECKLIST.md</b> — Penjaga Keamanan</summary>
<br/>

18 section, 150+ item. Dijalankan per-fitur, bukan sekali saat setup.

Mencakup: auth, authz, input validation, session & token management, file upload, payment, webhooks, secrets, audit logging, rate limiting, email security, admin access, dependency supply chain, hingga infrastructure & deployment.

<br/>
</details>

<details>
<summary><b>📝 CHANGELOG.md & ✅ TODO.md</b> — Memori Kolektif</summary>
<br/>

**CHANGELOG** mencatat apa yang berubah, kenapa, dan risikonya — dengan type tagging (`feat`/`fix`/`security`/`breaking`), severity level (`low` → `critical`), dan rollback plan per entry.

**TODO** menyimpan backlog dengan sistem prioritas P0–P3, status markers, blocked section, dan health rules untuk mencegah backlog jadi kuburan ide.

<br/>
</details>

---

## 〔 Prinsip Inti 〕

```
  ①  Audit dulu, baru implement
  ②  Satu perubahan logis dalam satu waktu
  ③  Rencana ditulis ke file, bukan ke konteks
  ④  Belum diverifikasi = belum selesai
  ⑤  Frontend harus terasa native, bukan tempel
  ⑥  Security adalah syarat, bukan bonus
  ⑦  Jujur soal risiko — jangan sembunyikan ketidakpastian
```

---

## 〔 ⚠ Catatan Penting 〕

> **RunBook menambah token usage secara signifikan.**

Karena setiap sesi agent membaca beberapa file panjang sebelum mulai bekerja, konsumsi token akan lebih besar dari workflow tanpa RunBook.

RunBook cocok untuk kamu yang:

- ✦ Punya unlimited atau generous token budget
- ✦ Lebih mementingkan **konsistensi dan disiplin agent** daripada efisiensi token
- ✦ Kerja di project yang butuh kesinambungan antar sesi

RunBook lahir dari pemakaian pribadi dengan **OpenAI Codex** — dan memang paling optimal di sana.
Tapi kompatibel dengan agent lain juga.

---

## 〔 Kompatibilitas 〕

| Agent | Cara Integrasi |
|-------|----------------|
| **OpenAI Codex** | `AGENTS.md` / nested `AGENTS.override.md` |
| **Claude Code** | `CLAUDE.md` + `.claude/settings.json` |
| **Cursor** | `.cursor/rules/*.mdc` (preferred), `AGENTS.md` for simple cases |
| **GitHub Copilot** | `.github/copilot-instructions.md` + `.github/instructions/*.instructions.md` |
| **Gemini CLI** | `GEMINI.md` |
| **Windsurf** | `.windsurf/rules/*.md` and/or `AGENTS.md` |
| **Cline** | `.clinerules/*.md` |
| **Aider** | `CONVENTIONS.md` loaded via `.aider.conf.yml` or `--read` |

> Lihat `AGENT-VARIANTS.md` dan folder `variants/` untuk starter version native per-agent.

### 〔 Versi Native per Agent 〕

Repo ini sekarang menyertakan starter pack terpisah buat beberapa agent utama:

- `variants/codex/` - versi yang tetap memanfaatkan `AGENTS.md`
- `variants/claude/` - versi `CLAUDE.md`
- `variants/cursor/` - versi `.cursor/rules`
- `variants/copilot/` - versi `.github/copilot-instructions.md` + path-specific instructions
- `variants/gemini/` - versi `GEMINI.md`
- `variants/windsurf/` - versi `.windsurf/rules`
- `variants/cline/` - versi `.clinerules`
- `variants/aider/` - versi `CONVENTIONS.md` + `.aider.conf.yml`

Prinsipnya:

- root kit = canonical full policy pack
- `variants/` = adapter native sesuai cara tiap tool membaca instruksi
- file always-on harus tetap ringkas; detail panjang pindah ke doc pendukung

---

## 〔 Kontribusi 〕

Pull request, issue, dan diskusi terbuka.

Kalau kamu punya gotcha baru, pola yang bagus, atau section security yang belum tercakup — kirim saja.

**Satu aturan:** setiap perubahan pada file sistem ini harus bisa dipertanggungjawabkan.
Jangan ubah karena *"kayaknya lebih bagus"* — ubah karena ada alasan konkret.

---

<div align="center">

<br/>

```
  made with discipline, a little bit of frustration,
  and way too many debugging sessions
```

<br/>

[![by Matsumiko](https://img.shields.io/badge/by-Matsumiko-6e40c9?style=flat-square)](https://github.com/Matsumiko)

</div>
