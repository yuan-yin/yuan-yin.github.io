---
layout: page
permalink: /repositories/
title: Repositories
description: Open-source implementations associated with my publications
nav: true
nav_order: 3
---

{% if site.data.repositories.github_repos %}

<div class="repositories repo-grid">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
