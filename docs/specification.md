# Incentive Cash

This document describes the requirements for the incentive cash system.

# Functional Requirements

**Users** should be able to sign up and login to the incentive system, where they can download an incentive MiniDapp, and afterwards, claim their _assigned_ incentive tokens simply by running Minima. They should also be able to see and modify their profile and see a history of their incentive transactions.

**Incentive Admins** (Minima staff) should be able to assign incentives to users for _xyz_ reason and browse all incentive information. That could be, "How many users do we have?", "How many incentive tokens have we distributed?", "How many users are logged in?" etc. In other words, _Stats_, _stats_ and more _STATS_!

**System Admins** should be able to create and delete users, plus all the **Incentive Admins** tasks.

The **incentive system** should, where possible, be automated:

1. Admin assigns incentive tokens (IT) to _bob_ and records that act in the incentive database (ID)
2. _Bob_ logs into the incentive system (IS), and downloads and installs the incentive MiniDapp (IM)
3. _Bob_ opens IM, whereupon it creates a transaction on IS (somehow), which sends IM the IT allocated to _Bob_
4. At _x_ specified date (how?), a background process running within IM sends _y_ amount of tokens to a _null address_ (burning the tokens) - an address a process running on IS is monitoring
5. Consequently, that process on IS sees that _bob_ has sent _y_ tokens to the _null address_ and updates the ID accordingly (which means that _Bob_ will be due the requisite amount Minima at Mainnet launch)

## System Requirements


<!--
admin users - (normal user+)
normal users (without drop rights etc.)

look at all tables.
give user this amint of token for this reason (and that's logged).

How many users. How many Minima have we given away. How many users logged in by day.

Stats section!

# Users

Sign up with email and referral code

referrer users...ambassador etc.

log of stuff they've done - summary of token amounts

# dbase

user table - usertype, (admin, root, user, ambassador), userid, username, password, email, referenceid, referralcode.
reward table - userid, tokenamount, reason (autho-generated or admin fills it in)
logs - sign in, tweets etc.

# interface to Minima

Need to be able to send something to the user

# Referer

user AND medium
limit the amount of referrers (i.e. 10 referrer credits)
-->
