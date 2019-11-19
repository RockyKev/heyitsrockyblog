---
title: V-binding CSS classes in Vue
author: rkadmin
type: post
date: 2019-07-01T18:59:58+00:00
url: /v-binding-css-classes-in-vue/
categories:
  - coding
tags:
  - beginner
  - framework
  - vue

---
Vue allows you to programmatically organize your CSS code, to trigger depending on specific situations. It&#8217;s pretty powerful. 

Here&#8217;s how to do it: 

You have two classes &#8216;font-weight-bold&#8217; and &#8216;mr-2&#8217;. 

<u>STANDARD CSS WAY </u>

<pre class="wp-block-code"><code>&lt;label class="font-weight-bold mr-2">THIS IS A LABEL&lt;/label></code></pre>

<u>VUE WAY, WITH V-BINDING</u>

<pre class="wp-block-code"><code>METHOD 1: 
&lt;!-- using array [] -->
&lt;label :class="['font-weight-bold', 'mr-2']">THIS IS A LABEL&lt;/label> </code></pre>

<pre class="wp-block-code"><code>METHOD 2: 
&lt;!-- using a variable that contains an array [] -->
&lt;label :class="formARRAY"> THIS IS A LABEL&lt;/label>

&lt;script> 
var app = new Vue({
  el: '#app', 
  data: {
    formARRAY: ['font-weight-bold', 'mr-2'],
  }
});
&lt;/script></code></pre>

<hr class="wp-block-separator" />

What about using the style attribute? 

For example, you want to make the:

  * font-weight: 900
  * font-size:20px
  * padding-right: 20px

<u>STANDARD HTML WAY</u>

<pre class="wp-block-code"><code>&lt;label style="font-weight: 900; font-size:20px; padding-right: 20px" >THIS IS A LABEL&lt;/label></code></pre>

<u>VUE WAY</u>

<pre class="wp-block-code"><code>METHOD 1: 
&lt;!-- instead of using a array, use an object {} --> 
&lt;label :style="{'font-weight': '900', 'font-size':'20px', 'padding-right': '20px'}">THIS IS A LABEL&lt;/label> 
</code></pre>

<pre class="wp-block-code"><code>METHOD 2: 
&lt;!-- passing the variable over, as an object {} --> 

&lt;label :style="formOBJECT"> THIS IS A LABEL&lt;/label>

&lt;script> 
var app = new Vue({
  el: '#app', 
  data: {
    formOBJECT: {'font-weight': '900', 'font-size':'20px', 'padding-right': '20px'},
  }
});
&lt;/script>
</code></pre>

<hr class="wp-block-separator" />

Finally &#8211; making it programmable. 

Let&#8217;s say, for some reason &#8212; you want to modify the size of the padding-right, depending on their screen size. 

So: 

  * 20px if the user&#8217;s screen width is < 1000
  * 40px if the user&#8217;s screen width is < 2000
  * 60px if the user&#8217;s screen width is < 3000

You get the idea.

<pre class="wp-block-code"><code>&lt;label :style="formOBJECT"> THIS IS A LABEL&lt;/label>

&lt;script> 
var app = new Vue({
  el: '#app', 
  data: {
    formOBJECT: {'font-weight': '900', 'font-size':'20px', 'padding-right': paddingRight + 'px'},
    paddingRight: 20 * (screensizeFunction / 1000), 
  },
  methods: {
  screensizeFunction: function () {
    //code to calculate screensize
  }
});
&lt;/script>
</code></pre>

<hr class="wp-block-separator" />

The benefits of doing it this way allows you to change CSS and style code on the fly, depending on specific settings. (For example: For changing states, like if they are accepted (green text), or denied (red text).

Very awesome stuff!