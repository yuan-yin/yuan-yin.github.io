// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Open-source implementations associated with my publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-talks",
              title: "Talks",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/talks/";
              },
            },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-blog",
              title: "Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "teachings-introduction-to-algorithmics-algorithmique-i-1",
            title: 'Introduction to Algorithmics (Algorithmique I) (2021)',
            description: "Tutorial instruction for 2nd-year / L2 undergraduate students introducing algorithmic foundations.",
            section: "Teachings",
            handler: () => {
              window.location.href = "/teachings/introduction-algorithmics-2021/";
            },
          },{id: "teachings-introduction-to-algorithmics-algorithmique-i-2",
            title: 'Introduction to Algorithmics (Algorithmique I) (2022)',
            description: "Tutorial instruction for 2nd-year / L2 undergraduate students introducing algorithmic foundations.",
            section: "Teachings",
            handler: () => {
              window.location.href = "/teachings/introduction-algorithmics-2022/";
            },
          },{id: "teachings-introduction-to-c-programming-éléments-de-programmation-2-3",
            title: 'Introduction to C Programming (Éléments de programmation 2) (2021)',
            description: "Practical work sessions for 1st-year / L1 undergraduate students introducing C programming.",
            section: "Teachings",
            handler: () => {
              window.location.href = "/teachings/introduction-c-programming-2021/";
            },
          },{id: "teachings-introduction-to-c-programming-éléments-de-programmation-2-4",
            title: 'Introduction to C Programming (Éléments de programmation 2) (2022)',
            description: "Practical work sessions for 1st-year / L1 undergraduate students introducing C programming.",
            section: "Teachings",
            handler: () => {
              window.location.href = "/teachings/introduction-c-programming-2022/";
            },
          },{id: "teachings-research-in-data-science-and-methodology-5",
            title: 'Research in Data Science and Methodology (2021)',
            description: "Tutorial instruction for 2nd-year / M2 DAC graduate students, centered on research methodology and a final research proposal project.",
            section: "Teachings",
            handler: () => {
              window.location.href = "/teachings/research-data-science-methodology-2021/";
            },
          },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:" + [121, 117, 97, 110, 46, 121, 105, 110].map((c) => String.fromCharCode(c)).join("") + "@" + [118, 97, 108, 101, 111, 46, 99, 111, 109].map((c) => String.fromCharCode(c)).join(""), "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/yuanyinnn.bsky.social", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuan-yin-nn", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yuanyinnn", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yuan-yin", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1515-0696", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ynep174AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
