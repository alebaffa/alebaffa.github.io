+++
title = "My current learning journey"
description = ""
author = ""
tags = ["personal"]
date = "2018-01-25"
draft = false
+++

I started my journey at Rakuten in June 2017 and, more precisely, I am Full Stack Engineer working for [Rakuten Magazine](https://magazine.rakuten.co.jp/). It's a pretty new Web project, so it's not big and we are very few people: 4 guys focused on Web and API (myself included), and 3 guys on Android/iOS.

First huge difference from my previous job: here I can put my hands on literally everything. We have a total freedom to choose what technology stack to use, if it's reasonable and well argumented. The main technology is **Java**, but I'm basically jumping from one technology to another one every single day, from frontend to backend. In two words: _Full Stack_.

Needless to say, my learning experience in the last 7 months has been incredibly huge. I've never used most of the technologies I'm using now, so it's an on going learning process where, in the same time, I try to make things work and available for my teammates. 

Here a quick list of what I've been doing so far, with the promise to start writing more often on this blog to share my discoveries and epiphanies.

## Web Development
I am helping with the development of the Web application and the APIs. Classic Web development here, so **Spring Boot**, **gradle**, **Apache**. Learned so much here. Spring Boot is fun, but its magic is at the same time awesome and dangerous. Still, you can do fantastic things with dependency injection and testing with Mockito is fairly painless. I'm trying to apply _outside-in-TDD_ and I feel I need to watch again [Sandro Mancuso's videos](https://www.youtube.com/watch?v=24vzFAvOzo0). Like, 100 times again. 

I learned a lot also how gradle works in detail. I fixed lot of things, but there's still lot of _magics_ that I need to understand.

I hacked a lot with Apache configuration, which is **really** powerful and so well documented that I basically managed to do things I've never heard about in no time. I know how to setup a reverse proxy, how to automatically optimize static assets, how to avoid CORS and many more things I've never done before.

I also have the opportunity to not forget how much I hate **Javascript**, and **NodeJS** in particular. Fortunately there are some cool testing libraries that allow you to write unit tests in a very readable way, but still the huge worldwide adoption of this technology remains for me a mistery.

We chose to deploy into our internal Paas based on **CloudFoundry**, which is super stable and very easy to use. The guys in that department do a truly amazing job and they provide a very high quality service. At Rakuten we are not forced to use internal services, it's just a matter of need and cost. We could deploy somewhere else externally, like Azure, AWS or Google Cloud, but again, the guys internally do such an amazing job that you really need to have a very good reason to move somewhere else.

## Devops, clean up and industrialization
I am trying to set up the **Continuous Integration and Deployment** for the project. I spent countless hours so far with **Docker** and **Jenkins** and I feel pretty comfortable with both of them now. Docker was one of the main things I wanted to master, and I spent so much time on it that now I put in a container _every-single-thing-I-do_.
Of course, Jenkins is itself a container, so it's a _Docker-in-Docker_ configuration, which is pretty fun, or  _Docker-compose-in-Docker_, which adds even more spice. Needless to say, I wasted a fair amount of my lifetime with the corporate proxy, but at least now I master the proxy settings. I'm watching the Docker repo on Github now, so I don't miss an issue.

Of course, this work is not only _"oh yeah, just put a Dockerfile/Jenkinsfile in the repo and it works"_. I had to spent, and still spending, a **huge** amount of time making our projects suitable for complete automation. Isolation is the biggest issue I found so far. I had to rewrite, fix and refactor lots of stuff in lots of different places, from NodeJS to gradle, unit tests and git-submodules (which I removed, btw).

This work is basically forcing me to deep dive into every single module we have, so I am actively working on lots of different things to make everything work together in containers.

## Data Analysis and Machine Learning
A colleague left the company and I inherited his legacy, but I'm actually not sad at all. I manage now also **Python** 
scripts that extract data from **Elastic Search** and do some cool stuff with **pandas** and **numpy**. It's fun, and those libraries are really impressive.

We also have a small recommendation engine based on **Tensorflow**, so for the moment I'm trying to improve its documentation and I plan to do a presentation with my team to explain how it works. All this once I will have figured out its details, since there's no documentation nor test whatsoever. 

## Development Experience and Agile
Another big thing I'm doing is to improve how we develop software in the team. I am trying to put in place tools and workflows that can help my teammates to be faster and more productive. Containerization is one of the things and I'll be using it to create a better development environment for the different modules we have. The fact that in our team I'm the only one with a MacBook while the others have Windows it's not helpful, and it means I am going to spend a fair amount of time with **Vagrant** and such.

Documentation improvement is another big thing I'm doing.

We use Slack in our department, so we have some **bots** with which you can interact realtime. Creating one is pretty easy, so I'm planning to create a new one soon to request a particular information that we always struggle to find in the database. 

I introduced also a bit of Scrum, for the moment only standup meetings and a better usage of backlog. There's much more work to do here, but already with this I feel like our knowledge sharing is improved since I joined. I am trying to play my role of **Scrum Master** (as I'm also certified), but the limitation here is the language: business people speak only Japanese, so for the moment I don't interact with them directly. Hope this will improve quickly.

## Mentorship
I am trying to gently introduce good practices with my teammates. The cultural differences make it a pretty difficult task. I'm the only western guy in the team and I don't know well Japanese and Chinese cultures yet, so I always struggle to find the good way to suggest things without being considered rude or unpolite (and here in Japan it is so damn more important than other countries). Anyway, things are improving and my teammates are very nice guys, so I've never encountered too much resistance. They want to learn, and it's the most important thing.

I share links and engage with them in discussions in the pull requests.

## Non technical stuff
I am part of the Mindfulness Network group at Rakuten now. I love mindfulness and meditation and I would like to help this network to group internally. It's so much important. I don't meditate every day as I wish, but I try to do it quite frequently. 

I am learning Japanese, my fourth spoken language. I am studying a lot and I'm planning to take the proficency certification (JLPT 4) in July 2018. I am not able to have a conversation with anyone for the moment, even though I can feel my listening is improving little by little. 

## More soon...
I want to keep writing more often on this blog, to give you more details about all the cool stuff listed here. There are lots of cool stuff I'm learning everyday and here it's the best place to keep track of them.