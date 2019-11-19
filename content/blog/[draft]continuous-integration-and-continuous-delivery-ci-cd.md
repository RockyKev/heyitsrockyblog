---
title: '[draft]Continuous Integration and Continuous Delivery (CI & CD)'
author: rkadmin
type: post
date: 2019-07-22T22:21:31+00:00
url: /draft-continuous-integration-and-continuous-delivery-ci-cd/
categories:
  - professional
tags:
  - devops

---
<hr class="wp-block-separator" />

Working remotely in a small development team (there were 3 of us!), communication is vital. We can&#8217;t just walk over to a coworker&#8217;s desk, and ask them what they&#8217;re working on. Did I mention that my 9 am PT was midnight for one of the devs?

At Mirasee, there were ALWAYS new tech projects. (It&#8217;s an online school with a focus on success metrics!) Maybe it&#8217;s a set of sales pages in Angular, a new microsite/course site, integration between two of our pieces of software, or custom-built WordPress plugins. 

However we communicated, it had to be succinct and to the point. And for us, the clearest form of communication was through well-written code, commit messages, and status updates in Asana. (and maybe a few late nights on Slack/Zoom for some live collaboration)

We followed a process to ensure that we can deliver on time. 

It&#8217;s not revolutionary. It&#8217;s Continuous integration (CI) and Continuous Delivery (CD).

CI and CD are more of a culture, a set of operating principles, and a collection of practices. It&#8217;s similar to the startup mentality of ship &#8216;fast, ship often&#8217;. And it&#8217;s not just for enterprise software!
  
Before I go into the details let me explain how software development was back in the day. 

## Background

Historically, software would be deployed with a set date (monthly, quarterly, or even annual releases). 

Devs would build features in isolation and Frankenstein it all together. They would then toss their build over the wall to QA testers, who toss it back and have the devs fix all the bugs. Afterward, the devs would toss it over another wall to IT team, who would plug it into the whatever tech stack, complained that it doesn&#8217;t work and tossed it back to devs with their recommended fixes. 

This little dance was repeated over a long period until the product was finally finished. (Then users would get their hands on it, break it, and starts the whole process again.)

With Software as a Service (SaaS), using set date deployments was slow and inefficient. Users can quickly take their money and jump to another business that was much more agile, had better features and adjusted to their needs more quickly. Deployments were so fast that updates could happen on the fly, with weekly or even daily updates. 

The change was for the better. Faster iterations mean it&#8217;s easier to identify bugs and improve the quality. Continuous integration also forced developers to own their code, run their automated testing, and treat the software as group collaboration, rather than a single piece being someone else&#8217;s problem. 

## What is Continuous integration

Continuous integration (CI) is the practice of merging all of the working copies (possibly from the entire dev team) to a shared mainline. It was then following some forms of automated testing to ensure everything is working, then pushed to production.

Overall, it&#8217;s version control using git/branches, followed by automation.

The goal is to deliver code changes more frequently and reveal any potential issues early on. The primary bottleneck of software is the testing phase (the part where we throw it over to QA and the IT guys), and CI cuts down on that time.

### The benefits

  * improve collaboration and software quality &#8211; since you&#8217;re pulling the most recent working build every time.
  * improves visibility of bugs with versioning, since each change is typically small, allowing you to pinpoint the specific change.
  * faster iterations, allowing devs to recognize opportunities for new features or refactoring code.
  * accelerates product delivery, since you&#8217;re cutting out the back and forth between multiple teams and waiting for their responses. 

### The process:

While it can be different for every organization, the big pieces are: 
      
1) Maintain a code repository, like on Github or Bitbucket. 
      
2) Commits to the baseline every day, to avoid conflicting changes. 
      
3) Build self-tests 
      
4) Clone the production environment so you have a place to test things.
      
5) Automate the build process. 

The Original Principles of Continuous Integration [https://martinfowler.com/articles/continuousIntegration.html], written by Martin Fowler, explains the workflow in more detail. 

### What are some Best Practices?

First, encourage developers to break down their work into small chunks, allowing anybody to track progress in the code. Second, require developers to run regression tests in their local environments. They are only allowed to commit code to version control after the regression tests pass. Finally, encourage each team member to own their code through its entire life-cycle. 

### Deploying with new features:

One technique is to use version-control branching. When a feature is complete, merge the changes into the primary development branch for [testing and production][1]. 

Another technique is feature flags, which is a config mechanism to turn on/off features at run time. Features still under development are deployed with the master branch but turned off until they are ready to be used. [The Google Chrome team uses feature flags.][2]

### Deploying to your users:

The most common I&#8217;ve seen is blue/green deployment. You have two identical production environments one is LIVE/one is IDLE. The new release is pushed to the IDLE environment, and then they switch roles. The overall idea is that if something goes wrong, you can roll back to the previous environment.

There&#8217;s also the [canary deployment][3] which is to release to a small subset of users. As you gain more confidence, you can then roll out to a wider population.

<hr class="wp-block-separator" />

## Continuous Delivery

Following Continuous Integration (CI) is Continuous Delivery (CD), which is like CI but on steroids.

CD aims to automate each step for build deployments. Deployment can be done by anyone on the team. Rather than the &#8216;hope and pray&#8217; method of launch, it&#8217;s unremarkable and the norm like midnight snapshots. 

For example, deployment may require that you take down the system for maintenance for an hour. Continuous Delivery may instead break down the software into different services, and have rolling updates. 

### The benefits:

  * Teams can proceed with daily development tasks, knowing that they can confidently launch a production-ready release at any time, without needing any late testing.
  * There&#8217;s less manual work in delivering builds, which also means less prone to human error.
  * You can deploy completely behind the scenes during work hours. 
  * In case things go to crazy town, you also have a method to rollback quickly.

### The process:

A typical CD pipeline may look like: 
        
Pull the working code from version control.
        
Pull anything else needed to run it in a specific environment.
        
Build and test locally to ensure the update doesn&#8217;t break functionality.
        
If it passes all the tests, roll it out to production.
        
If the fails any of the tests, rollback to the previous environment.
        
Provide log data and alerts on the state of delivery.

This was borrowed from the CD Checklist [https://trello.com/b/Fdd876S8/continuous-delivery-checklist-template], by Jez Humble and David Farley, the authors of “Continuous Delivery: Reliable Software Releases Through Build, Test, and Deployment Automation”.

## What are the tools needed for CI/CD?

You&#8217;ll need: 

  * Code Repository ([Such as Github or Bitbucket. More here][4].) 
  * A Bug tracking system. ([Like Bugzilla. More here][5])
  * A CI platform ([Like Jenkins, Circleci or Travis. A Comparison here][6]) 
  * A container or virtual machine. (like Docker)

**References**:      
https://dzone.com/articles/what-is-cicd     
https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html     
http://www.tothenew.com/blog/8-best-practices-of-continuous-integration-to-supercharge-your-software-development-team/     
https://www.cloudbees.com/blog/8-cicd-best-practices-your-devops-journey     
https://www.fpcomplete.com/blog/continuous-integration-delivery-best-practices     
https://www.blazemeter.com/blog/5-ci-cd-best-practices-for-better-code-quality/     
https://medium.com/@crunchtech/our-journey-to-continuous-deployment-part-1-625ab9ae7d41

 [1]: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
 [2]: https://chromium.googlesource.com/chromium/src.git/+/master/docs/how_to_add_your_feature_flag.md
 [3]: https://martinfowler.com/bliki/CanaryRelease.html
 [4]: https://opensource.com/article/18/8/github-alternatives
 [5]: https://blog.capterra.com/top-free-bug-tracking-software/
 [6]: https://hackernoon.com/continuous-integration-circleci-vs-travis-ci-vs-jenkins-41a1c2bd95f5