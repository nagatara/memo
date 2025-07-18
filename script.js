// Modal logic for image preview
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

  const img = document.createElement("img");
  img.style.cssText = `
    width: 300px;
    height: 300px;
    object-fit: cover;
    box-shadow: none;
    border-radius: 0;
    background: none;
    border: none;
  `;

  modal.appendChild(img);
  document.body.appendChild(modal);

  document.querySelectorAll(".grid img").forEach(image => {
    image.addEventListener("click", () => {
      img.src = image.src;
      modal.style.display = "flex";
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Navigasi menu aktif
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
});
