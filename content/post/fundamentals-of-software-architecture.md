---
title: "[Book] Fundamentals of Software Architecture - Notes"
date: 2022-01-16T18:27:29+01:00
draft: true
tags: ["general"]
description: ""
---

![cover book.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1642342998250/dgSGYyfE9.jpeg)

### Chapter 1: Introduction
**The four dimensions that define software architecture**

1. **Structure**, the type of the architecture the system is implemented in (microservices, layered, microkernel...).
2. **Architecture characteristics**, the success criteria of a system, the *-ilities* (reliability, elasticity, availability, security, agility, fault tolerance, deployability, testability, etc...)
3. **Architectural decisions**, *the rules *of how a system should be constructed. For example, in a layered architecture the presentation layer can access the database only through the business layer.
4. **Design principles**, a set of implementation guidelines, that are not forced rules (which instead is an architectural decision) and which choice is left to the developers. For example, "*in a microservices architecture the communication between services should leverage asynchronous messaging*".

**Eight core expectations of a software architect**

1. **Make architecture decisions**. The architect should make architectural decisions (e.g. reactive based framework) and give design principles (e.g. asynchronous messaging) to guide the development teams make their own technical good decisions (e.g. React, Vue, AMQP, etc...).
2. **Continually analyze the architecture**. 
3. **Keep current with latest trends**. Follow technology blogs, check technology radars, etc and find as much time as possible to keep up to date with technologies, tools, platforms and techniques. 
4. Ensure compliance with decisions
5. Diverse exposure and experience
6. Have business domain knowledge
7. Possess interpersonal skills
8. Understand and navigate politics

**The Laws of Software Architecture**
1. First Law: *Everything is a trade-off*
2. Second Law: *Why is more important than How*

### Chapter 2: Architectural Thinking
**Architecture versus design/development**
An architect deals with the four dimensions mentioned before and guides the design choices/implementation details managed by the developers, also through leadership and mentoring. There must be bi-directional communication between the architect and the developers team. 

**The three levels of knowledge in the knowledge triangle** 
From top to bottom:
1. **Things you know**. Developers' early career focuses mostly on this, which are also the *things you must maintain*.  This is related to the importance to keep a deep knowledge on few technical specialties.
2. **Things you know you don't know**. Advancing in one's career incidentally increases this level.
3. **Things you don't know you don't know**.

This reminds me of the  [Four Stages of Competence](https://en.wikipedia.org/wiki/Four_stages_of_competence) .

**Focus more on technical breadth rather than technical depth**
Taking *the three levels of knowledge* as a reference, the *technical breadth* includes the 1. and 2. . An architect must also maintain few deep technical specialties. 

> Developers transitioning to the architect role may have to change the way they view knowledge acquisition. Balancing their portfolio of knowledge regarding depth versus breadth is something every developer should consider throughout their career.


**Ways of maintaining your technical depth and remaining hands-on as an architect**
- Develop Proof of Concept. When doing so, an architect should try to produce code that is clean and can be followed as an example by the development team.
- Get involved in the development of some features.
- Bug fixes
- Develop automation and analyzing tools (check out https://www.archunit.org/)
- Code reviews

### Chapter 3: Modularity

**Abstractness, Instability and Distance from the main sequence**
- Abstractness measures the ratio between abstract elements (interfaces, abstract classes..) and concrete elements (concrete class).
- Instability measures the ratio between incoming coupling (*afferent coupling*, functions, components..) and outgoing coupling (*efferent coupling*, connections to other components).

The Main Sequence is a derived metrics based on Abstractness and Instability.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1642351293595/kzEkJdMJx.png)

> The closer to the line, the better balanced the class. Classes that fall too far into the upper-righthand corner enter into what architects call the zone of uselessness: code that is too abstract becomes difficult to use. Conversely, code that falls into the lower-lefthand corner enter the zone of pain: code with too much implementation and not enough abstraction becomes brittle and hard to maintain.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1642351366891/lnvY0jVol.png)

**What is meant by the term connascence?**
> Two components are connascent if a change in one would require the other to be modified in order to maintain the overall correctness of the system.

*Connascence* is an old topic that can be found in many other books related to clean code, refactoring, code smells. A useful link is [this](https://codesai.com/2017/01/about-connascence) .

### Chapter 4: Architecture Characteristics Defined
**Three criteria to be considered an architecture characteristic**
An architecture characteristic meets three criteria:

1. Specifies a nondomain design consideration
2. Influences some structural aspect of the design
3. Is critical or important to application success

**Implicit and explicit characteristics**
> Implicit ones rarely appear in requirements, yet they’re necessary for project success. For example, availability, reliability, and security underpin virtually all applications, yet they’re rarely specified in design documents. Architects must use their knowledge of the problem domain to uncover these architecture characteristics during the analysis phase. [...] Explicit architecture characteristics appear in requirements documents or other specific instructions.

**Operational, Structural and Cross-Cutting characteristics**
- **Operational **architecture characteristics cover capabilities such as performance, scalability, elasticity, availability, and reliability;
- **Structural** characteristics are about code quality concerns, such as good modularity, controlled coupling between components, readable code, and a host of other internal quality assessments. Configurability, Extendibility, Installability, Localization, Portability, etc.;
- **Cross-Cutting** characteristics fall outside or defy categorization yet form important design constraints and considerations. Accessibility, Authentication, Authorization, Security, Privacy, Legal, etc.

The International Organization for Standards (ISO) publishes a list of characteristics organized by capabilities. Check it out [here](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010).
