+++
title= "Debug a Java Spring Boot application in Docker from IntelliJ"
description= ""
author= "Alessandro"
tags= ["java","IntelliJ", "docker-compose", "debug"]
date= 2018-02-28T23:19:11+09:00
draft = "false"
+++
You have a Java Spring Boot application built with Gradle in a Docker container and you need to debug it from your favorite IDE on your host machine (IntelliJ).  

You can do it by attaching the remote debugger in IntelliJ to your Java application running in Docker.

### Steps
#### Open port :5005 in the container
In this example the Java container is created using `docker-compose`. 
All you need to do here is to open the port `:5005`:

<script src="https://gist.github.com/alebaffa/f3fdf9f5cc22394f8d397f475f693115.js"></script>

#### Create a remote debugger in IntelliJ
`Run --> Edit Configuration --> Add new configuration --> Remote`

<img src="../../assets/images/remote-debugger.jpg">

The default port is exactly the `:5005`. Be sure that the debugger mode is on **Attach**. Give it a name to this configuration (i.e.: Docker debugger)

#### Add an option in Gradle
You need to also add an additional option in your gradle command: `--debug-jvm`. Say you need to debug an integration test, all you need to do is this:

`./gradlew integrationTest --debug-jvm`

#### Start the test in Docker
You run `docker-compose up -d` and your integration tests automatically start. After few seconds, the execution will stop exactly when Spring starts the integration tests and it will show a message like `Execution waiting on port :5005`.

What you need to do here is:

1. put a breakpoint somewhere in the code in IntelliJ
2. Start the Remote debugger in IntelliJ (the Docker debugger) you created previously

<img src="../../assets/images/start-remote-debugger.jpg">

#### Enjoy your debug
The remote debugger will unfreeze the integration tests in Docker and your breakpoint will fire up as soon as the execution gets there.