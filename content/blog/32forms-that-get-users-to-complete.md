---
title: Forms that get users to complete
author: rkadmin
type: post
date: 2019-09-04T17:55:33+00:00
url: /forms-that-get-users-to-complete/
categories:
  - Interests
tags:
  - forms
  - motivation
  - strategetic thinking

---
Imagine if we have a stakeholder say to you &#8211; &#8220;Hello, designer (that&#8217;s you). Our research team has discovered that customers who complete our 100 QUESTION FORM have a customer value of millions of dollars. In other words, if they complete this 100 QUESTION FORM, they are identified as a hot lead and what keeps us in business.&#8221;

_100 Question_ form. Yikes. 

By the way, they&#8217;re different questions &#8211; not just true/false. You now have to make a form that contains radio buttons, checkboxes, text fields, text fields for paragraphs.

That&#8217;s your goal: Get users complete this 100 question form. 

You&#8217;re the designer &#8212; get to it!

In this post &#8211; we&#8217;re going cover some methods to get users to complete a 100 question form. 

### Real Use Cases

Anyone recognize any problems from the get-go?

I&#8217;ll save you the trouble. The problem is that long forms are boring. THEY SUCK.

You might go &#8212; This is a unrealistic and hypothetical scenario. Is it really? What real world applications are there that has 100 question forms?

  * Tax software. 
  * Healthcare software.
  * Maybe your SASS company builds complex database tools that require hundreds of options to set up before it&#8217;s ready.
  * Maybe you&#8217;re a Consultation/Audit firm that prefers to get all the details before you help solve problems.
  * Maybe it&#8217;s for higher education &#8211; like a online SAT or Homework.
  * Maybe it&#8217;s really really shitty Online job application software.

I would say, maybe the use cases are real and this isn&#8217;t as hypotehtical as it seems. 

Let&#8217;s jump into solutions.

## Design-oriented solutions

So this project is yours &#8211; and you&#8217;re trying to figure out &#8212; how do you make this project successsful? How do you make a 100 question form as friction-free as possible so people complete it?

I&#8217;m going to go through the current solution that exists today. 

### TIP 1: break the questions into multiple pages/multiple steps.

This is a very common solution. 

Essentially, rather than have a 100 questions on one page, you would break the questions into multiple pages. 

You can also give a tiny motivational boost with a progress bar do they can visually see which step they&#8217;re in.

### TIP 2: Chunking

We talked about breaking it into multiple pages/multiple steps. How exactly should you organize it?

**In education, there is a concept known as chunking**. It&#8217;s grouping like-minded content together so the user is spending less cognitive energy shifting between topics. 

For example: asking all the financial questions in one step, then all the expenses questions in another step. 

### TIP 3: Load Low friction questions in front.

**Load your questions up like a movie or TV series.** Start strong with easy questions, then load up the harder questions in the middle, but end with a solid section last to nudge them of the finish line. 

In other words &#8212; do it like The Office, where it starts really good, then the middle seasons get weird, but the last episode nailed it. Just don&#8217;t do it like Game of Thrones, 

### TIP 4: Modifying the copy to reduce time-to-completion.

**Reword the questions.** With a 100 question form, you want it to be snippy. If each question is like a 5th grade math problem about Johnny and his 15 watermeleons, your user is going to waste a lost of energy just trying to follow.

**Look for ways to chop your sentences.** So…   
Instead of &#8220;In this section, we will ask you the following: Financial information, financial needs, and expenses.&#8221; 

Go with: &#8220;In this section, we will ask you about your finances.&#8221;

### TIP 5: Make the form easy to use.

**No zig-zags.** Avoid multi-column layouts. Single column. Data says left align too. 

**Use labels &#8211; not placeholder text.** If it&#8217;s a phone number field &#8211; don&#8217;t use 555 inside the innertext. put it outside as a label or sublabel.

**Have inline form field validation.** Don&#8217;t give them an error after submitting.

**Don&#8217;t use hover support text.** Don&#8217;t use tip boxes either. Put support text in the sub-label.

**Add the word (optional) inside of the ones that are optional.** It&#8217;s 2019, but there are still people who don&#8217;t know that the red asterisk means mandatory.

**Make your buttons clear Call to Actions.** Is the button a Next section button, or a submit button? Or Next Page (2/3).

**If it&#8217;s a important submission piece** &#8211; add a &#8216;extra&#8217; page where it reflects the content back to them &#8211; so they can double check themselves. For example: On Amazon, you add things to your shopping cart. Before checking, it asks if this is your final purchase. 

### TIP 6: Animation and pretty graphics.

**Make it fun.** Use an animation library so content swooshes when you get to the next page. Because you know… FUN! Right?

Or if you&#8217;re really ambitious &#8212; you can sex it up like SurveyMonkey/Typeform style navigation where it displays answers one at a time. For a 100 question survey, it can be exhausting though.

**Make it graphical.** Prettify it with font awesome icons, or replace some answers with visuals.

## You&#8217;re only solving half the problem

What was the goal again? 

The goal wasn&#8217;t to great _digestable_ 100 person form. The goal was to get people to _complete the form_.

At the beginning of the post &#8212; I said this was a topic about User Experience. Not User Interface. 

If you look at your job title and go, &#8220;Yep, all I do is design &#8212; no more, no less.&#8221; Then you might as well stop here, because you&#8217;ve achieved the bare minimum and you can move on with your life.

For those who prefer to go above and beyond &#8212; 

## User Experience-oriented Solutions

There&#8217;s a saying in business: _&#8220;There are no right answers, there are only plausible answers.&#8221;_ 

What are some mechanisms to increase the completion rate?

I want to start by sharing that this is all based on best practices in a business education environment, and your business situation may be different. We tested many many interventions to increase completion rate &#8211; and I am sharing them here. 

### TIP 1: Adding an ability to recall their response.

**A Save button.** If a user wants to stop now and save the rest for later, be sure to add a notification response as well. Send email, add a text message reminder. It&#8217;s not just one message &#8212; Put them on a notification funnel. Like dating, the money is in the follow-up.

**To allow for frictionless follow-up,** add a user creation in the beginning of the form &#8211; so you can capture their contact information early. Just be sure to add a field to say it&#8217;s okay to send them text messages &#8211; which is part of the law.

**Save content in localstorage.** If they accidentally X&#8217;d out of the site, the content doesn&#8217;t disappear, since it&#8217;s safely stored in their browser cache.

**Break your form into multiple forms.** I saw this from tools like Hubspot and Tax software. Their long forms are actually 8 forms in one, with conditionals to bypass form sections. If you complete the &#8216;user info&#8217; form and leave &#8211; when you return, that form section is auto-completed and has already been submitted. 

### TIP 2: Add a help feature.

**Knowledge base.** With 100 question forms, anything that appears overwhelming &#8212; it&#8217;s one of the rare times where I lean towards CLEAN over CLARITY. 

To make labels appear shorter, we used official terminology. Those in the know didn&#8217;t have a problem. But if you weren&#8217;t sure what it was asking, clicking on a link would open a new tab that pointed to a more detailed explainer. We also tracked these clcks so we know where people are struggling.

**We also added a method for quick support.** A chat feature would pop up if they were on a page for longer than our average. Or a email button. If you have the resources, it&#8217;s valuable and provides Just-in-time support. 

### TIP 3: Personalization.

**Say their names back to them.** You&#8217;re already capturing all of this data. Saying, &#8220;Hey John, this next section will talk about your expenses. You mentioned before that you spent $15,000 on boats, so lends find you a way to save you more money.&#8221; 

### TIP 4: Testing.

**User testing.** I think this is obvious as a designer. 

**A/B Testing.** If you&#8217;re unsure why people are dropping in section 2 &#8211; explore randomization of the sections. Constant modifications and incremental gains is the battle here. 

### TIP 5: Tracking.

**Heatmaps**. Heatmaps lets you know where their mouse is going, and how far they go before they stop.

**If you set up caching/partial submissions,** you can add tracking data to know if they stopped at question 50 or question 51. 

### TIP 6: Finally, adding a motivator.

We spend a lot of time making things pretty or making them work. But it&#8217;s a separate phase to make users &#8216;want&#8217; to do &#8216;the thing&#8217;. 

**Adding a content-only page of instructions**. If the next 8 questions is about finances, give them a brief piece of content that explains what questions you&#8217;re asking, why, and what&#8217;s next. Studies about visualization (https://www.scientificamerican.com/article/can-visualizing-your-body-doing-something-help-you-learn-to-do-it-better/   
) show that users are more likely to make it real if they can &#8216;see&#8217; the end result.

**Let users know how long it will take**. It&#8217;s called respecting their time. Add it in parts of the instruction (this section should take 5 minutes), or add it as extra content below buttons.

**Add little motivational text.** An alert notification that says &#8212; &#8220;You&#8217;re 50% of the way there&#8221; is a positive way to nudge them forward. Udemy gives you which percentage of the course you&#8217;re in when you start each video.

**Make the form fun.** In one form, I made the submit button into a hand, so they can &#8216;high five&#8217; to submit. The button was tied to a confetti animation. I would get emails sharing how fun that was. 

The emails we also send &#8211; both the notifications and the completions had lots of humor in it. 

**If you want to go extreme &#8211; add pressure.** Pressure is a great motivator, and can easily be abused &#8211; like what I&#8217;m going to explain to you now! We added a timer to our homework questions. It really put fire on their asses. The thing is &#8212; the timer was fake. It wasn&#8217;t something the team wanted &#8211; as the prior education lead was against timers. When he was fired, we put it in, and it boost completion rates from 45% to 75%. Suck an egg Lou, EX director of education. 

**Another extreme &#8211; take it away from them**. In one of the courses I built &#8211; there was a mechanism where access was removed and their partial submission deleted after X days. 

## Conclusion

The maintaining process of increasing completion rates of your form is a project on it&#8217;s own. 

But little tweaks can be multipliers, and bring your projects better success.