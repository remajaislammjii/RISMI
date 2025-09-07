// State aplikasi
const state = {
  route: 'Beranda',
  anggota: [
    { nama: 'Nizar', jabatan: 'Ketua' },
    { nama: 'Abdurrohman', jabatan: 'Wakil Ketua' },
    { nama: 'Turfa', jabatan: 'Bendahara 1' },
    { nama: 'Habibie', jabatan: 'Bendahara 2' },
    { nama: 'Ara', jabatan: 'Seketaris 1' },
    { nama: 'Lita', jabatan: 'Seketaris 2' },
    { nama: 'Rehan', jabatan: 'Humas 1' },
    { nama: 'Sobri', jabatan: 'Humas 2' },
    { nama: 'Ferdi', jabatan: 'Bidang olahraga 1 + Teknisi' },
    { nama: 'Fahri', jabatan: 'Bidang olahraga 2' },
    { nama: 'Hasbi', jabatan: 'Media 1' },
    { nama: 'Alif', jabatan: 'Media 2' },
    { nama: 'Aulia', jabatan: 'Media 3' },
    { nama: 'Saqib', jabatan: 'Pendidikan dan dakwah + Teknisi' },
    { nama: 'Esta', jabatan: 'Perlengkapan' },
    { nama: 'Naswa', jabatan: 'Perlengkapan' },
    { nama: 'Adnin', jabatan: 'Perlengkapan' },
  ],
  fixtures: [
    { nama: 'belum ada', waktu: 'belum ada' },
  ],
  transfers: [
    { nama: 'Maulid dan sholat shubuh gabungan', waktu: '28 September 2025' },
    { nama: 'Isra miraj', waktu: 'Belum ada' }
  ],
  news: [
    { judul: 'belum ada', tanggal: 'belum ada' }
  ]
};

// Fungsi untuk set route dari tombol
function setRoute(route) {
  state.route = route;
  render();
}

// Fungsi render isi halaman
function render() {
  const app = document.getElementById("app");

  if (state.route === "Beranda") {
    app.innerHTML = `
      <div class="card">
        <h2>Selamat Datang</h2>
        <p>Website ini menampilkan daftar anggota Rismi, dan program kerja Rismi.</p>
      </div>
    `;
  }

else if (state.route === "Susunan anggota") {
  app.innerHTML = `
    <div class="card">
      <h2>Susunan Anggota</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Jabatan</th>
          </tr>
        </thead>
        <tbody>
          ${state.anggota.map(a => `
            <tr>
              <td>${a.nama}</td>
              <td>${a.jabatan}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

  else if (state.route === "Program yang sedang berjalan") {
    app.innerHTML = `
      <div class="card">
        <h2>Program yang Sedang Berjalan</h2>
        <ul>
          ${state.fixtures.map(f => `<li>${f.nama} – ${f.waktu}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  else if (state.route === "Program akan datang") {
    app.innerHTML = `
      <div class="card">
        <h2>Program Akan Datang</h2>
        <ul>
          ${state.transfers.map(t => `<li>${t.nama} – ${t.waktu}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  else if (state.route === "Berita") {
    app.innerHTML = `
      <div class="card">
        <h2>Berita Terbaru</h2>
        <ul>
          ${state.news.map(n => `<li>${n.judul} (${n.tanggal})</li>`).join("")}
        </ul>
      </div>
    `;
  }
}

// Render pertama kali
render();
