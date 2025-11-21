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
          description: "Publications by categories in reversed chronological order. *Equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "This is a list of repositories of open source implementation of my publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-repositories",
              title: "Repositories",
              description: "",
              section: "Dropdown",
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
            },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "news-i-started-my-intership-in-the-mlia-team-at-sorbonne-université",
          title: 'I started my intership in the MLIA team at Sorbonne Université.',
          description: "",
          section: "News",},{id: "news-our-work-unsupervised-inpainting-for-occluded-sea-surface-temperature-sequences-has-been-accepted-to-ci-2019",
          title: 'Our work, Unsupervised Inpainting for Occluded Sea Surface Temperature Sequences, has been accepted...',
          description: "",
          section: "News",},{id: "news-i-started-as-phd-student-in-the-mlia-team-at-sorbonne-université",
          title: 'I started as PhD Student in the MLIA team at Sorbonne Université.',
          description: "",
          section: "News",},{id: "news-i-presented-unsupervised-inpainting-for-occluded-sea-surface-temperature-sequences-at-ci-2019",
          title: 'I presented “Unsupervised Inpainting for Occluded Sea Surface Temperature Sequences” at CI 2019....',
          description: "",
          section: "News",},{id: "news-our-work-aphynity-has-been-accepted-at-iclr-2021-as-oral-presentation",
          title: 'Our work, APHYNITY, has been accepted at ICLR 2021 as Oral presentation.',
          description: "",
          section: "News",},{id: "news-the-short-version-of-leads-has-been-accepted-to-aaai-2021-mlps-spring-symposium",
          title: 'The short version of LEADS has been accepted to AAAI 2021 MLPS Spring...',
          description: "",
          section: "News",},{id: "news-i-presented-the-short-version-of-leads-at-aaai-2021-mlps-spring-symposium",
          title: 'I presented the short version of LEADS at AAAI 2021 MLPS Spring Symposium....',
          description: "",
          section: "News",},{id: "news-ibrahim-presented-aphynity-at-iclr-2021",
          title: 'Ibrahim presented APHYNITY at ICLR 2021.',
          description: "",
          section: "News",},{id: "news-our-work-leads-has-been-accepted-at-neurips-2021",
          title: 'Our work, LEADS, has been accepted at NeurIPS 2021.',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-leads-at-neurips-2021-and-neurips-paris-2021",
          title: 'I presented our work LEADS at NeurIPS 2021 and NeurIPS@Paris 2021.',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-my-work-on-hybrid-modeling-and-generalization-at-extrality-a-french-startup-working-on-machine-learning-accelerated-cfd-models",
          title: 'I gave a talk on my work on hybrid modeling and generalization at...',
          description: "",
          section: "News",},{id: "news-our-work-coda-has-been-accepted-at-icml-2022-as-spotlight-presentation",
          title: 'Our work, CoDA, has been accepted at ICML 2022 as Spotlight presentation.',
          description: "",
          section: "News",},{id: "news-matthieu-presented-our-work-coda-in-person-at-icml-2022-in-new-orleans",
          title: 'Matthieu presented our work CoDA in person at ICML 2022 in New Orleans....',
          description: "",
          section: "News",},{id: "news-i-presented-aphynity-at-the-joint-seminar-of-sorbonne-université-isae-and-cerfacs",
          title: 'I presented APHYNITY at the joint seminar of Sorbonne Université, ISAE, and Cerfacs....',
          description: "",
          section: "News",},{id: "news-jean-yves-and-i-gave-a-talk-on-dino-at-the-seminar-of-criteo-ai-lab",
          title: 'Jean-Yves and I gave a talk on DINo at the seminar of Criteo...',
          description: "",
          section: "News",},{id: "news-our-latest-work-dino-has-been-accepted-at-iclr-2023-as-a-spotlight-paper-officially-called-notable-top-25",
          title: 'Our latest work, DINo, has been accepted at ICLR 2023 as a Spotlight...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-give-a-talk-at-ap-hp-on-applying-machine-learning-to-medical-biology",
          title: 'I was invited to give a talk at AP-HP on applying machine learning...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-aphinity-at-the-seminar-of-sig-learnsfluid",
          title: 'I gave a talk on APHINITY at the seminar of SIG LearnSFluid.',
          description: "",
          section: "News",},{id: "news-matthieu-and-i-gave-a-talk-on-dino-at-ai-for-science-talks",
          title: 'Matthieu and I gave a talk on DINo at AI for Science Talks....',
          description: "",
          section: "News",},{id: "news-i-m-sorry-to-announce-that-i-won-t-be-able-to-attend-our-iclr-spotlight-presentation-of-dino-in-kigali-rwanda-please-check-our-paper-poster-and-slides-here",
          title: 'I’m sorry to announce that I won’t be able to attend our ICLR...',
          description: "",
          section: "News",},{id: "news-i-presented-coda-and-dino-at-the-seminar-of-signal-processing-laboratory-lts4-at-epfl",
          title: 'I presented CoDA and DINo at the Seminar of Signal Processing Laboratory (LTS4)...',
          description: "",
          section: "News",},{id: "news-infinity-a-paper-i-co-ordinated-has-been-accepted-at-icml-2023-workshop-on-syns-amp-amp-ml",
          title: 'INFINITY, a paper I co-ordinated, has been accepted at ICML 2023 Workshop on...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-phd-thesis",
          title: 'I successfully defended my PhD thesis.',
          description: "",
          section: "News",},{id: "news-coral-a-paper-i-co-ordinated-has-been-accepted-at-neurips-2023",
          title: 'CORAL, a paper I co-ordinated, has been accepted at NeurIPS 2023!',
          description: "",
          section: "News",},{id: "news-patrick-and-i-co-presented-at-ecml-pkdd-2023-the-tutorial-on-physics-aware-deep-learning-site-amp-amp-slides",
          title: 'Patrick and I co-presented at ECML-PKDD 2023 the tutorial on Physics-Aware Deep Learning...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-aphynity-at-the-seminar-of-team-mcs-of-laboratoire-analyse-géométrie-et-applications-at-université-sorbonne-paris-nord-paris-13",
          title: 'I gave a talk on APHYNITY at the seminar of Team MCS of...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-seminar-of-umr-mia-paris-saclay-at-agroparistech",
          title: 'I gave a talk at the seminar of UMR MIA Paris-Saclay, at AgroParisTech....',
          description: "",
          section: "News",},{id: "news-i-have-been-recognized-as-a-top-reviewer-at-neurips-2023",
          title: 'I have been recognized as a Top Reviewer at NeurIPS 2023!',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-seminar-at-valeo-ai",
          title: 'I gave a talk at the seminar at Valeo.ai.',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-workshop-mathematical-foundations-of-ai-at-dataia-scai",
          title: 'I gave a talk at the Workshop “Mathematical Foundations of AI”, at DATAIA-SCAI...',
          description: "",
          section: "News",},{id: "news-2-papers-a-b-i-co-authored-have-been-accepted-to-iclr-2024-ai4diffeqtnsinsci-workshop",
          title: '2 papers [a, b] I co-authored have been accepted to ICLR 2024 AI4DiffEqtnsInSci...',
          description: "",
          section: "News",},{id: "news-i-started-as-a-postdoctoral-ai-researcher-at-valeo-ai",
          title: 'I started as a Postdoctoral AI Researcher at Valeo.ai.',
          description: "",
          section: "News",},{id: "news-timeflow-a-paper-i-co-ordinated-has-been-accepted-to-tmlr",
          title: 'TimeFlow, a paper I co-ordinated, has been accepted to TMLR!',
          description: "",
          section: "News",},{id: "news-i-received-the-accessit-ex-aequo-for-the-afia-2024-ai-thesis-prize",
          title: 'I received the Accessit ex-aequo for the AFIA 2024 AI Thesis Prize.',
          description: "",
          section: "News",},{id: "news-our-latest-work-regents-has-been-accepted-to-eccv-2024-w-coda-workshop",
          title: 'Our latest work, ReGentS, has been accepted to ECCV 2024 W-CODA workshop!',
          description: "",
          section: "News",},{id: "news-geps-a-paper-i-co-authored-has-been-accepted-to-neurips-2024",
          title: 'GEPS, a paper I co-authored, has been accepted to NeurIPS 2024!',
          description: "",
          section: "News",},{id: "news-i-started-as-an-ai-researcher-at-valeo-ai",
          title: 'I started as an AI Researcher at Valeo.ai.',
          description: "",
          section: "News",},{id: "news-neural-solver-a-paper-i-co-authored-has-been-accepted-to-iclr-2025",
          title: 'Neural Solver, a paper I co-authored, has been accepted to ICLR 2025!',
          description: "",
          section: "News",},{id: "news-i-was-featured-in-a-portrait-in-issue-n-18-of-the-french-ai-magazine-actuia",
          title: 'I was featured in a portrait in issue N°18 of the French AI...',
          description: "",
          section: "News",},{id: "news-elhadi-chiter-started-as-an-intern-at-valeo-ai",
          title: 'Elhadi Chiter started as an intern at Valeo.ai.',
          description: "",
          section: "News",},{id: "news-ppt-has-been-accepted-at-the-corl-2025-robot-data-workshop",
          title: 'PPT has been accepted at the CoRL 2025 Robot Data Workshop.',
          description: "",
          section: "News",},{id: "news-ipa-has-been-accepted-as-an-oral-presentation-at-the-neurips-2025-ccfm-workshop",
          title: 'IPA has been accepted as an oral presentation at the NeurIPS 2025 CCFM...',
          description: "",
          section: "News",},{id: "news-ipa-has-been-selected-for-an-outstanding-paper-award-at-the-neurips-2025-ccfm-workshop",
          title: 'IPA has been selected for an Outstanding Paper Award at the NeurIPS 2025...',
          description: "",
          section: "News",},{id: "news-ipa-has-been-accepted-to-tmlr-as-is",
          title: 'IPA has been accepted to TMLR as is.',
          description: "",
          section: "News",},{id: "talks-aaai-2021-spring-symposium-on-combining-artificial-intelligence-and-machine-learning-with-physics-sciences-mlps",
          title: 'AAAI 2021 Spring Symposium on Combining Artificial Intelligence and Machine Learning with Physics...',
          description: "Learning Dynamical Systems that Generalize Across Environments",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2021-03-22/";
            },},{id: "talks-conference-presentation-at-neurips-2021-and-neurips-paris-2021",
          title: 'Conference Presentation at NeurIPS 2021 and NeurIPS@Paris 2021',
          description: "Learning Dynamical Systems that Generalize Across Environments",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2021-12-08/";
            },},{id: "talks-seminar-at-extrality-now-ansys-ai",
          title: 'Seminar at Extrality (Now Ansys AI)',
          description: "Improving Generalization for Dynamical Systems Learning",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2022-02-08/";
            },},{id: "talks-spotlight-conference-presentation-at-icml-2022",
          title: 'Spotlight Conference Presentation at ICML 2022',
          description: "Generalizing to New Physical Systems via Context-Informed Dynamics Model",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2022-07-19/";
            },},{id: "talks-seminar-sorbonne-isae-cerfacs",
          title: 'Seminar Sorbonne-ISAE-CERFACS',
          description: "Augmenting Physical Models with Deep Nets for Complex Dynamics Forecasting",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2022-10-18/";
            },},{id: "talks-seminar-at-criteo-ai-lab",
          title: 'Seminar at Criteo AI Lab',
          description: "Continuous PDE Dynamics Forecasting with Implicit Neural Representations",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2022-11-28/";
            },},{id: "talks-medical-biology-engineers-day-of-ap-hp",
          title: 'Medical Biology Engineers Day of AP-HP',
          description: "Deploying Machine Learning Systems for Real-World Problems",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023-03-23/";
            },},{id: "talks-sig-learnfluids-at-alembert-sorbonne-université",
          title: 'SIG LearnFluidS, at ∂’Alembert, Sorbonne Université',
          description: "Augmenting Physical Models with Deep Nets for Complex Dynamics Forecasting",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023-03-27/";
            },},{id: "talks-ai4science-talks-at-machine-learning-for-simulation-lab-at-university-of-stuttgart-and-nec-labs-europe",
          title: 'AI4Science Talks, at Machine Learning for Simulation Lab at University of Stuttgart and...',
          description: "Continuous PDE Dynamics Forecasting with Implicit Neural Representations",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023-04-17/";
            },},{id: "talks-spotlight-conference-presentation-at-iclr-2023",
          title: 'Spotlight Conference Presentation at ICLR 2023',
          description: "Continuous PDE Dynamics Forecasting with Implicit Neural Representations",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023-05-03/";
            },},{id: "talks-seminar-of-signal-processing-laboratory-lts4-at-epfl",
          title: 'Seminar of Signal Processing Laboratory (LTS4) at EPFL',
          description: "Generalizing to New Physical Systems via Context-Informed Dynamics Model and Continuous PDE Dynamics Forecasting with Implicit Neural Representations",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023-05-04/";
            },},{id: "talks-phd-defense",
          title: 'PhD Defense',
          description: "Physics-Aware DL and Dynamical Systems: Hybrid Modeling and Generalization",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023-06-28/";
            },},{id: "talks-tutorial-at-ecml-pkdd-2023",
          title: 'Tutorial at ECML-PKDD 2023',
          description: "Introduction to Physics-Aware Deep Learning",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023-09-22/";
            },},{id: "talks-seminar-of-team-mcs-of-laga-at-université-sorbonne-paris-nord-paris-13",
          title: 'Seminar of Team MCS of LAGA, at Université Sorbonne Paris Nord (Paris-13)',
          description: "Augmenting Physical Models with Deep Nets for Complex Dynamics Forecasting",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023-11-20/";
            },},{id: "talks-seminar-of-umr-mia-paris-saclay-at-agroparistech",
          title: 'Seminar of UMR MIA Paris-Saclay, at  AgroParisTech',
          description: "Physics-Aware DL and Dynamical Systems: Hybrid Modeling and Generalization",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023-11-30/";
            },},{id: "talks-seminar-at-valeo-ai",
          title: 'Seminar at  Valeo.ai',
          description: "Physics-Aware DL and Dynamical Systems: Hybrid Modeling and Generalization",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2024-01-25/";
            },},{id: "talks-workshop-quot-mathematical-foundations-of-ai-quot-at-dataia-scai",
          title: 'Workshop &amp;quot;Mathematical Foundations of AI&amp;quot;, at DATAIA-SCAI',
          description: "DL for Physical Dynamics: Physics-DL Hybrid Modeling and Continuous Modeling",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2024-01-31/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/yuanyinnn.bsky.social", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yuan-yin", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuan-yin-nn", "_blank");
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
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yuanyinnn", "_blank");
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
