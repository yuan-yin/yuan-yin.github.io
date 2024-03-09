---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 1
cv_pdf: cv_public.pdf
description: 
---
<h1 class="post-title">
<a href="{{ page.cv_pdf | prepend: 'assets/pdf/' | relative_url }}" class="float-right"><i class="fa-solid fa-file-pdf"></i></a></h1>

<iframe id="theFrame" src="{{ page.cv_pdf | prepend: 'assets/pdf/' | relative_url }}" style="width:100%;height:1000px;overflow:auto;"> </iframe>
<script>
document.getElementById("theFrame").contentWindow.onload = function() {
    this.document.getElementsByTagName("img")[0].style.width="100%";
};
</script>
