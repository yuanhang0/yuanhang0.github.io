---
layout: post
title: Inclusion-Exclusion Principle
# subtitle: Each post also has a subtitle
tag: [Probability, Combinatorics]
date: 2019-08-02
comments: true
---

**Proposition.** If we roll $n$ fair dice, the number of ways of getting a sum of $x,$ $n\le x \le 6n$, can be computed by:

$$
\sum_{k=0}^{[\frac{x-1}{6}]} (-1)^k {n \choose k} {x - 6k -1 \choose n-1}.
$$


Here are some computed examples:

$$
\mbox{|sum of 2 dice is 10|} = \sum_{k=0}^{[\frac{9}{6}]} (-1)^k {2 \choose k} {10 - 6k -1 \choose 2-1} = {2 \choose 0}{9 \choose 1} -{2 \choose 1}{3 \choose 1} = 3
$$

$$
\mbox{|sum of 2 dice is 12|} = \sum_{k=0}^{[\frac{11}{6}]} (-1)^k {2 \choose k} {12 - 6k -1 \choose 2-1} = {2 \choose 0}{11 \choose 1} -{2 \choose 1}{5 \choose 1} = 1
$$

$$
\mbox{|sum of 3 dice is 9|} = \sum_{k=0}^{[\frac{8}{6}]} (-1)^k {3 \choose k} {9 - 6k -1 \choose 3-1} = {3 \choose 0}{8 \choose 2} -{3 \choose 1}{2 \choose 2} = 28-3 =25.
$$

$$
\mbox{|sum of 3 dice is 18|} = \sum_{k=0}^{[\frac{17}{6}]} (-1)^k {3 \choose k} {18 - 6k -1 \choose 3-1} = {3 \choose 0}{17 \choose 2} -{3 \choose 1}{11 \choose 2} + {3 \choose 1}{5 \choose 2} = 1.
$$


$$
\mbox{|sum of 6 dice is 18|} = \sum_{k=0}^{[\frac{17}{6}]} (-1)^k {6 \choose k} {18 - 6k -1 \choose 6-1} = {17 \choose 5}-{6 \choose 1}{11 \choose 5}+ {6 \choose 2}{5\choose 5}= 3431.
$$

**Proof:**

Consider the $n$-integer partition of $n\le x\le 6n$  with no constraint, denoted by
$$
X_1+X_2+\cdots + X_n = x, \quad X_i\in \mathbb{N}.
$$
Then, by the stars and bars method, the total number of such partitions can be easily found to be:
$$
{x-1 \choose n-1}.
$$

Now, among those partitions, we need to exclude the ones with at least one $X_i>6$.
Let $A_i$ be the event that $X_i$ is greater than 6. Then the cardinality of the event that at least one $X_i>6$ can be computed by the inclusion-exclusion principle as follows:

$$\begin{aligned}
\left|\bigcup_{i=1}^{n} A_{i}\right| & = \sum_{i=1}^{n}\left|A_{i}\right|-\sum_{1 \leqslant i<j \leqslant n}\left|A_{i} \cap A_{j}\right|+\sum_{1 \leqslant i<j<k \leqslant n}\left|A_{i} \cap A_{j} \cap A_{k}\right|-\cdots+(-1)^{n-1}\left|A_{1} \cap \cdots \cap A_{n}\right| \\
& = {n \choose 1 } \left|A_1\right| - {n \choose 2 } \left|A_1\cap A_2\right| + \cdots.
\end{aligned}$$

Note that for computing $\left|A_1\right|,$ we need to count the number of partitions such that $X_1>6.$ Since $X_1$ now takes values $7, 8, 9, \cdots,$ we may simply subtract 6 from it then count. Thus, the quantity $\left|A_1\right|$ should be the same as the number of $n$-integer partitions of $(x-12)$ with no constraint. Thus,

$$
 |A_1| = {x-6-1 \choose n-1}.
$$

From similar argument, we can also get

$$
 |A_1\cap \cdots \cap A_k| = {x- 6k-1 \choose n-1}.
$$

Let's put everything together:

$$
\begin{aligned}
 & \quad{x-1 \choose n-1} - \left[{n \choose 1 }{x-6-1 \choose n-1}+(-1)^1 {n \choose 2 }{x- 6\cdot 2-1 \choose n-1}+\cdots  + (-1)^{k-1} {n \choose k }{x- 6k-1 \choose n-1} \right] \\
 & = \sum_{k=0}^{[\frac{x-1}{6}]} (-1)^k {n \choose k} {x - 6k -1 \choose n-1},
\end{aligned}
$$

which is the claimed quantity in the beginning of this post.

### Note
- To obtain probability, one simply divide this quantity by $6^n$. For example, the probability of getting a sum of 18 from 6 dice is

$$
\frac{3431}{6^6} \approx 0.074.
$$

- My friend Xinsheng first derived this formula explicitly by computing the coefficient using generating functions. The credits of combinatorics argument is due to discussions with Xiaoyu.
