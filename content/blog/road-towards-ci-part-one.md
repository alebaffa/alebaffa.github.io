+++
title= "Journey towards Continuous Integration - Part 1"
description= ""
author= "Alessandro"
tags= ["jenkins","docker", "CI"]
date= 2018-02-23T21:06:57+09:00
draft = "false"
+++
<img src="../../assets/images/ci.jpg">

## Introduction
I am going to write a set of posts that describe what I quickly talked about in the last **Docker Tokyo Meetup**. Though, this is not going to be focused on Docker only, but rather on all the challenges I found/I'm finding trying to set up the Continuous Integration for my team's project. Nevertheless, Docker played/is playing an important role and it has revealed some interesting things about the quality of the project itself, which I'm trying to fix. It's interesting to see what happens to an application when you lock it up into a container, not only because you can clearly detect the interactions with outside systems, but also to reveal some flaws in its internal architecture. 

It's also interesting to see what kind of changes it brings to the team: coding practices, change of development habits, new learning mindset.

This is not a completed journey in my team, there's still work to do. With these posts I would like to share what I've been learning so far trying to fix all this.

Here the slides of my lightning talk at the meetup:
<script async class="speakerdeck-embed" data-id="dbf151d34622488ca03eed2ebba526b8" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## Context 
The project is a standard Web application based on **Spring Boot**, **gradle**, **Oracle**, **Apache** and **Redis** for the backend, **JQuery** and **npm** for the frontend (we don't entirely manage the frontend, though, just the integration with our API in the dynamic pages. The static assets are provided by an external design company). The application is deployed in the internal PaaS based on **Cloud Foundry**. We also develop two mobile applications, **Android** and **iOS**, and we also have various batches (in Java and Python) that do other stuff, like fetching the content that is displayed in the Web/apps or send information to **Elasticsearch** or other systems. There is also a small recommendation engine that does some Machine Learning with **Tensorflow**. In all this I am not counting other side things like **Slack bots** (in Scala and Java) and a CLI written in **Go**.

So, it's a very small project compared to what I was used to at my previous employer, but yet its architecture is an interesting set of various technologies that is fun to manage and an endless source of learning material.  

## Next posts
Other things may come up to my mind later on, but these are surely the most interesting things I learned so far that are worth sharing:

1. build system and dependency management

2. tests isolation and coding practices

3. development environments

4. knowledge sharing

5. development mindset

Stay tuned.
