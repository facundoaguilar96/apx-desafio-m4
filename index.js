function main() {
  const headerEl = document.querySelector(".header-content");
  headerContent(headerEl);

  const foooterEl = document.querySelector(".footer-content");
  footerContent(foooterEl);

  const contactEl = document.querySelector(".contact-content");
  contactContent(contactEl);

  getWelcome().then((res) => {
    for (const w of res) {
      addWelcome(w);
    }
  });

  getPresentation().then((res) => {
    for (const w of res) {
      addPresentation(w);
    }
  });

  getServices().then((res) => {
    for (const w of res) {
      addServices(w);
    }
  });
}
main();

function sendData(formEl, inputs) {
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const object = Object.fromEntries(formData.entries());

    const message = `
    Nombre del usuario: ${object.userName} <br> <br>
    Mail: ${object.userEmail} <br> <br>
    Mensaje: ${object.message}
    `;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",

      body: JSON.stringify({
        to: "aebmbu@gmail.com",

        message: message,
      }),
    })
      .then(() => {
        alert(
          "Mensaje enviado. Gracias, " + object.userName + " por cominucarte!"
        );

        inputs.forEach((input) => {
          input.value = "";
        });
      })
      .catch(() => {
        alert(
          "Error al enviar, revise haber completado los campos correctamente"
        );
      });
  });
}

function formComponent(el) {
  const formEl = document.createElement("div");

  formEl.innerHTML = `
  <div class="form__flex-split">
  <h3 class="form__title">Escribime</h3>
  <form class="form">
  <div class="fieldset">
  <label class="form__label" for="Nombre">NOMBRE</label>
  <input class="form__imput" type="text" id="Nombre" name="userName">
  <div class="fieldset">
  <label class="form__label" for="Email">EMAIL</label>
  <input class="form__imput" type="text" id="Email" name="userEmail"> 
  <div class="fieldset">
          <label class="form__label" for="Mensaje">MENSAJE</label>
          <textarea class="form__textarea" class="form__imput" id="Mensaje" name="message"></textarea>
          <button class="form__button">Enviar</button>
          </div>
          </div>   
          </div> 
  </form>`;

  const form = formEl.querySelector(".form");
  const inputs = formEl.querySelectorAll(".form__input");

  sendData(form, inputs);
  el.appendChild(formEl);
}
