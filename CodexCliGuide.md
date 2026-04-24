# Codex CLI Guide

Dokumentasi ini menjelaskan penggunaan OpenAI Codex CLI untuk membantu development lokal, mulai dari menjalankan Codex, memahami sandbox dan approval mode, resume session, build project, deploy, sampai troubleshooting umum.

---

## 1. Apa itu Codex CLI?

Codex CLI adalah coding agent yang berjalan di terminal lokal. Codex dapat membantu membaca repository, memahami struktur project, mengubah file, menjalankan command, membuat patch, menjalankan test/build, dan membantu proses deploy selama environment lokal sudah siap.

Codex cocok digunakan untuk:

- membaca dan menjelaskan project
- membuat fitur baru
- memperbaiki bug
- refactor code
- review security
- membuat dokumentasi
- menjalankan test
- menjalankan build
- membantu deploy
- membuat command PowerShell, Bash, atau shell script
- audit perubahan sebelum commit

---

## 2. Install Codex CLI

Install Codex CLI secara global:

```bash
npm install -g @openai/codex
```

Upgrade ke versi terbaru:

```bash
npm install -g @openai/codex@latest
```

Cek versi:

```bash
codex --version
```

Jalankan Codex:

```bash
codex
```

---

## 3. Basic Usage

Masuk ke folder project:

```bash
cd <PROJECT_PATH>
```

Jalankan Codex:

```bash
codex
```

Jalankan Codex dengan prompt awal:

```bash
codex "Review project ini dan jelaskan struktur foldernya"
```

Jalankan Codex dengan model tertentu:

```bash
codex --model gpt-5.5
```

Jalankan Codex dengan web/search jika tersedia:

```bash
codex --search
```

---

## 4. Session Codex

Codex menyimpan sesi kerja. Session berguna untuk melanjutkan percakapan sebelumnya tanpa kehilangan konteks.

### Cek session ID dari dalam Codex

Di dalam Codex, jalankan:

```txt
/status
```

Contoh session ID:

```txt
019xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Resume session

```bash
codex resume <SESSION_ID>
```

Contoh:

```bash
codex resume 019xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Resume semua session

```bash
codex resume --all
```

### Resume session dengan full access

```bash
codex resume --sandbox danger-full-access <SESSION_ID>
```

### Resume session dengan full access dan approval tetap aktif

```bash
codex resume --sandbox danger-full-access --ask-for-approval on-request <SESSION_ID>
```

Ini adalah mode yang disarankan untuk project trusted karena Codex tetap bisa menjalankan build/deploy, tetapi masih bisa meminta persetujuan user untuk command sensitif.

---

## 5. Pengertian Sandbox

Sandbox adalah batas keamanan yang menentukan seberapa bebas Codex boleh menjalankan command di komputer lokal.

Sandbox dapat memengaruhi:

- akses baca file
- akses tulis file
- akses folder di luar project
- akses network
- command seperti `npm`, `node`, `git`, `vite`, `wrangler`, dan test runner
- command turunan yang melakukan child process atau spawn process

Penting: sandbox tidak hanya berlaku untuk Codex, tetapi juga command yang dijalankan oleh Codex.

Contoh command yang bisa dipengaruhi sandbox:

```bash
npm install
npm run build
npm test
git status
git diff
wrangler deploy
wrangler pages deploy
```

---

## 6. Mode Sandbox

### 6.1 `read-only`

Mode paling aman.

Codex bisa membaca file, tetapi tidak bisa mengubah file atau menjalankan command yang membutuhkan akses tulis.

```bash
codex --sandbox read-only
```

Cocok untuk:

- membaca project
- review code
- audit awal
- menjelaskan arsitektur
- membuat rencana perubahan

Tidak cocok untuk:

- edit file
- install dependency
- build
- deploy

---

### 6.2 `workspace-write`

Mode menengah.

Codex bisa membaca dan menulis file di working directory project, tetapi akses di luar workspace dan network bisa tetap dibatasi.

```bash
codex --sandbox workspace-write
```

Cocok untuk:

- edit code
- membuat file baru
- refactor dalam project
- menjalankan test sederhana
- memperbaiki bug lokal

Kadang belum cukup untuk:

- `npm install`
- `npm run build`
- deploy
- command yang butuh network
- command yang melakukan banyak child process
- command Cloudflare atau package manager tertentu

---

### 6.3 `danger-full-access`

Mode full access.

Codex mendapat akses lebih luas ke filesystem dan network. Mode ini biasanya dibutuhkan untuk build, install dependency, dan deploy yang membutuhkan akses lebih bebas.

```bash
codex --sandbox danger-full-access
```

Cocok untuk:

- install dependency
- menjalankan build
- menjalankan test
- deploy
- menjalankan command Cloudflare
- debugging environment lokal
- command yang membutuhkan network

Risiko:

- Codex dapat mengakses lebih banyak file lokal
- command dapat memakai environment variable dan token yang tersedia
- dependency script yang berbahaya bisa lebih berisiko
- salah command dapat berdampak lebih besar

Gunakan hanya pada repository yang dipercaya.

---

## 7. Approval Mode

Approval mode mengatur kapan Codex harus meminta izin sebelum menjalankan command.

Sandbox dan approval adalah dua hal berbeda:

```txt
Sandbox  = batas teknis akses command
Approval = kapan Codex harus minta izin user
```

---

### 7.1 `on-request`

Codex dapat bekerja otomatis untuk task normal, tetapi bisa meminta izin ketika butuh menjalankan command yang lebih sensitif.

```bash
codex --ask-for-approval on-request
```

Rekomendasi umum:

```bash
codex --sandbox danger-full-access --ask-for-approval on-request
```

Mode ini cocok karena Codex bisa menjalankan command penting, tetapi user masih punya kontrol.

---

### 7.2 `never`

Codex tidak akan meminta approval dan akan mencoba menyelesaikan task sesuai permission yang tersedia.

```bash
codex --ask-for-approval never
```

Cocok untuk automation yang sudah aman dan terisolasi.

Tidak disarankan untuk project production yang memiliki credential, secret, atau token penting.

---

## 8. Perbedaan Command Penting

### 8.1 Full access dengan approval aktif

```bash
codex resume --sandbox danger-full-access --ask-for-approval on-request <SESSION_ID>
```

Artinya:

```txt
Sandbox  : full access
Approval : masih aktif
```

Ini adalah mode yang paling disarankan untuk workflow development yang butuh build atau deploy.

Cocok untuk:

- build project
- install dependency
- deploy
- debug environment
- menjalankan command Cloudflare
- tetap menjaga kontrol user

---

### 8.2 Full access mengikuti config/default

```bash
codex resume --sandbox danger-full-access <SESSION_ID>
```

Artinya:

```txt
Sandbox  : full access
Approval : mengikuti config/default
```

Mode ini cocok jika konfigurasi Codex sudah benar.

---

### 8.3 Bypass total tanpa sandbox dan tanpa approval

```bash
codex resume --dangerously-bypass-approvals-and-sandbox <SESSION_ID>
```

Artinya:

```txt
Sandbox  : mati total
Approval : mati total
```

Ini adalah mode paling bebas dan paling berisiko.

Cocok hanya untuk:

- environment disposable
- VM khusus
- container terisolasi
- repository yang benar-benar dipercaya
- task yang memang membutuhkan autopilot penuh

Tidak disarankan untuk:

- repository dengan `.env`
- repository production
- repository dengan token Cloudflare
- repository dengan credential database
- komputer utama tanpa backup

---

### 8.4 Full auto

```bash
codex --full-auto
```

`--full-auto` bukan sama dengan `danger-full-access`.

Secara umum, `--full-auto` cocok untuk workflow lokal yang ringan, seperti edit file dan test sederhana. Namun mode ini belum tentu cukup untuk build/deploy kompleks.

---

## 9. Config Codex

File config Codex biasanya berada di:

### Windows

```powershell
notepad $env:USERPROFILE\.codex\config.toml
```

### Linux / macOS / WSL

```bash
nano ~/.codex/config.toml
```

Contoh konfigurasi umum:

```toml
model = "gpt-5.5"
model_reasoning_effort = "xhigh"
plan_mode_reasoning_effort = "xhigh"

sandbox_mode = "danger-full-access"
approval_policy = "on-request"
approvals_reviewer = "user"

[windows]
sandbox = "elevated"
sandbox_private_desktop = false

[projects.'<PROJECT_PATH>']
trust_level = "trusted"
```

Penjelasan:

```toml
sandbox_mode = "danger-full-access"
```

Menjadikan default sandbox Codex sebagai full access.

```toml
approval_policy = "on-request"
```

Codex tetap dapat meminta approval ketika command dianggap sensitif.

```toml
[windows]
sandbox = "elevated"
```

Menggunakan Windows sandbox mode elevated.

```toml
sandbox_private_desktop = false
```

Dapat membantu compatibility jika command seperti `npm`, `vite`, `node`, atau `esbuild` mengalami error child process seperti `spawn EPERM`.

```toml
trust_level = "trusted"
```

Menandai project sebagai trusted.

---

## 10. Setup Windows

Jika menggunakan Windows native, disarankan membuka terminal sebagai Administrator ketika menjalankan workflow yang membutuhkan build/deploy.

### Buka PowerShell sebagai Administrator

Cari PowerShell di Start Menu, klik kanan, lalu pilih:

```txt
Run as Administrator
```

### Masuk ke folder project

```powershell
cd <PROJECT_PATH>
```

### Jalankan Codex dengan full access

```powershell
codex --sandbox danger-full-access
```

### Resume session dengan full access

```powershell
codex resume --sandbox danger-full-access --ask-for-approval on-request <SESSION_ID>
```

---

## 11. PowerShell Execution Policy

Jika muncul error:

```txt
npm.ps1 cannot be loaded because running scripts is disabled
```

Jalankan:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Jika muncul pilihan:

```txt
[Y] Yes  [A] Yes to All  [N] No
```

Pilih:

```txt
Y
```

Cek hasilnya:

```powershell
Get-ExecutionPolicy -List
```

Jika masih bermasalah, gunakan `npm.cmd`:

```powershell
npm.cmd run build
```

---

## 12. Workflow Build Project Node.js / Vite

Install dependency:

```bash
npm install
```

Build:

```bash
npm run build
```

Alternatif di Windows:

```powershell
npm.cmd run build
```

Jika ingin menjalankan Vite langsung:

```bash
node node_modules/vite/bin/vite.js build
```

Jika di Windows path menggunakan backslash:

```powershell
node node_modules\vite\bin\vite.js build
```

Jika ada masalah pada config loader Vite:

```bash
node node_modules/vite/bin/vite.js build --configLoader native
```

---

## 13. Workflow Cloudflare

### Login Cloudflare

```bash
wrangler login
```

Cek user login:

```bash
wrangler whoami
```

---

### Deploy Cloudflare Worker

```bash
wrangler deploy
```

Cek deployment:

```bash
wrangler deployments list
```

Lihat log realtime:

```bash
wrangler tail
```

---

### Deploy Cloudflare Pages

Build project terlebih dahulu:

```bash
npm run build
```

Deploy folder output:

```bash
wrangler pages deploy <OUTPUT_DIR> --project-name <PROJECT_NAME>
```

Contoh umum:

```bash
wrangler pages deploy dist --project-name <PROJECT_NAME>
```

---

### Cloudflare D1

Apply migration lokal:

```bash
wrangler d1 migrations apply <DATABASE_NAME>
```

Apply migration remote:

```bash
wrangler d1 migrations apply <DATABASE_NAME> --remote
```

Lihat tabel database:

```bash
wrangler d1 execute <DATABASE_NAME> --remote --command "SELECT name FROM sqlite_master WHERE type='table';"
```

---

## 14. Workflow Rekomendasi Harian

Untuk development harian:

```bash
cd <PROJECT_PATH>
git status
codex resume --sandbox danger-full-access --ask-for-approval on-request <SESSION_ID>
```

Prompt yang disarankan ke Codex:

```md
Lanjutkan task terakhir.

Aturan:
1. Cek git status terlebih dahulu.
2. Jangan hapus file tanpa alasan jelas.
3. Jangan deploy production kecuali saya minta.
4. Setelah edit, jalankan build/test yang relevan.
5. Jika command gagal, tampilkan error lengkap.
6. Jangan klaim berhasil jika command tidak benar-benar selesai.
7. Akhiri dengan ringkasan:
   - files changed
   - command executed
   - build result
   - deploy result jika ada
   - next action
```

Setelah Codex selesai:

```bash
git status
git diff
npm run build
```

Jika sudah yakin, baru deploy:

```bash
wrangler deploy
```

atau:

```bash
wrangler pages deploy <OUTPUT_DIR> --project-name <PROJECT_NAME>
```

---

## 15. Prompt Validasi Build dan Deploy

Gunakan prompt ini jika ingin Codex benar-benar menjalankan validasi:

```md
Tolong lanjutkan task ini dengan validasi nyata.

Aturan:
1. Jalankan install dependency jika diperlukan.
2. Jalankan build command sesuai project.
3. Jika build gagal, jangan lanjut deploy.
4. Jika build berhasil dan saya sudah minta deploy, jalankan command deploy yang sesuai.
5. Jangan klaim build/deploy berhasil jika command tidak benar-benar selesai.
6. Jika ada error, tampilkan:
   - command yang dijalankan
   - output error lengkap
   - penyebab paling mungkin
   - file yang perlu dicek
   - solusi yang disarankan
7. Setelah selesai, buat ringkasan:
   - files changed
   - command executed
   - build result
   - deploy result
   - next action
```

---

## 16. Troubleshooting

### 16.1 `npm.ps1 cannot be loaded`

Penyebab:

PowerShell tidak mengizinkan script `.ps1`.

Solusi:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Atau gunakan:

```powershell
npm.cmd run build
```

---

### 16.2 `spawn EPERM`

Contoh error:

```txt
Error: spawn EPERM
[vite:build-html] spawn EPERM
```

Kemungkinan penyebab:

- Codex session belum benar-benar berjalan dengan `danger-full-access`
- Windows sandbox membatasi child process
- Windows Defender / antivirus memblok proses
- Controlled Folder Access aktif
- private desktop sandbox tidak kompatibel
- project berada di folder/drive yang dibatasi
- dependency native bermasalah

Solusi bertahap:

1. Tutup Codex.
2. Buka terminal sebagai Administrator.
3. Resume session dengan full access:

```bash
codex resume --sandbox danger-full-access --ask-for-approval on-request <SESSION_ID>
```

4. Pastikan config Windows:

```toml
[windows]
sandbox = "elevated"
sandbox_private_desktop = false
```

5. Coba build manual:

```bash
npm run build
```

atau di Windows:

```powershell
npm.cmd run build
```

6. Jika masih gagal, cek Windows Security:

```txt
Windows Security
→ Virus & threat protection
→ Ransomware protection
→ Controlled folder access
```

Allow aplikasi berikut jika perlu:

```txt
node.exe
npm.cmd
cmd.exe
powershell.exe
codex.exe
wrangler.exe
```

---

### 16.3 Build manual berhasil, tapi gagal di Codex

Kemungkinan penyebab:

- session Codex lama belum menggunakan full access
- Codex dibuka tanpa flag sandbox
- config belum reload
- terminal tidak dijalankan sebagai Administrator
- project path belum masuk trusted project
- Windows sandbox compatibility issue

Solusi:

```bash
codex resume --sandbox danger-full-access --ask-for-approval on-request <SESSION_ID>
```

Jika masih gagal dan environment aman:

```bash
codex resume --dangerously-bypass-approvals-and-sandbox <SESSION_ID>
```

Gunakan bypass total hanya jika repository benar-benar dipercaya.

---

### 16.4 `wrangler` tidak dikenali

Cek:

```bash
wrangler --version
```

Jika belum ada:

```bash
npm install -g wrangler
```

Atau gunakan:

```bash
npx wrangler --version
```

---

### 16.5 Cloudflare belum login

Cek:

```bash
wrangler whoami
```

Login:

```bash
wrangler login
```

Jika memakai token:

```bash
export CLOUDFLARE_API_TOKEN="<TOKEN>"
```

Windows PowerShell:

```powershell
$env:CLOUDFLARE_API_TOKEN="<TOKEN>"
```

Jangan commit token ke repository.

---

## 17. WSL2 Recommendation

Untuk project Node.js, Vite, dan Cloudflare, WSL2 sering lebih stabil dibanding Windows native.

Rekomendasi:

```bash
mkdir -p ~/projects
cd ~/projects
git clone <REPOSITORY_URL>
cd <PROJECT_NAME>
npm install
npm run build
```

Jalankan Codex di WSL2:

```bash
codex --sandbox danger-full-access
```

Resume session:

```bash
codex resume --sandbox danger-full-access --ask-for-approval on-request <SESSION_ID>
```

Sebaiknya simpan project di filesystem Linux:

```txt
~/projects/<PROJECT_NAME>
```

Bukan di path mount Windows seperti:

```txt
/mnt/c/...
/mnt/d/...
```

Hal ini dapat mengurangi masalah permission, filesystem latency, dan error child process.

---

## 18. Safety Checklist

Sebelum memakai `danger-full-access`, cek:

- repository benar-benar dipercaya
- tidak ada dependency mencurigakan
- tidak ada script postinstall mencurigakan
- `.env` tidak berisi token production yang tidak perlu
- perubahan penting sudah dibackup
- `git status` sudah dicek
- `git diff` sudah dicek
- command yang akan dijalankan sudah dipahami
- deploy production hanya dilakukan saat siap

Command dasar:

```bash
git status
git diff
```

---

## 19. Command Cheat Sheet

Start Codex:

```bash
codex
```

Start dengan full access:

```bash
codex --sandbox danger-full-access
```

Start dengan full access dan approval:

```bash
codex --sandbox danger-full-access --ask-for-approval on-request
```

Resume session:

```bash
codex resume <SESSION_ID>
```

Resume session dengan full access:

```bash
codex resume --sandbox danger-full-access <SESSION_ID>
```

Resume session dengan full access dan approval:

```bash
codex resume --sandbox danger-full-access --ask-for-approval on-request <SESSION_ID>
```

Resume semua session:

```bash
codex resume --all
```

Bypass total:

```bash
codex resume --dangerously-bypass-approvals-and-sandbox <SESSION_ID>
```

Full auto:

```bash
codex --full-auto
```

One-shot command:

```bash
codex exec "Review project ini dan buat ringkasan masalahnya"
```

One-shot dengan full auto:

```bash
codex exec --full-auto "Fix lint error dan jelaskan perubahan"
```

One-shot dengan full access:

```bash
codex exec --sandbox danger-full-access "Run npm install, npm run build, dan laporkan hasilnya"
```

Output JSON:

```bash
codex exec --json "Summarize repo structure"
```

---

## 20. Recommended Defaults

Untuk project trusted yang butuh build/deploy:

```bash
codex resume --sandbox danger-full-access --ask-for-approval on-request <SESSION_ID>
```

Untuk project baru:

```bash
codex --sandbox danger-full-access --ask-for-approval on-request
```

Untuk review aman tanpa edit:

```bash
codex --sandbox read-only
```

Untuk edit ringan tanpa deploy:

```bash
codex --sandbox workspace-write
```

Untuk environment disposable atau VM khusus:

```bash
codex resume --dangerously-bypass-approvals-and-sandbox <SESSION_ID>
```

---

## 21. Production Deploy Checklist

Sebelum deploy production:

```bash
git status
git diff
npm install
npm run build
```

Jika build sukses:

```bash
wrangler deploy
```

atau:

```bash
wrangler pages deploy <OUTPUT_DIR> --project-name <PROJECT_NAME>
```

Setelah deploy:

```bash
wrangler deployments list
wrangler tail
```

Checklist setelah deploy:

- endpoint bisa dibuka
- tidak ada error runtime
- environment variable sudah benar
- binding database/KV/R2 sudah benar
- CORS sudah benar
- route Cloudflare sudah benar
- secret tidak bocor di log
- fitur utama sudah smoke test

---

## 22. Kesimpulan

Gunakan mode ini sebagai default untuk project trusted:

```bash
codex resume --sandbox danger-full-access --ask-for-approval on-request <SESSION_ID>
```

Gunakan mode bypass total hanya jika environment benar-benar aman:

```bash
codex resume --dangerously-bypass-approvals-and-sandbox <SESSION_ID>
```

Untuk Windows, pastikan config minimal:

```toml
[windows]
sandbox = "elevated"
sandbox_private_desktop = false
```

Jika sering muncul masalah seperti `spawn EPERM`, coba jalankan Codex dari terminal Administrator, resume ulang dengan `danger-full-access`, atau pindahkan workflow ke WSL2.