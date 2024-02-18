const burger = document.getElementById("burger");
const header = document.getElementById("header");
const heroSection__container = document.getElementById(
  "hero-section__container",
);

burger.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  if (header.classList.contains("hero-section__header_open")) {
    header.className = "hero-section__header";
    heroSection__container.className = "hero-section__container";
    document.body.style.overflow = "auto";
  } else {
    header.className = "hero-section__header hero-section__header_open";
    heroSection__container.className =
      "hero-section__container  hero-section__header_open";
    document.body.style.overflow = "hidden";
  }
}
