+++
title= "Unit testing a static custom logger in Spring Boot and log4j2"
description= ""
author= "Alessandro"
tags= ["spring-boot","log4j2","unit test"]
date= 2018-03-23T23:02:43+09:00
draft = "false"
+++
Last time I wrote a post about [how to unit test a custom logger with log4j2](https://www.alebaffa.com/2018/03/17/unit-testing-custom-logger-log4j2/). Today I migrated another custom logger from log4j 1.x to log4j 2.x, but this time it was encapsulated in a Spring Boot component as a static class attribute.

## Custom logger
You have a simple custom logger

```java
public class SimpleCustomLogger {
  private final ExtendedLoggerWrapper log;

  private SimpleCustomLogger(final Logger log) {
    this.log = new ExtendedLoggerWrapper((AbstractLogger) log, 
                            log.getName(), log.getMessageFactory());
  }

  public static synchronized SimpleCustomLogger getLogger(final Class<?> clazz) {
    final Logger wrapped = LogManager.getLogger(clazz);
    return new SimpleCustomLogger(wrapped);
  }

  public void info(Object message) {
    if (log.isInfoEnabled()) {
      log.info(message);
    }
  }
}
```

which is used in a Spring Boot Component like so

```java
import org.springframework.stereotype.Component;

@Component
public class CustomComponent
{
    private static SimpleCustomLogger logger = SimpleCustomLogger.getLogger(CustomComponent.class);

    public void doSomething() {
        logger.info("Hello from the Simple Custom Logger");
    }
}
```

## The power of the ListAppender
The trick of the `ListAppender` showed in my [last post](https://www.alebaffa.com/2018/03/17/unit-testing-custom-logger-log4j2/) works exactly the same here. It will listen to all the events that are happening to the logger it is attached to.

Here the log4j2.xml:
```xml
<Configuration status="DEBUG" name="TestCustomLogger">
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
```

and here unit test:

```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class SimpleCustomLoggerTest {
  @Autowired
  CustomComponent component;

  @ClassRule
  public static LoggerContextRule context = new LoggerContextRule("log4j2.xml");
  private ListAppender listAppender;

  @Before
  public void setup(){
    listAppender = context.getListAppender("List1").clear();
  }

  @Test
  public void testCustomComponent() {
    // This will write something with the custom logger
    component.doSomething(); 
    // Retrieve the ListAppender
    final List<LogEvent> events = listAppender.getEvents();
    
    assertThat(events, hasSize(1));
    assertEquals("Custom logger is catched by the ListAppender",
        "Hello from the Simple Custom Logger",
        events.get(0).getMessage().getFormattedMessage());
  }
}
```
Unit testing a custom logger with log4j2 is really super simple.
