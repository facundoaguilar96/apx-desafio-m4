function main() {
  const headerEl = document.querySelector(".header-content");
  headerContent(headerEl);

  const contactEl = document.querySelector(".contact-content");
  contactContent(contactEl);

  const foooterEl = document.querySelector(".footer-content");
  footerContent(foooterEl);

  getWelcome().then((res) => {
    for (const w of res) {
      addWelcome(w);
    }
  });
}
main();

function getWelcome() {
  return fetch(
    "https://cdn.contentful.com/spaces/rhy3jleltni7/environments/master/entries?access_token=TfacPggm74tl4R5llYcG6dbs-HFB-lbyKEWZWjR0LwQ&content_type=presentacion"
  )
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      console.log(resp);

      const presentacion = resp.items.map((item) => {
        return {
          titulo: item.fields.titulo,
          subtitulo: item.fields.subtitulo,
        };
      });
      return presentacion;
    });
}

function addWelcome(params = {}) {
  const template = document.querySelector("#bienvenida-template");
  const container = document.querySelector(".presentacion");

  template.content.querySelector(".presentacion__saludo-title").textContent =
    params.titulo;
  template.content.querySelector(
    ".presentacion__saludo-sub-title"
  ).textContent = params.subtitulo;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
