---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 5
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}
{% assign display_tags_size = site.display_tags | size %}
{% assign display_categories_size = site.display_categories | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="header-bar blog-hero">
    <div class="blog-hero__content">
      <p class="blog-hero__eyebrow">Notes and essays</p>
      <h1>{{ site.blog_name }}</h1>
      <p>{{ site.blog_description }}</p>
    </div>
  </div>
{% endif %}

{% if display_tags_size > 0 or display_categories_size > 0 %}

  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}"> <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
      {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
        <p>&bull;</p>
      {% endif %}
      {% for category in site.display_categories %}
        <li>
          <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}"> <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
{% endif %}

{% assign featured_posts = site.posts | where: 'featured', 'true' %}
{% if featured_posts.size > 0 %}

  <section class="featured-posts" aria-labelledby="featured-posts-title">
    <div class="blog-section-header">
      <p>Featured</p>
      <h2 id="featured-posts-title">Pinned Posts</h2>
    </div>
    <div class="featured-posts__grid">
      {% for post in featured_posts %}
        {% if post.external_source == blank %}
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {% else %}
          {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
        {% endif %}
        {% assign year = post.date | date: '%Y' %}
        <a class="featured-posts__card" href="{{ post.url | relative_url }}">
          <span class="featured-posts__pin" aria-hidden="true"><i class="fa-solid fa-thumbtack"></i></span>
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <span class="post-meta">
            {{ read_time }} min read
            <span aria-hidden="true">&middot;</span>
            <span><i class="fa-solid fa-calendar fa-sm"></i> {{ year }}</span>
          </span>
        </a>
      {% endfor %}
    </div>
  </section>
{% endif %}

  <section class="blog-posts" aria-labelledby="blog-posts-title">
    <div class="blog-section-header">
      <p>Archive</p>
      <h2 id="blog-posts-title">Latest Posts</h2>
    </div>

    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% if postlist.size > 0 %}
      <ul class="post-list">
        {% for post in postlist %}
          {% if post.external_source == blank %}
            {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
          {% else %}
            {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
          {% endif %}
          {% assign year = post.date | date: '%Y' %}
          {% assign tags = post.tags | join: '' %}
          {% assign categories = post.categories | join: '' %}

          <li class="post-list__item{% if post.thumbnail %} post-list__item--with-image{% endif %}">
            <article class="post-card">
              <div class="post-card__body">
                <p class="post-meta">
                  {{ read_time }} min read
                  <span aria-hidden="true">&middot;</span>
                  {{ post.date | date: '%B %d, %Y' }}
                  {% if post.external_source %}
                    <span aria-hidden="true">&middot;</span>
                    {{ post.external_source }}
                  {% endif %}
                </p>

                <h3>
                  {% if post.redirect == blank %}
                    <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                  {% elsif post.redirect contains '://' %}
                    <a class="post-title" href="{{ post.redirect }}" target="_blank" rel="external nofollow noopener">
                      {{- post.title -}}
                    </a>
                    <i class="fa-solid fa-arrow-up-right-from-square post-card__external" aria-hidden="true"></i>
                  {% else %}
                    <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
                  {% endif %}
                </h3>

                <p class="post-card__description">{{ post.description }}</p>

                <p class="post-tags">
                  <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl }}">
                    <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                  </a>

                  {% if tags != '' %}
                    {% for tag in post.tags %}
                      <a href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl }}">
                        <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
                      </a>
                    {% endfor %}
                  {% endif %}

                  {% if categories != '' %}
                    {% for category in post.categories %}
                      <a href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl }}">
                        <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
                      </a>
                    {% endfor %}
                  {% endif %}
                </p>
              </div>

              {% if post.thumbnail %}
                <a class="post-card__media" href="{{ post.url | relative_url }}" aria-hidden="true" tabindex="-1">
                  <img src="{{ post.thumbnail | relative_url }}" alt="" loading="lazy" decoding="async">
                </a>
              {% endif %}
            </article>
          </li>
        {% endfor %}
      </ul>
    {% else %}
      <div class="blog-empty-state">
        <div class="blog-empty-state__icon" aria-hidden="true"><i class="fa-regular fa-pen-to-square"></i></div>
        <h3>No posts yet</h3>
        <p>Long-form notes will appear here once they are published.</p>
      </div>
    {% endif %}

  </section>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
