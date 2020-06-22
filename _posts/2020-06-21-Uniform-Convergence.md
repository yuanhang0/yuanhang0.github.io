---
layout: post
title: A proof of the Polya's Theorem
# subtitle: Each post also has a subtitle
tag: Probability
date: 2020-06-21
comments: true
---
The famous Polya's Theorem, which states that weak convergence to a continuous d.f. F is in fact uniform convergence, can be extended slightly by relaxing the condition a little bit. To prove it, I will follow the proof given in the book *Probability Theory: Independence, Interchangeability, Martingales* by Chow and Teicher.

**Theorem.** If d.f.'s $F_n \Rightarrow F$ and $F_n(x\pm) \rightarrow F(x\pm)$ at all discontinuity points of $F$, then $F_n$ converges uniformly to $F$ on $(-\infty, \infty)$. In particular, if the d.f.'s $F_n \Rightarrow F$ and $F$ is a continuous d.f., then the convergence is uniform on $(-\infty, \infty)$, i.e., $\sup_x \vert F_n(x) -F(x)\vert  \rightarrow 0$, as $n \rightarrow 0$.

Proof:
For fixed $k$, consider the sequence $-\infty = x_{0k}\le x_{1k} \le \cdots \le x_{jk} \le \cdots \le x_{kk}=\infty$, where $x_{jk}$ is the smallest $x$ s.t. $F(x+) \ge \frac{j}{k}$ for $1\le j<k$.

Then, we know that $F(x_{jk}) \le \frac{j}{k}$ (equality holds only if $F$ is continuous at $x_{jk}$ as $F$ is left-continuous) and hence

$$

0\le F(x_{j+1,k}) - F(x_{jk}+) \le \frac{1}{k}, ~\text{ for } 0\le j<k.

$$

From the above inequality, we see that for $x \in (x_{jk}, x_{j+1,k}]$:

$$
F_n(x)-F(x)  \le F_n(x_{j+1,k}) - F(x_{jk}+) \le F_n(x_{j+1,k}) -F(x_{j+1,k}) +\frac{1}{k}
$$

and similarly

$$
F_n(x)-F(x)  \ge F_n(x_{jk}+) - F(x_{j+1,k}) \ge F_n(x_{jk}+) -F(x_{jk}+) -\frac{1}{k}.
$$

By these two observations, we have

$$
\sup_{x\in (x_{jk}, x_{j+1,k}]} \vert F_n(x) -F(x)\vert \le  \vert F_n(x_{j+1,k}) - F(x_{j+1,k})\vert +  \vert F_n(x_{jk}+) - F(x_{jk}+)\vert  +\frac{1}{k},
$$

and thus

$$
\sup_x \vert F_n(x) -F(x)\vert \le \max_{1\le j \le k}  \vert F_n(x_{jk}) - F(x_{jk})\vert  + \max_{0\le j \le k}  \vert F_n(x_{jk}) - F(x_{jk})\vert  +\frac{1}{k}.
$$

For any fixed $k$, the first two terms on the RHS goes to 0 as $n\rightarrow \infty$. Thus, we can make the RHS arbitrarily small by taking sufficiently large $k$.       $\square$
