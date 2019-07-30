---
layout: post
title: Some Applications of the Hat Matrix (2)
# subtitle: Each post also has a subtitle
tag: [Statistics]
date: 2019-07-30
comments: true
---
For an additive error model \$$ y = f(X) + \varepsilon, \quad \Var(\varepsilon) = \sigma^2, $$

the *effective degrees-of-freedom* is defined as

$$
\text{df}(\hat{Y}) = \frac{1}{\sigma^2} \sum_{i=1}^{N} \Cov(\hat{y}_i, y_i).
$$

In a linear fitted method where we can write $\hat{Y} = S Y$ for some $n\times n$ matrix $S$, the above effective degrees-of-freedom can be calculated as follows:

$$
\text{df}(\hat{Y}) = \frac{1}{\sigma^2} \operatorname{Tr}\left( \Cov(\hat{Y}, Y) \right) = \frac{1}{\sigma^2} \operatorname{Tr}\left( \Cov(SY, Y) \right)
=  \frac{1}{\sigma^2} \operatorname{Tr}\left( S \Var(Y) \right) = \operatorname{Tr}(S).
$$
We see that it only depends on the diagonal elements of $S$.

The linear regression with ordinary least square estimate is an example of the linear fitted method. As we seen in the previous post, the least square estimate of $\beta$ is given by

$$
\hat{\beta}^{\text{LS}} = \operatorname{argmin} \limits_{\beta} \|Y-X\beta\|^2 = (X'X)^{-1}X'Y,
$$

and the corresponding fitted value $\hat{Y}$ is

$$
\hat Y = X\hat\beta = X(X'X)^{-1}X' Y = H Y,
$$
where $H = X(X'X)^{-1}X'$ is the hat matrix of size $n\times n$.

Thus, we see that the effective degrees-of-freedom for this method is given by

$$
\text{df}(\hat{Y}) = \operatorname{Tr}(H) = p+1,
$$
which is exactly the same as the number of parameters in $\beta$, i.e., the length of $\beta$.
