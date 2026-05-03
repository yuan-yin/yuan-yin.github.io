---
layout: page
permalink: /publications/
title: Publications
description: Publications by category in reverse chronological order. <span class='equal-contribution-note'>* Equal contribution.</span>
eyebrow: Research output
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

<div class="publications publications--sticky-years" data-sticky-year-groups>

{% bibliography %}

</div>

<script defer src="{{ '/assets/js/sticky-year-groups.js' | relative_url | bust_file_cache }}"></script>
