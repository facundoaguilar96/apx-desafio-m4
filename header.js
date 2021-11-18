function openWindow() {}

function headerContent(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `<div class="header">
  <a href="./index.html"><img src="./logo-1.png" alt="" class="header__imagen-logo" /></a>
  <div class="header__rectagulos-conteiner open-window">
    <div class="header__rectangulo"></div>
    <div class="header__rectangulo"></div>
    <div class="header__rectangulo"></div>
  </div>
  <div class="header__menu-desktop-container">
    <a href="./index.html" class="header__portfolio-link">Portfolio</a>
    <a href="./index.html" class="header__servicios-link">Servicios</a>
    <a href="./contacto.html" class="header__contacto-link">Contacto</a>
  </div>
</div>
<div class="ventana">
  <div class="ventana__contenedor-boton">
    <div class="ventana__cierra-container">
      <button class="ventana__cierra-ventan">X</button>
    </div>
  </div>
  <div class="ventana__contenido">
    <div class="ventana__menu-container">
      <a href="./index.html" class="header__portfolio-link ventana__menu"
        >Portfolio</a
      >
      <a href="./index.html" class="header__servicios-link ventana__menu"
        >Servicios</a
      >
      <a href="./contacto.html" class="header__contacto-link ventana__menu"
        >Contacto</a
      >
    </div>
  </div>
</div>`;
  const botonAbreVentanaEl = headerEl.querySelector(".open-window");
  const botonCerrarVentanaEl = headerEl.querySelector(
    ".ventana__cierra-ventan"
  );
  const ventanaEl = headerEl.querySelector(".ventana");

  botonAbreVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });
  botonCerrarVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });

  el.appendChild(headerEl);
}
