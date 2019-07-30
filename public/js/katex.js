---
  layout: null
---
  {% if site.katex.enable %}
    $("<link>").attr({ href: "{{ site.katex.stylesheet }}", rel: "stylesheet" }).appendTo("head");
    $.ajax({
      url: "{{ site.katex.src }}",
      dataType: "script",
      cache: true
    });
    $.ajax({
      url: "{{ site.katex.auto-render }}",
      dataType: "script",
      cache: true
    });
  {% endif %}
