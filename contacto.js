function contactContent(el) {
  const contactEl = document.createElement("div");
  contactEl.innerHTML = `<section class="contact">
  <div class="contact__content-title">
    <h2 class="contact__title">Escribime</h2>
  </div>
  <form class="contact__form">
    <label>
      <h3 class="contact__label">NOMBRE</h3>
      <input class="contact__input-nombre contact__input" type="text" />
    </label>
    <label>
      <h3 class="contact__label">EMAIL</h3>
      <input class="contact__input-email contact__input" type="text" />
    </label>
    <label>
      <h3 class="contact__label">mensaje</h3>
      <textarea class="contact__input-mensaje contact__input"></textarea>
    </label>
    <div class="contact__submit-cont">
      <button class="contact__button">Enviar</button>
    </div>
  </form>
</section>`;
  el.appendChild(contactEl);
}
