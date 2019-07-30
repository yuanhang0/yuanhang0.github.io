---
layout: post
title: Some Applications of the Hat Matrix (1)
# subtitle: Each post also has a subtitle
tag: Statistics
date: 2019-07-25
comments: true
---
In linear regression, we make the following model assumptions:
$$ Y=X\beta+\varepsilon,~\varepsilon\sim N(\boldsymbol{0},\sigma^2 I_n), $$
where $Y$ is a vector of length $n$, $X$ is a matrix of size $n\times (p+1)$ and $\beta$ is a vector of length $(p+1)$.

The least square estimate of $\beta$ is the one that minimizes $$ \|Y-X\beta\|^2 $$. In the case of $\operatorname{rank}(X) = p+1$, we can find it explicitly:

$$
\hat{\beta} = (X'X)^{-1}X'Y.
$$

The corresponding fitted values are

$$
\hat Y = X\hat\beta = X(X'X)^{-1}X' Y = H Y,
$$

where $H = X(X'X)^{-1}X'$ is of size $n\times n$ and is called the *hat matrix*.

The hat matrix has many nice properties. Let $\mathcal{C}(X)$ denote the column space of $X$ and $\mathcal{C}^\perp(X)$ be its orthogonal complement.
Then we see that:
- Since $HX = X$, for any vector $x \in \mathcal{C}(X)$, we have $Hx = x$.

- For any vector $x \in \mathcal{C}^\perp(X)$, we have $Hx = \boldsymbol{0}$.

- Thus, $H$ is the projection matrix onto the space $\mathcal{C}(X)$ and $I-H$ is the projection matrix onto the space $\mathcal{C}^\perp(X)$.

- Since $\mathbb{R}^n = \mathcal{C}(X) \bigoplus \mathcal{C}^\perp(X)$, for any vector $x\in \mathbb{R}^n $, we have $x = Hx + (I-H)x$ where $Hx\in \mathcal{C}(X)$ and $(I-H)x \in \mathcal{C}^\perp(X)$.

- Thus, for the vector $Y$, we have $Y = HY + (I-H)Y = \hat Y + \hat \varepsilon$, where $\hat\varepsilon = Y-\hat Y$ is the *residual vector*. In other words, for a given input $Y$, we actually project it onto $\mathcal{C}(X)$ to obtain $\hat Y$ and the residual vector $\hat\varepsilon = Y-\hat Y = (I-H)Y $ lives in $\mathcal{C}^\perp(X)$.

- By direct computations, we can verify that $H$ is idempotent, i.e., $H^2 = H$.

- Hence, $I-H$ is also idempotent.

- $\operatorname{Tr}(H) = \operatorname{rank} (H) = \operatorname{rank} (X) = p+1$ and $\operatorname{Tr}(I-H)= n-p-1$.

Typically, $\sigma^2$ is unknown and can be estimated by
$$
\hat{\sigma}^2 = \frac{RSS}{N-p-1},
$$
where RSS is the residual sum-of-squares. This is unbiased for $\sigma^2$. Instead of computing the expectation, we will derive the distribution of RSS. For the RSS, we note that

$$
\begin{aligned}
\text{RSS} & = \sum_{i=1}^N (y_i- \hat{y}_i)^2 = \| Y- HY\|^2  = \| (I- H)Y\|^2 \\
          & = Y'(I-H)'(I-H)Y = Y'(I-H) Y,
\end{aligned}
$$

where we used the fact that $I-H$ is idempotent in the last step.
Actually, we can determine the distribution of $Y'(I-H) Y$ directly by the following theorem on the distribution of quadratic forms of normal random vector.

**Theorem (the Distribution of Quadratic Forms).**
Suppose $u\sim N(\mu, I_n)$ is a vector of length $n$. Then
$u' A u \sim \chi^2_r(\lambda)$ with $\lambda = \frac{\mu' A \mu}{2\sigma^2}$ if and only if
A is idempotent with $\operatorname{rank}(A) = r$.

By our model assumptions, we know $Y \sim N(X\beta, \sigma^2 I_n)$. Thus,

$$
\frac{Y'(I-H) Y}{\sigma^2} \sim \chi^2_r(\lambda),
$$

where $r = \operatorname{rank}(I-H) = n-p-1$ and $\lambda = \frac{(X\beta)' (I-H) X\beta}{2\sigma^2} = 0$ as $(I-H)X = \boldsymbol{0}$.
Therefore, we obtain the well-known distribution of RSS from a different point of view:

$$
\begin{aligned}
\text{RSS} = \sum_{i=1}^N (y_i- \hat{y}_i)^2  = \| (I- H)Y\|^2  =  Y'(I-H) Y \sim \chi^2_{n-p-1}.
\end{aligned}
$$
