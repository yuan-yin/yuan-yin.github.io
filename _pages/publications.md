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

{% include bib_search.liquid %}

<div class="publications publications--sticky-years" data-sticky-year-groups>

{% bibliography %}

</div>

<p class="pub-filter-empty" data-pub-filter-empty hidden>
  No publications match “<span data-pub-filter-term></span>”.
  <button type="button" class="pub-filter-empty__clear" data-pub-filter-clear>Clear filter</button>
</p>

<div class="pub-list-footer">
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

<script defer src="{{ '/assets/js/sticky-year-groups.js' | relative_url | bust_file_cache }}"></script>
