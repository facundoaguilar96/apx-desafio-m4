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
