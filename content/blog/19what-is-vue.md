---
title: What is Vue?
author: rkadmin
type: post
date: 2019-07-08T19:10:35+00:00
url: /what-is-vue/
categories:
  - coding
tags:
  - framework
  - javascript
  - vue

---
Vue is a Javascript framework like React or Angular. Vue is a light-weight framework that you can use with a single script and use it to create little components on an existing site, or install the whole package to build much more complex apps.

Learn more about [Installing Vue in the documentation.][1]

Overall, Vue helps visualize data (like images/content/etc)

Vue manages and displays data using components. 

## How We Normally Build Websites

When we&#8217;re working with standard HTML/CSS/JS (and Jquery), we create functionality by tying functions to events. 

**For example**: If a button gets clicked, show this pop-up. IF someone types in this text box, count how many characters. 

Overall, site functionality is simply series of commands that follow one after another. That&#8217;s imperative design.

<u>Imperative design is like: </u>

  * User lands on webpage
  * Create a timer on the sidebar.
  * Start timer
  * Every second, update clock on the side bar
  * After 60 seconds, show a pop-up that displays &#8216;Times Up!&#8221;
  * Stop the timer.

## How Vue Builds Websites

With Vue, it is declarative programming. You still assign event handlers, but the relationship are between higher level components &#8211; not specific DOM elements. 

<u>Declarative Design is like:</u>

  * There is a clock component (with a parameter where you can set it to 6 seconds, 60 seconds, 600 hundred seconds, etc).
  * There is a pop-up component (that you can put any sort of text inside.)
  * 

Within Vue, if you have multiple pages that need the clock, you can reuse that component.   
  


## Vue Jargon  


**Components** are pieces of a website, like a search bar, or a sidebar. 

**Directives** are custom HTML attributes to use in templates.   
Example: v-for  


<pre class="wp-block-code"><code>&lt;img v-for="image in collection"></code></pre>

**Props** is the main way to pass data around to components. Components has data that they own, and they can pass it around via props. 

**One way data flow.** Vue&#8217;s standard behavior is that data passes one way, downhill, from parent through their children. 

**Emit** events allows your child components to passing data back to the parent.

**Templates** are Vue&#8217;s name for content you build in HTML.

 [1]: https://vuejs.org/v2/guide/installation.html