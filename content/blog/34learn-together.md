---
title: 'PROJECT: The Peer Review System'
author: rkadmin
type: post
date: 2019-10-07T17:31:27+00:00
url: /learn-together/
categories:
  - projects
tags:
  - peer review

---
<figure class="wp-block-image alignwide"><img src="http://rockykevnov2019v2.local//wp-content/uploads/2019/10/lets-learn-1024x439.png" alt="" class="wp-image-464" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/10/lets-learn-1024x439.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/10/lets-learn-300x128.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/10/lets-learn-768x329.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/10/lets-learn.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

## <u>Table of Contents</u>

  * [Introduction][1]
  * [Features][2]
  * [Built With][3]
  * [Acknowledgements][4]

## <u>Introduction</u> {#intro}

The goal of this project was to create a online course around pre-existing online tutorials without &#8216;the online course part&#8217;. So no log-in and heavy LMS. Just straight accountability, reminders, and progression.

For the full details, I wrote a blog post here: <https://dev.to/rockykev/i-m-doing-js30-but-live-and-i-built-something-so-we-can-do-this-together-3i36>

The live Site is here: <https://rk-live-lets-learn-it-together-js30.rockykev.repl.co/>

## <u>Feature</u>s {#features}

  1. A way to quickly show what the goal of the page is. 
  2. A easy-to-find calendar of events, and a method to export/import the calendar in order to receive reminders.
  3. A opt-in box to get additional email reminders.
  4. A URL that redirects to a special room link. The room may change.
  5. A way to track progress, without a login, using your name as a identifier. 
  6. A way to show progress, without a login, using your name as a identifier.

## <u>Built With</u> {#built}



<u>Presentation Layer: </u>  
The site was built with pure HTML and [Skeleton][5] framework.

<u>Application Layer: </u>  
For Progress and Submissions: Google Form for ease.

<u>Data Layer: </u>  
For Progress and Submissions: The form submissions are pushed into a Google Sheets. A group of formulas interprets the results, and returns a row count of uniques. (So User1 can&#8217;t submit homework1 twenty times.)

## <u>Acknowledgements</u> {#acknowledgements}

Free Code Camp Portland for introducing me to Wes Bos. 

And Wes Bos, for building all of these projects, then creating videos for them.

 [1]: #intro
 [2]: #features
 [3]: #built
 [4]: #acknowledgements
 [5]: http://getskeleton.com/