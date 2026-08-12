---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
hide_hero: true
---

<!-- _pages/publications.md -->

<header class="post-header page-hero publications-hero">
  <div class="page-hero__content">
    <h1 class="post-title">{{ page.title }}</h1>
  </div>
  <p class="post-description"><span class="equal-contribution-note">* Equal contribution.</span></p>
</header>

<div class="publications publications--sticky-years" data-sticky-year-groups>

{% bibliography %}

</div>

<div class="pub-controls-anchor">
  <div class="pub-controls">
    <div class="pub-controls__backdrop" aria-hidden="true"></div>
    {% include bib_search.liquid %}
    <div class="scholar-profile-cta">
      <a
        class="scholar-profile-cta__btn"
        href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}"
        target="_blank"
        rel="noopener"
      >
        <i class="ai ai-google-scholar" aria-hidden="true"></i>
        <span>View all on Google Scholar</span>
      </a>
    </div>
  </div>
</div>

<script defer src="{{ '/assets/js/sticky-year-groups.js' | relative_url | bust_file_cache }}"></script>
