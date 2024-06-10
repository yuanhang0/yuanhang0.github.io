---
layout: post
title: Two Stick Problems
# subtitle: Each post also has a subtitle
tag: [Probability, Statistics]
date: 2021-10-19
comments: true
---

It's been a while since I made posts last time. For the past few months, I graduated in June this year and just started a new journey as a data scientist recently. While enjoying the work I do, I still find it interesting to think small problems.
Here are the two little problems I encountered a while ago.

1. Suppose we break a stick in two at random. What is the expected ratio of the length of the shorter to the longer one?

2. Now we have two sticks one is clearly longer than the other and we make measurements of their length with a random instrumental error. The error distribution is zero mean with a constant variance. If only two measurements are allowed, can we improve the accuracy than just measuring each stick once?

<details><summary>Solution (CLICK ME): </summary>
<p>

1.
The problem formulation is straightforward. WLOG, let's assume the length of the stick is one. Denote the uniform distribution on [0,1] by $U\sim \text{Unif}[0,1]$. Let $X$ be the length of the shorter one. Then, we can derive the distribution of $X$ as follows: $\forall ~0\le x\le \frac{1}{2}$,

$$
F(x) = P(X\le x) = P(U\le x \text{ or } U\ge 1-x)  = x+(1-(1-x)) = 2x.
$$

Therefore, the density of $X$ is given by $f(x) = 2$ if $x \in [0,\frac{1}{2}]$, which is the uniform distribution on $[0,\frac{1}{2}]$. Now we can calculate the expected ratio of the length of the shorter to the longer one:

$$
\E\left[\frac{X}{1-X}\right] = \int_0^{0.5} \frac{x}{1-x}\cdot 2~dx = 2\log 2-1 \approx 0.386.
$$

Note that the expected ratio of the longer to the shorter one doesn't exist:

$$
\E\left[\frac{1-X}{X}\right] = \int_0^{0.5} \frac{1-x}{x}\cdot 2~dx = 2\int_0^{0.5} \frac{1}{x}~dx - 1 = \infty.
$$

The problem with the ratio $\frac{1-X}{X}$ is that as the denominator approaches zero the density doesn't decay.
Actually, the phenomenon when a r.v. $Y$ has finite expected value while $\frac{1}{Y}$ does not is quite common. One may consider uniform distribution and inverse uniform distribution, exponential distribution and inverse exponential distribution, etc.

<br/>
2.

Let $\varepsilon$ denote the random instrumental error every time we make a measurement. Say two sticks have lengths $x,y$ and $x>y$.
 If we put two sticks together and measure $x+y$, we get $x+y+\varepsilon_1$. Next, we align two sticks and measure $x-y$ to get $x-y+\varepsilon_2$.

By simple algebra, we obtain our measurement of $x$: $x+\frac{\varepsilon_1+\varepsilon_2}{2}$ and measurement of $y$: $y+\frac{\varepsilon_1-\varepsilon_2}{2}$.

Note that even though the expectation of the error parts are the same as those when we taking measurements directly ($\E\frac{\varepsilon_1+\varepsilon_2}{2} = \E\varepsilon_1  = \E\varepsilon_2 = 0$), the variances actually decrease: $\Var\left(\frac{\varepsilon_1+\varepsilon_2}{2}\right) = \Var\left(\frac{\varepsilon_1-\varepsilon_2}{2}\right) = \frac{\Var(\varepsilon)}{2} < \Var(\varepsilon)$.

By doing what's stated above, we take two measurements of $x$ and $y$ and thus get better estimates.
</p>
</details>
<br/>
