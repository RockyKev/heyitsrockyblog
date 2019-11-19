---
title: How to automate form submissions/logins
author: rkadmin
type: post
date: 2019-03-24T02:30:38+00:00
url: /how-to-automate-form-submissions-logins/
# categories:
#   - coding
# tags:
#   - automation
#   - course-building
#   - how-to
#   - python

---
Python has a lot of libraries to manipulate the web. 

For example: If you want any web browser automation, there&#8217;s **Python** and **Selenium**. While if you want to scrape web content, there&#8217;s **Python** and **Websoup**. 

These tools are helpful for web developers to simplify our lives.

In this tutorial, we&#8217;ll be covering how to automate submitting forms and logging into sites. 

I build courses. One important function is that students should be able to go from the beginning of the course, to the end of the course, without hiccups. The courses I&#8217;ve built have roughly 60-80 web pages. The biggest course was almost 200 web pages.<figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/03/course-layout.jpg" alt="" class="wp-image-54" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/03/course-layout.jpg 961w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/course-layout-300x112.jpg 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/course-layout-768x288.jpg 768w" sizes="(max-width: 961px) 100vw, 961px" /></figure> 

In order to do check to see if a student can go from the beginning of a course to the end, a test would need to log in, and manually click on every SINGLE lesson, and move through it. With 80 web pages and at 0.5 minutes a page, that&#8217;s 40 minutes. That&#8217;s not including homeworks and special user flags that shows only if certain criteria happens. 

Other use cases may be: 

  * You want to submit 50 forms to your form software to make sure it&#8217;s grabbing the data correctly.
  * You want bots to grab all links on every single page. 
  * You want to quickly create 50 test users. 

## What you will learn:

You&#8217;ll be using Python 3 and the Selenium library. 

The overall goal is to first install Python3, then Selenium using PIP. Installing Python also installs IDLE, which allows you to write Python code and execute it. 

That&#8217;s a lot of random terms I just threw I at you. Let me break it down.

  * **Python (or Python3)**: The current version of Python as of this writing is Python 3.7. You should get that, or higher versions, if possible.
  * **Selenium:** This is a library that allows us to do a lot of web automation. 
      * Library &#8211; you ask? A library is a bunch of scripts to make your programming life easier. For example: The math library. You can totally write your own versions of say, figuring out the PI. But why do that when someone else already has done it? A team of developers wrote the Selenium Library that does all sorts of cool things, so we don&#8217;t have to think about much of the heavy lifting.
  * **PIP:** PIP is a recursive acronym that stands for “PIP Installs Packages” or “Preferred Installer Program”. It&#8217;s what we use to install other libraries. 
  * **IDLE**: This is the development environment that we will use for Python. It&#8217;s super basic, and great for beginners. As your code gets more complex, you&#8217;ll use something else. But for this exercise &#8211; stick with IDLE. 

If you have no idea where to start &#8211; I found the best tutorials that lay it out as clearly as possible.

### #1 &#8211; Download Python & PIP: 

I know what what you&#8217;re asking. How do we get Python?

Fortunately &#8211; most computers already have Python 2 installed. What we WANT is Python 3!

But let&#8217;s first get PIP. 

  * [Instructions for Mac to get Python 3 and PIP][1]
  * [Instructions for Windows to get Python 3 and PIP][2]

_Sidenote: Why is there a Python 2, and a Python 3? The Python community moves slowly to implement changes. Python 2 is legacy code, and will not be maintained after 2020. So unless you somehow get a job where you manage Python 2 code (which is highly unlikely), focus on Python 3. To add salt to the wound, someone made a_ [_countdown clock of Python 2&#8217;s death here_][3]_._

### #2 &#8211; Test to see if Python is properly installed: 

If Python isn&#8217;t installed correctly, there&#8217;s no point in moving forward. In an effort to measure twice, cut once &#8211; we will be testing to see if things are working correctly. 

If you see a response like 

<pre class="wp-block-code"><code>Python 3.7.0</code></pre>

It means that Python is installed. The version may be higher. 

For Macs, in your Terminal, type: 

<pre class="wp-block-code"><code>python3 --version</code></pre>

For PCs, you will need to have installed Python AND **Adjust System Variables** to ensure you can modify it from the command line. 

Open up Command Line or Power Editor, and type: 

<pre class="wp-block-code"><code>python --version</code></pre><figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/03/python-command.png" alt="" class="wp-image-53" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/03/python-command.png 990w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/python-command-300x159.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/python-command-768x408.png 768w" sizes="(max-width: 990px) 100vw, 990px" /></figure> 

### #3 &#8211; Installing Selenium and the various Webdrivers

We installed Python and PIP. Now to get Selenium. 

To get Selenium, use this [cheat code][4]. 

<pre class="wp-block-code"><code>pip install selenium</code></pre>

As a reminder, Selenium is the Python library we use for web automation. Selenium is just the library, and developed API so third-party authors can develop the webdrivers to allow it to talk to browsers. 

That way, the Selenium team can focus on their automation, while another team can focus on how to get Selenium to work on their browser platform.

For example: 

  * The Chromium team made their own webdriver for Selenium called chromedriver. 
  * The Firefox team made their own webdriver for Selenium called geckodriver. 
  * The Opera team made their own webdriver for Selenium called operadriver. 

In our code, you&#8217;ll see me do things like &#8220;Open Firefox&#8221;, and &#8220;pass this link to Firefox&#8221;, and finally &#8220;Close Firefox&#8221;. I would need the geckodriver to do that.

To install those web drivers, use this [cheat code][5]. In your command line, type: 

<pre class="wp-block-code"><code>pip install webdriverdownloader</code></pre>

### #4 &#8211; Using the IDLE and writing Python code: 

To make this simple, we&#8217;ll be writing and running our Python 3 code in IDLE. What is IDLE?

<blockquote class="wp-block-quote">
  <p>
    <strong>IDLE</strong> (short for <strong>integrated development environment</strong><sup><a href="https://en.wikipedia.org/wiki/IDLE#cite_note-GvR_IDLE_email-1">[1]</a><a href="https://en.wikipedia.org/wiki/IDLE#cite_note-2">[2]</a></sup> or <strong>integrated development and learning environment</strong><sup><a href="https://en.wikipedia.org/wiki/IDLE#cite_note-3">[3]</a></sup>) is an <a href="https://en.wikipedia.org/wiki/Integrated_development_environment">integrated development environment</a> for <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python</a>, which has been bundled with the default implementation of the language since 1.5.2b1.<sup><a href="https://en.wikipedia.org/wiki/IDLE#cite_note-4">[4]</a><a href="https://en.wikipedia.org/wiki/IDLE#cite_note-5">[5]</a></sup> It is packaged as an optional part of the Python packaging with many <a href="https://en.wikipedia.org/wiki/Linux_distributions">Linux distributions</a>. It is completely written in Python and the <a href="https://en.wikipedia.org/wiki/Tkinter">Tkinter</a> GUI toolkit (<a href="https://en.wikipedia.org/wiki/Wrapper_function">wrapper</a> functions for <a href="https://en.wikipedia.org/wiki/Tcl">Tcl</a>/<a href="https://en.wikipedia.org/wiki/Tk_(framework)">Tk</a>).
  </p>
  
  <p>
    <br />IDLE is intended to be a simple <a href="https://en.wikipedia.org/wiki/Integrated_development_environment">IDE</a> and suitable for beginners, especially in an educational environment. To that end, it is cross-platform, and avoids feature clutter.
  </p>
  
  <cite>via Wikipedia<br /></cite>
</blockquote>

**Code structure:** Python is that it uses INDENTATION to segment code blocks. Other popular programming languages (Like Javascript, C++, and PHP) uses curly brackets. How you indent the code matters!

Python also doesn&#8217;t end statements with semicolins. You can still do it, but there&#8217;s no reason to do so.

<pre class="wp-block-code"><code># WRITTEN IN PYTHON
def print_jokes(): 
  print("The problem with kleptomaniacs is that they always take things literally.")

# WRITTEN IN PHP
function print_jokes() {
  echo "The problem with kleptomaniacs is that they always take things literally.";
}</code></pre>

### #5 &#8211; Running a log-in script: 

Below, I have a log in script that allows me to log into 

<pre class="wp-block-code"><code>## Selenium Log In Test
## 
## Description: This code logs into https://imgur.com automatically using Firefox.

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time

## Define which browser to use
driver = webdriver.Firefox()
driver.implicitly_wait(5)
    ## implicity_wait makes the bot wait 5 seconds before every action
    ## so the site content can load up

## Define the user and email combo. 
bot_name = 'testingwithselenium'
bot_email = bot_name + '@gmail.com'
bot_password = 'testingwithselenium1' ## required a number, so 1 is at the end
print(bot_name + " is getting started")

## Open the login page
driver.get('https://imgur.com/signin')

## This code checks the page for specific HTML tags
## This is looking for the element with ID 'username'			
textfield_username = driver.find_element_by_id('username')
textfield_username.clear()
textfield_username.send_keys(bot_email)

## This is looking for the element with ID 'password'			
textfield_email = driver.find_element_by_id('password')
textfield_email.clear()
textfield_email.send_keys(bot_password)

## This is looking for the element with the class 'btn_action'			
submit_button = driver.find_element_by_class_name('btn-action')
submit_button.click()

## wait for 2 seconds
time.sleep(2)

## RESULT == it should log you in

## Now to close the browser
try:
    print(bot_name + "closing")
finally:
   driver.quit()
    

print("task complete")
</code></pre>

### Additional information

That script is the barebones version of logging in. 

If you had to make 50 test accounts, look into turning that script into a [function][6], and then [running a loop][7]. 

## Conclusion

There&#8217;s a lot of use cases for automation. It takes a while to set up. But once you do, there&#8217;s a lot of directions you can go into.

 [1]: https://evansdianga.com/install-pip-osx/
 [2]: https://matthewhorne.me/how-to-install-python-and-pip-on-windows-10/
 [3]: https://pythonclock.org/
 [4]: https://pypi.org/project/selenium/
 [5]: https://pypi.org/project/webdriverdownloader/
 [6]: https://www.tutorialspoint.com/python/python_functions.htm
 [7]: https://wiki.python.org/moin/ForLoop