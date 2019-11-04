---
layout: post
title: Some Facts about Empirical Distribution Function
# subtitle: Each post also has a subtitle
tag: Statistics
date: 2019-11-04
comments: true
---

Let $X_{1}, \ldots, X_{n}$ be a random sample from a distribution function $F$. The **empirical distribution function** is defined as

$$
F_{n}(x)=\frac{1}{n} \sum\limits_{i=1}^{n} I\left\{X_{i} \le x\right\}.
$$

For each fixed $x$, $F_n(x)$, when considered as a function of the sample, is a random variable. There are many immediate and interesting facts about it. I'll list some of them below and I'll omitted obvious details and routine arguments.

1. $F_n(x)$ is unbiased as an estimator of $F(x)$, i.e., $\E(F_n(x)) = F(x)$.

2. Besides unbiasedness, we also note that

   $$
   \Var(F_n(x)) = \frac{1}{n^2} \sum\limits_{i=1}^{n} \Var(I\left\{X_{i} \le x\right\}) = \frac{1}{n}F(x)(1-F(x)).
   $$
   Hence, $F_n(x)$ converges to $F(x)$ in $L^2$-norm and in probability. Hence $F_n(x)$ is a weakly consistent estimator of $F(x)$.

3. By CLT,

   $$
   \sqrt{n}\left(F_n(x)-F(x)\right) \stackrel{\mathcal{D}}{\longrightarrow} N\left(0, \frac{F(x)(1-F(x))}{n}\right).
   $$

4. If we directly apply SLLN to i.i.d. r.v.'s $$I\{X_{i} \le x \}$$, we see that $F_n(x)$ is strongly consistent: $F_n(x) \stackrel{\text{a.s.}}{\longrightarrow} F(x)$.

5. Actually, it's well-known that $F_n(x)$ is strong uniform consistent estimator of $F(x)$:

    **Theorem (Glivenko-Cantelli).**

    $$
     \|F_n - F \|_{\infty} = \sup\limits_{x\in \mathbb{R}} |F_n(x) - F (x)|
     \stackrel{\text{a.s.}}{\longrightarrow} 0.
    $$

    Proof of this theorem can be found in many textbooks. For a direct approach, see *Asymptotic Statistics* by A.W.  van der Vaart. A totally different approach, which uses the DKW inequality together with Borel–Cantelli lemma, is given in *Approximation Theorems of Mathematical Statistics* by Robert J. Serfling.

6. Glivenko-Cantelli Theorem together with continuity of a statistical functional $T: \mathcal{P}\to \mathbb{R}$ can give us almost sure convergence of $T(F_n)$, as a functional plug-in estimator.

7. Suppose the true distribution function of the random sample $F_0$ is unknown. If we define

   $$
   D_n = \|F_n - F \|_{\infty} = \sup\limits_{x\in \mathbb{R}} |F_n(x) - F (x)|,
   $$

   then $D_n$ is the famous Kolmogorov-Smirnov statistic for a hypothesized  distribution function $F(x)$.

   The Kolmogorov-Smirnov test is a nonparametric goodness-of-fit test that tests if the sample comes from a proposed distribution. To conduct the test, we need a way to compute the asymptotic distribution of $D_n$ under null hypothesis $H_0: F_0 = F$.

8. Fortunately, we can make use of Donsker's Theorem to derive the asymptotic distribution of $D_n$ if $F$ is continuous.

    **Theorem (Donkser).**

    $$
     \sqrt{n}(F_n(x) - F (x)) \stackrel{\mathcal{D}}{\longrightarrow} \sup _{t}|B(F(t))|,
    $$

    i.e., the sequence of empirical processes converges in distribution in the space $\mathcal{D}[-\infty, \infty]$ to a $F$-Brownian bridge process.

    Kolmogorov showed that if $F$ is continuous,

    $$
    \sqrt{n} D_{n} \stackrel{\mathcal{D}}{\longrightarrow} \sup _{t}|B(t)|.
    $$

    Some detailed discussions on the computation can be found in *Large Sample Techinques* by Jiming Jiang.
