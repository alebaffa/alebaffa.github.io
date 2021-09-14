---
title: "A Decentralized Blog"
date: 2020-06-27T15:35:00+09:00
draft: false
tags: ["ipfs"]
---
This blog is now hosted on [IPFS](https://ipfs.io/), the Interplanetary Filesystem. 

I'm using [Hugo](https://gohugo.io/) and [Fleek.co](http://fleek.co/) to automatically build and deploy the static files on IPFS.

There are three ways to see this page. The first is to use a standard browser (Chrome, Firefox..etc) with extensions such as [IPFS Companion](https://chrome.google.com/webstore/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch?hl=en) that uses a IPNS gateway set up by default (or you can install IPFS and run a node locally), or the Metamask plugin, and when you type http://alebaffa.eth/ (yes, the '/' at the end is needed) you will be redirected to this URL:

> https://bafybeihhihm3jodq66hqtcasd6xgdkkxereipxqqg3evswsdjtju3hssii.ipfs.dweb.link/

Uh,what happened? Well, you are fetching content from IPFS. The string before .ipfs.dweb.link/ is the [CID](https://docs.ipfs.io/concepts/content-addressing/) of this page, i.e. the Content Identifier, which is the cryptographic hash of the physical file you are reading now. What does it mean? It means that if I change anything in this page, the hash will change and so its address. This makes this content unique and not changeable. You can inspect the CID from [here](https://cid.ipfs.io/#bafybeibel2wf2vyocphmteaxnzxx6f2sqvlaw3lbvuztpm7kf22tsevpk4).

The second way to access this blog from any browser is to just type http://alebaffa.eth.link. The URL will not change this time. The routing to the IPFS content is taken care by EthDNS and EthLink (https://eth.link/).

The third way is to use Brave brower, that has native support for IPFS. So, you just type http://alebaffa.eth/ and you will be redirected to its CID without need to install other plugings. Awesome!
 
What does this all mean? The URL you typed in your browser is not pointing to a location (i.e. a web server), it is pointing to a specific content that has its own hash. A very light hash, which is opening to a whole new world of opportunities such as [Decentralized file storage](https://medium.com/coinmonks/ipfs-blockchain-decentralised-file-storage-9ef3a1fa307b) with Ethereum or things like [Filecoin](https://filecoin.io/).