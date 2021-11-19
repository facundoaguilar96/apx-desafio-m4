function footerContent(el) {
  const footerEl = document.createElement("div");

  footerEl.innerHTML = `<footer class="footer">
  <div class="footer__logo-content">
    <a href="./index.html"><img src="./logo-1.png" alt="" /></a>
  </div>
  <div class="footer__redes-content">
    <a href="https://www.instagram.com/?hl=es" class="footer__redes-link">
      <div class="footer__redes-center">
        <h3 class="footer__redes-name">Instagram</h3>
        <img
          src="./img/instagram.png"
          alt=""
          class="footer__img-redes"
        /></div
    ></a>

    <a href="https://ar.linkedin.com/" class="footer__redes-link"
      ><div class="footer__redes-center">
        <h3 class="footer__redes-name">Linkedin</h3>
        <img
          src="./img/linkedin.png"
          alt=""
          class="footer__img-redes"
        /></div
    ></a>

    <a
      href="https://github.com/facundoaguilar96"
      class="footer__redes-link"
      ><div class="footer__redes-center">
        <h3 class="footer__redes-name">Github</h3>
        <img
          src="./img/github.png"
          alt=""
          class="footer__img-redes"
        /></div
    ></a>
  </div>
</footer>`;

  el.appendChild(footerEl);
}
