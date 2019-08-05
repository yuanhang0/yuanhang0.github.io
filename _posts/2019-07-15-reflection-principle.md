---
layout: post
title: A Counting Problem in Random Walk
# subtitle: Each post also has a subtitle
tag: [Probability, Combinatorics]
date: 2019-07-15
comments: true
---
Consider a simple random walk with each step being either '+1' or '-1'. Let's try to answer the following questions.

> What is the number of paths that start at 0 and end at 0 at step $2n$?

Well, this is straightforward. The process of getting a path is the same as choosing $n$ steps where we take '+1' among $2n$ steps.
And the remaining $n$ steps should take values '-1' automatically.
Thus, the total number of such paths is ${2n \choose n}$.

> What is the number of paths that start at 0 and end at 0 at step $2n$ and never go below 0?

To answer this question, let's first make some observations.

Let $N_{n}(x,y)$ be the number of paths of length $n$ that start at $x$ and end at $y$.

Let $N_{n}^0(x,y)$ be the number of paths of length $n$ that start at $x$ and end at $y$ which do not intersect the $x$-axis.

Let $N_{n}^1(x,y)$ be the number of paths of length $n$ that start at $x$ and end at $y$ which intersect the $x$-axis.

Here are some direct observations:

- Clearly, $N_{n}(x,y)$ = $N_{n}^0(x,y)$ + $N_{n}^1(x,y)$.

- $N_{n}(x,y) = {n \choose \frac{n+x-y}{2}}$ by the same argument in the above question.

- Furthermore, we have the Reflection Principle:

**Theorem (The Reflection Principle).**
For $x>0$ and $y>0$, we have:

$$

N_n^1(x, y) = N_n(-x, y),

$$

i.e., the number of paths of length $n$ from $x$ to $y$ which intersect the $x$-axis is the same as the number of paths of length $n$ from $-x$ to $y$.

The constraint that the path never go below 0 is equivalent to saying that the path never intersect the horizontal line -1 (though it may intersect the $x$-axis). Thus, we may shift everything by 1 unit up and the desired quantity is simply $N_{2n}^0(1,1)$ (the number of paths that start at 1 and end at 1 at step $2n$ which do not intersect the $x$-axis).

Thus, we may calculate it as follows:

$$
\begin{aligned}
N_{2n}^0(1,1) & = N_{2n}(1,1) - N_{2n}^1(1,1)\\
& = N_{2n}(1,1) - N_{2n}(-1,1) \\
& = {2n \choose n} -  {2n \choose n+1}  = \frac{(2n)!}{n!n!}-\frac{(2n)!}{(n+1)!(n-1)!}\\
& = \frac{(2n)!}{n!n!}\left(1 - \frac{n}{n+1}\right) =  \frac{(2n)!}{n!n!}\frac{1}{n+1} = \frac{(2n)!}{(n+1)!n!}.
\end{aligned}
$$

> What is the number of paths that start at 0 and end at 0 at step $2n$ and do not revisit 0 for intermediate steps?

Again, we try to make use of our observations above. Since we do not want to revisit 0, we can first restrict our choices to all paths above the $x$-axis and the final answer should be twice of the number of such paths. Then, for any such path above the $x$-axis, the first step it takes must be '+1' and the last step it takes must be '-1'. Thus, we only need to count the total number of paths of length $(2n-2)$ from 1 to 1 and do not intersect the $x$-axis., i.e., $N_{2n-2}^0(1,1)$. Therefore, we follow similar calculations as above and obtain:

$$
\begin{aligned}
N_{2n-2}^0(1,1) & = N_{2n-2}(1,1) - N_{2n-2}^1(1,1)\\
& = N_{2n-2}(1,1) - N_{2n-2}(-1,1) \\
& = {2n-2 \choose n-1} -  {2n-2 \choose n} = \frac{(2n-2)!}{n!(n-1)!}.
\end{aligned}
$$

Thus, the number of paths that start at 0 and end at 0 at step $2n$ and do not revisit 0 for intermediate steps is $\frac{2(2n-2)!}{n!(n-1)!}.$
