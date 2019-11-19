---
title: Automatically post Slack messages at specific times
author: rkadmin
type: post
date: 2019-06-21T18:11:38+00:00
url: /automatically-post-slack-messages-at-specific-times/
categories:
  - Interests
tags:
  - automation
  - slack

---
**The goal:** At specific times, I wanted a bot to automatically post something.

For example &#8211; 

To boost conversation within my company and get people more comfortable with expressing themselves, I set up an automation so every Monday, Wednesday, and Friday &#8211; a fun question is posted to a Slack channel.

## Ways you can do this: 

**Option #1** &#8211; [Using the /remind feature][1]. 

This is great for recurring reminders. But imagine if you had 30 questions, and you wanted to schedule a new question every day. The whole process would be incredibly painful, and error prone. 

**Option #2** &#8211; [Using the default Google Calendar Integration][2]

You can create an event at a specific time, and have Slack send the reminder.

Personally &#8211; I don’t like is the way it looks. It screams that it’s a calendar event, rather than a prompt. <figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/06/ifttt-bot.png" alt="" class="wp-image-195" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/06/ifttt-bot.png 703w, http://rockykevnov2019v2.local/wp-content/uploads/2019/06/ifttt-bot-300x175.png 300w" sizes="(max-width: 703px) 100vw, 703px" /></figure> 

**Option #3** **[RECOMMENDED]** &#8211; Using [IFTTT][3] and connect it with your Google Calendar. 

I like how this works. The bot can be customized, and it only fires off the event name. 

Best of all, you can upload events directly to Google Calendar. Here’s my [spreadsheet that you can use as a template][4]. Go ahead and make your own copy of it. 

**Option #4…5…infinite** &#8211; Just be aware there are many solutions to this problem. You can build a custom bot that relies on CRON jobs, or find a platform that has this feature. 

<hr class="wp-block-separator" />

## Going deeper with IFTTT 

**Setting up the content and when the message fires. (using Google Calendar)**

1) Create a new Google Calendar

2) Visit [Google Calendar&#8217;s][5] [[Imports/Exports][5]][5]

3) [Upload the spreadsheet][4] to your newly created calendar.<figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/06/gcalendar-1024x499.png" alt="" class="wp-image-196" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/06/gcalendar-1024x499.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/06/gcalendar-300x146.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/06/gcalendar-768x374.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/06/gcalendar.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

<hr class="wp-block-separator" />

Setting up the bot

1) If you haven’t already, create an account on IFTTT

2) Within Services, connect both your Google Calendar AND your Slack

3) Now under Applets, click on ‘New Applet’. 

4) Using the If THIS then THAT –

For THIS &#8211; set it to Google Calendar you created. <figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/06/ifttt1-1024x499.png" alt="" class="wp-image-197" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/06/ifttt1-1024x499.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/06/ifttt1-300x146.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/06/ifttt1-768x374.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/06/ifttt1.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

For THAT &#8211; set it to Slack.<figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/06/ifttt2-845x1024.png" alt="" class="wp-image-198" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/06/ifttt2-845x1024.png 845w, http://rockykevnov2019v2.local/wp-content/uploads/2019/06/ifttt2-247x300.png 247w, http://rockykevnov2019v2.local/wp-content/uploads/2019/06/ifttt2-768x931.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/06/ifttt2.png 1366w" sizes="(max-width: 845px) 100vw, 845px" /></figure> 

And there you have it!

 [1]: https://get.slack.help/hc/en-us/articles/208423427-Set-a-reminder
 [2]: https://get.slack.help/hc/en-us/articles/206329808-Google-Calendar-for-Slack
 [3]: http://ifttt.com
 [4]: https://docs.google.com/spreadsheets/d/1PamPZ-CMESiNirwaf0NEHKtdVKolmYX51-WFuodD3w8/edit?usp=sharing
 [5]: https://calendar.google.com/calendar/r/settings/export