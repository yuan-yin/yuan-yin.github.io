---
layout: page
title: Talks
permalink: /talks/
description: Talks and Presentations
nav: true
nav_order: 4
---

<!-- pages/projects.md -->
<div class="talks">
<!-- Display projects without categories -->
  {%- assign sorted_talks = site.talks | sort: "date" -%}
  <!-- Generate cards for each project -->
  {%- for talk in sorted_talks -%}
    {% include talks.html %}
  {%- endfor %}
</div>
