---
title: Python and Game of Thrones (Part 2 of 3)
author: rkadmin
type: post
date: 2019-04-01T14:39:44+00:00
url: /python-and-game-of-thrones-part-2-of-3/
categories:
  - coding
tags:
  - bots
  - images
  - python
  - web scraping

---
With the final season of Game of Thrones coming up, I wanted to do something fun. And by FUN, I mean writing a 3 part series on some cool things you can do with Python! Because why not? 

_Check out [Part 1][1] and [Part 3][2] here._

## Web Scraping in a nutshell

In this tutorial, we will be exploring web-scrapping. The big picture process is: 

  1. We&#8217;ll have Python visit a webpage.
  2. We&#8217;ll then parse that webpage with BeautifulSoup. 
  3. You then set up code to grab specific data.
      * For example: You might want to grab all the h1 tags. Or all the links. Or in our case, all of the images on a page.

Overall, a very simple process.

**Except when it isn&#8217;t!**

## The challenge of Web Scraping for images

My goal was to turn my knowledge of web scraping content to grab images. 

While web scraping for links, body text and headers is very straightforward, web scraping for images is significantly more complex. Let me explain.

As a web developer, hosting MULTIPLE full-sized images on a single webpage will slow the whole page down. Instead, use thumbnails and then only load the full-sized image when the thumbnail is clicked on.

For example: Imagine if we had twenty 1 megabyte images on our web page. Upon landing, a visitor would have to download 20 megabytes worth of images! The more common method is to make twenty 10kb thumbnail images. Now, your payload is only 200kb, or about 1/100 of the size!

So what does this have to do with web scraping images and this tutorial? 

It means that it makes it pretty difficult to write a generic block of code that always works for every website. Websites implement all different ways to turn a thumbnail to a full-size image, which makes it a challenge to create a &#8216;one-size fits all&#8217; model.

I&#8217;ll still teach what I learned. You&#8217;ll still gain a lot of skills from it. Just be aware that trying that code on other sites **will require major modifications**. Hurray for Zone of Proximal Development.

## Python and Game of Thrones

The goal of this tutorial is that we&#8217;ll be gathering images of our favorite actors! Which will allow us to do weird things like make a Teenage Crush Actor Collage that we can hang in our bedroom. (like so)<figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/04/jon-show-collage.png" alt="" class="wp-image-120" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/04/jon-show-collage.png 600w, http://rockykevnov2019v2.local/wp-content/uploads/2019/04/jon-show-collage-300x200.png 300w" sizes="(max-width: 600px) 100vw, 600px" /><figcaption>My girlfriend walked in on me while I was making this. She then promptly left the room.</figcaption></figure> 

In order to gather those images, we&#8217;ll be using Python to do some web scrapping. We&#8217;ll be using the [BeautifulSoup library][3] to visit a web page and grab all the image tags from it.

Some use cases for Web Scraping: 

  * You can grab all the links on a web page.
  * You can grab all the post titles within a forum
  * You can use it to grab the daily NASDAQ Value without ever visitint the site.
  * You can use it to download all of the links within a repo that doesn&#8217;t have a &#8216;Download All&#8217;. 

Web Scraping allows you to automatically grab web content through Python.

_NOTE: In many website terms and conditions, they prohibit any web scraping of their data. Some develop APIs to allow you to tap into their data. Others do not. Additionally, try to be mindful that you are taking up their resources. So look to doing one request at a time rather than opening lots of connections in parallel and grinding their site to a halt._

## Code 

<pre class="wp-block-code"><code># Import the libraries needed
import requests
import time
from bs4 import BeautifulSoup

# The URL to scrape
url = 'https://www.popsugar.com/celebrity/Kit-Harington-Rose-Leslie-Cutest-Pictures-42389549?stream_view=1#photo-42389576'
#url = 'https://www.bing.com/images/search?q=jon+snow&FORM=HDRSC2'

# Connecting
response = requests.get(url)

# Grab the HTML and using Beautiful
soup = BeautifulSoup (response.text, 'html.parser')

#A loop code to run through each link, and download it
for i in range(len(soup.findAll('img'))):

    tag = soup.findAll('img')[i]
    link = tag['src']

    #skip it if it doesn't start with http
    if "http" in full_link: 
        print("grabbed url: " + link)

        filename = str(i) + '.jpg'
        print("Download: " + filename)

        r = requests.get(link)
        open(filename, 'wb').write(r.content)

    else:
        print("grabbed url: " + link)
        print("skip")

    
    time.sleep(1)</code></pre>

## Breaking down the code

### **Having Python Visit the Webpage**

We start by importing the libraries needed, and then storing the webpage link into a variable.

  * The [Requests library][4] is used to do all sorts of HTTP requests
  * The [Time library][5] is used to put a 1 second wait after each request. If we didn&#8217;t include that, the whole loop will fire off as fast as possible, which isn&#8217;t very friendly to the sites we are scraping from.
  * The [BeautifulSoup Library][3] is used to make exploring the DOM Tree easier.

<pre class="wp-block-code"><code># Import the libraries needed
import requests
import time
from bs4 import BeautifulSoup

# The URL to scrape
url = 'https://www.popsugar.com/celebrity/Kit-Harington-Rose-Leslie-Cutest-Pictures-42389549?stream_view=1#photo-42389576'
#url = 'https://www.bing.com/images/search?q=jon+snow&FORM=HDRSC2'</code></pre>

### **Parse that webpage with BeautifulSoup**

Next, we push our URL into BeautifulSoup.

<pre class="wp-block-code"><code># Connecting
response = requests.get(url)

# Grab the HTML and using Beautiful
soup = BeautifulSoup (response.text, 'html.parser')</code></pre>

### **Grabbing the content** 

Finally, we use a loop to grab the content.

It starts with a FOR loop. BeautifulSoup does some cool filtering, where my code asks BeautifulSoup find all the &#8216;img&#8217; tags, and store it in a temporary array. Then, the **len** function asks for the length of the array. 

<pre class="wp-block-code"><code>#A loop code to run through each link, and download it
for i in range(len(soup.findAll('img'))):</code></pre>

So in human words, if the array held 51 items, the code will look like  
  
_For i in range(50):_ 

<hr class="wp-block-separator" />

Next, we&#8217;ll return back to our soup object, and do the real filtering.

<pre class="wp-block-code"><code>   tag = soup.findAll('img')[i]
   link = tag['src']</code></pre>

Remember that we are in a for loop, so [i] represents a number.

So we are telling BeautifulSoup to findAll &#8216;img&#8217; tags, store it in a temp array, and reference a specific index number based on where we are in the loop.

So instead of calling an array directly like allOfTheImages[10], we&#8217;re using soup.findAll(&#8216;img&#8217;)[10], and then passing it to the **tag** variable.

The data in the **tag** variable will look something like: 

<pre class="wp-block-code"><code>&lt;img src="smiley.gif" alt="Smiley face" height="42" width="42"> </code></pre>

Which is why the next step is pulling out the &#8216;src&#8217;. 

<hr class="wp-block-separator" />

Now we go to the final part of the loop, with downloading the content.

There&#8217;s a few odd design elements here that I want to point. 

  1. The IF statement is actually a hack I made for other sites I was testing. There were times when I was grabbing images that was the part of the root site (like the favicon or the social media icons) that I didn&#8217;t want. So using the IF statement allowed me to ignore it.
  2. I also forced all the images to be .jpg. I could have written another chunk of IF statements to check the datatype, and then append the correct filetype. But that was adding a significant chunk of code that made this tutorial longer.
  3. I also added all the print commands. If you wanted to grab all the links of a webpage, or specific content &#8212; you can stop right here! You did it!

The one thing I do want to point out is the **requests.get(link)** and the **open(filename, &#8216;wb&#8217;).write(r.content)** code. 

Request gets that link directly. 

And [open is a default python function][6] that opens &#8216;filename&#8217;, gives it &#8216;wb&#8217; parameter (writing & binary mode), then writes the link&#8217;s content (which is the image) into that filename.

Learn more about [open here][7].

<pre class="wp-block-code"><code>    #skip it if it doesn't start with http
    if "http" in full_link: 
        print("grabbed url: " + link)

        filename = str(i) + '.jpg'
        print("Download: " + filename)

        r = requests.get(link)
        open(filename, 'wb').write(r.content)

    else:
        print("grabbed url: " + link)
        print("skip")

    
    time.sleep(1)</code></pre>

## Conclusion

Web Scraping has a lot of useful features. 

This code won&#8217;t work right out of the box for most sites with images, but it can serve as a foundation to how to grab images on different sites. 

In Part 1, I covered&nbsp;[web automation with the Selenium library][1]. In this post, I covered web scraping with the BeautifulSoup library. And in Part 3, I [covered generating reports with the csv module][2].

 [1]: https://rockykev.com/python-and-game-of-thrones-part-1-of-3/
 [2]: https://rockykev.com/python-and-game-of-thrones-part-3-of-3/
 [3]: https://www.crummy.com/software/BeautifulSoup/
 [4]: https://realpython.com/python-requests/
 [5]: https://docs.python.org/3/library/time.html
 [6]: https://docs.python.org/3/library/functions.html#open
 [7]: https://www.w3schools.com/python/python_file_write.asp