---
layout: post
title: Mean, Median and Mode from the Optimization Point of View
# subtitle: Each post also has a subtitle
tag: [Statistics]
date: 2019-09-16
comments: true
---

For a random variable $X$, we are all familiar with how its mean, median and mode are defined. Let's examine them again from a different perspective. For simplicity, let's assume $X$ has finite first two moments. Let $\mu = \E(X)$ be its expectation, $m$ be its median.

If you are asked to choose one single number to describe the r.v. $X$, what would be the "best" choice? It sounds like choosing either mean, median or mode all makes sense. Let's put it more formally, we want to find $c$ such that the expected loss $\E(d(X,c))$ is minimized, where $d(\cdot,\cdot)$ is some distance function.

1. Mean is the minimizer when $d(\cdot,\cdot)$ is the $l_2$ distance, i.e.,

$$\mu = \E(X) = \arg \min_{c} \E(\|X-c\|_2) = \arg \min_{c} \E(\|X-c\|_2^2).$$

To see it, note that

$$
\begin{aligned}
\E(X-c)^2 & = \E(X-\mu + \mu-c)^2 \\
&= \E(X-\mu)^2+2\E(X-\mu)(\mu-c)+\E(\mu-c)^2 \\
& = \E(X-\mu)^2+(\mu-c)^2 \ge \E(X-\mu)^2,
\end{aligned}
$$

where equality holds iff $c = \mu$.

2. Median is the minimizer when $d(\cdot,\cdot)$ is the $l_1$ distance, i.e.,

$$\mu = \E(X) = \arg \min_{c} \E(\|X-c\|_1).$$

We first rewrite $\E(\|X-c\|_1)$ in a convenient form as follows:
$$
\begin{aligned}
g(c)  = \E\vert X-c\vert = \int_{0}^\infty P(\vert X-c \vert \ge t) ~dt & = \int_{0}^\infty P(X\ge c+t) ~dt +\int_{0}^\infty P(X<c-t) ~dt\\
&= \int_{c}^\infty P(X\ge s) ~ds -\int_{c}^{-\infty} P(X\le s) ~ds\\
&= \int_{c}^\infty P(X\ge s) ~ds +\int_{-\infty}^c P(X\le s) ~ds,
\end{aligned}
$$

where for the second equality we used the formula for computing the expectation of a non-negative r.v.

Hence, $g(c) = \E \vert X-c \vert$ is differentiable almost everywhere. And we see that

$$
\begin{aligned}
g'(c)  &= \frac{d}{dc}\left(\int_{c}^\infty P(X\ge s) ~ds +\int_{-\infty}^c P(X\le s) ~ds\right) \\
& = -P(X\ge c) + P(X\le c) =  P(X\le c)-P(X\ge c),
\end{aligned}
$$

which is less than 0 if $c$ is smaller than the median $m$, and is greater than 0 if $c$ is larger than the median $m$. Thus, $g(c)$ is decreasing on $(-\infty, m)$ and is increasing on $(m, \infty)$. So the minimizer is exactly the median.


3. Mode is the minimizer when $d(\cdot,\cdot)$ is the $l_0$ distance, i.e.,

$$\mu = \E(X) = \arg \min_{c} \E(\|X-c\|_0), $$

where $$\|x\|_0$$ is the number of nonzero elements. For one-dimensional case, it's simply the indicator function: $$\|x\|_0 = I\{x\ne 0\}$$.

Thus, we have the following:

$$
\begin{aligned}
\E(\|X-c\|_0) = \E(I\{\|X-c\|\}) = P(X-c \ne 0) = P(X \ne c).
\end{aligned}
$$

Minimizing $P(X \ne c)$ is the same as maximizing $P(X=c)$. For a discrete r.v. $X$, we just choose $c$ s.t. $P(X=c)$ is maximized. So $c$ is the mode. The continuous case doesn't fit this set-up since for a continuous r.v. $X$, $P(X=c) \equiv 0, ~\forall c$.

An interesting bound on the difference between mean and median says that the absolute difference between mean and median is at most one standard deviation. We give a short proof which makes use of our previous findings below:

$$
\begin{aligned}
\vert \mu-m\vert=|\mathrm{E}(X-m)| & \leq \mathrm{E}|X-m|\\
& \leq \mathrm{E}|X-\mu|  \leq \sqrt{\mathrm{E}\left(X-\mu\right)^{2}}=\sigma,
\end{aligned}
$$

where the first and third inequalities follow from Jensen's inequality, the second inequality comes from our claim 2 above.

Another point worth noting is that our previous claims regarding a r.v. $X$ can be extended to the case of a sample $x_1,\cdots, x_n$. For example, the constant $c$ that minimizes the MSE, $\frac{1}{n}\sum_{i=1}^n (x_i -c )^2$, is the sample mean. We can adapt our arguments above to prove this claim. Similar steps can be done for the sample median and sample mode also. As a quick example, let's look at the sample mode case. We want to minimize $$\frac{1}{n}\sum_{i=1}^n \|x_i -c \|_0$$ w.r.t $c$. Note that

$$
\begin{aligned}
\frac{1}{n}\sum_{i=1}^n \|x_i -c \|_0 = \frac{1}{n}\sum_{i=1}^n I\{x_i\ne c\} = \frac{1}{n}\sum_{i=1}^n \left(1-I\{x_i= c\}\right) = 1- \frac{1}{n}\sum_{i=1}^n I\{x_i= c\}.
\end{aligned}
$$

Hence, minimizing $$\frac{1}{n}\sum_{i=1}^n \|x_i -c \|_0 $$ is equivalent to maximizing

$$
\begin{aligned}
\frac{1}{n}\sum_{i=1}^n I\{x_i = c\},
\end{aligned}
$$

which suggests that we need to pick $c$ to be the value that appears the most. So $c$ is the sample mode.
