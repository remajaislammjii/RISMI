const state = {

  route: "Beranda",

  anggota: [
    { nama: "Nizar", jabatan: "Ketua" },
    { nama: "Abdurrohman", jabatan: "Wakil Ketua" },
    { nama: "Turfa", jabatan: "Bendahara 1" },
    { nama: "Habibie", jabatan: "Bendahara 2" }
  ],

  berita: [
    {
      judul: `PENDAFTARAN ANGGOTA BARU RISMI

Silahkan daftar melalui link berikut:
https://docs.google.com/forms/`
    }
  ]

};

const params = new URLSearchParams(window.location.search);
const page = params.get("page");

if(page){
  state.route = page;
}

function setRoute(route){

  state.route = route;

  history.pushState(null,"","?page=" + route);

  render();
}

function render(){

  const app = document.getElementById("app");


  // ===== BERANDA =====

  if(state.route === "Beranda"){

    app.innerHTML = `

    <h2>Selamat Datang di RISMI</h2>

    <p>
    Website resmi Remaja Islam Masjid Jami' Istiqlal
    </p>

    `;

  }

  if(state.route === "Sejarah"){

    app.innerHTML = `

    <h2>Sejarah RISMI</h2>

    <p>

    RISMI adalah organisasi remaja masjid yang bergerak
    dalam bidang dakwah dan kegiatan sosial.

    </p>

    `;

  }

  if(state.route === "Alamat"){

    app.innerHTML = `

    <h2>Alamat</h2>

    <p>

    Masjid Jami' Istiqlal

    </p>

    `;

  }

  if(state.route === "Anggota"){

    app.innerHTML = `

    <h2>Daftar Anggota</h2>

    <ul>

    ${
      state.anggota.map(a=>`

      <li>
      ${a.nama} - ${a.jabatan}
      </li>

      `).join("")
    }

    </ul>

    `;

  }

  if(state.route === "Berita"){

    app.innerHTML = `

    <h2>Berita RISMI</h2>

    <ul>

    ${
      state.berita.map(n=>`

      <li style="white-space: pre-line;">
      ${n.judul}
      </li>

      `).join("")
    }

    </ul>

    `;

  }

}
window.onload = () => {

  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  if(page){
    state.route = page;
  }

  render();

};
