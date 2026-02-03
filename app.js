// State aplikasi
const state = {
  route: "Beranda",
  anggota: [
    { nama: "Nizar", jabatan: "Ketua" },
    { nama: "Abdurrohman", jabatan: "Wakil Ketua" },
    { nama: "Turfa", jabatan: "Bendahara 1" },
    { nama: "Habibie", jabatan: "Bendahara 2" },
    { nama: "Ara", jabatan: "Seketaris 1" },
    { nama: "Lita", jabatan: "Seketaris 2" },
    { nama: "Rehan", jabatan: "Humas 1" },
    { nama: "Sobri", jabatan: "Humas 2" },
    { nama: "Ferdi", jabatan: "Bidang olahraga 1" },
    { nama: "Fahri", jabatan: "Bidang olahraga 2 + Teknisi" },
    { nama: "Hasbi", jabatan: "Media 1" },
    { nama: "Alif", jabatan: "Media 2" },
    { nama: "Aulia", jabatan: "Media 3" },
    { nama: "Saqib", jabatan: "Pendidikan dan dakwah + Teknisi" },
    { nama: "Esta", jabatan: "Perlengkapan" },
    { nama: "Laila", jabatan: "Perlengkapan" },
    { nama: "Adnin", jabatan: "Perlengkapan" }
  ],
  fixtures: [
    { nama: "Majelis anak muda", tanggal: "-", Lokasi: "Gang 20" }
  ],
  transfers: [
    { nama: "Ramadhan Vibes", tanggal: "Bulan Ramadhan" }
  ],
  news: [
    { judul: "Rismi mau mengadakan lomba untuk bulan Ramadhan, kira kira lomba apa ya yang cocok?" }
  ]
};

function setRoute(route) {
  state.route = route;
  render();
}

function render() {
  const app = document.getElementById("app");

  if (state.route === "Beranda") {
    app.innerHTML = `
      <div class="card beranda">
        <h1>Remaja Islam Masjid Jami Ittihaadul Ikhwan</h1>
        <p>RISMI adalah wadah untuk remaja Islam di Masjid Jami Ittihaadul Ikhwan.</p>

        <h2>Visi</h2>
        <ul>
          <li>Mewujudkan generasi remaja masjid yang berakhlak mulia, berilmu, aktif, dan berkontribusi dalam membangun peradaban Islam di lingkungan masyarakat</li>
          <li>Membangun kesadaran beragama melalui huruf dasar hijaiyah</li>
          <li>Membangun generasi muda yang unggul melalui ajaran ilmu agama serta aktif dalam memakmurkan masjid</li>
          <li>Menjadi wadah pembinaan remaja masjid yang membentuk generasi muda Islam yang beriman, berakhlak mulia, cinta Al-Qur’an, cinta masjid, peduli terhadap umat, serta mampu berkontribusi positif bagi agama, bangsa, dan masyarakat</li>
        </ul>

        <h2>Misi</h2>
        <ul>
          <li>Mendorong pengembangan potensi diri remaja dalam bidang keagamaan, seni, olahraga, dan kepemimpinan</li>
          <li>Meningkatkan keimanan dan ketaqwaan remaja melalui kegiatan keagamaan yang rutin dan kreatif</li>
          <li>Menyediakan wadah untuk anak muda terutama remaja untuk belajar ilmu agama</li>
          <li>Menyediakan wadah untuk anak muda terutama remaja untuk meningkatkan keahliannya</li>
          <li>Mengikutsertakan masyarakat sekitar dalam program dan kegiatan yang dijalankan</li>
        </ul>
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

  else if (state.route === "Kegiatan yang sedang berjalan") {
    app.innerHTML = `
      <div class="card">
        <h2>Kegiatan yang Sedang Berjalan</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Kegiatan</th>
              <th>Tanggal</th>
              <th>Lokasi</th>
            </tr>
          </thead>
          <tbody>
            ${state.fixtures.map(a => `
              <tr>
                <td>${a.nama}</td>
                <td>${a.tanggal}</td>
                <td>${a.Lokasi}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  else if (state.route === "Kegiatan akan datang") {
    app.innerHTML = `
      <div class="card">
        <h2>Kegiatan Akan Datang</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Kegiatan</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            ${state.transfers.map(a => `
              <tr>
                <td>${a.nama}</td>
                <td>${a.tanggal}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  else if (state.route === "Berita") {
    app.innerHTML = `
      <div class="card">
        <h2>Berita Terbaru</h2>
        <ul class="news-list">
          ${state.news.map(n => `<li>${n.judul}</li>`).join("")}
        </ul>
      </div>
    `;
  }
}

window.onload = () => {
  render();
};
