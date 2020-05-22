---
layout: post
title: Two Bayes Problems (2)
# subtitle: Each post also has a subtitle
tag: Probability
date: 2020-05-22
comments: true
---

It is now day 70 of staying at home for me. Last time I posted a Bayes problem, here is the second question.

There are $a+b$ coins whose prior distribution of getting a head $p_i$ are i.i.d. uniform distribution on (0,1), i.e., $p_i \sim \operatorname{Beta}(1,1)$. Suppose that we toss the coins together and got $a$ heads and $b$ tails. Now, we toss those $b$ coins that shows tails again. How many heads should we expect to see?

If those $a+b$ coins do not have i.i.d. $p_i$, instead, they share a common $p\sim \operatorname{Beta}(1,1)$. How would the answer change?


Let's start with the first case. Consider one coin among those $b$ coins. Denote $T_n$ and $H_n$ to be the event that we obtain a tail or a head on the n-th toss, respectively. We need to compute the probability of getting a head after we seeing a tail on the first trial, i.e., $P(H_2~\vert~T_1)$:

$$
\begin{aligned}
P(H_2~\vert~T_1) & =  \frac{P(T_1 \cap H_2)}{P(T_1)} = \frac{ \int P(T_1 \cap H_2~\vert~p_i) f(p_i) ~dp_i}{\int P(T_1~\vert~p_i) f(p_i) ~dp_i}\\
& = \frac{ \int_0^1 (1-p_i)p_i  ~dp_i}{\int_0^1 1-p_i ~dp_i} = \frac{1/6}{1/2} = \frac{1}{3},
\end{aligned}
$$

 where $f(p_i)$ is density of the prior.

Thus, we expect to see $\frac{b}{3}$ heads in this case. Note that we don't gain any information from other coins.

For the second case, those $a+b$ coins share a common $p\sim \operatorname{Beta}(1,1)$. Thus, we get  information about this prior $p$ from the first experiment as a whole. Once we find the posterior distribution of $p$, we know the number of heads to expect.

Let event $A = [\text{obtaining $a$ heads and $b$ tails among $a+b$ coins}]$.
We note that

$$
\begin{aligned}
f(p\vert A) &= \frac{P(A\vert p)f(p)}{P(A)} \propto p^a(1-p)^b,
 \end{aligned}
$$

which is the density of $\operatorname{Beta}(a+1,b+1)$. Thus, the expectation $\E(p \vert A) = \frac{a+1}{a+b+2}$, which tells us that we should expect to see $\frac{a+1}{a+b+2}b$ heads among those $b$ coins.
