+++
title = "Dependency Injection VS Extract and Override Factory Method"
description = "Two ways of solving the Racing Car kata - Text converter"
author = "alebaffa"
date = "2016-10-09T21:17:23+02:00"
tags = ["refactoring"]
draft = "false"
+++

The TextConverter exercise (in the _Racing_ _Car_ _kata_ suite) is a very interesting exercise for refactoring legacy code. As I am reading _Working Effectively with Legacy Code_ I found two ways of solving it.

Refactoring can only be done safely with unit tests and so I did, rigourously in TDD. Though, in this blog post I am not going to show you all the testing process, but only the two ways of decoupling the dependency.

## The problem 
The code comes with a classic dependency issue: a method that _secretly_ (from the point of view of the client) reads from an external file that is created using the filename passed in the constructor.
So, no way for the client to know about this file before or to avoid its usage. Here the original code:

 {{< gist f1f7e91dba6c6252d1237381da856645 >}}

As you can see, the filename "_fullFilenameWithPath_" is passed in the constructor and then it's used internally by _FileReader_. This creates an annoying hidden dependency that prevents the testing of the method _convertToHtml()_. If you try to call the method _convertToHtml()_ from your tests you will get a "_File Not Found Exception_". 

Let's leave aside that ugly mix of levels of abstractions in this method (_FileReader_, _BufferedReader_, _< br />_, static call to _escapeHtml()_ all together .. _blah_). I found that this will be fixed almost _automagically_ once you figure out how to extract that dependency from there.

So, how to extract that dependency so that we can test it?

## Technique 1: Dependency Injection 

> An injection is the passing of a dependency to a dependent object (a client) that would use it.

In this case the dependency is _FileReader_ and the dependent object is our _HtmlTextConverter_ class. 

I want to pass the dependency from the constructor, but we can't change the existing one. In _Working Effectively with Legacy Code_ this is called _Preserving Signature_, but more easily we can't change an API that is used by the clients. 

So, I can refactor this class in 3 steps:

1. I extract the _new FileReader_ from the method so that now it is created by a ReaderFactory (I am using the [Factory Design Pattern](https://sourcemaking.com/design_patterns/factory_method) here, so that I can create a FileReader, or more in general a Reader, with a method _createFactory()_)
2. I create a new constructor that takes a _ReaderFactory_ interface as input
3. I make the old constructor to call the new one passing the implementation of _ReaderFactory_ that does the same job of _new FileReader()_.

The point 3 is called _Parametrize Constructor_ in _Working Effectively With Legacy Code_ and this is the result:

 {{< gist b4e9323e3b692cb6de63efa1c08fa41d >}}

 The fact that I extracted the _FileReader_ from the method allowed me also to better define how I wanted to use it, so to get rid of _BufferedReader_, now handled in HtmlFormatter class. This allowed me also to remove the global variable fullFilenameWithPath from HtmlTextConverter. 
 A simple refactoring that made me, at the same time, decouple the dependency and make the code cleaner by removing that ugly mix of levels of abstractions.
 
 With this implementation I can now test the method just by creating a fake implementation of ReaderFactory in order to read from a String instead of a file:

  {{< gist 35267e8d83a380d4ec071faf95cc356c >}}


## Technique 2: Extract and Override Factory Method

In this technique you extract all the work involved in the creation of _FileReader_ in the constructor into another factory method. Then, you create a testing subclass and override the method. This is the result:

  {{< gist f1e01dcfa82737091ff430fb40932d51 >}}

I have extracted the _new FileReader()_ into another method called _getReader()_, so now I can override it in a subclass called _FakeHtmlTextConverter_ as follows:

   {{< gist b823ce0137a2b01b60873741fe19b68c >}}

This technique allows me to not change the constructor, but instead using a fake implementation in the tests, like so:

   {{< gist 73fa748312c3cda72fad659d698d1203 >}}

## Conclusion

_Working Effectively With Legacy Code_ is an illuminating book and i strongly recommend it to read. It's pretty dense with content, but reading it along with small exercise like this one it's a great way to absorb it faster and make it yours.

This exercise is interesting and puts you a bit uncomfortable since the refactoring is becomes pretty big very quickly and it's difficult to do it in small steps. You stay in the red zone (_test don't pass_) for long, at least the first time you do it and mostly if you're not familiar with design patterns or any refactoring strategy in particular.

Regarding the techniques, the 2. is strongly linked to the programming language used. You can't use it in C/C++. The 1. is more clean. Both are two great ones.