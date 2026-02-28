// State aplikasi
const state = {
  route: "Beranda",

  anggota: [
    { nama: "Nizar", jabatan: "Ketua" },
    { nama: "Abdurrohman", jabatan: "Wakil Ketua" },
    { nama: "Turfa", jabatan: "Bendahara 1" },
    { nama: "Habibie", jabatan: "Bendahara 2" },
    { nama: "Ara", jabatan: "Sekretaris 1" },
    { nama: "Lita", jabatan: "Sekretaris 2" },
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
    { nama: "Majelis anak muda", tanggal: "-", lokasi: "Gang 20" }
  ],

  transfers: [
    { nama: "Menara 2026", tanggal: "14 & 15 Maret 2026" }
  ],

  news: [
    {
      judul: `
Kalian ingin membuat puasa kalian jadi makin seru? yuk daftar MENARA 2026!!!

Akan ada banyak keseruan di acara ini, dan banyak sekali pembelajaran yang akan di dapat pada acara ini.

Acara ini akan diadakan Pada Tanggal 14 & 15 Maret 2026

Link Pendaftaran:
<br><br>

<a href="https://docs.google.com/forms/d/e/1FAIpQLSemz5kYoyXBrMw2u-G5mScU0dzNBxmJtupdLTmOJjw6gaw4PA/viewform" target="_blank">
👉 Klik disini untuk daftar
</a>
`
    }
  ]
};


// Ganti halaman
function setRoute(route) {
  state.route = route;
  render();
}


// Render halaman
function render() {

  const app = document.getElementById("app");

  if (state.route === "Beranda") {

    app.innerHTML = `
      <div class="card beranda">

        <h1>Remaja Islam Masjid Jami Ittihaadul Ikhwan</h1>

        <p>
        RISMI adalah wadah untuk remaja Islam di Masjid Jami Ittihaadul Ikhwan.
        </p>

        <h2>Visi</h2>

        <ul>

          <li>Mewujudkan generasi remaja masjid yang berakhlak mulia</li>

          <li>Membangun kesadaran beragama melalui huruf dasar hijaiyah</li>

          <li>Membangun generasi muda yang unggul melalui ajaran agama</li>

          <li>Menjadi wadah pembinaan remaja masjid</li>

        </ul>


        <h2>Misi</h2>

        <ul>

          <li>Mendorong pengembangan potensi diri remaja</li>

          <li>Meningkatkan keimanan dan ketaqwaan remaja</li>

          <li>Menyediakan wadah belajar ilmu agama</li>

          <li>Menyediakan wadah meningkatkan keahlian</li>

          <li>Mengikutsertakan masyarakat sekitar</li>

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

                <td>${a.lokasi}</td>

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

          ${state.news.map(n => `

            <li style="white-space: pre-line;">
              ${n.judul}
            </li>

          `).join("")}

        </ul>

      </div>

    `;
  }

}


// Load awal
window.onload = () => {
  render();
};
