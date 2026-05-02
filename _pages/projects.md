---
layout: default
title: Projects
permalink: /projects/
description:
nav: false
display_categories:
horizontal: false
---

<!-- pages/projects.md -->
<div class="post projects-page">
  <header class="projects-hero">
    <div class="projects-hero__content">
      <p class="projects-hero__eyebrow">Work in progress</p>
      <h1>{{ page.title }}</h1>
      <p>Selected tools, prototypes, and research-adjacent builds.</p>
    </div>
  </header>

  <article>
    <div class="projects">
      {% assign all_projects = site.projects | sort: 'importance' %}

      {% if site.enable_project_categories and page.display_categories %}
        <!-- Display categorized projects -->
        {% for category in page.display_categories %}
          {% assign categorized_projects = site.projects | where: 'category', category %}
          {% assign sorted_projects = categorized_projects | sort: 'importance' %}
          <section class="project-section" aria-labelledby="project-category-{{ category | slugify }}">
            <a id="{{ category }}" class="project-section__anchor" href=".#{{ category }}">
              <h2 id="project-category-{{ category | slugify }}" class="category">{{ category }}</h2>
            </a>
            {% if sorted_projects.size > 0 %}
              {% if page.horizontal %}
                <div class="project-grid project-grid--horizontal">
                  {% for project in sorted_projects %}
                    {% include projects_horizontal.liquid %}
                  {% endfor %}
                </div>
              {% else %}
                <div class="project-grid">
                  {% for project in sorted_projects %}
                    {% include projects.liquid %}
                  {% endfor %}
                </div>
              {% endif %}
            {% else %}
              <div class="projects-empty-state projects-empty-state--small">
                <p>No projects in this category yet.</p>
              </div>
            {% endif %}
          </section>
        {% endfor %}

      {% else %}
        <!-- Display projects without categories -->

        {% if all_projects.size > 0 %}
          {% if page.horizontal %}
            <div class="project-grid project-grid--horizontal">
              {% for project in all_projects %}
                {% include projects_horizontal.liquid %}
              {% endfor %}
            </div>
          {% else %}
            <div class="project-grid">
              {% for project in all_projects %}
                {% include projects.liquid %}
              {% endfor %}
            </div>
          {% endif %}
        {% else %}
          <div class="projects-empty-state">
            <div class="projects-empty-state__icon" aria-hidden="true"><i class="fa-solid fa-diagram-project"></i></div>
            <h2>No projects yet</h2>
            <p>Project cards will appear here once entries are added to the projects collection.</p>
          </div>
        {% endif %}
      {% endif %}
    </div>

  </article>
</div>
