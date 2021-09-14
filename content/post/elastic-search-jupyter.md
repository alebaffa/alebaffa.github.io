+++
title = "Improving the development experience: Jupyter for Elasticsearch"
description = "A jupyter notebook with a simple ES client (with proxy setting)"
author = "Alessandro"
tags = ["elasticsearch","jupyter-notebook"]
date = "2018-02-22T19:59:13+09:00"
draft = "false"
+++

<img src="../../assets/images/notebook.jpg">

I have been asked to extract data from Elasticsearch and I had no clue of what kind of data were stored inside of it. Moreover, there was a lack of documentation and the only thing that could help me were some old Python scripts written by an old colleague.

Fortunately, Python is pretty damn good when it comes to readability.


So, because I am working to improve the development experience of my team and I am messing around with Jupyter, I thought I could create [a Jupyter notebook](https://github.com/alebaffa/es_client_jupyter/blob/master/es_client_notebook.ipynb) with a super simple Elasticsearch client in Python 3 that supports a connection with a proxy (vital, if working in a company). 

### Advantages for my team

Increased visibility and knowledge sharing on Elasticsearch and how to handle quickly and efficiently its data. Now with Jupyter and this notebook they can connect immediately to our internal Elasticsearch, extract data and play with cool Python libraries for data analysis such as pandas, numpy and machine learning like Tensorflow. If before the data analysis in my team was managed by a single person (who then quit), who became the _big data guy_, now all the team is up and running and can do the same task quickly.

Also, with Jupyter they can execute and see the result in the same view, step by step, for every line of code they write, so reducing dramatically the time spent to develop any python script that we need for data analysis in the team. Before it was kind of _trial and error until it worked_.

Another great advantage is that we can now include code and text in the same notebook, extract it as markdown and store it into our internal Bitbucket (we don't have the notebook viewer plugin). They will become an incredible efficient and effective documentation that will help the team to improve its data analysis skills.

### Next steps

Jupyter is great. My teammates were just blown away when they saw it and how it can improve our development workflow for data analysis tasks. Now the next step is to organize workshops or _coding dojos_ to practice with Pandas, Numpy and Tensorflow. Also, it would be cool to install [Jupyter Hub](https://jupyterhub.readthedocs.io/en/latest/) so that we can have a common environment where to share notebooks. Fortunately, there is also a Docker image for it:

`docker run -d --name jupyterhub jupyterhub/jupyterhub jupyterhub`
---

(_Source - the usual suspect - for the proxy support:_ [StackOverflow](https://stackoverflow.com/questions/32778235/elasticsearch-python-proxy)). 


The Jupyter notebook is on my github, [HERE](https://github.com/alebaffa/es_client_jupyter/blob/master/es_client_notebook.ipynb).

Here the Python script: 
{{< gist alebaffa 09f61f79e625ee85b20deb5393132961 >}}
