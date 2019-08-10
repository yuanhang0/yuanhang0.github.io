---
layout: post
title: Limiting Distribution of the First 3 Coordinates of a Uniform Distribution on a Sphere
# subtitle: Each post also has a subtitle
tag: Probability
date: 2019-04-16
comments: true
---
Let $(X_1, \cdots, X_n)$ be a random vector uniformly distributed on the sphere
$$
X_1^2 + \cdots + X_n^2 = n.
$$
Find the limiting distribution of $(X_1, X_2, X_3)$ as $n \rightarrow \infty$.

_Solution:_

Let $S_n(R)$ denote the area of the $n$-dimensional sphere or radius $R$. We know that

$$
S_n(R) = \frac{2\pi^{\frac{n+1}{2}}}{\Gamma\left(\frac{n+1}{2} \right)} R^{n}.
$$

Hence, the density of $(X_1, \cdots, X_n)$ is given by:

$$
f(x_1,\cdots,x_n) = \begin{cases}
\frac{1}{S_n(\sqrt{n})}, &\text{ if } x_1^2 + \cdots + x_n^2 = n\\
0, &\text{ otherwise }
\end{cases}.
$$

Therefore, the joint density of $(X_1, X_2, X_3)$ can be computed as follows:

$$
\begin{aligned}
f_{X_1,X_2,X_3} (x_1,\cdots,x_3) & = \idotsint\limits_{\mathbb{R}^{n-3}} f(x_1,\cdots,x_n) ~dx_4\cdots dx_n \\
& = \idotsint\limits_{x_1^2 + \cdots + x_n^2 = n} \frac{1}{S_n(\sqrt{n})}~dx_4\cdots dx_n  \\
& =  \frac{1}{S_n(\sqrt{n})} \idotsint\limits_{x_4^2 + \cdots + x_n^2 = n-x_1^2-x_2^2-x_3^2}~dx_4\cdots dx_n   \\
& = \frac{S_{n-3}(\sqrt{n-x_1^2-x_2^2-x_3^2})}{S_n(\sqrt{n})}\\
& = \frac{\frac{2\pi^{\frac{n-2}{2}}}{\Gamma\left(\frac{n-2}{2} \right)} (n-x_1^2-x_2^2-x_3^2)^{\frac{n-3}{2}}}{\frac{2\pi^{\frac{n+1}{2}}}{\Gamma\left(\frac{n+1}{2} \right)} n^{\frac{n}{2}}}\\
& = \frac{\pi^{-\frac{3}{2}}\Gamma\left(\frac{n+1}{2} \right)}{(n-x_1^2-x_2^2-x_3^2)^{\frac{3}{2}}\Gamma\left(\frac{n-2}{2} \right)} \left(1- \frac{x_1^2+x_2^2+x_3^2}{n}\right)^{\frac{n}{2}}.
\end{aligned}
$$

Since

$$
\frac{\Gamma(s+\alpha)}{\Gamma(s) } \sim s^{\alpha}, \quad \alpha \in \mathbb{C},
$$

as $\left\vert s \right\vert \rightarrow \infty$, the first term of the above quantity should goes to some constant $C$ that doesn't depend on $x_1, x_2, x_3$.

For the second term, we see that

$$
\lim_{n\rightarrow \infty} \left(1- \frac{x_1^2+x_2^2+x_3^2}{n}\right)^{\frac{n}{2}} = \lim_{n\rightarrow \infty} \left(1- \frac{x_1^2+x_2^2+x_3^2}{\left(\frac{n}{2}\right) 2}\right)^{\frac{n}{2}}
 = e^{-\frac{x_1^2+x_2^2+x_3^2}{2}}.
$$

Therefore, we get

$$
\begin{aligned}
\lim_{n\rightarrow \infty}  f_{X_1,X_2,X_3} (x_1,\cdots,x_3) = C e^{-\frac{x_1^2+x_2^2+x_3^2}{2}},
\end{aligned}
$$

which is the density of three i.i.d. standard normal random variable.

Remarks:
- It's easy to verify that $C= (2\pi)^{-3/2}$ so the limiting distribution exists.
- The statement is also true if $(X_1, \cdots, X_n)$ is uniformly distributed inside the $n$-dim. **ball** of radius $\sqrt{n}$.
- This result is a simpler version of **Poincaré's Lemma**. If we fix $k$ and look at the first $k$ coordinates, then we will get $k$ i.i.d standard normal r.v.'s.
