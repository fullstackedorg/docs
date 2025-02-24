function toggleNav(forceClose = false){
    const nav = document.querySelector("nav");
    if(forceClose || nav.classList.contains("open")){
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
    toggleNav()
});


const navOverlay = document.querySelector(".nav-overlay");
navOverlay.addEventListener("click", () => {
    toggleNav(true)
})