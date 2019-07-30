---
layout: post
title: A Fair Game Problem
# subtitle: Each post also has a subtitle
categories: Probability
date: 2019-03-25
comments: true
---
This is an interesting problem from one of my friends' oral exam.

A and B play a game of drawing cards without replacement from 4 cards, of which 2 are red and 2 are black.
They draw one card and bet a dollar each time. If the drawn card is red, then A wins a dollar from B. Otherwise, A loses a dollar to B.
Suppose that now A is allowed to stop the game whenever he wants. How much should A pay B before the game starts to make it a fair game?


<details><summary>Solution (CLICK ME): </summary>
<p>

Note that A would keep flipping cards until he has seen two red cards. Next, we list all the possible outcomes (R: red, B: black) and corresponding probabilities:

RR(BB), RBR(B), BRR(B), BRBR, BBRR, RBBR, each with probability $\frac{1}{6}$. (Why?)

Now, we can compute the expected outcome of player A, $EX$:
$$
\mbox{E}X = \frac{1}{6}\times(2+1+1+0+0) = \frac{2}{3},
$$
which is the desired quantity.
</p>
</details>
<br/>
