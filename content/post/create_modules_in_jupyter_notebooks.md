+++
title= "Create modules in Jupyter notebooks"
description= ""
author= "Alessandro"
tags= ["jupyter-notebook","python"]
date= 2018-02-26T21:38:37+09:00
draft = "false"
+++
In my current attempt to improve the development experience of my team, I am trying to introduce Jupyter notebooks to share knowledge about some data analysis scripts developed over the last years. I can copy paste the code into a notebook, run the single cells to show the result below the code, export the notebook as markdown and push it to Bitbucket: voila, documentation. 

Though, a disadvantage of Jupyter notebooks over Python scripts is that they cannot be linked to each other. They are completely separated entities, so if you have Python scripts that share common utils modules (e.g.: connection, encryption, etc...) and you try to run them in a Jupyter notebook, you have to copy-paste also those modules into cells. It's annoying, you break the readability of your beautiful notebook and it ruins the very first reason why you started to use it.

## Python modules in Jupyter
You can create Python modules into Jupyter as well. Assuming you are using Anaconda, just create your Python module and put it into a specific folder, specifically (I'm using Windows 10 as I write)  `Anaconda3\Lib`. 

### Example
Create your `hello-world` module:

<img src="../../assets/images/jupyter-module.jpg">

Put some logic in it:

<img src="../../assets/images/hello.jpg">

Then you can import it from your separate notebook, like so:

<img src="../../assets/images/script.jpg">