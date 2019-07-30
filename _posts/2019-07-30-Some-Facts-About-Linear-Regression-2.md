---
layout: post
title: Some Applications of the Hat Matrix (2)
# subtitle: Each post also has a subtitle
tag: [Statistics]
date: 2019-07-30
comments: true
---
The least square estimate of $\beta$ is the one that minimizes $$ \|Y-X\beta\|^2 $$. In the case of $\operatorname{rank}(X) = p+1$, we can find it explicitly:

$$
\hat{\beta} = (X'X)^{-1}X'Y.
$$

The corresponding fitted values are

$$
\hat Y = X\hat\beta = X(X'X)^{-1}X' Y = H Y,
$$

where $H = X(X'X)^{-1}X'$ is of size $n\times n$ and is called the *hat matrix*.
