---
title: Divi and Sticky Menu bars
author: rkadmin
type: post
date: 2019-08-06T16:20:15+00:00
url: /divi-and-sticky-menu-bars/
categories:
  - Interests
tags:
  - divi
  - php
  - responsive design

---
I was recruited to fix a CSS problem caused by another developer, for the site <https://www.magueymelate.com/>. The owner graciously let me write about the experience.

The goal: Put a sticky bar on top of the site, for very specific pages.<figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/sticky-header-1024x499.png" alt="" class="wp-image-347" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/sticky-header-1024x499.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/sticky-header-300x146.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/sticky-header-768x374.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/sticky-header.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /><figcaption>See the Opt-in on top? It travels with you until you close it. That&#8217;s the sticky bar.</figcaption></figure> 

<hr class="wp-block-separator" />

## The Process

### Goal: 

Build a sticky banner for opt-ins for 4 specific pages

### Fix: 

What the previous developer did

What did the previous developer break?

  * The opt-in form wasn&#8217;t working
  * The design code wasn&#8217;t responsive
  * The opt-in appeared on every page
  * The color scheme didn&#8217;t align with what the client wanted.

<hr class="wp-block-separator" />

## How to do this

So how do you go about doing this? Here&#8217;s the system I followed. 

### Step 1:

Look at old prior code using DevTools.   
Within the dev tools, you&#8217;ll have to do a bit of detective work, looking at what the styles/classes & IDs are that are causing the design. 

<blockquote class="wp-block-quote">
  <p>
    Note: If the code also has some functionality, you may have to dig into the JS code as well. This is significantly more painful and often not something I prefer doing. To dig into the JS code, open up the Sources Tab, do a refresh, and manually read through all the JS scripts until you find the culprit.
  </p>
</blockquote><figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/devtools.jpg" alt="" class="wp-image-348" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/devtools.jpg 796w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/devtools-300x280.jpg 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/devtools-768x717.jpg 768w" sizes="(max-width: 796px) 100vw, 796px" /></figure> 

Knowing this will help you understand if you should salvage the code or rebuilt it from scratch.

### Step 2:

Finding the prior code from the previous developer. 
  
I decided to keep some of the code. There&#8217;s still things I need to remove, so my next step is finding their code. 

Within WordPress, there&#8217;s a few places where code can hide.

  * Within Appearance > Themes
  
    Usually function.php, styles.css, etc
  * In Appearance > Customize
  
    WordPress decided that users may want to put CSS code here instead.
  * In a plugin
  
    A good developer will isolate their code from affecting others. 
  
    So if the client decides they hate the Sticky bar now, they can turn it off.
  * In a plugin&#8217;s settings:
  
    Divi has a spot to put in CSS/JS code too. If I wasn&#8217;t super familiar with Divi, I wouldn&#8217;t have known that.
  * Hard-coded in the body
  
    You&#8217;ll know if it&#8217;s hardcoded if it&#8217;s in the HTML, while you&#8217;re searching in the DevTools. 
  
    Rarely do developers hard-code the design (unless it&#8217;s for a workaround). Fortunately, it&#8217;s a easy fix. 

### Step 3

Identifying the fix

The previous developer wrote the sticky bar CSS code, that I wanted to modify and re-use. Why re-invent the wheel?

But in the process, I discovered their method of creating opt-ins was to use the default HTML code that came directly from the client&#8217;s email marketing platform. That default HTML code had it&#8217;s own problems, and I wanted to avoid using it.

### Step 4

Deploy a fix and call it a day.

The first thing I did was isolate my updates and share it with the client. 

Most WordPress clients do not have a staging site. And for a quick-fix situation, it&#8217;ll be overkill to dump their site, create a version in local, get it approved, and import the code over. The next best thing is to simply create a new page. 

I created my own version by creating Page > New Page, then hiding it so only logged in users can see it.

I wrote my code on that page, just to get a prototype, and got the client approval. 

For round 2, I cleaned up a lot of the design code, and used GravityForms as the form software. I really love GravityForms, as it uses a lot of classes/ unique IDs that you can easily target with CSS. 

It works, the client loved it, and now it&#8217;s time to deploy!

_Except it didn&#8217;t work._

<hr class="wp-block-separator" />

## Unforeseen consequences:

I broke one of the most basic rules of development &#8212; always develop in the same environment. 

This isn&#8217;t a &#8220;Oh no, my code works on Chrome but not Firefox&#8221; or &#8220;I should have used a Linux server running PHP 5.4, not a Windows server running PHP 7!&#8221; (Which are all valid issues I had prior.)

The client&#8217;s site was built in Divi. I built my sticky bar on a WordPress Page.

<blockquote class="wp-block-quote">
  <p>
    What is Divi?
  </p>
  
  <p>
    Divi is a site builder for WordPress. It&#8217;s one of the best builders out there. I&#8217;ve been a huge fan from 2013-2017. <br />As I got deeper into WP development, I recognize it&#8217;s faults. it&#8217;s a headache for developers. It creates a lot of &#8220;Divi Overhead&#8221;, using their own custom code to make the magic happen. (I now recommend BeaverBuilder.)<br />For example: If you turn your divi code into the HTML mode, you&#8217;ll see the mess that Divi left.<br />Beaver Builder is generating clean HTML, so anyone can modify.
  </p>
</blockquote>

What I didn&#8217;t know was that Divi wraps your code in THEIR own code. The original CSS couldn&#8217;t work around it. 

As a workaround &#8211; the original developer had injected code directly into header.php. I thought it was a weird move. But now i understand that they did that to bypass Divi. 

<pre class="wp-block-code"><code>&lt;!-- RK Sticky bar --> 
&lt;?php 

	if( is_page(array('club', 7538, 2432, 'signaturebox'))) {
	?>	
    &lt;div class="sticky-bar-form">
			&lt;div class="grid-container">
				&lt;div class="sticky-space1">&lt;/div>
				&lt;div id="sticky-close" class="sticky-space2">X&lt;/div>
				&lt;div class="sticky-bar"> &lt;?php echo do_shortcode('[ gravityform id="x" title="false" description="false" ]') ?> &lt;/div>
			&lt;/div>
		&lt;/div>

		&lt;script type="text/javascript">
			const stickyClose = document.querySelector('#sticky-close');
			const stickyBarForm = document.querySelector('.sticky-bar-form');
			const mainHeader = document.querySelector('#main-header');
			
			//mainHeader.style.marginTop = "32px"	
				
			stickyClose.addEventListener('click', function(event) {
			  if (stickyBarForm.style.display == "") {
				stickyBarForm.style.display = "none"
				mainHeader.style.marginTop = "0px"  
			  }});

		&lt;/script>
	&lt;?php 
	} 

?>	</code></pre>

I moved my code to the header.php, and it worked!