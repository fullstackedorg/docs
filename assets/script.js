function toggleNav(forceClose = false) {
    const nav = document.querySelector("nav");
    if (forceClose || nav.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        nav.classList.remove("open");
        navOverlay.classList.remove("open");
    } else {
        mobileMenu.classList.add("open");
        nav.classList.add("open");
        navOverlay.classList.add("open");
    }
}

const mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.addEventListener("click", () => {
    toggleNav();
});

const navOverlay = document.querySelector(".nav-overlay");
navOverlay.addEventListener("click", () => {
    toggleNav(true);
});

const activeNavItem = document.querySelector("nav li.active");
if (activeNavItem) {
    const bb = activeNavItem.getBoundingClientRect();
    const isVisible =
        bb.top >= 0 &&
        bb.left >= 0 &&
        bb.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        bb.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (!isVisible) {
        activeNavItem.scrollIntoView();
    }
}
