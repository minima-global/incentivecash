# Incentive Cash

This document describes the requirements for the incentive cash system.

## Functional Requirements

Below describes the basic functioning of incentives.

### The Incentive System

The incentive system (IS) should, where possible, be automated:

1. _Bob_ registers and logs into the incentive system (IS) (possibly via a referral code, in which case, the referring user gets 50 incentive tokens (IT)), and downloads and installs the incentive MiniDapp (IM)
2. _Bob_ opens IM, whereupon it posts his public key and address to the incentive database (ID).
3. IS sends _Bob_ the IT he is due up until Mainnet launch. The current allocation specifies 2 IT a day; so, if there were 70 days until launch, _Bob_ would get 140 IT. These are split into batches of 14, which equates to a week's worth of IT, and the block time makes each batch collectable a week apart. Hence, _Bob_ would be able to make 10 collections of his 140 IT
4. The IM shows _Bob_ his IT and when they can be collected
5. A background process running within IM sends the weekly batch of IT to a _null address_ (burning the tokens)
6. A process running on IS is monitoring that _null address_, so it sees that _Bob_ has sent _y_ tokens to the _null address_ and updates the ID accordingly (which means that _Bob_ will be due the requisite amount of Minima at Mainnet launch)
7. At any point, an Admin may reward incentive tokens (IT) to _Bob_ via recording as such in the incentive database (ID), and IM should display those rewards

### Roles

**Users** should be able to sign up and login to a service (possibly using a referral code), where they can download an _Incentives MiniDapp_, and afterwards, claim their IT simply by running Minima. They should also be able to see and modify their profile and see a summary of their IT amounts. They should be able to distribute any referral codes that they've been assigned.

**Incentive Admins** (Minima staff) should be able to assign IT to users for _xyz_ reason. They should also be able to assign referral codes to users. They can browse all ID information, which could include, "How many users do we have?", "How many incentive tokens have we distributed?", "How many users are logged in?" etc. In other words, _stats_, _stats_ and more _STATS_!

**System Admins** should be able to manage all ID tables, create and delete users, plus all the **Incentive Admins** tasks.

## IS Requirements

To meet the [functional requirements](#functional-requirements), above, IS should implement the following:

### Server

A server is needed, running Ubuntu and Apache/nginx.

### ID

The incentive database will be [MySQL](https://www.mysql.com/), fronted up by the headless CMS [directus](https://directus.io/), which gives, "a real-time API and intuitive Admin' App' for your custom database" (their words).

According to the docs, _Directus dynamically generates custom API endpoints based on your SQL database's custom schema_ - in other words, we need to get database schema _right_.

#### ID Design

![](./images/dbase.png)

### User Service

A web-based front end service (allowing users to register and login to the ID and download the minidapp will be a javascript single-page application. Minima will have to build that, using _React_ and the directus API.

### Admin' Service

Directus comes with a pre-packaged admin' app' that we can use to assign different user roles - _need to do more research into the capabilities of directus_.

### MiniDapp

IM is to be a version of FutureCash, plus a background process capable of sending _y_ amount of tokens on _x_ date from user _z_ to a _null address_.

### Server-side Minima Processes

There will be two server-side processes:

1. The IS will use the directus javascript API to monitor the _null address_ to which IM sends its tokens, and once it sees tokens sent to that address, it will find the ID of the user who sent those tokens and update the ID accordingly.

2. When a user first opens IM, a call will be made to IS that sends the user their IT. In so doing, it will create a Minima transaction and modify ID accordingly.

### Referral System Design

The referral system should take into account user AND medium (twitter etc.). We must be able to limit the amount of referrers (i.e. 10 referrer credits) per user.
