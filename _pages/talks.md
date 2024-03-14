---
layout: page
title: Talks
permalink: /talks/
description: Talks and Presentations
nav: true
nav_order: 3
---

<!-- pages/projects.md -->
<div class="talks">
<!-- Display projects without categories -->
  {%- assign sorted_talks = site.talks | sort: "date" | reverse -%}
  <!-- Generate cards for each project -->
  <ol class="list-group">
  {%- for talk in sorted_talks -%}
    {% include talks.liquid %}
  {%- endfor %}
  </ol>
</div>
