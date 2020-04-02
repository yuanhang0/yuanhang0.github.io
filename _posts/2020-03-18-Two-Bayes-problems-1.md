---
layout: post
title: Two Bayes Problems (1)
# subtitle: Each post also has a subtitle
tag: Probability
date: 2020-03-18
comments: true
---

My friends asked me two Bayes questions a while ago. Due to the rapid spread of COVID-19 in US, I've been at home for five days. So I decide to put my solutions here for references. The first question is as follows.

There are five balls in a bag. Each ball is colored either black or white with equal chance. Now suppose that someone have already drawn the ball 4 times with replacements, among which he/she got 1 white ball and 3 black balls as a result.
Find the probability distribution of the number of white balls in that bag.

This problem is a straightforward application of Bayes' Rule. The only tricky part is to formulate the problem statement with math language.

Let $X$ be the number of white balls and let event $A = [\text{1 white ball and 3 black balls among 4 trials}]$. The prior distribution of $X$ is simply the binomial distribution $B(5, \frac{1}{2})$.
Actually, we are interested in finding the posterior probability $P(X=x\vert A)$.
Note that

$$
P(A\vert X=x) = \begin{cases}
b(1; 5, \frac{x}{5}),~~~& x= 1, 2,3 \text{ or }4\\
0,~~~& x=0 \text{ or } 5
\end{cases},
$$

 where $b(x;n,p)$ is the pmf at $x$ for a $B(n, p)$ r.v.

We use Bayes's Rule as follows:

$$
\begin{aligned}
P(X=x\vert A) &= \frac{P(X=x, A)}{P(A)} = \frac{P(A\vert X=x)P(X=x)}{\sum_i P(A|X=i)P(X=i)} \\
& = \frac{ {4 \choose 3} \cdot \left(\frac{x}{5}\right)^1\cdot \left(\frac{5-x}{5} \right)^3 \cdot {5 \choose x}\cdot\left(\frac{1}{2}\right)^5 } {\sum\limits_{i=1}^4 {4 \choose 3} \cdot \left(\frac{i}{5}\right)^1\cdot \left(\frac{5-i}{5} \right)^3 \cdot {5 \choose i}\cdot\left(\frac{1}{2}\right)^5},~~~ x=1,...,4.
 \end{aligned}
$$

I used R to compute the above quantity:
```R
> x <- rep(0,4)
> for (i in 1:4){
+     x[i] <- 4 * (i/5) * ((5-i)/5)^3 * choose(5, i) / 2^5
+ }
> y <- x/sum(x)
> y
[1] 0.28571429 0.48214286 0.21428571 0.01785714
```

Thus, we have

$$
P(X=x\vert A) = \begin{cases}
0.28571429,~~~& x= 1\\
0.48214286,~~~& x= 2\\
 0.21428571,~~~& x= 3\\
0.01785714,~~~& x= 4\\
0,~~~& x=0 \text{ or } 5
\end{cases}.
$$

When we are asked to give a point estimate of the number of white balls, we typically use the posterior mode, which is also known as the MAP (maximum a posteriori) estimation. In this case, it is $2$.
