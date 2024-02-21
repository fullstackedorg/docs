new Docute({
  target: '#docs',
  highlight: ['typescript', 'html'],
  logo: `<div class="logo-icon"><img src="images/icon.png" />FullStacked</div>`,
  editLinkBase: "https://github.com/fullstackedorg/editor-docs/blob/main/docs",
  nav: [ 
    {
      title: 'Feedback',
      link: 'https://tally.so/r/mO5jp7'
    },
    {
      title: 'Roadmap',
      link: 'https://fullstacked.notion.site/FullStacked-Roadmap-ebfcb685b77446c7a7898c05b219215e'
    },
    {
      title: 'Download',
      link: 'https://github.com/fullstackedorg/editor/releases'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/fullstackedorg/editor'
    }
  ],
  cssVariables: {
    accentColor:  "#00b0df",
    pageBackground:  "#1e293b",
    headerBackground:  "var(--page-background)",
    headerTextColor:  "var(--text-color)",
    textColor:  "#fafbfb",
    linkColor:  "var(--accent-color)",
    sidebarWidth: "280px",
    sidebarBackground:  "var(--page-background)",
    sidebarLinkColor:  "var(--text-color)",
    sidebarLinkActiveColor:  "var(--text-color)",
    sidebarLinkArrowColor:  "#999",
    mainBackground:  "var(--page-background)",
    borderColor:  "#fafbfb30",
    headerHeight: "55px",
    codeFont: "SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace",
    tipColor:  "rgb(6, 125, 247)",
    successColor:  "#42b983",
    warningColor:  "#ff9800",
    dangerColor:  "rgb(255, 0, 31)",
    navLinkColor:  "var(--text-color)",
    navLinkBorderColor:  "var(--accent-color)",
    codeBlockBackground:  "#011627",
    codeBlockTextColor:  "white",
    codeBlockShadowColor:  "#333",
    codeBlockShadowWidth: "0px",
    highlightedLineBackground:  "#022a4b",
    highlightedLineBorderColor:  "#ffa7c4",
    inlineCodeColor:  "#e6e6e6",
    inlineCodeBackground:  "#373c49",
    loaderPrimaryColor:  "hsla(0, 0%, 100%, 0.08)",
    loaderSecondaryColor:  "hsla(0, 0%, 100%, 0.18)",
    tableHeaderBackground:  "var(--border-color)",
    tableHeaderColor:  "#868686",
    docuteSelectHeight: "38px",
    searchIconColor:  "#999",
    searchFocusBorderColor:  "#999",
    searchFocusIconColor:  "#ccc",
    searchResultHoverBackground:  "#1e2025",
    contentLinkBorder: "2px solid hsla(0, 0%, 100%, 0.28)",
    contentLinkHoverBorderColor:  "currentColor",
    searchResultBackground:  "#27292f"
  },
  sidebar: [
    {
      title: "Documentation",
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
          title: "Guides",
          link: "/guides"
        },
        {
          title: "References",
          link: "/references"
        }
      ]
    }
  ]
})
