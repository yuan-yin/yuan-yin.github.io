---
layout: about
title: About
permalink: /
subtitle: AI Researcher at <a href="https://valeoai.github.io/">Valeo.ai</a>
profile:
  align: right
  image: yuan-yin.jpeg
  image_circular: true # crops the image to make it circular
  more_info: "<div>That's me at the Aussichtsturm Uetliberg in Zurich, Summer 2024.</div>"

news: true  # includes a list of news items
latest_posts: false  # includes a list of the newest posts
selected_papers: true # includes a list of papers marked as "selected={true}"
selected_papers_display:
  visible: 3 # papers per slide in the about-page carousel
  visible_narrow: 2 # papers per slide on phones (< 768px)
  roll_interval: 9000 # milliseconds between automatic rolls
social: true  # includes social icons at the bottom of the page

research_themes:
  - title: Model adaptation
    description: Fine-tuning large pretrained models with few trainable parameters, and making learned models generalize to unseen conditions.
    papers:
      - key: yin2025ipainformationpreservinginputprojection
        label: IPA
      - key: koupai2024learn
        label: GEPS
      - key: KirchmeyerYDBRG2022
        label: CoDA
      - key: Yin2021LEADS
        label: LEADS
  - title: Learning physical dynamics
    description: Combining physical models with deep networks, and forecasting PDEs continuously across space and time.
    papers:
      - key: Yin2021Aphynity
        label: APHYNITY
      - key: YinKFRG2022
        label: DINo
      - key: serrano2023operator
        label: CORAL
  - title: Autonomous driving
    description: Motion forecasting, end-to-end planning, and simulation for training and stress-testing driving policies.
    papers:
      - key: yin2026pictura
        label: Pictura
      - key: kirby2026drivingregisters
        label: DrivoR
      - key: xu2026ppt
        label: PPT
      - key: yin2024regents
        label: ReGentS

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 9 # first items shown on the about page
  visible: 3 # number of news items per slide in the about-page rolling card
  roll_step: 1 # number of news items advanced per automatic roll
  roll_interval: 7000 # milliseconds between automatic rolls

latest_posts:
  enabled: false
  scrollable: false # adds a vertical scroll bar if there are more than 3 new posts items
  limit: # leave blank to include all the blog posts
---

I work on parameter-efficient model adaptation, learning physical dynamics, and autonomous driving. My current research covers perception, motion forecasting, and decision making for self-driving, along with adapting large pretrained models and learning at scale. Across these, I favor methods that exploit the structure of a problem.

I defended my [PhD](https://www.theses.fr/2023SORUS161) on physics-aware deep learning in June 2023 at [Sorbonne Université](https://www.sorbonne-universite.fr "prev. UPMC (Paris 6)"), supervised by Prof. [Patrick Gallinari](https://pages.isir.upmc.fr/gallinari/) and Assoc. Prof. [Nicolas Baskiotis](https://www.isir.upmc.fr/personnel/baskiotis/). I hold a BSc in Computer Science from [Beihang University](https://ev.buaa.edu.cn) and an MSc from [Université Paris Cité](https://u-paris.fr "prev. Paris-Diderot (Paris 7)") and [Sorbonne Université](https://www.sorbonne-universite.fr "prev. UPMC (Paris 6)").
