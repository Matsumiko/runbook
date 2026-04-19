<div align="center">

<img
  src="https://capsule-render.vercel.app/api?type=waving&height=240&color=0:0D1117,40:0F2027,70:203A43,100:2C5364&text=RunBook&fontAlign=50&fontAlignY=40&fontColor=E8F4FD&fontSize=80&desc=Operational%20instruction%20kit%20for%20AI%20coding%20agents&descAlign=50&descAlignY=60&descSize=17&animation=fadeIn"
  alt="RunBook banner"
  width="100%"
/>

<br/>

<img
  src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=15&duration=2600&pause=900&color=38BDF8&center=true&vCenter=true&width=920&lines=Audit+first.+Implement+carefully.+Verify+honestly.;Durable+project+memory+for+AI+coding+agents.;Now+with+bundled+Codex+skills+for+frontend+foundations%2C+theme+translation%2C+components%2C+pages%2C+dashboards%2C+auth%2C+marketing%2C+checkout%2C+forms%2C+tables%2C+and+final+polish."
  alt="RunBook typing banner"
/>

<br/><br/>

<a href="https://www.npmjs.com/package/@matsumiko/runbook">
  <img alt="npm" src="https://img.shields.io/npm/v/%40matsumiko%2Frunbook?style=for-the-badge&color=38bdf8&labelColor=0d1117&logo=npm&logoColor=white">
</a>
&nbsp;
<a href="LICENSE">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-a78bfa?style=for-the-badge&labelColor=0d1117">
</a>
&nbsp;
<a href="https://github.com/Matsumiko/runbook">
  <img alt="GitHub" src="https://img.shields.io/badge/github-runbook-58a6ff?style=for-the-badge&logo=github&labelColor=0d1117">
</a>

<br/><br/>

<img alt="Codex" src="https://img.shields.io/badge/OpenAI%20Codex-ready-10a37f?style=flat-square&logo=openai&logoColor=white">
&nbsp;
<img alt="Claude" src="https://img.shields.io/badge/Claude-ready-cc785c?style=flat-square">
&nbsp;
<img alt="Cursor" src="https://img.shields.io/badge/Cursor-ready-111111?style=flat-square">
&nbsp;
<img alt="Copilot" src="https://img.shields.io/badge/GitHub%20Copilot-ready-2f81f7?style=flat-square&logo=githubcopilot&logoColor=white">
&nbsp;
<img alt="Node" src="https://img.shields.io/badge/node-%3E%3D18-3fb950?style=flat-square&logo=node.js&logoColor=white">

<br/><br/>

<p>
  <b>RunBook memberi AI coding agent lapisan kerja yang disiplin:</b><br/>
  memori proyek yang tahan lama, eksekusi yang terstruktur, aturan frontend dan backend yang jelas,
  serta verifikasi yang jujur sebelum pekerjaan dinyatakan selesai.
</p>

</div>

---

## Instalasi Inti

Tambahkan RunBook ke proyek mana pun:

```bash
npx @matsumiko/runbook init
```

Tambahkan adapter agent tertentu:

```bash
npx @matsumiko/runbook init --agent claude
npx @matsumiko/runbook init --agent cursor,copilot
npx @matsumiko/runbook init --agent all
```

Preview tanpa menulis file:

```bash
npx @matsumiko/runbook init --agent all --dry-run
```

Install ke direktori tertentu:

```bash
npx @matsumiko/runbook init ./my-app --agent codex
```

File yang sudah ada akan di-skip secara default. Gunakan `--force` hanya jika memang ingin menimpa file RunBook yang sudah ada.

---

## Install Skill Codex Bawaan

RunBook sekarang menyertakan skill Codex repo-scoped untuk memilih fondasi frontend, menerjemahkan konteks Figma menjadi theme tokens, membangun komponen, page, dashboard, auth flow, marketing page, dan checkout flow, mengerjakan form dan data table, dan melakukan refinement akhir sebelum ship.

Install skill ke proyek aktif:

```bash
npx @matsumiko/runbook skill install frontend-foundation-builder
npx @matsumiko/runbook skill install frontend-figma-to-theme
npx @matsumiko/runbook skill install frontend-component-builder
npx @matsumiko/runbook skill install frontend-page-builder
npx @matsumiko/runbook skill install frontend-dashboard-builder
npx @matsumiko/runbook skill install frontend-auth-builder
npx @matsumiko/runbook skill install frontend-marketing-builder
npx @matsumiko/runbook skill install frontend-checkout-builder
npx @matsumiko/runbook skill install frontend-polish-pass
npx @matsumiko/runbook skill install frontend-form-builder
npx @matsumiko/runbook skill install frontend-table-builder
```

Install ke direktori tertentu:

```bash
npx @matsumiko/runbook skill install frontend-foundation-builder ./my-app
npx @matsumiko/runbook skill install frontend-figma-to-theme ./my-app
npx @matsumiko/runbook skill install frontend-component-builder ./my-app
npx @matsumiko/runbook skill install frontend-page-builder ./my-app
npx @matsumiko/runbook skill install frontend-dashboard-builder ./my-app
npx @matsumiko/runbook skill install frontend-auth-builder ./my-app
npx @matsumiko/runbook skill install frontend-marketing-builder ./my-app
npx @matsumiko/runbook skill install frontend-checkout-builder ./my-app
npx @matsumiko/runbook skill install frontend-polish-pass ./my-app
npx @matsumiko/runbook skill install frontend-form-builder ./my-app
npx @matsumiko/runbook skill install frontend-table-builder ./my-app
```

Skill yang dipilih akan disalin ke:

```text
.agents/skills/<skill-name>/
```

Lokasi itu mengikuti dokumentasi Codex untuk repo-scoped skills, sehingga skill dapat ditemukan langsung saat Codex dijalankan dari repository tersebut.

---

## Apa yang Diinstall oleh Core Kit

```text
RunBook/
|-- AGENTS.md
|-- CODER.md
|-- PLAN.md
|-- TODO.md
|-- CHANGELOG.md
|-- FRONTEND-DNA.md
|-- BACKEND-SECURITY-CHECKLIST.md
`-- AGENT-VARIANTS.md
```

| File | Fungsi |
| --- | --- |
| `AGENTS.md` | Panduan operasi utama untuk AI coding agent. |
| `CODER.md` | Memori proyek: perintah penting, arsitektur, gotcha, dan catatan environment. |
| `PLAN.md` | Rencana eksekusi aktif yang bertahan antar sesi. |
| `TODO.md` | Backlog strategis berdasarkan nilai dan dampak. |
| `CHANGELOG.md` | Catatan perubahan bermakna yang benar-benar selesai. |
| `FRONTEND-DNA.md` | Aturan visual dan interaksi untuk pekerjaan frontend. |
| `BACKEND-SECURITY-CHECKLIST.md` | Checklist keamanan untuk backend yang sensitif. |
| `AGENT-VARIANTS.md` | Catatan kompatibilitas untuk berbagai AI coding agent. |

---

## Skill Bawaan

| Skill | Kapan Dipakai | Hasil Utama |
| --- | --- | --- |
| `frontend-foundation-builder` | Saat memulai frontend baru dari nol atau membuat surface frontend baru yang benar-benar greenfield | Memilih Chakra UI atau Tamagui, lalu menyiapkan provider, theme seed, starter surface, dan catatan keputusan stack |
| `frontend-figma-to-theme` | Saat sudah ada Figma, Dev Mode details, variable export, style guide, atau screenshot yang perlu diterjemahkan ke implementasi frontend | Mengubah konteks desain menjadi tokens, theme config, dan update `FRONTEND-DNA.md` |
| `frontend-component-builder` | Saat stack dan arah visual sudah ada, lalu komponen atau section perlu diimplementasikan dengan disiplin sistem | Membangun komponen, variants, states, dan proof surface yang mengikuti stack, theme, dan `FRONTEND-DNA.md` |
| `frontend-page-builder` | Saat surface utama berupa halaman penuh seperti settings page, detail page, onboarding page, atau route-level product surface lain | Membangun halaman dengan contract yang jelas, section order yang rapi, route-level hierarchy, dan page states yang jujur |
| `frontend-dashboard-builder` | Saat surface utama berupa dashboard, analytics overview, admin home, atau multi-panel summary page | Membangun dashboard dengan contract yang jelas, hierarchy yang kuat, panel system yang konsisten, dan state coverage yang jujur |
| `frontend-auth-builder` | Saat surface utama berupa login, register, password reset, email verification, MFA, invite acceptance, atau access-denied flow | Membangun auth flow dengan contract yang jelas, trust signals, privacy-safe feedback, dan recovery states yang rapi |
| `frontend-marketing-builder` | Saat surface utama berupa landing page, pricing page, feature page, campaign page, atau conversion-focused public page | Membangun marketing page dengan contract yang jelas, narrative flow, CTA hierarchy, proof/pricing sections, dan conversion states yang jujur |
| `frontend-checkout-builder` | Saat surface utama berupa checkout, billing step, order review, payment-method selection, atau purchase completion flow | Membangun checkout flow dengan contract yang jelas, totals clarity, trust cues, payment-state handling, dan recovery states yang rapi |
| `frontend-polish-pass` | Saat UI utama sudah ada dan butuh refinement akhir sebelum ship | Merapikan hierarchy, spacing, consistency, responsive behavior, dan state coverage tanpa redesign liar |
| `frontend-form-builder` | Saat surface utama berupa form, wizard, settings form, profile editor, atau input-heavy UI non-auth non-checkout lain | Membangun form dengan contract yang jelas, validation, field states, submit lifecycle, dan feedback yang rapi |
| `frontend-table-builder` | Saat surface utama berupa tabel, data grid, activity list, admin list, atau dense data display lain | Membangun tabel dengan contract yang jelas, density yang terkontrol, row actions, dan loading/empty/error states yang rapi |

### Logika Pemilihan Stack

| Kondisi | Pilihan |
| --- | --- |
| Web-first React, Next.js, atau Vite app | Chakra UI |
| Shared UI untuk web dan React Native atau Expo | Tamagui |
| User sudah memilih stack tertentu | Ikuti pilihan user |
| Repo sudah punya design system matang | Pertahankan stack yang ada |

### Urutan Pakai yang Direkomendasikan

1. Gunakan `frontend-foundation-builder` jika stack frontend belum dipilih.
2. Gunakan `frontend-figma-to-theme` setelah stack dipilih atau saat repo sudah punya stack aktif.
3. Gunakan `frontend-component-builder` saat mulai membangun komponen atau section di atas fondasi itu.
4. Gunakan `frontend-marketing-builder` saat permukaan utamanya berupa public marketing atau conversion page.
5. Gunakan `frontend-page-builder` saat permukaan utamanya berupa halaman produk non-dashboard dengan beberapa section.
6. Gunakan `frontend-dashboard-builder` saat permukaan utamanya berupa dashboard atau analytics overview dengan banyak panel.
7. Gunakan `frontend-auth-builder` saat permukaan utamanya berupa auth entry, account recovery, verification, atau access state.
8. Gunakan `frontend-checkout-builder` saat permukaan utamanya berupa checkout, order review, billing step, atau purchase completion flow.
9. Gunakan `frontend-form-builder` saat permukaan utamanya berupa form atau flow input non-auth non-checkout.
10. Gunakan `frontend-table-builder` saat permukaan utamanya berupa data table atau grid.
11. Gunakan `frontend-polish-pass` sebagai refinement pass menjelang ship.
12. Hasil skill kedua seharusnya memperkaya theme dan visual rules, bukan memilih ulang fondasi UI.

---

## Kenapa RunBook

Tanpa struktur, AI coding agent cenderung:

- kehilangan konteks antar sesi
- menebak-nebak konvensi proyek
- menghasilkan frontend yang terasa asing dari produk
- melewatkan security review di backend
- menulis status "done" tanpa verifikasi yang nyata

RunBook memaksa fondasi kerja yang lebih sehat:

- audit dulu sebelum implementasi yang berarti
- perubahan sekecil mungkin yang tetap efektif
- dokumentasi proyek yang bisa dibaca ulang oleh agent lain
- verifikasi yang dinyatakan dengan jujur
- risiko residual yang tidak disembunyikan

---

## Adapter Agent yang Didukung

| Agent | File instruksi native |
| --- | --- |
| OpenAI Codex | `AGENTS.md` |
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/*.mdc` |
| GitHub Copilot | `.github/copilot-instructions.md` dan `.github/instructions/*.instructions.md` |
| Gemini CLI | `GEMINI.md` |
| Windsurf | `.windsurf/rules/*.md` |
| Cline | `.clinerules/*.md` |
| Aider | `CONVENTIONS.md` dan `.aider.conf.yml` |

Lihat semua adapter dan skill yang dibundel:

```bash
npx @matsumiko/runbook list
```

Lihat skill saja:

```bash
npx @matsumiko/runbook skill list
```

---

## Referensi CLI

```text
runbook init [target] [--agent <name|all|none>] [--force] [--dry-run]
runbook list
runbook skill list
runbook skill install <name> [target] [--force] [--dry-run]
runbook help
```

| Opsi | Deskripsi |
| --- | --- |
| `--agent codex` | Install workflow inti `AGENTS.md` yang kompatibel dengan Codex. |
| `--agent claude` | Tambahkan `CLAUDE.md`. |
| `--agent cursor` | Tambahkan `.cursor/rules/10-core.mdc`. |
| `--agent copilot` | Tambahkan file instruksi GitHub Copilot. |
| `--agent gemini` | Tambahkan `GEMINI.md`. |
| `--agent windsurf` | Tambahkan `.windsurf/rules/10-core.md`. |
| `--agent cline` | Tambahkan `.clinerules/core.md`. |
| `--agent aider` | Tambahkan `CONVENTIONS.md` dan `.aider.conf.yml`. |
| `--agent all` | Tambahkan semua adapter native selain Codex. |
| `--agent none` | Install hanya file inti RunBook. |
| `--force` | Timpa file yang sudah ada. |
| `--dry-run` | Tampilkan operasi file tanpa menulis ke disk. |

---

## Setup yang Direkomendasikan

Setelah instalasi:

1. Isi `CODER.md` dengan perintah proyek, catatan arsitektur, environment variable, dan gotcha.
2. Isi `FRONTEND-DNA.md` sebelum memberi pekerjaan frontend ke agent.
3. Gunakan `TODO.md` untuk backlog strategis, bukan catatan sementara.
4. Biarkan `PLAN.md` untuk rencana eksekusi spesifik per tugas.
5. Gunakan `CHANGELOG.md` hanya untuk perubahan bermakna yang sudah benar-benar selesai.
6. Tambahkan ini ke entry prompt agent:

```text
Baca AGENTS.md sebelum melakukan perubahan.
Ikuti panduan operasi dan pertahankan konvensi proyek yang sudah ada.
```

---

## Penggunaan Token

RunBook sengaja menukar penggunaan konteks tambahan demi disiplin kerja yang lebih kuat.

Ia cocok untuk proyek yang lebih mementingkan konsistensi, auditability, dan keamanan daripada sekadar menekan token usage serendah mungkin.

---

## Struktur Repository

```text
.
|-- .agents/
|   `-- skills/
|       `-- frontend-foundation-builder/
|       `-- frontend-figma-to-theme/
|       `-- frontend-component-builder/
|       `-- frontend-page-builder/
|       `-- frontend-dashboard-builder/
|       `-- frontend-auth-builder/
|       `-- frontend-marketing-builder/
|       `-- frontend-checkout-builder/
|       `-- frontend-polish-pass/
|       `-- frontend-form-builder/
|       `-- frontend-table-builder/
|-- bin/
|   `-- runbook.js
|-- templates/
|   `-- core/
|-- variants/
|-- AGENTS.md
|-- AGENT-VARIANTS.md
|-- FRONTEND-DNA.md
|-- BACKEND-SECURITY-CHECKLIST.md
|-- package.json
`-- README.md
```

---

## Sumber Referensi

- OpenAI Codex Skills: https://developers.openai.com/codex/skills
- OpenAI Codex Plugins: https://developers.openai.com/codex/plugins/build
- Chakra UI installation: https://chakra-ui.com/docs/get-started/installation
- Chakra UI AI Rules: https://chakra-ui.com/docs/get-started/ai/rules
- Chakra UI MCP Server: https://chakra-ui.com/docs/get-started/ai/mcp-server
- Tamagui UI intro: https://tamagui.dev/ui/intro
- Tamagui installation: https://tamagui.dev/docs/intro/installation
- Tamagui LLM docs: https://tamagui.dev/llms.txt

---

## Kontribusi

Issue dan pull request terbuka.

Perubahan pada sistem instruksi harus konkret, dapat dipertahankan, dan benar-benar membantu agent bekerja lebih aman, lebih konsisten, atau lebih mudah diaudit.

---

## Lisensi

MIT. Lihat [LICENSE](LICENSE).

<div align="center">

<img
  src="https://capsule-render.vercel.app/api?type=waving&height=140&section=footer&color=0:2C5364,50:203A43,100:0D1117"
  alt=""
  width="100%"
/>

</div>
