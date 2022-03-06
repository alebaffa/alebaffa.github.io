---
title: "On NFT (2 part)"
date: 2021-03-10T08:17:31+09:00
draft: false
tags: ["crypto"]
description: ""
---
Non-Fungible Tokens (NFT) are interesting, but there's a lot of confusion about the concept of *ownership*. If you buy a NFT, you are only buying the ownership of a pointer to a metadata (audio, video, etc..) stored somewhere (more likely a centralized server, only some use IPFS). But this pointed metadata can be counterfeit (e.g. the NFT could be a screenshot. And this happening often now), so you still need an additional way to prove the actual asset is legit, the "oracle problem". There is no solution at the moment.

Blockchain guarantees you own the NFT, but not actual asset represented by the NFT.

Could W3C's Decentralized Identifiers (DID) and Verifiable Credentials (VC) solve this, or provide an alternative, more efficient way to link the NFT to the identity of its issuer? Probably.

NFT experimentations are blooming, and it's interesting to see how these problems are being addressed. The latest interesting one is a proposal to convert all existing NFTs to a DID. It means that a NFT could theoretically:
- become an authentication tool cross chain
- acquire its own dynamic social graph on the Web3, and so increase its value.

Decentralized Identities will be the next wave after NFT.

Proposal by Ceramic Networks: [https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-94/CIP-94.md](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-94/CIP-94.md)


----------------------------
[Previous post about NFT](on-nfts.md)