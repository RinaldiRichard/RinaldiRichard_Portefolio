const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");
console.log(window.scrollY);
const toggleNav = () => {
  hamburgerToggler.classList.toggle("open");

  const ariaToggle =
    hamburgerToggler.getAttribute("aria-expanded") === "true"
      ? "false"
      : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle);

  navLinksContainer.classList.toggle("open");
};
hamburgerToggler.addEventListener("click", toggleNav);

new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 900) {
    navLinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);

const btn = document.querySelector(".btnArrow");

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.onscroll = () => {
  if (window.scrollY > 400) {
    document.querySelector(".btnArrow").style.opacity = "1";
  } else {
    document.querySelector(".btnArrow").style.opacity = "0";
  }
};
