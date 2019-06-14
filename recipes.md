---
title: recipes
layout: page
---

### Recipes
{% assign sortedPosts = site.posts | sort: 'title' %}
<ul>
  {% for post in sortedPosts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
