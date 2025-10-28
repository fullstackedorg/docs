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

let fuse = null;
fetch(window.contentSearchURL || "/search.json")
    .then((res) => res.json())
    .then((contentSearch) => {
        fuse = new Fuse(contentSearch, {
            keys: ["title", "contents"],
        });
    });

const searchInputContainer = document.querySelector("#search-input");
const searchInput = searchInputContainer.querySelector("input");
const searchInputResultsContainer =
    searchInputContainer.querySelector("#search-results");
const searchInputOnChange = (e) => {
    const value = searchInput.value;
    if (value) {
        searchInputClearButton.style.display = "inline-flex";
    } else {
        searchInputClearButton.style.display = "none";
    }

    setTimeout(() => {
        if (document.activeElement === searchInput) {
            if (value) {
                renderSearchResult(fuse.search(value), e.key);
            }
        } else {
            searchInputResultsContainer.classList.remove("show");
        }
    }, 100);
};
searchInput.onkeyup = searchInputOnChange;
searchInput.onchange = searchInputOnChange;
searchInput.onfocus = searchInputOnChange;
searchInput.onblur = searchInputOnChange;
const searchInputClearButton = searchInputContainer.querySelector("button");
searchInputClearButton.onclick = () => {
    searchInput.value = "";
    searchInputOnChange();
    searchInput.focus();
};

let searchInputResults = searchInputContainer.querySelector("ul");
function renderSearchResult(results, key) {
    const resultsList = document.createElement("ul");
    searchInputResultsContainer.classList.add("show");
    if (results.length) {
        resultsList.append(
            ...results.map(({ item: { title, contents, url } }) => {
                const item = document.createElement("li");
                const breadcrumbs = url.split("/").slice(1, -1).join(">");
                item.innerHTML = `<a href="${url}">
            <h4>${breadcrumbs ? breadcrumbs + " > " : ""}${title}</h4>
            <p>${contents}<p>
        </a>`;
                return item;
            }),
        );

        if (key === "Enter") {
            window.location.href = results.at(0).url;
        }
    } else {
        resultsList.innerHTML = `<b>No Results</b>`;
    }

    searchInputResults.replaceWith(resultsList);
    searchInputResults = resultsList;
}
