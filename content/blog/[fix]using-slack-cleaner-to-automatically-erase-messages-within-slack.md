---
title: Using Slack Cleaner to automatically erase messages within Slack
author: rkadmin
type: post
date: 2019-06-17T20:34:12+00:00
url: /using-slack-cleaner-to-automatically-erase-messages-within-slack/
categories:
  - Interests
tags:
  - automation
  - slack

---
NOTE: In order to use Slack-Cleaner, you do need administrative privileges to your Slack group. Be aware &#8211; there’s a bit of coding involved, but nothing that I don’t explain in the instructions below.

You’re probably using the free version of Slack, and need to do some maintanence. Maybe there’s been a troublesome user who you need to remove all of their messages. Or maybe you went bot crazy, and there’s now too many bot messages spamming your channels. 

For that, there is <a href="https://github.com/sgratzl/slack-cleaner" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">Slack Cleaner</a>.

Within Slack Cleaner, the instructions aren’t super clear for a newbie. So the goal of this guide is to provide more details in the how-to, 

_I&#8217;m running Windows &#8211; So I&#8217;ll explain how to do it via a Windows computer (Windows 10 to be specific). If you&#8217;re a Mac, 90% of the content is the same &#8211; you’ll just need to find the Mac equivalent. (So instead of ‘How to install PIP for Windows’, Google ‘How to install Pip for Mac’.)_  


## A Steep Learning Curve

If you are super new to this, it may feel completely over your head. But I assure you &#8211; once you set it up, you&#8217;ll feel like a bon-a-fide hacker. Let this be the first step to your journey to automating your life with scrips.

Additionally, the hurdle is just the set up! Once you are past that hurdle, everything is a lto easier. 

Each step requires a separate tutorial, which I’ll link to. The tutorial links I discovered were written for novices, which is why I recommend them.

## Getting Started:   


The overall process is to install PIP, which allows you to install this Slack Cleaner script. Then, you&#8217;ll get your Slack legacy API keys, and run specific commands in CMD or PowerShell.

**If that’s a bunch of buzz words &#8211; don’t worry. I’ll explain in detail what each bit is.**   


<hr class="wp-block-separator" />

### STEP 1: In order to install PIP, you’ll need to install Python. 

Python is a scripting language, and PIP is a package manager. The analog would be if you hired movers, and the mover was German. So you need to learn German, to tell the mover where to put your stuff and set it up correctly.  


How to install python 3.7 (Should take 10 minutes): 

<a href="https://matthewhorne.me/how-to-install-python-and-pip-on-windows-10/" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">https://matthewhorne.me/how-to-install-python-and-pip-on-windows-10/</a>

<hr class="wp-block-separator" />

### Step 2: After installing Python, your next step is to install PIP. 

What is PIP? 

PIP is a Package Manager for Python. If you write code using Python (which may contain a folder of a bunch of python code), you’ll want to ‘pack it up’. PIP makes it easier for Python developers. 

Using our German metaphor, you now speak German! You want to explain to him how you prefer to unpack your things.

Installing PIP (like 2 minutes) 

<https://www.liquidweb.com/kb/install-pip-windows/>   


<hr class="wp-block-separator" />

### Step 2.5: Install git

In the comments, @Justin shares that he needed to install Git to get this working. 

To install git (for windows) &#8211; download the 32-bit or 64-bit &#8220;.exe&#8221; file here: <https://github.com/git-for-windows/git/releases/tag/v2.23.0.windows.1>

_Note &#8211; the screenshot may not match exactly what&#8217;s on the site. New versions of Git get released all the time. Just make sure you grab the latest .exe file._ <figure class="wp-block-image">

![][1]</figure> 

<hr class="wp-block-separator" />

### Step 3: You’ve installed Python, as well as PIP. Now install the Slack-Cleaner script.   


The readme: [<https://github.com/sgratzl/slack-cleaner>][2]

Open up CMD or PowerEditor (with Admin access).

(1 minute Youtube video: <a href="https://www.youtube.com/watch?v=EohzkYPV6nI" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">https://www.youtube.com/watch?v=EohzkYPV6nI</a>)

I’ll be referring to the command line as CMD. 

While in the CMD and with Admin access, and run this code. 

<pre class="wp-block-code"><code>pip install -e git+https://github.com/sgratzl/slack-cleaner.git#egg=slack-cleaner</code></pre>

That should start the installation.

<hr class="wp-block-separator" />

### Step 4: You’ve installed Python, PIP, and hopefully Slack-Cleaner.

Now to see if the installation worked!

In the CMD line, type: &#8220;slack-cleaner &#8211;help&#8221; 

If you can run this, you&#8217;ve installed it correctly.   
<figure class="wp-block-image">

![][3]</figure> 

If it isn&#8217;t working&#8230; Make sure you followed step 1 correctly (by following that tutorial), and had Python in the environmental variables.   


<hr class="wp-block-separator" />

### Step 5: If Slack-cleaner works, then it&#8217;s time to get your Slack Legacy API.

You can find your Slack Legacy API tokens here: <https://api.slack.com/custom-integrations/legacy-tokens>   


It should look like this&#8230; here is mine: <figure class="wp-block-image">

![][4]</figure> 

(I&#8217;m okay sharing that, since you can only see 30% of the full api token. I challenge anyone to guess the other 70%.)   


<hr class="wp-block-separator" />

### 6) Now write up the command, and run it in your CMD   


Running this code It will give you a SIMULATION of everything that will be erased. It won’t actually do it. We’ll do it for real in Step 7. 

\# Delete all messages from certain user

&#8220;slack-cleaner &#8211;token <TOKEN> &#8211;message &#8211;channel gossip &#8211;user johndoe&#8221; 

Replace the <TOKEN> with your token, obviously.   


<hr class="wp-block-separator" />

### 7) Okay now to do it for real. 

We’ll add two additional parameters to your line.

Add “&#8211;rate=1 &#8211;perform” 

“rate=1” 

means that it&#8217;ll take 1 second for each call. If you don&#8217;t add it, Slack cuts your access.   


“&#8211;perform” 

means to commit the actual change. 

FROM: &#8220;slack-cleaner &#8211;token <TOKEN> &#8211;message &#8211;channel gossip &#8211;user johndoe&#8221;   


TO: &#8220;slack-cleaner &#8211;token <TOKEN> &#8211;message &#8211;channel gossip &#8211;user johndoe &#8211;rate=1 &#8211;perform&#8221;   


<hr class="wp-block-separator" />

Alright, that should be the step by step! Leave a note in the comments if it worked, or if there’s a specific step that’s giving you issues. Cheers!

 [1]: https://static.md/24c5421a266a9368c7f32e43e51230c2.png
 [2]: https://github.com/sgratzl/slack-cleaner
 [3]: https://i.imgur.com/hAO13Dz.png 
 [4]: https://i.imgur.com/4abIHC7.png 