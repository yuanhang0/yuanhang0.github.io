---
layout: post
title: Deriving Some Limits Via the Geometric Mean
# subtitle: Each post also has a subtitle
showtag: Calculus
date: 2019-05-30
comments: true
---
It's been a while since my last update. A few weeks ago, my colleague proposed a question regarding the limit of $\frac{ n }{\sqrt[n]{n!}}$ when teaching calculus. I found it interesting to make use of the lemma below to derive some limts:

**Lemma.** Suppose $\lim\limits_{n\rightarrow \infty} a_n = a$ and $a_n>0,~\forall n$. Then $\lim\limits_{n\rightarrow \infty} \sqrt[n]{a_1\cdots a_n} = a.$

- Example 1. $\lim\limits_{n\rightarrow \infty} \frac{n+1}{n} = 1.$ By the Lemma, we have:
$$
\lim\limits_{n\rightarrow \infty} \sqrt[n]{\frac{2}{1}\frac{3}{2}\cdots\frac{n+1}{n}} = \lim\limits_{n\rightarrow \infty} \sqrt[n]{n+1} = 1.
$$

- Example 2. $\lim\limits_{n\rightarrow \infty} \frac{1}{n} = 0.$ By the Lemma, we have:
$$
\lim\limits_{n\rightarrow \infty} \frac{1}{\sqrt[n]{n!}} = 0 ~~\Leftrightarrow~~ \lim\limits_{n\rightarrow \infty} \sqrt[n]{n!} = \infty.
$$

- Example 3. $\lim\limits_{n\rightarrow \infty} \left(1+\frac{1}{n}\right)^n = e.$ By the Lemma, we have:
$$
\begin{align}
e = \lim\limits_{n\rightarrow \infty} \left(1+\frac{1}{n}\right)^n
&= \lim\limits_{n\rightarrow \infty} \sqrt[n]{\left(\frac{2}{1}\right)\left(\frac{3}{2}\right)^2\cdots\left(\frac{n+1}{n}\right)^n}\\
&= \lim\limits_{n\rightarrow \infty} \sqrt[n]{\frac{(n+1)^n}{n!}}\\
&= \lim\limits_{n\rightarrow \infty}  \frac{ n+1 }{\sqrt[n]{n!}} = \lim\limits_{n\rightarrow \infty}  \frac{ n }{\sqrt[n]{n!}},
\end{align}
$$

where the last equality follows from Example 2. Equivalently, we also have
$$\lim\limits_{n\rightarrow \infty}  \frac{\sqrt[n]{n!}}{ n } = \frac{1}{e}.$$

Note that this important limit can also be obtained as follows:

$$
\begin{align}
\lim\limits_{n\rightarrow \infty}  \frac{\sqrt[n]{n!}}{ n } &=  e^{\log \lim\limits_{n\rightarrow \infty}  \frac{\sqrt[n]{n!}}{ n } }\\
& =  e^{\lim\limits_{n\rightarrow \infty}  \log \sqrt[n]{\frac{n!}{n^n}} } = e^{\lim\limits_{n\rightarrow \infty}  \frac{\log \frac{1\cdots n}{n \cdots n}}{n}} \\
& = e^{\lim\limits_{n\rightarrow \infty}  \frac{1}{n}\sum\limits_{i=1}^n \log \left(\frac{i}{n}\right) }\\
& = e^{\int_0^1 \log x~dx} = \frac{1}{e}.
\end{align}
$$
