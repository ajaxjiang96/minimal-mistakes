---
 layout: archive
 title: "Academics"
 permalink: /academics/
 author_profile: true
 header:
   image: /assets/images/header/academics.jpg
   caption: "Photo credit: [**Unsplash**](https://unsplash.com/photos/3jRGSA2IH0c)"
---

 ## Courses I've Taken:

  CSC207: Software Design
  CSC209: Software Tools and Systems Programming
  CSC258: Computer Organization
  CSC263: Data Structures and Analysis
  CSC309: Programming on the Web
  CSC318: The Design of Interactive Computational Media
  CSC343: Databases
  CSC369: Operating Systems
  IMC200: Innovation and Entrepreneurship
  CSC384: Introduction to artificial intelligence

 ## Course Notes

 <div class="grid__wrapper">
   {% for post in site.academics %}
     {% include archivesingle.html type="grid" %}
   {% endfor %}
 </div>
