+++
title= "Jupyter: the easiest way to import code from another notebook"
description= ""
author= "Alessandro"
tags= ["jupyter-notebook"]
date= 2018-02-27T19:57:31+09:00
draft = "false"
+++
Yesterday I published a post about [how to create a module in jupyter](https://www.alebaffa.com/posts/create_modules_in_jupyter_notebooks/). 

There is another way to quickly import the code from another notebook. Say you are working in `your_notebook.ipynb` and you need a Python class `class Hello():` from `another_notebook.ipynb`.
To import it you just need to do the following:

```python
# in your_notebook.ipynb do
%run another_notebook.ipynb
hello = Hello()
```
Voila, with `%run` you access the code from the other notebook. 
Easy peasy.