---
layout: page
title:
showtag:
#- ICPC模板
---
## 近期 Recent

{% for post in site.posts limit:5 %}

- [{{ post.title }}]({{ post.url }}), *{{ post.date | date_to_string }}*

{% if post.description %}

  > {{ post.description }}

{% endif %}

{% endfor %}

- [更多 More…](/archive)

{% for tag in page.showtag %}

## {{ tag }}

{% for post in site.tags[tag] %}

- [{{ post.title }}]({{ post.url }})

{% if post.description %}

  > {{ post.description }}

{% endif %}

{% endfor %}

{% endfor %}
