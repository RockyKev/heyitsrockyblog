---
title: Gravity Forms – the best form plugin for WordPress
author: rkadmin
type: post
date: 2019-07-18T19:23:35+00:00
url: /gravity-forms-the-best-form-plugin-for-wordpress/
categories:
  - Interests
tags:
  - forms
  - wordpress

---
What I like about WordPress is that it&#8217;s a pre-made swiss army knife. There&#8217;s a lot of uses for a WordPress site, from something traditional like a blog to a storefront to forum, to an online school. 

  
Regardless of why you use WordPress, there&#8217;s one plugin that I constantly return to. 

It&#8217;s a plug-in for form software called Gravity Forms.

## What is Gravity Forms:

**Gravity Forms is a Form software.**

I know &#8211; you&#8217;re probably yawning with excitement. Continue reading and I&#8217;ll share that it&#8217;s MORE than just form software. I&#8217;ll explain all the fun use cases later down the line. 

But to provide more details &#8212; 

On your site, you probably have some user interaction, where a user types something in a box and hits the SUBMIT button. Maybe that interaction is joining your email list or reaching out to you for tech support. 

Form software does that.

**Gravity Forms is a WordPress plugin that you pay for**

You&#8217;re probably used to not paying for WordPress plugins, or paying $10 for it. You get what you pay for, and that includes software that doesn&#8217;t work.

Gravity forms is a yearly subscription. (For current pricing, click here: https://www.gravityforms.com/pricing/)  


If you work with a professional WordPress Developer, they might have an Elite License. I know I do!

## Why do I like Gravity Forms over the others?

First, they have an [incredible line-up of add-ons][1]. 

  * Want a pop-up box that subscribes your visitor to your AWeber product nurture email sequence? _There&#8217;s an add-on._
  * Want a Contact Us that automatically tags them a very specific way in Hubspot? _There&#8217;s an add-on._
  * Want a way where if a user finishes a form, the notifications get sent to a specific Slack Channel, the form saved in Dropbox, and a to-do list is added to your Trello Project List? T_here are add-ons._
  * Maybe you want to create a Checkout Page that takes money via PayPal, and updates your details in Freshbooks? _Add-ons._
  * Maybe you want Polls, Quizzes, a Signature for contacts, and a way for users to register. _Surprise &#8212; add-ons._

Anything you can&#8217;t figure out, you can probably use Zapier.

So that&#8217;s a lot from a non-technical user&#8217;s perspective. 

## From a developer&#8217;s perspective:

### Webhooks

Gravity Forms has webhooks, so you can send API calls after you complete a form. Maybe you&#8217;re using a custom platform that doesn&#8217;t have integration &#8211; but takes API calls. You can build your own integration. 

There are also ways to hook into many actions within Gravity forms, to extend functionality. Do you want the confirmation page to change based on what type of answer the user has selected? You can use the [gform\_after\_submission][2] method.

That&#8217;s only scratching the surface. Check out the [documentation][3] for more of what&#8217;s possible.

### Design-wise

Everything about Gravity Forms can be modified. Every element in a Gravity Form is a unique ID.

Gravity Forms is responsive right out of the box. But you can fine-tune the mobile design.

If you want to remove all the questions, change the way text fields are laid out, and make the &#8216;next page&#8217; of the form animated &#8211; you can target them easily.

## Use-cases

What are things I have used Gravity Forms for:

<u>Contact Us</u>

The easiest thing to create that requires no additional heavy lifting is the &#8216;Contact Us&#8217;. The Contact Us had dynamic data and changed the types of questions based on your original choice. 

Example: What type of support do you need? [billing issue, technical support, account issue]. 

Within the confirmation settings, you can also change where the email goes based on the answer, and auto-generate a very slick response email to the customer. 

<u>High Five</u>

For an online course that had 8 modules, I needed a way to create a flag that a user has completed a module. Once that button is clicked, it unlocks the next module. 

I wrote code that essentially said, &#8220;If the user completes this form, put it in their user meta.&#8221; When it&#8217;s populating what Modules the student has access to, the site would look at the user meta to see what&#8217;s there and what&#8217;s not.

So I made a Gravity Form where the submit button was an animated high five.

<u>Slack integration</u>

For one course, students could introduce themselves in the Course site, which would automatically fire a message to their private Slack Group. 

<u>Assessments</u>

A good course has assessments. I&#8217;ve used Gravity Forms to provide open-ended questions that a student fills out. When the student fills it out, their response gets sent back to them and directly to their instructor. 

To make it even easier for the group of instructors to share one inbox, I tagged the assessments with the instructor&#8217;s name. So they can have one inbox, and still segment it based on their student.

<u>Opt-in</u>

Using [Pop-up maker][4] to create a timed pop-up. So if a visitor is on the site for 20 seconds, the pop-up would ask the user to subscribe to the site.

I&#8217;ve also created a sticky banner where a user can opt-in. I modified a lot of the default design to make it cleaner. (screenshot)

<u>Peer Review</u>

One of the more complex things I&#8217;ve done is known as the Peer Review System. The student fills out an assessment. The data gets stored and then gets spit out to an anonymous student to provide feedback, using a second Gravity Forms form. It relied on Gravity Forms&#8217; action hooks to display the form results. 

## Conclusion

Gravity Forms is amazing, and it should be a part of any WordPress Plugin Stack.

 [1]: https://www.gravityforms.com/add-ons/
 [2]: https://docs.gravityforms.com/gform_after_submission/
 [3]: https://docs.gravityforms.com/category/developers/
 [4]: https://wordpress.org/plugins/popup-maker/