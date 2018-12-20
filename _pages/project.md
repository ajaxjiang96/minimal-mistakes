---
layout: archive
title: "Project"
permalink: /project/
author_profile: true
header:
  image: /assets/images/header/project.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com/photos/6PF6DaiWz48)"
---

<div class="grid__wrapper">
  {% for post in site.project reversed %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
