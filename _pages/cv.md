---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 1
description: 
---
<a href="/assets/pdf/cv_long_en_Yuan_YIN.pdf">Link to my CV</a>
<iframe id="theFrame" src='/assets/pdf/cv_long_en_Yuan_YIN.pdf' style="width:100%;height:1000px;overflow:auto;"> </iframe>
<script>
document.getElementById("theFrame").contentWindow.onload = function() {
    this.document.getElementsByTagName("img")[0].style.width="100%";
};
</script>