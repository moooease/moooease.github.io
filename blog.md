---
title: blog
layout: page
---

### Blog
{% assign sortedPosts = site.categories.blog | sort: 'title' %}
<ul>
  {% for post in sortedPosts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>