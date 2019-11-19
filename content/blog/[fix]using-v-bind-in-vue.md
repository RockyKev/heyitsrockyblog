---
title: Using V-bind in general within Vue
author: rkadmin
type: post
date: 2019-06-25T19:12:21+00:00
url: /using-v-bind-in-vue/
categories:
  - coding
tags:
  - beginner
  - framework
  - vue

---
**Why**:    
v-bind lets you pull data from the app, within html brackets. 

<hr class="wp-block-separator" />

First, how to pull regular data within Vue.

<pre class="wp-block-code"><code>&lt;!--HTML-->
  &lt;div id="app">
    &lt;p> {{animal}} &lt;/p> &lt;!-- output is dog -->
  &lt;/div>


&lt;!-- VUE STUFF --> 
&lt;script src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>

&lt;script>
var app = new Vue({
 el: '#app',
 data: {
    animal: "dog"
 }
});
&lt;/script></code></pre>

<hr class="wp-block-separator" />

Let&#8217;s say you wanted to put that data between brackets. 

HEADS UP &#8212; THIS DOES NOT WORK:

<pre class="wp-block-code"><code>&lt;img src="{{imageURL}}" alt="{{imageALT}}></code></pre>

Instead, use v-bind.

<pre class="wp-block-code"><code>&lt;img v-bind:src="imageURL" v-bind:alt="imageALT"></code></pre>

**Alternate method #1:**   
You can remove the v-bind part. 

<pre class="wp-block-code"><code>&lt;img :src="imageURL" :alt="imageALT"></code></pre>

**Alternate method #2:**    
You can put it all in a { } 

<pre class="wp-block-code"><code>&lt;img v-bind="{
    src: imageURL, 
    alt: imageALT
}"</code></pre>