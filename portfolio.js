function main() {
  const headerEl = document.querySelector(".header-content");
  headerContent(headerEl);

  const foooterEl = document.querySelector(".footer-content");
  footerContent(foooterEl);

  getPortfolio().then((res) => {
    for (const w of res) {
      addPortfolio(w);
    }
  });
}
main();
