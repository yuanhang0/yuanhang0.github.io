---
layout: post
title: Test Statistic in Signed-rank Test
# subtitle: Each post also has a subtitle
tag: Statistics
date: 2019-10-31
comments: true
---
Happy Halloween!

We say two data samples are matched if they come from the same distribution. One extreme case is that two samples are actually repeated observations of the same subject. Suppose now we want to determine if two data samples are matched. By assuming that both sample come from normal distribution (or when the sample size is large), we may conduct the paired t-test.

When there's no enough evidence to support that the data is actually normal, we may consider a more direct nonparametric approach: Wilcoxon signed-rank test. It is a **nonparametric** test that can be used to determine whether two data samples have the same distribution without any assumptions on the actual distribution.

The data we have is paired sample of size $n$, i.e., two samples of the same size $n$.

The test statistic is calculated by the following steps:

1. Calculate the differences, $D_i$, and the absolute values of the differences and rank the latter.

2. Restore the signs of the differences to the ranks, obtaining signed ranks.

3. Calculate $W_+$, the sum of those ranks that have positive signs.

4. Use $W_+$ as the test statistic. We reject $H_0$ for extreme values of $W_+$. When sample size is large ($>20$), use normal approximation with expectation and variance derived below.

Assumptions: $D_i$'s are i.i.d. continuous r.v.'s.

$H_0:$ $D_i$ has symmetric distribution about 0.


**Claim:** Under $H_0$, $\E W_+  = \frac{n(n+1)}{4}$ and $\Var(W_+) = \frac{n(n+1)(2n+1)}{24}$.

**Proof:**

   Under $H_0$, we know that each $D_i$ has a probability of $\frac{1}{2}$ to be positive. Then we may rewrite $W_+$ as follows:

   $$
   W_+ = \sum\limits_{i:~D_i>0} D_i = \sum\limits_{k=1}^n k I\{\mbox{the k-th largest absolute value} >0 \},
   $$
where the indicator functions, are i.i.d. $\text{Ber}(\frac{1}{2})$ r.v.'s.

Therefore,

   $$
   \begin{aligned}
       \E W_+ &= \E  \sum\limits_{k=1}^n k I\{\text{the $k$-th largest value} >0 \} =    \sum\limits_{k=1}^n k P\{\mbox{the k-th largest value} >0 \}\\
       & = \sum\limits_{k=1}^n k \cdot \frac{1}{2} = \frac{n(n+1)}{4}.
   \end{aligned}
   $$

Similarly,
$$
\begin{aligned}
       \Var(W_+) &= \Var\left(  \sum\limits_{k=1}^n k I\{\mbox{the k-th largest value} >0 \}\right) =    \sum\limits_{k=1}^n k^2 \Var I\{\mbox{the k-th largest value} >0 \}\\
       & = \sum\limits_{k=1}^n k^2\cdot\frac{1}{4} = \frac{n(n+1)(2n+1)}{24}.
   \end{aligned}
$$

When sample size is small, we can calculate the exact distribution of $W_+$ easily by the above trick.
