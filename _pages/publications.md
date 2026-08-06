---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications-toplines">
  <p class="post-description"><span class="equal-contribution-note">* Equal contribution.</span></p>
  <div class="scholar-profile-cta">
    <p>Looking for the complete list?</p>
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

{% include bib_search.liquid %}

<div class="publications publications--sticky-years" data-sticky-year-groups>

{% bibliography %}

</div>

<script defer src="{{ '/assets/js/sticky-year-groups.js' | relative_url | bust_file_cache }}"></script>
