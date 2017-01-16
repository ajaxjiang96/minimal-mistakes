---
layout: archive
title: "Project"
permalink: /project/
author_profile: true
---

<div class="grid__wrapper">
  {% for post in site.project %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
