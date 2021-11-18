function main() {
  const backgroundClearEl = document.querySelector(".contact-content");
  console.log(backgroundClearEl);
  const clear = document.querySelector(".contact");
  console.log(clear);
  clear.style.removeProperty("background-color");
}
main();
