<div align="center">

<img
  src="https://capsule-render.vercel.app/api?type=waving&height=240&color=0:0D1117,40:0F2027,70:203A43,100:2C5364&text=RunBook&fontAlign=50&fontAlignY=40&fontColor=E8F4FD&fontSize=80&desc=Operational%20instruction%20kit%20for%20AI%20coding%20agents&descAlign=50&descAlignY=60&descSize=17&animation=fadeIn"
  alt="RunBook banner"
  width="100%"
/>

<br/>

<img
  src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=15&duration=2600&pause=900&color=38BDF8&center=true&vCenter=true&width=920&lines=Audit+first.+Implement+carefully.+Verify+honestly.;Durable+project+memory+for+AI+coding+agents.;Now+with+bundled+Codex+skills+for+frontend+foundations%2C+specialized+UI+builders%2C+route-level+surfaces%2C+and+final+polish."
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

RunBook sekarang menyertakan skill Codex repo-scoped untuk memilih fondasi frontend, menerjemahkan konteks Figma menjadi theme tokens, membangun komponen umum, control khusus seperti tooltip, dropdown, popover, combobox, select, context menu, data filter, date picker, calendar, dan timeline, lalu melanjutkan ke surface yang lebih besar seperti sidebar, detail page, dashboard, auth, search, checkout, settings, sampai refinement akhir sebelum ship.

Install skill ke proyek aktif:

```bash
npx @matsumiko/runbook skill install frontend-foundation-builder
npx @matsumiko/runbook skill install frontend-figma-to-theme
npx @matsumiko/runbook skill install frontend-component-builder
npx @matsumiko/runbook skill install frontend-tooltip-builder
npx @matsumiko/runbook skill install frontend-dropdown-builder
npx @matsumiko/runbook skill install frontend-popover-builder
npx @matsumiko/runbook skill install frontend-combobox-builder
npx @matsumiko/runbook skill install frontend-select-builder
npx @matsumiko/runbook skill install frontend-context-menu-builder
npx @matsumiko/runbook skill install frontend-data-filter-builder
npx @matsumiko/runbook skill install frontend-date-picker-builder
npx @matsumiko/runbook skill install frontend-calendar-builder
npx @matsumiko/runbook skill install frontend-timeline-builder
npx @matsumiko/runbook skill install frontend-sidebar-builder
npx @matsumiko/runbook skill install frontend-breadcrumb-builder
npx @matsumiko/runbook skill install frontend-accordion-builder
npx @matsumiko/runbook skill install frontend-command-palette-builder
npx @matsumiko/runbook skill install frontend-detail-page-builder
npx @matsumiko/runbook skill install frontend-page-builder
npx @matsumiko/runbook skill install frontend-dashboard-builder
npx @matsumiko/runbook skill install frontend-auth-builder
npx @matsumiko/runbook skill install frontend-onboarding-builder
npx @matsumiko/runbook skill install frontend-stepper-builder
npx @matsumiko/runbook skill install frontend-search-builder
npx @matsumiko/runbook skill install frontend-pagination-builder
npx @matsumiko/runbook skill install frontend-empty-state-builder
npx @matsumiko/runbook skill install frontend-notification-builder
npx @matsumiko/runbook skill install frontend-upload-builder
npx @matsumiko/runbook skill install frontend-modal-builder
npx @matsumiko/runbook skill install frontend-tabs-builder
npx @matsumiko/runbook skill install frontend-marketing-builder
npx @matsumiko/runbook skill install frontend-checkout-builder
npx @matsumiko/runbook skill install frontend-settings-builder
npx @matsumiko/runbook skill install frontend-polish-pass
npx @matsumiko/runbook skill install frontend-form-builder
npx @matsumiko/runbook skill install frontend-table-builder
```

Install ke direktori tertentu:

```bash
npx @matsumiko/runbook skill install frontend-foundation-builder ./my-app
npx @matsumiko/runbook skill install frontend-figma-to-theme ./my-app
npx @matsumiko/runbook skill install frontend-component-builder ./my-app
npx @matsumiko/runbook skill install frontend-tooltip-builder ./my-app
npx @matsumiko/runbook skill install frontend-dropdown-builder ./my-app
npx @matsumiko/runbook skill install frontend-popover-builder ./my-app
npx @matsumiko/runbook skill install frontend-combobox-builder ./my-app
npx @matsumiko/runbook skill install frontend-select-builder ./my-app
npx @matsumiko/runbook skill install frontend-context-menu-builder ./my-app
npx @matsumiko/runbook skill install frontend-data-filter-builder ./my-app
npx @matsumiko/runbook skill install frontend-date-picker-builder ./my-app
npx @matsumiko/runbook skill install frontend-calendar-builder ./my-app
npx @matsumiko/runbook skill install frontend-timeline-builder ./my-app
npx @matsumiko/runbook skill install frontend-sidebar-builder ./my-app
npx @matsumiko/runbook skill install frontend-breadcrumb-builder ./my-app
npx @matsumiko/runbook skill install frontend-accordion-builder ./my-app
npx @matsumiko/runbook skill install frontend-command-palette-builder ./my-app
npx @matsumiko/runbook skill install frontend-detail-page-builder ./my-app
npx @matsumiko/runbook skill install frontend-page-builder ./my-app
npx @matsumiko/runbook skill install frontend-dashboard-builder ./my-app
npx @matsumiko/runbook skill install frontend-auth-builder ./my-app
npx @matsumiko/runbook skill install frontend-onboarding-builder ./my-app
npx @matsumiko/runbook skill install frontend-stepper-builder ./my-app
npx @matsumiko/runbook skill install frontend-search-builder ./my-app
npx @matsumiko/runbook skill install frontend-pagination-builder ./my-app
npx @matsumiko/runbook skill install frontend-empty-state-builder ./my-app
npx @matsumiko/runbook skill install frontend-notification-builder ./my-app
npx @matsumiko/runbook skill install frontend-upload-builder ./my-app
npx @matsumiko/runbook skill install frontend-modal-builder ./my-app
npx @matsumiko/runbook skill install frontend-tabs-builder ./my-app
npx @matsumiko/runbook skill install frontend-marketing-builder ./my-app
npx @matsumiko/runbook skill install frontend-checkout-builder ./my-app
npx @matsumiko/runbook skill install frontend-settings-builder ./my-app
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
| `frontend-tooltip-builder` | Saat surface utama berupa tooltip, icon help, hover hint, atau contextual explanation yang harus tetap ringan | Membangun tooltip dengan contract yang jelas, trigger/placement behavior yang rapi, dan fallback touch or keyboard yang jujur |
| `frontend-dropdown-builder` | Saat surface utama berupa dropdown menu, kebab menu, profile menu, sort menu, atau compact anchored option list | Membangun dropdown dengan contract yang jelas, grouping/action hierarchy yang rapi, dan dismissal/selection behavior yang disiplin |
| `frontend-popover-builder` | Saat surface utama berupa anchored mini-panel seperti filter popover, mini editor, reaction picker, atau contextual utility card | Membangun popover dengan contract yang jelas, anchoring/lifecycle behavior yang rapi, density yang terkontrol, dan fallback responsif yang jujur |
| `frontend-combobox-builder` | Saat surface utama berupa autocomplete, typed selector, assignee picker, async search-select, atau creatable option field | Membangun combobox dengan contract yang jelas, query-selection model yang rapi, keyboard/async states yang disiplin, dan empty/loading behavior yang jujur |
| `frontend-select-builder` | Saat surface utama berupa labeled select field, status picker, grouped option selector, atau field-level value picker non-typed | Membangun select field dengan contract yang jelas, label/value/error state yang rapi, dan mobile fallback yang jujur |
| `frontend-context-menu-builder` | Saat surface utama berupa right-click menu, long-press menu, row context actions, atau cursor-anchored object menu | Membangun context menu dengan contract yang jelas, trigger semantics yang rapi, destructive grouping yang disiplin, dan fallback keyboard/touch yang jujur |
| `frontend-data-filter-builder` | Saat surface utama berupa filter bar, facet panel, applied-filter chips, atau refinement controls lintas dataset | Membangun filter surface dengan contract yang jelas, active-filter model yang rapi, reset/apply behavior yang disiplin, dan responsive collapse yang jujur |
| `frontend-date-picker-builder` | Saat surface utama berupa date picker, calendar input, range picker, report range control, atau scheduling date selector | Membangun date picker dengan contract yang jelas, parsing/selection model yang rapi, locale-boundary behavior yang disiplin, dan mobile fallback yang jujur |
| `frontend-calendar-builder` | Saat surface utama berupa calendar view, schedule board, planner, agenda, atau event-driven chronology grid | Membangun calendar surface dengan contract yang jelas, navigation/view model yang rapi, event density treatment yang disiplin, dan fallback mobile yang jujur |
| `frontend-timeline-builder` | Saat surface utama berupa milestone timeline, activity chronology, audit trail, shipment progress, atau history feed | Membangun timeline surface dengan contract yang jelas, chronology/grouping model yang rapi, status-marker treatment yang disiplin, dan dense-history fallback yang jujur |
| `frontend-sidebar-builder` | Saat surface utama berupa sidebar, app-shell nav, admin side navigation, workspace nav, atau navigation rail | Membangun sidebar surface dengan contract yang jelas, nav hierarchy yang rapi, active/collapse behavior yang disiplin, dan responsive drawer fallback yang jujur |
| `frontend-breadcrumb-builder` | Saat surface utama berupa breadcrumb trail, route ancestry path, hierarchy chips, atau back-to-parent trail | Membangun breadcrumb surface dengan contract yang jelas, hierarchy meaning yang rapi, truncation/overflow behavior yang disiplin, dan mobile fallback yang jujur |
| `frontend-tabs-builder` | Saat surface utama berupa tabs, segmented control, tabbed subview, sticky tab bar, atau panelized view switcher | Membangun tabbed surface dengan contract yang jelas, active-state/overflow behavior yang rapi, dan panel retention/keyboard treatment yang jujur |
| `frontend-accordion-builder` | Saat surface utama berupa accordion, disclosure stack, FAQ reveal block, filter accordion, atau expandable section lain | Membangun disclosure surface dengan contract yang jelas, summary rows yang informatif, expansion behavior yang disiplin, dan dense-state readability yang jujur |
| `frontend-modal-builder` | Saat surface utama berupa modal, dialog, drawer, side sheet, bottom sheet, confirm dialog, atau overlay flow lain | Membangun overlay surface dengan contract yang jelas, dismissal/focus/layering behavior yang rapi, dan responsive fallback yang jujur |
| `frontend-command-palette-builder` | Saat surface utama berupa command palette, spotlight launcher, quick-action search, atau keyboard-first command surface | Membangun command surface dengan contract yang jelas, trigger/ranking/keyboard behavior yang rapi, dan empty or no-match recovery yang jujur |
| `frontend-detail-page-builder` | Saat surface utama berupa detail page seperti product detail, user detail, order detail, invoice detail, project detail, atau drill-down route lain | Membangun detail page dengan contract yang jelas, summary hierarchy yang kuat, metadata yang rapi, related sections yang disiplin, dan states yang jujur |
| `frontend-page-builder` | Saat surface utama berupa halaman penuh seperti generic product page atau route-level surface non-detail non-onboarding non-search lain | Membangun halaman dengan contract yang jelas, section order yang rapi, route-level hierarchy, dan page states yang jujur |
| `frontend-dashboard-builder` | Saat surface utama berupa dashboard, analytics overview, admin home, atau multi-panel summary page | Membangun dashboard dengan contract yang jelas, hierarchy yang kuat, panel system yang konsisten, dan state coverage yang jujur |
| `frontend-auth-builder` | Saat surface utama berupa login, register, password reset, email verification, MFA, invite acceptance, atau access-denied flow | Membangun auth flow dengan contract yang jelas, trust signals, privacy-safe feedback, dan recovery states yang rapi |
| `frontend-onboarding-builder` | Saat surface utama berupa welcome flow, setup wizard, first-workspace setup, first-project activation, import setup, atau guided empty-state journey | Membangun onboarding flow dengan contract yang jelas, step progression yang rapi, activation target yang kuat, dan skip/resume/completion states yang jujur |
| `frontend-stepper-builder` | Saat surface utama berupa stepper, progress rail, numbered wizard header, atau multi-step progress indicator | Membangun stepper surface dengan contract yang jelas, progression meaning yang rapi, gating/completion states yang disiplin, dan mobile fallback yang jujur |
| `frontend-search-builder` | Saat surface utama berupa search page, discovery flow, filtered directory, catalog browse, atau result surface dengan query/refinement behavior yang penting | Membangun search surface dengan contract yang jelas, query/refinement model yang rapi, result summary yang jujur, dan no-match/reset states yang kuat |
| `frontend-pagination-builder` | Saat surface utama berupa pagination controls, result-range footer, numbered pager, cursor navigation, atau load-more progression | Membangun pagination surface dengan contract yang jelas, current-range clarity yang rapi, boundary/state-sync behavior yang disiplin, dan compact-layout fallback yang jujur |
| `frontend-empty-state-builder` | Saat surface utama berupa no-data state, no-results state, blocked state, empty dashboard/table/search shell, atau recovery-first zero-state surface | Membangun empty-state surface dengan contract yang jelas, explanation yang jujur, recovery CTA yang kuat, dan distinction antara no-data/no-results/blocked yang rapi |
| `frontend-notification-builder` | Saat surface utama berupa toast, snackbar, banner, inline alert, status feedback, atau notification center/inbox surface | Membangun notification surface dengan contract yang jelas, pemilihan channel yang tepat, urgency treatment yang rapi, dan dismissal/persistence behavior yang jujur |
| `frontend-upload-builder` | Saat surface utama berupa file picker, dropzone, attachment input, avatar upload, media upload, atau import-file surface | Membangun upload surface dengan contract yang jelas, constraint messaging yang rapi, progress/retry/remove behavior yang jujur, dan preview/attachment treatment yang konsisten |
| `frontend-marketing-builder` | Saat surface utama berupa landing page, pricing page, feature page, campaign page, atau conversion-focused public page | Membangun marketing page dengan contract yang jelas, narrative flow, CTA hierarchy, proof/pricing sections, dan conversion states yang jujur |
| `frontend-checkout-builder` | Saat surface utama berupa checkout, billing step, order review, payment-method selection, atau purchase completion flow | Membangun checkout flow dengan contract yang jelas, totals clarity, trust cues, payment-state handling, dan recovery states yang rapi |
| `frontend-settings-builder` | Saat surface utama berupa account settings, team settings, preferences, security settings, billing preferences, atau configuration surfaces lain | Membangun settings surface dengan contract yang jelas, grouping yang rapi, persistence behavior, permission cues, dan destructive-state safety |
| `frontend-polish-pass` | Saat UI utama sudah ada dan butuh refinement akhir sebelum ship | Merapikan hierarchy, spacing, consistency, responsive behavior, dan state coverage tanpa redesign liar |
| `frontend-form-builder` | Saat surface utama berupa form, wizard, profile editor, atau input-heavy UI non-auth non-checkout non-settings lain | Membangun form dengan contract yang jelas, validation, field states, submit lifecycle, dan feedback yang rapi |
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
4. Gunakan `frontend-tooltip-builder` saat permukaan utamanya berupa tooltip, hover hint, icon help, atau lightweight contextual explanation.
5. Gunakan `frontend-dropdown-builder` saat permukaan utamanya berupa dropdown menu, action menu, profile menu, atau anchored option list.
6. Gunakan `frontend-popover-builder` saat permukaan utamanya berupa anchored mini-panel, compact filter surface, inline editor, atau contextual utility card.
7. Gunakan `frontend-combobox-builder` saat permukaan utamanya berupa autocomplete, typed selector, assignee picker, atau async search-select field.
8. Gunakan `frontend-select-builder` saat permukaan utamanya berupa select field, grouped picker, status selector, atau field-level value picker tanpa typing.
9. Gunakan `frontend-context-menu-builder` saat permukaan utamanya berupa right-click menu, long-press menu, atau cursor-anchored row/object actions.
10. Gunakan `frontend-data-filter-builder` saat permukaan utamanya berupa filter bar, facet panel, applied-filter chips, atau dataset refinement controls.
11. Gunakan `frontend-date-picker-builder` saat permukaan utamanya berupa date picker, range selector, report-range input, atau calendar-driven date control.
12. Gunakan `frontend-calendar-builder` saat permukaan utamanya berupa full calendar view, planner, scheduler, atau agenda surface.
13. Gunakan `frontend-timeline-builder` saat permukaan utamanya berupa chronology feed, milestone rail, audit trail, atau progress history.
14. Gunakan `frontend-sidebar-builder` saat permukaan utamanya berupa app-shell sidebar, navigation rail, admin sidebar, atau workspace navigation.
15. Gunakan `frontend-breadcrumb-builder` saat permukaan utamanya berupa breadcrumb trail, path ancestry, atau hierarchy chips.
16. Gunakan `frontend-tabs-builder` saat permukaan utamanya berupa tabs, segmented controls, atau tabbed panel switching.
17. Gunakan `frontend-accordion-builder` saat permukaan utamanya berupa disclosure stack, FAQ accordion, filter accordion, atau expandable sections.
18. Gunakan `frontend-modal-builder` saat permukaan utamanya berupa dialog, drawer, sheet, destructive confirm, atau overlay subflow.
19. Gunakan `frontend-command-palette-builder` saat permukaan utamanya berupa spotlight launcher, quick-action palette, atau keyboard-first command surface.
20. Gunakan `frontend-detail-page-builder` saat permukaan utamanya berupa detail page atau drill-down route untuk satu record utama.
21. Gunakan `frontend-page-builder` saat permukaan utamanya berupa halaman produk non-dashboard non-detail dengan beberapa section.
22. Gunakan `frontend-dashboard-builder` saat permukaan utamanya berupa dashboard atau analytics overview dengan banyak panel.
23. Gunakan `frontend-auth-builder` saat permukaan utamanya berupa auth entry, account recovery, verification, atau access state.
24. Gunakan `frontend-stepper-builder` saat permukaan utamanya berupa progress rails, multi-step indicators, atau wizard step headers.
25. Gunakan `frontend-onboarding-builder` saat permukaan utamanya berupa first-run setup, activation flow, atau guided empty-state journey setelah user punya akses.
26. Gunakan `frontend-search-builder` saat permukaan utamanya berupa search, discovery, filtered browsing, atau result exploration surface.
27. Gunakan `frontend-pagination-builder` saat permukaan utamanya berupa paged-result navigation, cursor paging, atau load-more progression.
28. Gunakan `frontend-empty-state-builder` saat permukaan utamanya berupa zero-data, no-results, blocked, atau recovery-first state.
29. Gunakan `frontend-notification-builder` saat permukaan utamanya berupa toast, banner, inline alert, status feedback, atau notification center.
30. Gunakan `frontend-upload-builder` saat permukaan utamanya berupa file picker, dropzone, attachment flow, avatar upload, atau media-ingestion surface.
31. Gunakan `frontend-marketing-builder` saat permukaan utamanya berupa public marketing atau conversion page.
32. Gunakan `frontend-checkout-builder` saat permukaan utamanya berupa checkout, order review, billing step, atau purchase completion flow.
33. Gunakan `frontend-settings-builder` saat permukaan utamanya berupa settings, preferences, atau configuration surface.
34. Gunakan `frontend-form-builder` saat permukaan utamanya berupa form atau flow input non-auth non-checkout non-settings.
35. Gunakan `frontend-table-builder` saat permukaan utamanya berupa data table atau grid.
36. Gunakan `frontend-polish-pass` sebagai refinement pass menjelang ship.
37. Hasil skill kedua seharusnya memperkaya theme dan visual rules, bukan memilih ulang fondasi UI.

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
|       `-- frontend-tooltip-builder/
|       `-- frontend-dropdown-builder/
|       `-- frontend-popover-builder/
|       `-- frontend-combobox-builder/
|       `-- frontend-select-builder/
|       `-- frontend-context-menu-builder/
|       `-- frontend-data-filter-builder/
|       `-- frontend-date-picker-builder/
|       `-- frontend-calendar-builder/
|       `-- frontend-timeline-builder/
|       `-- frontend-sidebar-builder/
|       `-- frontend-breadcrumb-builder/
|       `-- frontend-tabs-builder/
|       `-- frontend-accordion-builder/
|       `-- frontend-modal-builder/
|       `-- frontend-command-palette-builder/
|       `-- frontend-detail-page-builder/
|       `-- frontend-page-builder/
|       `-- frontend-dashboard-builder/
|       `-- frontend-auth-builder/
|       `-- frontend-onboarding-builder/
|       `-- frontend-stepper-builder/
|       `-- frontend-search-builder/
|       `-- frontend-pagination-builder/
|       `-- frontend-empty-state-builder/
|       `-- frontend-notification-builder/
|       `-- frontend-upload-builder/
|       `-- frontend-marketing-builder/
|       `-- frontend-checkout-builder/
|       `-- frontend-settings-builder/
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
