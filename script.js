document.addEventListener("DOMContentLoaded", () => {
  const modal = document.createElement("div");
  modal.id = "img-modal";
  modal.style.cssText = `
    position: fixed;
    display: none;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.7);
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 999;
  `;

  const closeBtn = document.createElement("div");
  closeBtn.textContent = "×";
  closeBtn.style.cssText = `
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    font-size: 16px;
    background: #fff;
    color: #000;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    border-radius: 2px;
    z-index: 1001;
  `;

  const img = document.createElement("img");
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    display: block;
  `;

  modal.appendChild(closeBtn);
  modal.appendChild(img);
  document.body.appendChild(modal);

  document.querySelectorAll(".grid img").forEach(image => {
    image.addEventListener("click", () => {
      img.src = image.dataset.full;  // ambil gambar besar dari atribut data
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

// Navigasi galeri dan jurnal
document.getElementById("galeriLink").addEventListener("click", () => {
  showGaleri();
  setActive("galeriLink");
});

document.getElementById("jurnalLink").addEventListener("click", () => {
  showJurnal();
  setActive("jurnalLink");
});

function setActive(id) {
  document.querySelectorAll("nav a").forEach(el => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
