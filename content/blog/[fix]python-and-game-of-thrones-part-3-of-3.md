---
title: Python and Game of Thrones (Part 3 of 3)
author: rkadmin
type: post
date: 2019-03-25T02:24:36+00:00
url: /python-and-game-of-thrones-part-3-of-3/
categories:
  - coding
tags:
  - data science
  - python
  - spreadsheets

---
With the final season of Game of Thrones happening soon, I wanted to do something fun. And by fun, I mean writing a 3 part series on some cool things you can do with Python! Because why not?&nbsp;

_Check out [Part 1][1] and [Part 2][2] here._

## Data and Python 

Gathering data is easy. Interpreting them is difficult. Which is why there&#8217;s a huge surge of demand for data scientists who can make sense of this data. And data scientists use languages like R and Python to interpret it. 

In this tutorial, we&#8217;ll be using the csv module, which will be enough to generate a report. If we were working with a huge dataset, one that&#8217;s like 50,000 rows or bigger, we&#8217;ll have to tap into the Pandas library. 

What we will be doing is downloading a CSV, having Python interpret the data, send a query based on what kind of question we want answered, and then have the answer print out to us.

## Python VS basic spreadsheet functions

You might be wondering: 

_&#8220;Why should I use Python when I can easily just use spreadsheet functions like =SUM or =COUNT, or filter out the rows I don&#8217;t need manually?&#8221;_

Like for all the other automation tricks in Part 1 and 2, you can definitely do this manually. 

But imagine if you had to generate a new report every day. 

For example: I build online courses. And we want a daily report of every student&#8217;s progress. How many students started today? How many students are active this week? How many students made it to Module 2? How many students submitted their Module 3 homework? How many students clicked on the completion button on mobile devices?

I can either spend 15 minutes sorting through the data to generate a report for my team. OR write Python code that does it daily. 

Other use cases for using code instead of default spreadsheet functions:

  * You might be working with a huge set of data
  * You require multiple slices of filters and segmentation to get your answers. 
  * You need to run the same query on a dataset that changes repeatedly

## Generating Reports with Game of Thrones

Every year, Winteriscoming.net, a Game of Thrones news site, has their annual March Madness. Visitors would vote for their favorite characters, and winners move up the bracket and compete against another person. After 5 rounds of votes, a winner is declared. <figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/03/winter-is-coming-bracket-1024x790.jpg" alt="" class="wp-image-76" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/03/winter-is-coming-bracket-1024x790.jpg 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/winter-is-coming-bracket-300x231.jpg 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/winter-is-coming-bracket-768x593.jpg 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/winter-is-coming-bracket.jpg 1182w" sizes="(max-width: 1024px) 100vw, 1024px" /><figcaption>GOT March Madness 2018 via <http://winteriscoming.net></figcaption></figure> 

Since 2019&#8217;s votes are still happening, I grabbed all 6 rounds of 2018&#8217;s data and compiled them into a CSV file. To see how the poll looked like on winteriscoming.net, [click here][3]. <figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/03/csv-example.png" alt="" class="wp-image-80" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/03/csv-example.png 844w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/csv-example-300x192.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/csv-example-768x490.png 768w" sizes="(max-width: 844px) 100vw, 844px" /><figcaption>You can see the whole CSV as a [Google Sheets file][4]</figcaption></figure> 

I&#8217;ve also added some additional background data, so make the reporting a bit more interesting.

## Asking Questions

In order to generate a report, we have to ask some questions. 

**By definition**: A report&#8217;s primary duty is to ANSWER questions. 

So let&#8217;s make them up right now. 

Based on this dataset&#8230; here&#8217;s some questions. 

  1. Who won popularity vote?
  2. Who won based on averages?
  3. Who is the most popular non-Westeros person? (characters not born in Westeros)

## Before answering questions &#8211; let&#8217;s set up our Python code

To make it easier, I wrote the all the code in my new favorite online IDE, Repl.it. [Go ahead and take a look.][5]

<pre class="wp-block-code"><code>import csv

# Import the data
f_csv = open('winter-is-coming-2018.csv')
headers = next(f_csv) 
f_reader = csv.reader(f_csv)
file_data = list(f_reader)

# Make all blank cells into zeroes
# https://stackoverflow.com/questions/2862709/replacing-empty-csv-column-values-with-a-zero
for row in file_data:
  for i, x in enumerate(row):
    if len(x)&lt; 1:
      x = row[i] = 0</code></pre>

Here&#8217;s my process with the code. 

  1. I imported the csv module. 
  2. I imported the csv file, and turned it into a list type called **file_data**. 
      * The way Python reads your file is by first passing the data to a object. 
      * I removed the header, since it&#8217;ll fudge the data.
      * I then pass the object to a reader, and finally a list. 
      * _Note: I just realized I did it via the Python 2 way. There&#8217;s a_ [_cleaner way to do it in Python 3_][6]_. Oh well. Still works._
  3. In order to sum up any totals, I made all blank cells become 0. 
      * This was one of those moments where found a Stack Overflow solution that was better than my original version.

With this set up, we can now loop through the list of data, and answer questions!

## Question #1 &#8211; Who won the popularity vote?

**The Spreadsheet method:**

The easiest way would be to add up each cell, using a formula.   
Using row 2 as an example, in a blank column, you can write the formula: 

<pre class="wp-block-code"><code>=sum(E2:J2)</code></pre>

You can then drag that formula for the other rows. 

Then, sort it by total. And you have a winner! <figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/03/spreadsheet-q1.png" alt="" class="wp-image-81" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q1.png 929w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q1-300x175.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q1-768x448.png 768w" sizes="(max-width: 929px) 100vw, 929px" /></figure> 

<hr class="wp-block-separator" />

**The Python Method:**

<pre class="wp-block-code"><code>## Include the code from above

# Push the data to a dictionary
total_score = {}

# Pass each character and their final score into total_score dictionary
for row in file_data:
  total = (int(row[4]) + 
          int(row[5]) + 
          int(row[6]) + 
          int(row[7]) + 
          int(row[8]) + 
          int(row[9]) )

  total_score[row[0]] = total

# Dictionaries aren't sortable by default, we'll have to borrow from these two classes.
# https://stackoverflow.com/questions/613183/how-do-i-sort-a-dictionary-by-value
from operator import itemgetter
from collections import OrderedDict

sorted_score = OrderedDict(sorted(total_score.items(), key=itemgetter(1) ,reverse=True))

# We get the name of the winner and their score
winner = list(sorted_score)[0] #jon snow
winner_score = sorted_score[winner] #score

print(winner + " with " + str(winner_score))

## RESULT => Jon Snow with 12959</code></pre>

The steps I took are: 

  1. The dataset is just one big list. By using a for loop, you can then access each row. 
  2. Within that for loop, I added each cell. (emulating the whole &#8220;=sum(E:J)&#8221; formula)
  3. Since dictionaries aren&#8217;t exactly sortable, I had to import two classes to help me sort the dictionary by their values, from high to low.
  4. Finally, I passed the winner, and the winner&#8217;s value as text. 

To help understand that loop, I drew a diagram. <figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/03/file_data-1024x576.png" alt="" class="wp-image-82" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/03/file_data-1024x576.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/file_data-300x169.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/file_data-768x432.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/file_data.png 1920w" sizes="(max-width: 1024px) 100vw, 1024px" /><figcaption>File data is the WHOLE dataset.   
A row is a single row of data (i.e. [Jamie Lannister, RIGHT, 5, Westeros&#8230;])  
To add their total, I needed to add up row[4] + row[5] + row[6]&#8230;  
</figcaption></figure> 

Overall, this process is a bit longer compared to the spreadsheet Method. But wait, it gets easier!

## Question 2 &#8211; Who won based on averages?

You might have noticed that whoever proceeded farther in the rankings would obviously get more votes. 

For example: If _Jon Snow_ got 500 points in Round One and 1000 points in Round Two, he already beats _The Mountain_ who only had 1000 points and never made it past his bracket.

So the next best thing is to sum the total, and then divide it based on how many rounds they participated in.

**The Spreadsheet Method:**

This is easy. In Column B is how many rounds they participated in. You would divide the rounds by the sum, and presto!<figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/03/spreadsheet-q2-1024x251.png" alt="" class="wp-image-83" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q2-1024x251.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q2-300x74.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q2-768x189.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q2.png 1263w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

**The Python Method:** 

<pre class="wp-block-code"><code>## OLD CODE FROM QUESTION 1
# Pass each character and their final score into total_score dictionary
for row in file_data:
  total = (int(row[4]) + 
          int(row[5]) + 
          int(row[6]) + 
          int(row[7]) + 
          int(row[8]) + 
          int(row[9]) )

  total_score[row[0]] = total

## NEW CODE
# Pass each character and their final score into total_score dictionary
for row in file_data:
  total = (int(row[4]) + 
          int(row[5]) + 
          int(row[6]) + 
          int(row[7]) + 
          int(row[8]) + 
          int(row[9]) )

  # NEW LINE - divide by how many rounds
  new_total = total / int(row[2])

  total_score[row[0]] = new_total

# RESULT => Davos Seaworth with 2247.6666666666665</code></pre>

Noticed the change? I just added one additional line. 

That&#8217;s all it took to answer this question! NEXT!

## Question 3 &#8211; Who is the most popular non-Westeros person?

With first two examples, it&#8217;s pretty easy to calculate the total with the default spreadsheet functions. For this question, things are a bit more complicated. 

**The Spreadsheet Method:** 

  1. Assuming you already have the sum
  2. You now have to filter it based on if they are Westeros/Other
  3. Then sort by the sum<figure class="wp-block-image">

<img src="https://rockykev.com/wp-content/uploads/2019/03/spreadsheet-q3-1024x192.png" alt="" class="wp-image-84" srcset="http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q3-1024x192.png 1024w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q3-300x56.png 300w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q3-768x144.png 768w, http://rockykevnov2019v2.local/wp-content/uploads/2019/03/spreadsheet-q3.png 1156w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> 

**The Python Method:** 

<pre class="wp-block-code"><code>## OLD CODE FROM QUESTION 1
# Pass each character and their final score into total_score dictionary
for row in file_data:
  total = (int(row[4]) + 
          int(row[5]) + 
          int(row[6]) + 
          int(row[7]) + 
          int(row[8]) + 
          int(row[9]) )

  # NEW LINE - divide by how many rounds
  new_total = total / int(row[2])

  total_score[row[0]] = new_total

## NEW CODE
# Pass each character and their final score into total_score dictionary
for row in file_data:

  # Add IF-THEN statement
  if (row[3] == 'other'):
    total = (int(row[4]) + 
            int(row[5]) + 
            int(row[6]) + 
            int(row[7]) + 
            int(row[8]) + 
            int(row[9]) )
  else:
    total = 0

  total_score[row[0]] = total

# RESULT => Missandei with 4811</code></pre>

In Question 2, I added one line of code to answer that new question. 

In Question 3, I added a IF-ELSE statement. If they are non-Westeros, then count their score. Else, give them a score of 0. 

**Reviewing this:**

While the spreadsheet Method doesn&#8217;t seem like a lot of steps, it sure is a lot more clicks. The Python method took a lot longer to set up, but just changing a few lines of code.

Now imagine if the stakeholder asked a dozen more questions, such as how many points did characters who start with L get? Or how many points did everyone in round 3 get who lived in Westeros? Or if it was 640 GoT characters instead of just 64?

As the data set scales, it&#8217;ll take longer and longer to process. And that&#8217;s where the power of Python comes in.

## Conclusion

In Part 1, I covered [web automation with the Selenium library][1]. In Part 2, I covered [web scraping with the BeautifulSoup library.][2] And in Part 3 (this one), I covered generating reports with the csv module. 

Those are 3 really powerful tricks that can do a lot, all with Python.

 [1]: https://rockykev.com/python-and-game-of-thrones-part-1-of-3/
 [2]: https://rockykev.com/python-and-game-of-thrones-part-2-of-3/
 [3]: https://winteriscoming.net/2018/03/11/game-of-thrones-march-madness-round-1-vote-for-your-favorite-character/
 [4]: https://docs.google.com/spreadsheets/d/12XU-Ce5uF_wlWmFrzHLPm524Wl6y6wZefI8fBBEgsV8/edit?usp=sharing
 [5]: https://repl.it/@RockyKev/Game-of-Thrones-Generate-Reports
 [6]: https://docs.python.org/3.7/library/csv.html