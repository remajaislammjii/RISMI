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
    { nama: 'Ferdi', jabatan: 'Bidang olahraga 1' },
    { nama: 'Fahri', jabatan: 'Bidang olahraga 2 + Teknisi' },
    { nama: 'Adnin', jabatan: 'Bidang olahraga 3' },
    { nama: 'Hasbi', jabatan: 'Media 1' },
    { nama: 'Alif', jabatan: 'Media 2' },
    { nama: 'Aulia', jabatan: 'Media 3' },
    { nama: 'Saqib', jabatan: 'Pendidikan dan dakwah + Teknisi' },
    { nama: 'Esta', jabatan: 'Perlengkapan' },
    { nama: 'Laila', jabatan: 'Perlengkapan' },
    { nama: 'Adnin', jabatan: 'Perlengkapan' }
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
        <p>Kami hadir untuk masjid dan untuk masyarakat sekitar masjid jami ittihaadul ikhwan, dan kami memiliki visi dan misi diantaranya :</p>
        
       </p> Visi</p> 
    </p>1. Mewujudkan generasi remaja masjid yang berakhlak mulia, berilmu, aktif dan berkontribusi dalam membangun peradaban Islam di lingkungan masyarakat</p>
    </p>2. Membangun kesadaran beragama melalui huruf dasar hijaiyah</p>
    </p>3. Membangun generasi muda yang unggul melalui ajaran ilmu agama serta aktif dalam memakmuran masjid</p>
    </p>4. Menjadi wadah pembinaan remaja masjid yang membentuk generasi muda Islam yang beriman, berakhlak mulia, cinta Al-Qur’an, cinta masjid, peduli terhadap umat, serta mampu berkontribusi positif bagi agama, bangsa, dan masyarakat.</p>
        
        </p>Misi</p>
        </p>1. Mendorong pengembangan potensi diri remaja dalam bidang keagamaan, seni, olahraga, dan kepemimpinan</p>
        </p>2. Meningkatkan keimanan dan ketaqwaan remaja melalui kegiatan keagamaan yang rutin dan kreatif</p> 
        </p>3. Menyediakan wadah untuk anak muda terutama remaja untuk belajar ilmu agama</p>
        </p>4. Menyediakan wadah untuk anak muda terutama remaja untuk meningkatkan keahliannya</p>
        </p>5. Mengikut sertakan masyarakat sekitar dalam program dan kegiatan yang dijalankan</p>
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
