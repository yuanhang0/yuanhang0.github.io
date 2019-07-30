---
layout: post
title: Some Applications of the Hat Matrix (2)
# subtitle: Each post also has a subtitle
tag: [Statistics]
date: 2019-07-30
comments: true
---
For an additive error model \$$ Y = f(X) + \varepsilon, \quad \Var(\varepsilon) = \sigma^2 I_n, $$

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
\hat{\beta}^{\text{LS}} = \operatorname*{argmin}\limits_{\beta} \|Y-X\beta\|^2 = (X'X)^{-1}X'Y,
$$

and the corresponding fitted value $\hat{Y}$ is

$$
\hat{Y}^{\text{LS}} = X\hat{\beta}^{\text{LS}} = X(X'X)^{-1}X' Y = H Y,
$$

where $H = X(X'X)^{-1}X'$ is the hat matrix of size $n\times n$.

Thus, we see that the effective degrees-of-freedom for this method is given by

$$
\text{df}(\hat{Y}^{\text{LS}}) = \operatorname{Tr}(H) = p+1,
$$

which is exactly the same as the number of parameters in $\beta$, i.e., the length of $\beta$.

The *ridge regression* is also an example of the linear fitted method. The ridge regression estimates $\beta$ by

$$
\hat{\beta}^{\text{ridge}} = \operatorname*{argmin}\limits_{\beta} \|Y-X\beta\|^2+\lambda \|\beta \|^2 = (X'X+\lambda I_n)^{-1}X' Y,
$$

for some constant $\lambda>0$. The corresponding fitted value $\hat{Y}^{\text{ridge}}$ is

$$
\hat{ Y }^{\text{ridge}} = X\hat{\beta}^{\text{ridge}} = X(X'X+\lambda I_n)^{-1}X' Y = H_{\lambda} Y,
$$

where $H_{\lambda} = X(X'X+\lambda I_n)^{-1}X'$.

Therefore, the effective degrees-of-freedom for ridge regression is given by

$$
\text{df}(\hat{Y}^{\text{ridge}}) = \operatorname{Tr}(H_{\lambda}).
$$

It remains to determine $\operatorname{Tr}(H_{\lambda})$. For simplicity, let's assume that the input $X$ is centered. Consider the SVD of $X$: $ X = UDV',$ where $U$ and $V$ are $N\times p$ and $p\times p$ orthogonal matrices, respectively, and $D$ is a $p\times p$ diagonal matrix with non-increasing singular values $d_1 \ge d_2 \ge \cdots \ge d_p \ge 0$.
Then it follows that

$$
 X'X = VDU'UDV' = VD^2V',
$$

which gives:

$$
\begin{aligned}
H_{\lambda} &= X(X'X+\lambda I_n)^{-1}X' = UDV'\left(VD^2V'+\lambda I_n \right)^{-1} VDU'\\
&= UDV'\left(V(D^2 +\lambda I_n)V'\right)^{-1} VDU'\\
&=  UD\left(D^2 +\lambda I_n\right)^{-1} DU'.
\end{aligned}
$$

Hence,

$$
\begin{aligned}
\text{df}(\hat{Y}^{\text{ridge}}) & = \operatorname{Tr}(H_{\lambda}) = \operatorname{Tr}(UD\left(D^2 +\lambda I_n\right)^{-1} DU')\\
& = \operatorname{Tr}(D\left(D^2 +\lambda I_n\right)^{-1} DU'U) = \operatorname{Tr}(D\left(D^2 +\lambda I_n\right)^{-1} D) \\
& = \sum_{i=1}{N} \frac{d_i^2}{d_i^2+\lambda} < p.
\end{aligned}
$$

We see that as a shrinkage method, the effective degrees-of-freedom in ridge regression is smaller than $p$. To understand this, we may think of an equivalent formulation of the ridge regression:

$$
\begin{aligned}
\operatorname*{min}\limits_{\beta} \|Y-X\beta\|^2+\lambda \|\beta \|^2  \quad \Leftrightarrow \quad &\operatorname*{min}\limits_{\beta} &\|Y-X\beta\|^2  \\
                                                                                        & \text{s.t.} & \|\beta \|^2 \le t.
\end{aligned}
$$

This now makes more intuitive sense: instead of minimizing over all $\beta \in \mathbb{R^n}$, we restrict our choices to those $\beta$ with small $l_2$ norms. Thus, the effective degrees-of-freedom should be smaller compared to the unconstrainted case, i.e., the least square estimate.
