new Docute({
    target: "#docs",
    highlight: ["typescript", "jsx", "html", "javascript", "sass"],
    logo: `<div class="logo-icon"><img src="images/icon.png" />FullStacked</div>`,
    editLinkBase: "https://github.com/fullstackedorg/editor-docs/blob/main",
    footer: `<div><small>
  © 2024 Developed by <a href="https://cplepage.com">cplepage</a>. 
  Released under GPL-3.0 license. 
  <a href="/#/privacy-policy">Privacy Policy</a>
  </small></div>`,
    nav: [
        {
            title: "Feedback",
            link: "https://tally.so/r/mO5jp7"
        },
        {
            title: "Roadmap",
            link: "https://fullstacked.notion.site/FullStacked-Roadmap-ebfcb685b77446c7a7898c05b219215e"
        },
        {
            title: "Download",
            link: "https://github.com/fullstackedorg/editor/releases"
        },
        {
            title: "GitHub",
            link: "https://github.com/fullstackedorg/editor"
        }
    ],
    cssVariables: {
        accentColor: "#00b0df",
        pageBackground: "#1e2e42",
        headerBackground: "var(--page-background)",
        headerTextColor: "var(--text-color)",
        textColor: "#fafbfb",
        linkColor: "var(--accent-color)",
        sidebarWidth: "280px",
        sidebarBackground: "var(--page-background)",
        sidebarLinkColor: "var(--text-color)",
        sidebarLinkActiveColor: "var(--text-color)",
        sidebarLinkArrowColor: "#999",
        mainBackground: "var(--page-background)",
        borderColor: "#fafbfb30",
        headerHeight: "55px",
        codeFont:
            "SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace",
        tipColor: "rgb(6, 125, 247)",
        successColor: "#42b983",
        warningColor: "#ff9800",
        dangerColor: "rgb(255, 0, 31)",
        navLinkColor: "var(--text-color)",
        navLinkBorderColor: "var(--accent-color)",
        codeBlockBackground: "#011627",
        codeBlockTextColor: "white",
        codeBlockShadowColor: "#333",
        codeBlockShadowWidth: "0px",
        highlightedLineBackground: "#022a4b",
        highlightedLineBorderColor: "#ffa7c4",
        inlineCodeColor: "#e6e6e6",
        inlineCodeBackground: "#373c49",
        loaderPrimaryColor: "hsla(0, 0%, 100%, 0.08)",
        loaderSecondaryColor: "hsla(0, 0%, 100%, 0.18)",
        tableHeaderBackground: "var(--border-color)",
        tableHeaderColor: "#868686",
        docuteSelectHeight: "38px",
        searchIconColor: "#999",
        searchFocusBorderColor: "#999",
        searchFocusIconColor: "#ccc",
        searchResultHoverBackground: "#1e2025",
        contentLinkBorder: "2px solid hsla(0, 0%, 100%, 0.28)",
        contentLinkHoverBorderColor: "currentColor",
        searchResultBackground: "#27292f"
    },
    sidebar: [
        {
            title: "FullStacked Editor",
            children: [
                {
                    title: "Introduction",
                    link: "/"
                },
                {
                    title: "Installation",
                    link: "/installation"
                },
                {
                    title: "Getting Started",
                    link: "/getting-started"
                },
                {
                    title: "Compared to Other Tools",
                    link: "/fullstacked-vs"
                }
            ]
        },
        {
            title: "Guides",
            children: [
                {
                    title: "Files Structure",
                    link: "/guides/files"
                },
                {
                    title: "Using Sass/SCSS",
                    link: "/guides/sass"
                },
                {
                    title: "Using TypeScript",
                    link: "/guides/typescript"
                },
                {
                    title: "Using the rpc Object",
                    link: "/guides/rpc"
                },
                {
                    title: "Using npm Packages",
                    link: "/guides/packages"
                },
                {
                    title: "Using git",
                    link: "/guides/git"
                },
                {
                    title: "Peer-to-Peer Connectivity",
                    link: "/guides/p2p-connectivity"
                },
                {
                    title: "Open in FullStacked",
                    link: "/guides/open-in-fullstacked"
                },
                {
                    title: "Import/Export a Project",
                    link: "/guides/import-export"
                },
                {
                    title: "Debugging",
                    link: "/guides/debugging"
                }
            ]
        },
        {
            title: "References",
            children: [
                {
                    title: "File System (fs)",
                    link: "/references/fs"
                },
                {
                    title: "Fetch (fetch)",
                    link: "/references/fetch"
                },
                {
                    title: "Broadcast (broadcast)",
                    link: "/references/broadcast"
                }
            ]
        }
    ]
});
