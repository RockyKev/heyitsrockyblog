---
title: Setting up Git
author: rkadmin
type: post
date: 2019-08-05T22:24:48+00:00
url: /setting-up-git/
categories:
  - coding
tags:
  - beginner
  - git
  - how-to

---
I wrote this how-to for my bootcamp. Here it is!

<hr class="wp-block-separator" />

Note &#8211; I&#8217;ve probably done this like 30 times in my life, and I still struggle with remembering the process. It&#8217;s a weird learning curve. But once you get it, you&#8217;ll still have to google to remember how to do it correctly.

## **Needs:** 

### 1) Make sure git is installed.

Open up your cmd/terminal:

Type &#8220;git &#8211;version&#8221;

&#8212;> If you get a version number, you are good to go.&nbsp;

&#8212;> If you don&#8217;t:

<blockquote class="wp-block-quote">
  <p>
    WINDOWS USERS &#8211; I recommend getting a software package called chocolatey. Beside being tasty sounding, it&#8217;ll solve a LOT of headaches as a developer. 
  </p>
  
  <p>
    Download Chocolately at:<a href="https://chocolatey.org/"> https://chocolatey.org/</a>
  </p>
  
  <p>
    Once that&#8217;s installed &#8211; open up a cmd.
  </p>
  
  <p>
    Type &#8220;choco install git&#8221; <&#8212; (Follow these instructions: https://chocolatey.org/packages/git )
  </p>
  
  <p>
    Then try the git &#8211;version again.
  </p>
</blockquote>

<hr class="wp-block-separator" />

### 2) Make sure you have a github account. 

Sign up here: <http://github.com>

Github is like&#8230; Dropbox/Google Drive for code.&nbsp;

<hr class="wp-block-separator" />

### 3) Create a test repo for the heck of it.

Click the Green NEW button. Screenshot: <a rel="noreferrer noopener" title="" style="" href="http://i.imgur.com/g2WI0T6.png" target="_blank">http://i.imgur.com/g2WI0T6.png</a><figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/image1-1024x546.png" alt="" class="wp-image-331" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image1-1024x546.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image1-300x160.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image1-768x410.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image1.png 1350w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

Repos are like&#8230; Project folders.&nbsp;

You can set it to public or private. Here are my settings: <a rel="noreferrer noopener" title="" style="" href="http://i.imgur.com/A7ianfq.png" target="_blank">http://i.imgur.com/A7ianfq.png</a><figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/image2-1024x438.png" alt="" class="wp-image-332" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image2-1024x438.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image2-300x128.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image2-768x328.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image2.png 1296w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

It&#8217;ll give you this screen, which means this repo is ready to be synced with your VSCode. <a rel="noreferrer noopener" title="" style="" href="http://i.imgur.com/IOTPe9W.png" target="_blank">http://i.imgur.com/IOTPe9W.png</a><figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/image3-1024x430.png" alt="" class="wp-image-333" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image3-1024x430.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image3-300x126.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image3-768x323.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image3.png 1199w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

<hr class="wp-block-separator" />

### 4) Make sure you have a folder open in VS Code.

So you can either pull data FROM github or push data TO github. Let&#8217;s push data, because that&#8217;s easier for a beginner.

Create a new folder somewhere like git-test. (There&#8217;s a git-test folder in the zip file we downloaded. It&#8217;s empty btw.)

In VS Code, in the menu &#8212; File > Open Folder, and navigate to git-test.

<hr class="wp-block-separator" />

### 5) Git commands.

We are going to connect the local folder on our computer to that Github cloud folder that we just made.

Load up a terminal. At the menu, View > Terminal. That will show this box.&nbsp;<a href="http://i.imgur.com/wElPLap.png" target="_blank" rel="noreferrer noopener">http://i.imgur.com/wElPLap.png</a><figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/image5-1024x554.png" alt="" class="wp-image-334" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image5-1024x554.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image5-300x162.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image5-768x415.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image5.png 1032w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

You&#8217;re going to run these commands one after another.&nbsp;

Essentially, we&#8217;re following this, but slightly modified: <a rel="noreferrer noopener" title="" style="" href="http://i.imgur.com/zl6BINQ.png" target="_blank">http://i.imgur.com/zl6BINQ.png</a><figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/image6-1024x401.png" alt="" class="wp-image-335" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image6-1024x401.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image6-300x117.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image6-768x301.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image6.png 1172w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

Yours will be slightly different, based on your username.

<blockquote class="wp-block-quote">
  <p>
    <strong>Echo &#8220;# git-test&#8221; >> README.md</strong> <&#8212; this adds a readme.md file
  </p>
  
  <p>
    <strong>git init </strong><&#8211; this lets github know this folder is a git repo.
  </p>
  
  <p>
    <strong>git add . </strong> <&#8212; this adds ALL the files in the directory. 
  </p>
  
  <p>
    <strong>git commit -m &#8220;first commit</strong>&#8221; <&#8212; this commits all the files.
  </p>
</blockquote>

By law, you MUST put the -m followed by a message in quotes. If you don&#8217;t, you literally get sucked into limbo. This is important for git. Always leave a note.

When I did this &#8211; apparently, I didn&#8217;t set up my user on this local VS Code. It gives you a warning and lets you know what you have to do.

Here&#8217;s my screenshot: <a title="" style="" href="http://i.imgur.com/F9puGiq.png">http://i.imgur.com/F9puGiq.png</a><figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/image7.png" alt="" class="wp-image-336" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image7.png 778w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image7-300x114.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image7-768x291.png 768w" sizes="(max-width: 778px) 100vw, 778px" /></figure> 

*&nbsp;**git remote add origin https://github.com/[YOURUSERNAME]/git-test.git**&nbsp;<&#8212; this command connects your local folder to that github folder.&nbsp;

_Note: Change [YOURUSERNAME] to your username.&nbsp;_

*&nbsp;**git push -u origin master**&nbsp;<&#8212; this pushes it to github.

It made me log in via the terminal.

<blockquote class="wp-block-quote">
  <p>
    <strong>USERNAME</strong>: If you forget your username, it&#8217;s the name on the top-left & top-right.<em>(Example: RockyKev / git-test)</em>
  </p>
  
  <p>
    <strong>PASSWORD</strong>: Note, the cursor does not move when you type your password. It&#8217;s invisible. Just trust that you ARE typing a password.
  </p>
</blockquote>

Screenshot: <a rel="noreferrer noopener" title="" style="" href="http://i.imgur.com/mdU7ZJk.png" target="_blank">http://i.imgur.com/mdU7ZJk.png</a>  
<figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/image8.png" alt="" class="wp-image-337" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image8.png 828w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image8-300x131.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image8-768x335.png 768w" sizes="(max-width: 828px) 100vw, 828px" /></figure> 

<hr class="wp-block-separator" />

### 6) Check to see if your local &#8216;git-test&#8217; folder is synced with the github &#8216;git-test&#8217; repo by visiting the URL. 

EXAMPLE: https://github.com/[YOURUSERNAME]/git-test/

It&#8217;ll look like this: <figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/08/image9-1024x471.png" alt="" class="wp-image-338" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image9-1024x471.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image9-300x138.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image9-768x353.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/08/image9.png 1241w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

<hr class="wp-block-separator" />

### 7) You now know for sure that git is working with VS Code!