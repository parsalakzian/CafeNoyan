const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

if (menuButton && navigation) {
  const menuLabel = menuButton.querySelector(".sr-only");

  const setMenuState = (isExpanded) => {
    menuButton.setAttribute("aria-expanded", String(isExpanded));
    navigation.classList.toggle("is-open", isExpanded);
    if (menuLabel) {
      menuLabel.textContent = isExpanded ? "بستن منو" : "باز کردن منو";
    }
  };

  const closeMenu = () => {
    setMenuState(false);
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 641px)").matches) {
      closeMenu();
    }
  });
}

const year = document.querySelector("#current-year");
if (year) {
  year.textContent = new Intl.NumberFormat("fa-IR").format(new Date().getFullYear());
}
