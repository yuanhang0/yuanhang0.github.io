---
layout: post
title: Exploring the Bounds of Correlation for Three or More Random Variables
# subtitle: Each post also has a subtitle
tag: [Probability, Statistics]
date: 2024-09-30
comments: true
---
Today, I’m organizing and sharing some thoughts on the range of correlation coefficients. I’ve written about the general case on my blog [before](https://yuanhang0.github.io/posts/variance-of-N-id-rv's), and recently a friend asked me about a question involving three random variables during an interview. I’ve already shared this post in my [Xiaohongshu](https://www.xiaohongshu.com/user/profile/60b9d0b6000000000101f156) (Yes, I recently started my personal account on Xiaohongshu to share some quick thoughts and short notes!). Alright, let’s jump in!

- **Problem:** Given three random variables $X, Y, Z$, where the correlation coefficient between $X$ and $Y$ is 0.8, and the correlation coefficient between $X$ and $Z$ is also 0.8. What are the maximum and minimum possible values of the correlation coefficient between $Y$ and $Z$?

- Without loss of generality (WLOG), assume $X, Y, Z$ all have **zero mean and unit variance** (**Why?** Because we can always apply an affine transformation to make their means and variances 0 and 1, without changing the correlations: $\rho_{aX+b, cY+d} = \rho_{X,Y}$ as long as $ac > 0$).

- So we know $\rho_{X,Y} = \mathbb{E}(XY) = 0.8$ and $\rho_{X,Z} = \mathbb{E}(XZ) = 0.8$. If we treat these random variables as vectors in a Hilbert space $L^2(\Omega, \mathcal{F}, P)$, then we can write:

$$
\begin{aligned}
\mathbb{E}(XY) &= \langle X,Y \rangle = \|X\| \|Y\|\cos(\alpha) = \cos(\alpha) = 0.8 \\
\mathbb{E}(XZ) &= \langle X,Z \rangle = \|X\| \|Z\|\cos(\alpha) = \cos(\alpha) = 0.8 \\
\mathbb{E}(YZ) &= \cos(?) = ? \\
\end{aligned}
$$

- Now, interpreting this geometrically, the problem boils down to finding the **minimum and maximum angles** between $Y$ and $Z$, given that their angles with $X$ are both $\alpha$. When $Y$ and $Z$ **align perfectly**, the angle is 0, which is the minimum. When $Y$ and $Z$ are on **opposite sides of** $X$ in the same plane, the angle is maximized at $2\alpha$. So we get:

$$
\begin{aligned}
\max \rho_{Y,Z} &= \cos(0) = 1, \\
\min \rho_{Y,Z} &= \cos(2\alpha) = 2\cos^2(\alpha) - 1 \\
&= 2(0.8)^2 - 1 = 0.28.
\end{aligned}
$$

- Here’s an interesting observation: when the correlation coefficients between $X, Y$ and $X, Z$ are both $\cos(45^\circ) \approx 0.707$, the minimum correlation coefficient between $Y$ and $Z$ can be zero. This means that even though $X$ has a pretty high correlation (0.707) with both $Y$ and $Z$, $Y$ and $Z$ themselves can be completely uncorrelated.

- This geometric approach is quite intuitive and a good reminder of concepts like inner products and angles in Hilbert spaces. However, when $n$ gets larger, this method becomes less practical... Let’s move on to a more general approach.

- To find the maximum and minimum correlation between $Y$ and $Z$, we need to check the positive semidefiniteness of the correlation matrix for $X, Y, Z$. This is because the correlation matrix must be positive semidefinite (**Why?** Hint: think of $(X, Y, Z)'$ as a 3-dimensional random vector and apply Cauchy-Schwarz).

- Given $\text{Corr}(X, Y) = 0.8$ and $\text{Corr}(X, Z) = 0.8$, the correlation matrix $R$ looks like this:

$$
R = \begin{pmatrix}
1 & 0.8 & 0.8 \\
0.8 & 1 & r_{YZ} \\
0.8 & r_{YZ} & 1 \\
\end{pmatrix},
$$

- where $r_{YZ} = \text{Corr}(Y, Z)$ is what we’re solving for.

- For $R$ to be positive semidefinite, all of its principal minors need to be non-negative. Let’s calculate the determinant of $R$:

$$
\det(R) = 1 + 2 \cdot (0.8 \cdot 0.8 \cdot r_{YZ}) - 0.8^2 - 0.8^2 - r_{YZ}^2 = - (r_{YZ} - 1)(r_{YZ} - 0.28)
$$

- To make sure the determinant is non-negative, we must satisfy:

$$
(r_{YZ} - 1)(r_{YZ} - 0.28) \leq 0
$$

- Solving this inequality, we get $0.28 \leq r_{YZ} \leq 1$. So, the maximum possible correlation between $Y$ and $Z$ is **1**, and the minimum is **0.28**.

- **Bonus question**: For identically distributed random variables $X_i$ with pairwise correlation $\rho$, what are the maximum and minimum possible values of $\rho$?

- Using a similar approach, we can find the condition for positive semidefiniteness and ensure that all eigenvalues of the correlation matrix are non-negative. This gives:

$$
\frac{1}{1 - n} \le \rho \le 1.
$$

