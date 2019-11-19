---
title: How-to SASS
author: rkadmin
type: post
date: 2019-08-12T05:32:29+00:00
url: /how-to-sass/
categories:
  - Interests
tags:
  - css
  - design

---
SASS is a scripting language that provides a lot more features/tools that CSS doesn&#8217;t have. 

It&#8217;s a preprocessor, which means that it generates code that is understandable by CSS. Think of it like how Markdown generates HTML code. 

## Sass Feature #1 &#8211; Variables

Variables allow you to store data, so you can reuse it in your style sheet.

<pre class="wp-block-code"><code>/* WITH STANDARD CSS:  */

h1 {
  color: #00FF33;
  font-size: 20px;
}

.bullets {
  color: #00FF33;
  font-size: 20px;
}

#important {
  color: #00FF33;
  font-size: 20px;
}



/* WITH SASS: */
$color-primary = #00FF33;
$standard-size = 20 + "px";

h1 {
  color: $color-primary;
  font-size: $standard-size;
}

.bullets {
  color: $color-primary;
  font-size: $standard-size;
}

#important {
  color: $color-primary;
  font-size: $standard-size;
}
</code></pre>

## Sass Feature #2 &#8211; Nesting

Nesting lets you create clear hierarchies. It&#8217;s cleaner code.

<pre class="wp-block-code"><code>/* WITH STANDARD CSS:  */
.navbar {
  padding: 20px;
}

.navbar ul {
  list-style: none;
}

.navbar li {
  text-align: center;
  color: blue;
}

/* WITH SASS: */

.navbar {
  padding: 20px;

  ul {
    list-style: none;
  }

  li {
    text-align: center;
    color: blue;
  }
</code></pre>

## Sass Feature #3 &#8211; Mixins

Mixings allow you to group together multiple CSS declarations to reuse it.

<pre class="wp-block-code"><code>/* WITH STANDARD CSS:  */
.box1 {
  text-align: left;
  border: 2px solid red;
  padding: 2px;
}

.box2 {
  text-align: center;
  border: 2px solid red;
  padding: 2px;
}

/* WITH SASS: */
@mixin default-border [
  border: 2px solid red;
  padding: 2px;
}

.box1 {
  text-align: left;
  @include default-border;
}

.box2 {
  text-align: center;
  @include default-border;
}</code></pre>

Other features includes Functions, Inheritance/Extend, the & operator, and If/Else and loops. 

**References**: 

<https://itnext.io/starting-with-sass-116f4ecb682d><figure class="wp-block-embed">

<div class="wp-block-embed__wrapper">
  https://sass-lang.com/documentation
</div></figure>