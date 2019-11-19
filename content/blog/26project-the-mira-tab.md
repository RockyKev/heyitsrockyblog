---
title: 'PROJECT: The Mira-Tab'
author: rkadmin
type: post
date: 2019-07-24T19:47:57+00:00
url: /project-the-mira-tab/
categories:
  - projects

---
<figure class="wp-block-image"><img src="https://rockykev.com/wp-content/uploads/2019/07/image1-Edited.jpg" alt="" class="wp-image-314" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/07/image1-Edited.jpg 800w, http://rockykevnov2019v2.local/wp-content/uploads/2019/07/image1-Edited-300x130.jpg 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/07/image1-Edited-768x333.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" /><figcaption>The Mira-Tab, a Google Chrome Extension that takes the best parts of [Momentum][1] and uses internal Mirasee assets.</figcaption></figure> 

## <u>Table of Contents</u>

  * [Introduction][2]
  * [Features][3]
  * [Built With][4]
  * [Explanation][5]
  * [Acknowledgements][6]
  * [Additional][7]

## <u>Introduction</u> {#intro}

Mirasee wanted a way to boost inter-team communication by providing a way for team members to learn more about each other. A tool to improve culture.

The result: The Mira-tab!

This Google Chrome extension replaces the default New Tab feature within Google Chrome. It then displays a beautiful splash screen with the user&#8217;s current time (and the time at the Mirasee offices), a beautiful photo from the Mirasee archives, and some random trivia about someone on the team.

## <u>Features</u> {#features}

  * **Background**: It pulls a random image from the Mirasee library of photos from prior live events, like LIFT 2017-2019, Mirasee retreats and ACES Masterminds. The Lower-Left corner provides additional background information about the photo.
  * **Middle**: It shows the current system time for the user, using [Moment.js][8] library.
  * **Top-left:** Mirasee logo and Weather (Not finished: Weather wasn&#8217;t working accurately. My goal was to pull the user&#8217;s geo-locations and generate weather using the [OpenWeather API][9].)  
    
  * **Top-right**: Context-sensitive links based on the user&#8217;s role in the company. (Not implemented)
  * **Lower-Middle:** Random trivia that the staff member shared.

## <u>Built With</u> {#built}

  * Written with pure JS
  * Bootstrap 3
  * Moment.js library

## <u>Explanation</u> {#explanation}

  * Images were located in a custom /image/ folder not included in the repo. Images were put in an array, and randomly selected. 

  * Trivia was placed in a 2d array, and was also randomly selected with the user&#8217;s image and trivia content.
  * The CSS placed a blue filter on the photo and provided the animations.
  * Bootstrap made it responsive. 

## <u>Acknowledgements</u> {#acknowledgements}

Shout out to the Mirasee team for helping with identifying the best pictures, and Rebekah Chalkey for assembling trivia facts from the weekly &#8220;Did you Know&#8221; emails.

## <u>Additional</u>  {#additional}

REPO: <https://github.com/RockyKev/mira-tab>

 [1]: https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en
 [2]: #intro
 [3]: #features
 [4]: #built
 [5]: #explanation
 [6]: #acknowledgements
 [7]: #additional
 [8]: https://momentjs.com/
 [9]: https://openweathermap.org/api