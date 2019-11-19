---
title: Technical Debt
author: rkadmin
type: post
date: 2019-07-22T22:21:30+00:00
url: /technical-debt/
categories:
  - professional
tags:
  - refactor
  - startup
  - trade-offs
  - tradeoffs

---
Your team has been working on a codebase. Every few months, there would be a new feature. And the new feature had a timeline of two weeks to deliver. It&#8217;s been fun to crunch through and send it to production right before the deadline. But after 3 years, it&#8217;s been getting harder and harder to add something new. 

That&#8217;s Technical Debt.

## Technical Debt

This metaphor was coined by Ward Cunningham, in the early 90s, to explain production time to non-technical folks.

Technical Debt is the accumulation of sub-optimal decisions when working in a codebase. They&#8217;re not bugs. The code works and the team made the business decision to cut corners to meet the deadline. But over months/years, those corners you&#8217;ve cut are fighting back and now it takes even longer to add a new feature.

To use an example: 

Let&#8217;s say you have a strict deadline to build functionality, so you make the inform decision to shortcut the process. It&#8217;s not clean code, but it works and everyone is happy. 

If you go back and refactor it, then you&#8217;re paying off the technical debt.

But let&#8217;s say you don&#8217;t fix it. You have 20 other tasks and refactoring wasn&#8217;t THAT urgent for you to fix. 

Later down the line have another task to add onto that function, and you have to do a funky workaround. Then a few weeks later, you have another funky workaround for THAT workaround. These additional costs are piling up.

As you add more to it, it becomes harder to fix the original sub-optimal code. There&#8217;s a lot of functionalities that were tightly coupled together, that fixing it requires you to run up the tree and fix a bunch of other things.

Two years down the line, it really rears its ugly head, and you go, &#8220;I wish I fixed it when I first started.&#8221; That&#8217;s technical debt.

It&#8217;s sort of a thing people discover on the job, as their codebase grows. It becomes a problem as new features want to be added, and it&#8217;s getting more and more complex to do so. 

## This metaphor isn&#8217;t perfect. Something to address:

Technical Debt is NOT like Financial debt. 

  * It&#8217;s not like you own somebody money. There&#8217;s a lot of use-cases where it&#8217;s better to ignore the technical debt than repay it. 
  * Technical debt is neither good or bad. 
      * Writing a sub-optimal code that works means you can deliver a product faster. The trade-off is that in the future, new additions become harder and harder to implement.   
        
      * The other trade-off is that if the goals of the project changes or the product fail, you wasted a lot of time.
  * Technical debt is done with a purpose.
      * Shaun McCormick’s suggests that true technical debt is [always intentional and not accidental][1]. “I view technical debt as any code that decreases agility as the project matures. Note how I didn’t say bad code (as that is often subjective) or broken code.”

## What are the reasons to incur Technical debt?

Technical debt can be a business decision. 

If you have strict deadlines like you want to be first to market, or need to validate the software&#8217;s specs to a client, then faster is better.

**Example 1 &#8211; Slack:**

Slack was a last-ditch product of a game studio on the verge of bankruptcy. [Slack was built sub-optimally.][2] To fight off competitors, they focused on more functionality rather than paying off their technical debt and made the business decision to fix it all later.

**Example 2 &#8211; Using web development:**

Your client wants a new website but only has a small budget, you can afford the technical debt and write sub-optimal code to deliver it to them quickly. Since web technology moves quickly, when it&#8217;s time to update their site, the client will want a new website anyways.

**Example 3 &#8211; Visionaries:** 

If the client doesn&#8217;t know what they want until they see it, it&#8217;s even more important to work sub-optimally to deliver and validate. 

## Seeing technical debt from a non-developer

Unless you&#8217;re part of the development team, you can&#8217;t really see technical debt. If the software works &#8211; it works. But using technical debt helps explain it to non-technical folk about the trade-offs of delivering quick results vs delivering clean code.

When it reaches a breaking point, things can get really expensive. 

When Slack matured and became a household name, adding new features became harder and harder. They needed to solve their technical debt. The [Slack Engineers broke up their main product into various systems][3], and optimized it one piece at a time, fixing the technical debt and allowing them to add new features in the process.

But sometimes, it&#8217;s seen in other ways, like through undiscovered bugs. To ship software faster, Boeing [hired engineers at $9 an hour][4], saving a lot of money but opening up a lot of technical debt, but also lots of other issues. Unfortunately, one of those issues [cost $4.9 billion dollars][5].

Working fast can also cause some other issues. 

The U.S. Air Force has decided to [scrap a major ERP (enterprise resource planning) software project][6] after spending US$1 billion, concluding that finishing it would cost far too much more money for too little gain.

The original goal was for hired engineers to replace other sub-optimal code, but the technical debt was far too high that not even $1 billion dollars could have solved it. 

## Types of debt

Not all debt is the result of sub-optimal code. There are a few other reasons for technical debt.

Unavoidable debt &#8211; unpredictable/unpreventable.

It can be things like legal issues or making a higher-up decision based on industry trends that didn&#8217;t last. For example, it may have been a great idea to write a program with 200,000 lines in Clojure in a decade ago. But now that it&#8217;s hard to find devs who work in Clojure… maybe split the 200,000 code system into several systems. That way, you can get rid of it.

**Strategic debt** &#8211; long term debt but short-term gains. 

  * You may want to validate an idea or &#8220;want to be first in the market&#8221;
  * You may also have shifting priorities, so you implement the hack, and will fix it later.

**Incremental debt** &#8211; lots of small shortcuts to meet a deadline.

  * Good idea to avoid over-engineering, and ensure that your development is going in the right direction.
  * Or maybe the code is devolving into unnecessary complexity because it&#8217;s worked on by several people who don&#8217;t fully understand the original design or the stakeholders don&#8217;t know what they really want.

## How do you fix Technical Debt

**1) Scheduling refactoring into the project plans**

Following the Red-Green-Refactor method of Agile &#8211; build something that works and then optimize it later. If your project stops at the green, then you&#8217;re incurring debt.

**2) Share knowledge of what happened**

Identifying where things are un-optimized in your codebase. When it&#8217;s time to refactor, you might stumble on a better way to do it. 

**3) Debt conversion** 

Replace the current solution with a &#8216;better but not perfect&#8217; solution. Using Javascript as an example &#8211; an implementation from ECMAScript 2015 can be improved with newer features from ECMAScript 2019.

**4) Defining the clear definition of done**

Not all technical debt needs to be resolved. If it&#8217;s an end-of-life software/retiring, it&#8217;s okay. Going back to the website example &#8211; if the project is done when it&#8217;s fully functional, and in a few years, it&#8217;ll be rebuilt, you can accept the technical debt. Refactoring can be more expensive than working with un-optimized code.

<hr class="wp-block-separator" />

With a clear understanding of Technical Debt, you can make better trade-offs and business decisions.

 [1]: https://www.productplan.com/glossary/technical-debt/
 [2]: https://www.businessinsider.com/inside-the-video-game-roots-of-slack-2016-3
 [3]: https://slack.engineering/rebuilding-slack-on-the-desktop-308d6fe94ae4
 [4]: https://www.bloomberg.com/news/articles/2019-06-28/boeing-s-737-max-software-outsourced-to-9-an-hour-engineers
 [5]: https://simpleflying.com/boeing-737-max-cost/
 [6]: https://www.computerworld.com/article/2493041/air-force-scraps-massive-erp-project-after-racking-up--1b-in-costs.html