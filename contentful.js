function getWelcome() {
  return fetch(
    "https://cdn.contentful.com/spaces/rhy3jleltni7/environments/master/entries?access_token=TfacPggm74tl4R5llYcG6dbs-HFB-lbyKEWZWjR0LwQ&content_type=presentacion"
  )
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
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
  const container = document.querySelector(".bienvenida-content");

  template.content.querySelector(".bienvenida__saludo-title").textContent =
    params.titulo;
  template.content.querySelector(".bienvenida__saludo-sub-title").textContent =
    params.subtitulo;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function buscarImagen(id, datos) {
  const imagen = datos.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return imagen;
}

//

function getPresentation() {
  return fetch(
    "https://cdn.contentful.com/spaces/rhy3jleltni7/environments/master/entries?access_token=TfacPggm74tl4R5llYcG6dbs-HFB-lbyKEWZWjR0LwQ&content_type=presentation"
  )
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      const presentation = resp.items.map((item) => {
        const idImagen = item.fields.img.sys.id;
        const imagen = buscarImagen(idImagen, resp);
        linkImg = imagen.fields.file.url;
        return {
          titulo: item.fields.tituloH2,
          parrafo: item.fields.parrafo,
          url: linkImg,
        };
      });

      return presentation;
    });
}

function addPresentation(params = {}) {
  const template = document.querySelector("#presentacion-temple");
  const container = document.querySelector(".presentacion");

  template.content.querySelector(".presentacion__about-me-h2").textContent =
    params.titulo;
  template.content.querySelector(
    ".presentacion__about-me-description"
  ).textContent = params.parrafo;
  const imgCard = template.content.querySelector(".presentacion__img-me");
  imgCard.src = "http:" + params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

//

function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/rhy3jleltni7/environments/master/entries?access_token=TfacPggm74tl4R5llYcG6dbs-HFB-lbyKEWZWjR0LwQ&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      const presentation = resp.items.map((item) => {
        const idImagen = item.fields.imagen.sys.id;
        const imagen = buscarImagen(idImagen, resp);
        linkImg = imagen.fields.file.url;
        return {
          titulo: item.fields.tituloH2,
          parrafo: item.fields.parrafo,
          url: linkImg,
        };
      });

      return presentation;
    });
}

function addServices(params = {}) {
  const template = document.querySelector("#services-template");
  const container = document.querySelector(".services");

  template.content.querySelector(".services__card-h3").textContent =
    params.titulo;
  template.content.querySelector(".services__card-p").textContent =
    params.parrafo;
  const imgCard = template.content.querySelector(".services__card-img");
  imgCard.src = "http:" + params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

//

function getPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/rhy3jleltni7/environments/master/entries?access_token=TfacPggm74tl4R5llYcG6dbs-HFB-lbyKEWZWjR0LwQ&content_type=portfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      const portfolio = resp.items.map((item) => {
        const idImagen = item.fields.imagen.sys.id;
        const imagen = buscarImagen(idImagen, resp);
        linkImg = imagen.fields.file.url;
        return {
          titulo: item.fields.titulo,
          parrafo: item.fields.parrafo,
          url: linkImg,
          link: item.fields.link,
        };
      });

      return portfolio;
    });
}
getPortfolio();

function addPortfolio(params = {}) {
  const template = document.querySelector("#portfolio-temple");

  const container = document.querySelector(".portfolio__card-container");

  template.content.querySelector(".portfolio__card-title").textContent =
    params.titulo;
  template.content.querySelector(".portfolio__card-description").textContent =
    params.parrafo;
  const imgCard = template.content.querySelector(".portfolio__card-img");
  imgCard.src = "http:" + params.url;
  template.content.querySelector(".portfolio__card-link").href = params.link;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
