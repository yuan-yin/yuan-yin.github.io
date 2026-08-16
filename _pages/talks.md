---
layout: page
title: Talks
permalink: /talks/
description:
nav: false
---

<!-- pages/projects.md -->

<!-- Dark-mode halo behind the talk logos: dilates a masked copy of the artwork so
     the light field follows its outer contour, then feathers the edge. Applied
     from _sass/_components.scss to .talk-card__logo-wrap::before, never to the
     logo itself — Chrome rasterizes SVG-referenced filters at 1x, so filtering
     the image would cost it its sharpness on high-DPI screens. -->
<svg class="talk-logo-halo-def" width="0" height="0" aria-hidden="true" focusable="false">
  <filter id="talk-logo-halo" x="-25%" y="-60%" width="150%" height="220%" color-interpolation-filters="sRGB">
    <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="grown" />
    <feGaussianBlur in="grown" stdDeviation="0.75" result="softened" />
    <feFlood flood-color="#ffffff" flood-opacity="0.94" result="light" />
    <feComposite in="light" in2="softened" operator="in" />
  </filter>
</svg>

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
