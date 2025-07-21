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
  closeBtn.className = "close"; // Tambahkan class agar cocok dengan CSS
  modal.appendChild(closeBtn);

  const img = document.createElement("img");
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    display: block;
  `;

  modal.appendChild(img);
  document.body.appendChild(modal);

  document.querySelectorAll(".grid img").forEach(image => {
    image.addEventListener("click", () => {
      img.src = image.dataset.full;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
