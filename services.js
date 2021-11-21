function main() {
  const headerEl = document.querySelector(".header-content");
  headerContent(headerEl);

  const foooterEl = document.querySelector(".footer-content");
  footerContent(foooterEl);

  getServices().then((res) => {
    for (const w of res) {
      addServicesHtml(w);
    }
  });
}
main();

function addServicesHtml(params = {}) {
  const template = document.querySelector("#services-temple");
  const container = document.querySelector(".services__card-container");

  template.content.querySelector(".services__card-title").textContent =
    params.titulo;
  template.content.querySelector(".services__card-description").textContent =
    params.parrafo;
  const imgCard = template.content.querySelector(".services__card-img");
  imgCard.src = "http:" + params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
