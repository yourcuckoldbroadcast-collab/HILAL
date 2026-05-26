# HILAL — Almanak Ibadah

Almanak Islam yang menyorot **momentum ibadah terdekat** berdasarkan kalender Hijriah — puasa sunnah (Senin–Kamis), Ayyamul Bidh, awal bulan, hari besar, dan suasana spiritual bulan berjalan. Dibuka berkala, bukan aplikasi alarm. Berjalan **penuh offline** setelah load pertama, **tanpa server**, dan datanya tersimpan hanya di perangkatmu.

## Isi paket

| File | Fungsi |
|------|--------|
| `index.html` | Seluruh aplikasi (HTML + CSS + JavaScript jadi satu file) |
| `manifest.webmanifest` | Identitas PWA agar bisa dipasang ke layar utama |
| `sw.js` | Service worker — membuat app jalan offline |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Ikon aplikasi |
| `apple-touch-icon.png`, `favicon-64.png` | Ikon untuk iOS & tab browser |

> Semua file harus berada di **folder yang sama** (root) agar PWA bekerja.

## Cara mengunggah ke GitHub Pages

1. Buat repository baru di GitHub (mis. `hilal`).
2. Unggah **semua file** di paket ini ke root repository (tarik-lepas lewat tombol **Add file → Upload files**, lalu **Commit**).
3. Buka **Settings → Pages**.
4. Bagian **Build and deployment → Source**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu **Save**.
6. Tunggu sebentar; GitHub akan memberi alamat seperti `https://username.github.io/hilal/`.
7. Buka alamat itu di HP. Di Chrome/Android akan muncul tawaran **"Tambahkan ke Layar Utama"** — atau lewat menu **Atur → Pasang** di dalam app.

GitHub Pages otomatis memakai HTTPS, sehingga service worker, install PWA, dan penyimpanan permanen aktif. Setelah dibuka sekali, app bisa dipakai tanpa internet.

## Cara kerja akurasi tanggal

- Tanggal Hijriah dihitung dengan kalender **Umm al-Qura** langsung di perangkat (tanpa internet). Untuk event rutin (Senin–Kamis, Ayyamul Bidh, awal bulan) hasilnya akurat.
- **Awal Ramadhan, Idul Fitri, dan Idul Adha** ditetapkan otoritas (di Indonesia: sidang isbat) dan bisa berbeda ±1 hari dari perhitungan. Karena itu kendalinya ada di tangan pengguna:
  - **Atur → Geser hari** menyamakan seluruh tanggal harian bila berbeda dengan tempatmu.
  - **Atur → Tanggal penetapan** untuk mengunci tanggal resmi begitu diumumkan. Saat dikunci, seluruh momentum di bulan itu ikut menyesuaikan (mis. mengunci 1 Ramadhan otomatis menggeser Nuzulul Qur'an).
  - Sekitar seminggu sebelum tiap penetapan, app menampilkan pengingat konfirmasi di Beranda. Bila diabaikan, app tetap memakai perkiraan yang masuk akal.
- Pendekatan ini membuat app **tidak terikat satu negara** — saat bepergian ke luar negeri, cukup masukkan tanggal resmi tempatmu berada.

## Catatan pribadi

Tambahkan pengingatmu sendiri lewat tab **Catatan** — sekali (mis. ceramah tamu) atau berulang (pengajian pekanan/bulanan). Data ini terpisah dan tidak pernah diubah oleh perhitungan sistem.

## Privasi

Tidak ada server, tidak ada pelacakan, tidak ada pengumpulan data. Semua tersimpan di `localStorage` perangkatmu. Mengaktifkan **Simpan data permanen** di Atur mencegah browser menghapusnya saat penyimpanan penuh.

---

*Tanggal hari besar bersifat perkiraan hingga dikonfirmasi melalui penetapan resmi. Gunakan fitur kunci tanggal untuk menyesuaikan dengan keputusan otoritas yang kamu ikuti.*
