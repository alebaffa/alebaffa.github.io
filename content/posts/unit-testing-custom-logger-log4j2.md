+++
title= "Unit testing a custom logger in log4j2"
description= ""
author= "Alessandro"
tags= ["log4j","unit test"]
date= 2018-03-17T13:55:46+09:00
draft= "false"
+++

In this period I'm upgrading a Spring Boot project from 1.3 --> 1.5 --> 2.0. One of the steps is to get rid of log4j 1.x. 

In the project there is custom logger, but unfortunately its unit test with log4j2 is no more working and we receive the following error:

> mockito wanted but not invoked, Actually there were zero interactions with this mock 

Basically [this exact same error](https://stackoverflow.com/questions/41793901/logger-with-mockito-in-java) in Stackoverflow.

Let's see how we can make a new test using log4j2.

## Take a look to the log4j2 library tests
A [very good advice](https://stackoverflow.com/a/28422839/3519732) is to take a look to the tests used in the log4j2 library, to see how people are doing.
[This](https://git-wip-us.apache.org/repos/asf?p=logging-log4j2.git;a=blob;f=log4j-core/src/test/java/org/apache/logging/log4j/core/CustomLevelsOverrideTest.java;h=628d73f685870b50a80bea1f17b017b2ad61fcb7;hb=HEAD) is the JUnit test I took as an example. In my case I don't want to test a custom logging level, I just want to test the logger itself. Though, from this test you can basically see what you need in terms of dependencies and classes.

## Create a custom logger
You can create one manually yourself, otherwise Log4j2 provides a useful tool to generate one automatically. You can take a look to the official documentation [here](https://logging.apache.org/log4j/2.x/manual/customloglevels.html#CodeGen). You just need to run the following command (here it's creating a class `MyLogger.java` with the standard `info()`, `debug()`, `error()`, but you could use your own names such as `defcon1` etc.. if you need a more domain specific naming):

~~~bash
$ java -cp log4j-core-2.11.0.jar org.apache.logging.log4j.core.tools.CustomLoggerGenerator com.demo.MyLogger info=1 debug=2 error=3 > MyLogger.java
~~~

Frankly, I struggled a bit to make this work. Be sure to run it from **the same location** where `log4j-core-2.11.0.jar` is stored.

## Gradle dependencies
The following are the dependencies you need:

~~~yaml
	compile('org.apache.logging.log4j:log4j-api:2.11.0')
	compile('org.apache.logging.log4j:log4j-core:2.11.0')
	compile('org.apache.logging.log4j:log4j-core:2.11.0:tests')
~~~

The key here is the third one: `log4j-core:2.11.0:tests`. This includes a jar that contains two classes useful for the tests: `org.apache.logging.log4j.junit.LoggerContextRule` and `org.apache.logging.log4j.test.appender.ListAppender`.

## ListAppender
You have your gradle dependencies and your custom logger. Now you need to set up an [Appender](https://logging.apache.org/log4j/2.x/manual/appenders.html). In Log4j 1.x you could use

~~~java
@Mock
private Appender mockAppender;
@Captor
private ArgumentCaptor<LoggingEvent> captorLoggingEvent;
~~~

but `LoggingEvent` is no more included in log4j2. In order to get the logger events now you can use `ListAppender`, which provides the events in all the appenders in the configuration. So, let's create this configuration with the appender list. You have multiple choices here: 

- you can [create one programmatically](https://logging.apache.org/log4j/2.x/manual/customconfig.html) or 
- you can more simply create a standard configuration file. 

I went for the latter and I created my `test/resources/logj2.xml` that will be used only by my JUnit test. This one:

~~~xml
<Configuration status="DEBUG" name="TestCustomLevels">
<Appenders>
    <Console name="STDOUT">
        <PatternLayout pattern="%m%n"/>
    </Console>
    <List name="List1"/>
</Appenders>
<Loggers>
    <Root level="DEBUG">
        <AppenderRef ref="STDOUT"/>
        <AppenderRef ref="List1"/>
    </Root>
</Loggers>
</Configuration>
~~~

## JUnit
Now you can test your custom logger like so (in this example I have created a Spring Boot project in IntelliJ to have the closest conditions possible to the project I am migrating):

~~~java
@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	@ClassRule
	public static LoggerContextRule context = new LoggerContextRule("log4j2.xml");
	private ListAppender listAppender;

	@Before
	public void before() {
		listAppender = context.getListAppender("List1").clear();
	}

	@Test
	public void LoggerTest() {
		MyLogger logger = MyLogger.create(DemoApplicationTests.class);
		final List<LogEvent> events = listAppender.getEvents();
		assertThat(events, hasSize(0));

		logger.info("TEST");
		assertThat(events, hasSize(1));

		assertEquals("TEST", events.get(0).getMessage().toString());
	}
}
~~~

### Download this example
The entire source code is available [on my github](https://github.com/alebaffa/spring-boot-log4j2).