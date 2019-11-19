---
title: Python and Game of Thrones (Part 1 of 3)
author: rkadmin
type: post
date: 2019-04-01T15:02:09+00:00
url: /python-and-game-of-thrones-part-1-of-3/
categories:
  - coding
tags:
  - automation
  - bots
  - python
  - selenium

---
With the final season of Game of Thrones happening soon, I wanted to do something fun. And by fun, I mean writing a 3 part series on some cool things you can do with Python! Because why not?   
  
_Check out [Part 2][1] and [Part 3][2] here._

I wanted to learn Python for a long time, but I could never find a reason. Ignoring the fact that it powers site like Reddit, Instagram and Dropbox, and that it was named [Programming Language of the Year for 2018][3] &#8211; it&#8217;s also a really readable language that has a lot of powerful libraries.

When I got some tasks that needed automation in my job, I realized I had a opportunity to dig deep into Python. But rather than talk about _boring office related tasks_, let&#8217;s talk about Game of Thrones! 

In this post, I covering web automation with the Selenium library. In Part 2, I covered [web scraping with the BeautifulSoup library][1]. And in Part 3, I [covered generating reports with the csv module][2]. And YES &#8211; they are all Game of Thrones related. Let&#8217;s get into it!

<hr class="wp-block-separator" />

In this post, we are going to use Python to automatically log into our favorite Game of Thrones fan sites.  


Other use cases for this:

  * You might want to automate account creations on your site.
  * You might want to run a bot from start to finish in your online course. 
  * You might want to push a 100 bots to submit a form on your site with a single script. 

## **A little backstory:** 

My company had a bunch of reports that needed to be generated, and I was stuck doing redundant tasks. I knew there had to be a option, so I dug deep into Python and **spent a few weeks** to learn enough to get dangerous. 

In these set of tutorials, I **wanted** to share what I learned. 

But that, my friends&#8230; is boring. 

Python is WELL DOCUMENTED. There are so many free guides to learning Python. There&#8217;s a lot of great tutorials out there. 

So instead of trying to write another ULTIMATE GUIDE on how use Python, I rather just go straight into the cool things that Python has to offer.

One final note: _I also want to share that I&#8217;m not like a professional at Python. This is_ **_roughly a few weeks of Python_** _experience. I was committed to learning just enough to do what I need to do._ 

## Python and Web Automation

One of the coolest things you can do with Python is web automation.

For example &#8211; you can write a Python script that: 

  1. Opens up a browser
  2. Automatically visits a specific website
  3. Logs you into that site
  4. Goes to another part of that website
  5. Finds the most recent blog post.
  6. Opens that blog post.
  7. Submits a comment that says, &#8220;Great writing! High five!&#8221;
  8. And finally logs you out of that website

It might not seem so hard to do. That takes what&#8230;. 20 seconds?

But if you had to do that over and over again, it would drive you insane.

For example &#8211; what if you had a staging site that&#8217;s still in development with a 100 blog posts, and you wanted to post a comment on every single page to test it&#8217;s functionality? 

That&#8217;s 100 blog posts * 20 seconds = roughly 33 minutes

And what if there&#8217;s MULTIPLE testing phases, and you had to repeat the test six more times? 

## Python and the Game of Thrones

So, let&#8217;s talk about the elephant in the room. Or really, the IRON THRONE in the room. <figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/03/iron-throne.jpg" alt="" class="wp-image-86" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/03/iron-throne.jpg 1000w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/iron-throne-300x169.jpg 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/iron-throne-768x432.jpg 768w" sizes="(max-width: 1000px) 100vw, 1000px" /></figure> 

With the final season of Game of Thrones coming up, I wanted to do something that&#8217;s a bit more fun. 

We are going to log into our favorite Game of Thrones fan sites. 

You will need to install Python 3, Selenium, and the Firefox webdrivers to get started. 

_If you have no idea where to start, check out my tutorial on [How to automate form submissions with Python][4]._

## The Python Script

<pre class="wp-block-code"><code>## Game of Thrones easy login script
## 
## Description: This code logs into all of your fan sites automatically

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time



driver = webdriver.Firefox()
driver.implicitly_wait(5)
    ## implicity_wait makes the bot wait 5 seconds before every action
    ## so the site content can load up

# Define the functions

def login_to_westeros (username, userpass):

    ## Open the login page
    driver.get('https://asoiaf.westeros.org/index.php?/login/')    

    ## Log the details
    print(username + " is logging into westeros.")
    
    ## Find the fields and log into the account. 
    textfield_username = driver.find_element_by_id('auth')
    textfield_username.clear()
    textfield_username.send_keys(username)

    textfield_email = driver.find_element_by_id('password')
    textfield_email.clear()
    textfield_email.send_keys(userpass)

    submit_button = driver.find_element_by_id('elSignIn_submit')
    submit_button.click()

    ## Log the details
    print(username + " is logged in! -> westeros")



		
def login_to_reddit_freefolk (username, userpass):

    ## Open the login page
    driver.get('https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fr%2Ffreefolk')    

    ## Log the details
    print(username + " is logging into /r/freefolk.")
    
    ## Find the fields and log into the account. 
    textfield_username = driver.find_element_by_id('loginUsername')
    textfield_username.clear()
    textfield_username.send_keys(username)

    textfield_email = driver.find_element_by_id('loginPassword')
    textfield_email.clear()
    textfield_email.send_keys(userpass)

    submit_button = driver.find_element_by_class_name('AnimatedForm__submitButton')
    submit_button.click()

    ## Log the details
    print(username + " is logged in! -> /r/freefolk.")
    

## Define the user and email combo. 

login_to_westeros("gameofthronesfan86", PASSWORDHERE)

time.sleep(2)
driver.execute_script("window.open('');")
Window_List = driver.window_handles
driver.switch_to_window(Window_List[-1])

login_to_reddit_freefolk("MyManMance", PASSWORDHERE)

time.sleep(2)
driver.execute_script("window.open('');")
Window_List = driver.window_handles
driver.switch_to_window(Window_List[-1])


## wait for 2 seconds
time.sleep(2)


print("task complete")</code></pre>

## Let&#8217;s break those code blocks down

To start, I&#8217;m importing the Selenium library to help with the heavy lifting. 

I also imported the time library, so after each action, it will wait x seconds. Adding a wait allows the page to load.

<pre class="wp-block-code"><code>from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time</code></pre>

### What is Selenium

Selenium is the Python library we use for web automation. Selenium has developed API so third-party authors can develop webdrivers to the communication to browsers.

That way, the Selenium team can focus on their codebase, while another team can focus on the middleware.

For example:

  * The Chromium team made their own webdriver for Selenium called [chromedriver][5].
  * The Firefox team made their own webdriver for Selenium called [geckodriver][6].
  * The Opera team made their own webdriver for Selenium called [operadriver][7].

In the code above, you’ll see me do things like “Open Firefox”, and “pass this link to Firefox”, and finally “Close Firefox”. I would need the geckodriver to do that.  


### Logging into sites

To make it easier to read, I wrote a separate function to log into each site, to show the pattern that we are making.

<pre class="wp-block-code"><code>def login_to_westeros (username, userpass):

    ## Open the login page
    driver.get('https://asoiaf.westeros.org/index.php?/login/')    

    ## Log the details
    print(username + " is logging into westeros.")
    
    ## Find the fields and log into the account. 
    textfield_username = driver.find_element_by_id('auth')
    textfield_username.clear()
    textfield_username.send_keys(username)

    textfield_email = driver.find_element_by_id('password')
    textfield_email.clear()
    textfield_email.send_keys(userpass)

    submit_button = driver.find_element_by_id('elSignIn_submit')
    submit_button.click()

    ## Log the details
    print(username + " is logged in! -> westeros")
</code></pre>

If we break that down even more &#8212; each function has the following elements.

I&#8217;m telling Python to: 

  1. Visit a specific page.
  2. Look for the login box 
      * Clear the text if there is any
      * Submit my variable
  3. Look for the password box
      * Clear the text if there is any
      * Submit my variable
  4. Look for the submit button, and click it
  5. Wait a few seconds so you can bast in the glory.

### Opening up a new tab

Since we have multiple sites, we want to open up a new tab. Otherwise, Selenium will override the current tab.

There&#8217;s various code floating around to do it that no longer work or didn&#8217;t work for me. (For example: there was a method to having Selenium push the hotkeys to open up a new tab, but it wouldn&#8217;t fire). 

This worked, [which I found here][8]:

<pre class="wp-block-code"><code>driver.execute_script("window.open('');")
Window_List = driver.window_handles
driver.switch_to_window(Window_List[-1])</code></pre>

### Running the code

Here&#8217;s a short video of me running the code. 

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="https://www.useloom.com/embed/87f0785c9c354c7282f7340c022c3291" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

Let&#8217;s break that down even more.

### How to find the login box and password box

The Selenium Library has a bunch of handy ways to find elements on a webpage. Here are some of the ones I like to use.

  * find\_element\_by_id
  * find\_element\_by_name
  * find\_element\_by_xpath
  * find\_element\_by\_class\_name

For the whole list, visit the [Selenium Python documentation for locating elements][9]. 

To use [asoiaf.westeros.com as an example][10], when I inspect the elements &#8211; they all have IDs&#8230; which is GREAT! That makes my life easier. <figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/03/finding-ids-1024x597.jpg" alt="" class="wp-image-87" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/03/finding-ids-1024x597.jpg 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/finding-ids-300x175.jpg 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/finding-ids-768x448.jpg 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/finding-ids.jpg 1255w" sizes="(max-width: 1024px) 100vw, 1024px" /><figcaption>When you inspect elements of the &#8216;Display Name&#8217;, the &#8216;Password&#8217;, and the &#8216;Sign In&#8217; elements, you&#8217;ll notice that they all have unique IDs. Huzzah!</figcaption></figure> 

## Conclusion

With web automation, you&#8217;re playing a game of &#8216;how can I get Selenium to find the element&#8217;. Once you find it, you can then manipulate it. 

In this post, I covered web automation with the Selenium library. In Part 2, I covered [web scraping with the BeautifulSoup library][1]. And in Part 3, I [covered generating reports with the csv module][2]. 

See you in the next part!

 [1]: https://rockykev.com/python-and-game-of-thrones-part-2-of-3/
 [2]: https://rockykev.com/python-and-game-of-thrones-part-3-of-3/
 [3]: https://adtmag.com/articles/2019/01/08/tiobe-jan-2019.aspx
 [4]: https://rockykev.com/how-to-automate-form-submissions-logins/
 [5]: http://chromedriver.chromium.org/
 [6]: https://github.com/mozilla/geckodriver
 [7]: https://github.com/operasoftware/operachromiumdriver
 [8]: https://python-forum.io/Thread-Need-Help-Opening-A-New-Tab-in-Selenium
 [9]: https://selenium-python.readthedocs.io/locating-elements.html
 [10]: https://asoiaf.westeros.org/index.php?/login/