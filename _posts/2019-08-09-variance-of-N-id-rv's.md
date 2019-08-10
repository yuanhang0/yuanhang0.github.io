---
layout: post
title: Variance of $n$ Pairwise Correlated r.v.'s
# subtitle: Each post also has a subtitle
tag: [Statistics]
date: 2019-08-09
comments: true
---

It's well-known that the average of $n$ i.i.d. r.v.'s with variance $\sigma^2$ has variance $\frac{1}{n} \sigma^2$.

Suppose that the r.v.'s $X_i$'s are only identically distributed with variance $\sigma^2$ and pairwise correlation $\rho$, then we have:

$$
V\left(\frac{1}{n}\sum\limits_{i=1}^n X_i\right) = \frac{1}{n^2}\left(n\sigma^2 + n(n-1)\rho\sigma^2\right) = \frac{\sigma^2}{n}+\frac{(n-1)\rho\sigma^2}{n} = \rho\sigma^2+\frac{1-\rho}{n}\sigma^2.
$$

This equation suggests that as the size $n$ increases, though the second term disappears, the first term remains constant. So the averaging over more and more correlated r.v.'s will not keep improving the variance.

Wait a second! Our derivation of the above equation doesn't depend on sign of $\rho$. But the above equation seems to fail when $\rho<0$ since the variance would then be negative for a sufficiently large $n$. What's wrong with it?

Let's consider the simple case when $n=3$ and $\rho = -1$. First of all, is it even possible to construct such 3 r.v.'s? We see that since $X_i$'s are identically distributed, if $\rho_{X_1,X_2} = -1$ and $\rho_{X_1,X_3} = -1$, we have $X_2 = -X_1$ and $X_3=-X_1$. But this contradicts the fact that $\rho_{X_2,X_3} = -1$.

Actually, we cannot have arbitrary number of r.v.'s that are identically distributed with a negative pairwise correlation. We will show it by using the fact that the determinant of a correlation matrix must be positive semi-definite.

Let $\rho>0$ and the correlation matrices for the case of positive and negative pairwise correlations are denoted by:

$$
\Sigma(\rho) =  \begin{pmatrix}
1 & \rho & \cdots &  \rho \\
\rho & 1 & \ddots & \vdots \\
\vdots & \ddots & \ddots & \rho \\
\rho & \cdots & \rho & 1 \\
\end{pmatrix} \quad \mbox{and}
\quad
\Sigma(-\rho) =  \begin{pmatrix}
1 & -\rho & \cdots &  -\rho \\
-\rho & 1 & \ddots & \vdots \\
\vdots & \ddots & \ddots & -\rho \\
-\rho & \cdots & -\rho & 1 \\
\end{pmatrix},
$$

respectively.

Then we have the following:

$$
\begin{aligned}
\det\Sigma(\rho) &= \det \left( \begin{pmatrix}
1-\rho &  &  \\
& \ddots &  \\
 &  & 1-\rho \\
\end{pmatrix} + \begin{pmatrix}
\sqrt{\rho} \\
\sqrt{\rho} \\
\sqrt{\rho}\\
\end{pmatrix} \begin{pmatrix}
\sqrt{\rho} & \sqrt{\rho} & \sqrt{\rho}
\end{pmatrix}\right) \\
& = \left(1+ \begin{pmatrix}
\sqrt{\rho} & \sqrt{\rho} & \sqrt{\rho}
\end{pmatrix} \begin{pmatrix}
(1-\rho)^{-1} &  &  \\
& \ddots &  \\
 &  & (1-\rho)^{-1} \\
\end{pmatrix} \begin{pmatrix}
\sqrt{\rho} \\
\sqrt{\rho} \\
\sqrt{\rho}\\
\end{pmatrix} \right) (1-\rho)^n\\
& = \left(1+\frac{n\rho}{1-\rho}\right)(1-\rho)^n > 0,\qquad \forall \rho\in (0,1),
\end{aligned}
$$

where we used the matrix determinant lemma: $\operatorname{det}\left( A+\mathbf{u v}^{\top}\right)=\left(1+\mathbf{v}^{\top}A^{-1} \mathbf{u}\right) \operatorname{det}(A)$.
It shows that $\det\Sigma(\rho)$ is always positive definite for $\rho\in (0,1)$. So there's no problem with such identically distribution r.v.'s with a positive pairwise correlation $\rho$.



Now, let's compute determinant of $\Sigma(-\rho)$:

$$
\begin{aligned}
\det\Sigma(-\rho) &= \det \left( \begin{pmatrix}
1+\rho &  &  \\
& \ddots &  \\
 &  & 1+\rho \\
\end{pmatrix} + \begin{pmatrix}
\sqrt{\rho} \\
\sqrt{\rho} \\
\sqrt{\rho}\\
\end{pmatrix} \begin{pmatrix}
-\sqrt{\rho} & -\sqrt{\rho} & -\sqrt{\rho}
\end{pmatrix}\right) \\
& = \left(1+ \begin{pmatrix}
-\sqrt{\rho} & -\sqrt{\rho} & -\sqrt{\rho}
\end{pmatrix} \begin{pmatrix}
(1+\rho)^{-1} &  &  \\
& \ddots &  \\
 &  & (1+\rho)^{-1} \\
\end{pmatrix} \begin{pmatrix}
\sqrt{\rho} \\
\sqrt{\rho} \\
\sqrt{\rho}\\
\end{pmatrix} \right) (1+\rho)^n\\
& = \left(1+\frac{-n\rho}{1+\rho}\right)(1+\rho)^n.
\end{aligned}
$$

To ensure $\det\Sigma(-\rho)\ge 0$, we need the condition that

$$
1+\frac{-n\rho}{1+\rho} \ge 0  \quad \Leftrightarrow \quad 1+\rho \ge n\rho   \quad \Leftrightarrow \quad \rho \le \frac{1}{n-1} \quad \Leftrightarrow \quad -\rho \ge \frac{1}{1-n}.
$$

Thus, we see that, for $n$ r.v.'s that are identically distributed with a negative pairwise correlation $-\rho$, $-\rho$ actually cannot be smaller than $\frac{1}{1-n}$. For example, 3 identically distributed r.v.'s cannot have a pairwise correlation smaller than $-\frac{1}{2}$ and this bound becomes $-\frac{1}{3}$ for 4 identically distributed r.v.'s.


Lastly, we make two more observations based on the above findings.

- For identically distributed r.v.'s $X_i$'s with pairwise correlation $\rho$, what are the maximum and minimum values of $\rho$?

$$
\frac{1}{1-n} \le \rho \le 1.
$$

- How do we construct such $X_i$'s with pairwise correlation $\rho$?

Well, for a positive pairwise correlation, we've showed that $\Sigma(\rho)$ is always positive definite. Thus, there exists a decomposition $\Sigma(\rho) = CC'$ for some matrix $C$. Then, for any i.i.d. r.v.'s $Z_i$'s with unit variance, the linear transformation $\mathbf{X} = C\mathbf{Z}$ should have the desired variance-covariance matrix since

$$
V(\mathbf{X}) = V(C\mathbf{Z}) = CV(\mathbf{Z})C' = CC' = \Sigma(\rho).
$$

For a negative pairwise correlation $-\rho$, as long as $-\rho > \frac{1}{1-n}$, we know $\Sigma(-\rho)$ is also positive definite, thus the above construction also works in this case.
