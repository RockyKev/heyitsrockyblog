---
title: Having fun with Bootstrap 4
author: rkadmin
type: post
date: 2019-08-06T04:04:17+00:00
url: /having-fun-with-bootstrap-4/
categories:
  - coding
  - Interests
tags:
  - bootstrap 4
  - templates

---
**Documentation**:&nbsp;<https://getbootstrap.com/docs/4.0/layout/grid/>

**Here&#8217;s a cheatsheet that I like**:&nbsp;<https://hackerthemes.com/bootstrap-cheatsheet/>  


**You can find my code + result here (hit RUN)**:&nbsp;

<https://repl.it/@RockyKev/nucamp-1-bootstrap-challenge><figure class="wp-block-image">

![screenshot][1]</figure> 

<hr class="wp-block-separator" />

## **Some other useful methods that I like:&nbsp;**

### 1) Centering content.&nbsp;

<pre class="wp-block-code"><code>&lt;div class="container">
    &lt;div class="row">
      &lt;div class="col-md-8 offset-md-2 text-center">
        &lt;h2> using "col-md-8 offset-md-2" &lt;/h2>
        &lt;p>
          &lt;a href="https://static.md/bd0685fa3d2695803ba8e61c9e74a30c.png">Screenshot&lt;/a> &lt;br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Auctor elit sed vulputate mi sit amet mauris commodo quis. Suspendisse sed nisi lacus sed. Tortor vitae purus faucibus ornare suspendisse sed nisi. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Aliquam sem et tortor consequat id porta nibh. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Risus in hendrerit gravida rutrum quisque non tellus. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere.&lt;/p> 
      &lt;/div></code></pre>

I do this a lot with long websites.&nbsp;

<hr class="wp-block-separator" />

### 2) Gutter/no Gutter

<pre class="wp-block-code"><code>&lt;div class="container my-5">
    &lt;h2 class="text-center"> Gutter Tests &lt;/h2>
    &lt;div class="row text-justify">
      &lt;div class="col-md-4 color-red">
        &lt;h5> with default gutters &lt;/h5>
        &lt;p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
      &lt;/div>

      &lt;div class="col-md-4 color-green">
        &lt;h5> with default gutters &lt;/h5>
        &lt;p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
      &lt;/div>

      &lt;div class="col-md-4 color-red">
        &lt;h5> with default gutters &lt;/h5>
        &lt;p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
      &lt;/div>
    &lt;/div> &lt;!-- row -->

 &lt;/div> &lt;!-- container -->

&lt;div class="container my-5">
    &lt;h2 class="text-center"> Gutter Tests - NO GUTTER &lt;a href="https://getbootstrap.com/docs/4.0/layout/grid/#no-gutters"> source &lt;/a>&lt;/h2>
    &lt;div class="row text-justify no-gutters">
      &lt;div class="col-md-4 color-red">
        &lt;h5> with default gutters &lt;/h5>
        &lt;p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
      &lt;/div>

      &lt;div class="col-md-4 color-green">
        &lt;h5> with default gutters &lt;/h5>
        &lt;p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
      &lt;/div>

      &lt;div class="col-md-4 color-red">
        &lt;h5> with default gutters &lt;/h5>
        &lt;p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
      &lt;/div>
    &lt;/div> &lt;!-- row -->

 &lt;/div> &lt;!-- container --></code></pre>

This is great if you&#8217;re doing a collage. For example [wakeupcoffee.biz][2] (<a title="" style="" href="https://i.imgur.com/v1Zp5kO.jpg">screenshot</a>) has their images right next to each other/above each other, no gutter.<figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/v1Zp5kO-1024x711.jpg" alt="" class="wp-image-342" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/v1Zp5kO-1024x711.jpg 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/v1Zp5kO-300x208.jpg 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/v1Zp5kO-768x533.jpg 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/v1Zp5kO.jpg 1247w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

<hr class="wp-block-separator" />

### 3) Edge-to-edge

<pre class="wp-block-code"><code>&lt;div class="edge-to-edge">
  &lt;h2 class="text-center"> Edge-to-Edge &lt;a href="https://getbootstrap.com/docs/4.0/layout/grid/#no-gutters"> source&lt;/a>&lt;/h2>
  &lt;div class="row text-justify">
    &lt;div class="col-md-4 color-red">
      &lt;h5> with default gutters &lt;/h5>
      &lt;p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
    &lt;/div>

    &lt;div class="col-md-4 color-green">
      &lt;h5> with default gutters &lt;/h5>
      &lt;p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
    &lt;/div>

    &lt;div class="col-md-4 color-red">
      &lt;h5> with default gutters &lt;/h5>
      &lt;p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
    &lt;/div>
  &lt;/div> &lt;!-- row --> 
&lt;/div></code></pre>

I loved this style in 2017 &#8211; dunno why. Now, I prefer content within a container&#8230; with padding on the side. Maybe because I was a &#8216;edgy&#8217; web developer.&nbsp;

<hr class="wp-block-separator" />

### 4) Standard Blog Template

<pre class="wp-block-code"><code>&lt;div class="container my-5">
    &lt;h2 class="text-center"> Standard Blog site &lt;/h2>
  
    &lt;div class="jumbotron">
      &lt;h1>BLOG NAME &lt;/h1> 
      &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Auctor elit sed vulputate mi sit amet mauris commodo quis. &lt;/p> 
    &lt;/div>  
  
    &lt;div class="row text-justify">
      &lt;div class="col-md-9 color-red">
        &lt;h5> CONTENT &lt;/h5>
        &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Auctor elit sed vulputate mi sit amet mauris commodo quis. Suspendisse sed nisi lacus sed. Tortor vitae purus faucibus ornare suspendisse sed nisi. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Aliquam sem et tortor consequat id porta nibh. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Risus in hendrerit gravida rutrum quisque non tellus. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere.&lt;/p>

        &lt;p>Id donec ultrices tincidunt arcu non sodales neque sodales ut. Posuere ac ut consequat semper viverra nam libero justo laoreet. Scelerisque in dictum non consectetur. Turpis egestas integer eget aliquet nibh. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Adipiscing enim eu turpis egestas pretium aenean pharetra. Maecenas accumsan lacus vel facilisis. At volutpat diam ut venenatis tellus in. Volutpat maecenas volutpat blandit aliquam etiam erat. Id velit ut tortor pretium viverra suspendisse potenti nullam. Integer eget aliquet nibh praesent tristique. Et molestie ac feugiat sed lectus vestibulum mattis. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Ac tincidunt vitae semper quis lectus. Ultrices sagittis orci a scelerisque purus semper. &lt;/p> 
      &lt;/div>

      &lt;div class="col-md-3 color-green">
        &lt;h5> SIDEBAR &lt;/h5>
        &lt;ul>
          &lt;li>stuff&lt;/li>
          &lt;li>stuff&lt;/li>
          &lt;li>stuff&lt;/li>
          &lt;li>stuff&lt;/li>
          &lt;li>stuff&lt;/li>
          &lt;li>stuff&lt;/li>
        &lt;/ul>
      &lt;/div>

   
    &lt;/div> &lt;!-- row -->

 &lt;/div> &lt;!-- container --></code></pre>

This contains a jumbotron + col-md-9 & col-md-3.&nbsp;

So giant splash, with a 70% content and 30% sidebar.

I actually made this for myself for template reasons.

<hr class="wp-block-separator" />

### 5)&nbsp;Hide p content on breakpoints

<pre class="wp-block-code"><code>&lt;div class="container my-5">
    &lt;h2 class="text-center"> Hide p content on breakpoints &lt;a href="https://getbootstrap.com/docs/4.0/utilities/display/"> source &lt;/a> &lt;/h2>
    &lt;div class="row text-justify">
      &lt;div class="col-md-3 color-red">
        &lt;h5> Hide IF size > sm &lt;/h5>
        &lt;p class="d-none d-sm-block">
          &lt;b>You won't see this if you're on mobile. (min-width 556px)&lt;/b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
      &lt;/div>

      &lt;div class="col-md-3 color-green">
        &lt;h5 > Hide IF size > md &lt;/h5>
        &lt;p class="d-none d-md-block">
          &lt;b>You won't see this if on tablet/mobile. (min-width 768px)&lt;/b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
      &lt;/div>

      &lt;div class="col-md-3 color-red">
        &lt;h5 > hide IF size > lg &lt;/h5>
        &lt;p class="d-none d-lg-block">
          &lt;b>You won't see this on small desktop (min-width 992px)&lt;/b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
      &lt;/div>

      &lt;div class="col-md-3 color-green">
        &lt;h5 > Hide IF size > xl &lt;/h5>
        &lt;p class="d-none d-xl-block">
          &lt;b>You won't see this unless you're on large desktop (min-width 1200px)&lt;/b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. &lt;/p> 
      &lt;/div>

    &lt;/div> &lt;!-- row -->

 &lt;/div> &lt;!-- container -->
    </code></pre>

This is how to hide content based on screen-size. In mobile-first responsive design, you might want to hide a image on mobile, but show it on desktop. 

Example: 

**On mobile** &#8211;> show google map link.

**On desktop** &#8211;> show google map embed. 

 [1]: https://i.imgur.com/vlBnKaH.png
 [2]: http://wakeupcoffee.biz