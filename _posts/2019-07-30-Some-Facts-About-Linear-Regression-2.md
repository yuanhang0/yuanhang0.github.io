---
layout: post
title: Some Applications of the Hat Matrix (2)
# subtitle: Each post also has a subtitle
tag: [Statistics]
date: 2019-07-30
comments: true
---
For an additive error model \$$ Y = f(X) + \varepsilon, \quad \Var(\varepsilon) = \sigma^2, $$

the effective degrees-of-freedom is defined as 
$$
df(\hat{Y}) = \frac{1}{\sigma^2} \sum_{i=1}^{N} \Cov(\hat{y}_i, y_i).
$$

linear regression, the least square estimate of $\beta$ is given by

$$
\hat{\beta}^{\text{LS}}$ = \argmin\limits_{\beta} \|Y-X\beta\|^2 .
$$

$$
\hat{\beta} = (X'X)^{-1}X'Y.
$$

The corresponding fitted values are

$$
\hat Y = X\hat\beta = X(X'X)^{-1}X' Y = H Y,
$$

where $H = X(X'X)^{-1}X'$ is of size $n\times n$ and is called the *hat matrix*.
