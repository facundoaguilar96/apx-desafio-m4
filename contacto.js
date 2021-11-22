function contactContent(el) {
  const contactEl = document.createElement("div");
  contactEl.innerHTML = `<section class="contact">
  <div class="contact__content-title">
    <h2 class="contact__title">Escribime</h2>
  </div>
  <form class="contact__form">
    <label>
      <h3 class="contact__label">NOMBRE</h3>
      <input name="name" class="contact__input-nombre contact__input" type="text" />
    </label>
    <label>
      <h3 class="contact__label">EMAIL</h3>
      <input name="email" class="contact__input-email contact__input" type="text" />
    </label>
    <label>
      <h3 class="contact__label">mensaje</h3>
      <textarea name="message" class="contact__input-mensaje contact__input"></textarea>
    </label>
    <div class="contact__submit-cont">
      <button class="contact__button">Enviar</button>
    </div>
  </form>
</section>`;

  function formData() {
    const formEl = document.querySelector(".contact__form");
    formEl.addEventListener("submit", function (e) {
      e.preventDefault();
      let formData = new FormData(e.target);
      const obj = Object.fromEntries(formData);
      console.log(obj);
      const mensaje = ` user:  ${obj.name} 
    email:  ${obj.email}       
    mensaje: ${obj.message} `;

      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },

        body: JSON.stringify({
          to: "facundoaguilar96@gmail.com",
          message: mensaje,
        }),
      }).then(() => {
        console.log(mensaje);
        alert(
          "Mensaje envia correctamente, te respondere a la brevedad " + obj.name
        );
      });
    });
  }

  el.appendChild(contactEl);
  formData();
}
