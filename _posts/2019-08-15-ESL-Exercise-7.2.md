---
layout: post
title: Deriving the Test Error for the Bayes Classifier
# subtitle: Each post also has a subtitle
tag: [Statistics]
date: 2019-08-15
comments: true
---
The following problem is from the book *The Elements of
Statistical Learning, 2nd Ed.*

Ex. 7.2 For 0-1 loss with $Y \in\{0,1\}$ and $\operatorname{Pr}\left(Y=1 \vert x_{0}\right)=f\left(x_{0}\right),$ show that

$$
\begin{aligned} \operatorname{Err}\left(x_{0}\right) &=\operatorname{Pr}\left(Y \neq \hat{G}\left(x_{0}\right) | X=x_{0}\right) \\ &=\operatorname{Err}_{\mathrm{B}}\left(x_{0}\right)+\left\vert2 f\left(x_{0}\right)-1\right\vert \operatorname{Pr}\left(\hat{G}\left(x_{0}\right) \neq G\left(x_{0}\right) \vert X=x_{0}\right) \end{aligned}
$$

where $\hat{G}(x)=I\left(\hat{f}(x)>\frac{1}{2}\right), G(x)=I\left(f(x)>\frac{1}{2}\right)$ is the Bayes classifier
and

$$\operatorname{Err}_{\mathrm{B}} (x_{0})=\operatorname{Pr}\left(Y \neq G(x_{0}) \vert X=x_{0}\right),$$

the irreducible Bayes error at $x_{0}$ .

Using the approximation $\hat{f}\left(x_{0}\right) \sim N\left(\E \hat{f}\left(x_{0}\right), \Var\left(\hat{f}\left(x_{0}\right)\right), \text { show that }\right.$

$$
\operatorname{Pr}\left(\hat{G}\left(x_{0}\right) \neq G\left(x_{0}\right) | X=x_{0}\right) \approx \Phi\left(\frac{\operatorname{sign}\left(\frac{1}{2}-f\left(x_{0}\right)\right)\left(\E \hat{f}\left(x_{0}\right)-\frac{1}{2}\right)}{\sqrt{\Var\left(\hat{f}\left(x_{0}\right)\right)}}\right),
$$
where $\Phi(t)$ is the cdf of $N(0,1)$.

---
Let's start with computing $\operatorname{Err}\left(x_{0}\right)$.
Firstly, we note that for any three r.v.'s $A,B$ and $C$ we have the following partition of the event $\{A\ne B\}$:

$$
\left\{A\ne B\right\} =  \{A\ne C, C=B\} \sqcup  \{A\ne C, C\ne B, A\ne B\} \sqcup  \{A= C,~C\ne B\},
$$
where $\sqcup$ denotes the disjoint union of two sets. Then, we have:
$$
\begin{aligned} \operatorname{Err}\left(x_{0}\right) &=\operatorname{Pr}\left(Y \neq \hat{G}\left(x_{0}\right) | X=x_{0}\right) \\
&=\operatorname{Pr}\left(Y \neq {G}\left(x_{0}\right),~G(x_0) =\hat{G}(x_0) | X=x_{0}\right)\\
&\quad + \operatorname{Pr}\left(Y \neq {G}\left(x_{0}\right),~G(x_0) \ne \hat{G}(x_0),~Y \neq \hat{G}\left(x_{0}\right) | X=x_{0}\right)\\
&\quad + \operatorname{Pr}\left(Y = {G}\left(x_{0}\right),~G(x_0) \ne \hat{G}(x_0)| X=x_{0}\right)\\
&=\operatorname{Pr}\left(Y \neq {G}\left(x_{0}\right),~G(x_0) =\hat{G}(x_0) | X=x_{0}\right)\\
&\quad + \operatorname{Pr}\left(Y = {G}\left(x_{0}\right),~G(x_0) \ne \hat{G}(x_0)| X=x_{0}\right)\\
&=\operatorname{Pr}\left(Y \neq {G}\left(x_{0}\right)| X=x_{0}\right) - \operatorname{Pr}\left(Y \neq {G}\left(x_{0}\right),~G(x_0) \ne \hat{G}(x_0)| X=x_{0}\right)  \\
&\quad + \operatorname{Pr}\left(Y = {G}\left(x_{0}\right),~G(x_0) \ne \hat{G}(x_0)| X=x_{0}\right)\\
&=\operatorname{Pr}\left(Y \neq {G}\left(x_{0}\right)| X=x_{0}\right) -2 \operatorname{Pr}\left(Y \neq {G}\left(x_{0}\right),~G(x_0) \ne \hat{G}(x_0)| X=x_{0}\right)  \\
&\quad + \operatorname{Pr}\left(G(x_0) \ne \hat{G}(x_0)| X=x_{0}\right)\\
&=\operatorname{Pr}\left(Y \neq {G}\left(x_{0}\right)| X=x_{0}\right) +\left[1-2 \operatorname{Pr}\left(Y \neq {G}\left(x_{0}\right)| X=x_{0}\right)\right]\operatorname{Pr}\left(G(x_0) \ne \hat{G}(x_0)| X=x_{0}\right)\\
&=\operatorname{Pr}\left(Y \neq {G}\left(x_{0}\right)| X=x_{0}\right) +\left[2 \operatorname{Pr}\left(Y = {G}\left(x_{0}\right)| X=x_{0}\right)-1\right]\operatorname{Pr}\left(G(x_0) \ne \hat{G}(x_0)| X=x_{0}\right)\\
& = \operatorname{Err}_{\mathrm{B}}\left(x_{0}\right)+\left[2 \operatorname{Pr}\left(Y = {G}\left(x_{0}\right)| X=x_{0}\right)-1\right] \operatorname{Pr}\left(\hat{G}\left(x_{0}\right) \neq G\left(x_{0}\right) | X=x_{0}\right),
 \end{aligned}
$$

where in the third equality we used the fact that $Y, G, \hat{G}$ are 0-1 valued and thus cannot be all different from each other. It remains to show
$ 2 \operatorname{Pr}\left(Y = {G}\left(x_{0}\right)| X=x_{0}\right)-1 = \left\vert2 f\left(x_{0}\right)-1\right\vert$. Note that

$$
\begin{aligned}
\operatorname{Pr}\left(Y = {G}\left(x_{0}\right)| X=x_{0}\right) &= \operatorname{Pr}\left(Y = {G}\left(x_{0}\right) = 1| X=x_{0}\right) + \operatorname{Pr}\left(Y = {G}\left(x_{0}\right) = 0| X=x_{0}\right)\\
& = f(x_0)I\left\{2f(x_0)-1>0\right\}+(1-f(x_0))I\left\{2f(x_0)-1\le 0\right\}.
\end{aligned}
$$

Thus, we have

$$
\begin{aligned}
2\operatorname{Pr}\left(Y = {G}\left(x_{0}\right)| X=x_{0}\right) -1 &=
\begin{cases}
2f(x_0) -1,~~&\mbox{if } ~2f(x_0)-1>0\\
2(1-f(x_0)) -1,~~&\mbox{if }~ 2f(x_0)-1\le 0\\
\end{cases}\\
& = \begin{cases}
2f(x_0) -1,~~&\mbox{if }~ 2f(x_0)-1>0\\
1-2f(x_0) ,~~&\mbox{if }~ 2f(x_0)-1\le 0\\
\end{cases}\\
&=\left\vert2 f\left(x_{0}\right)-1\right\vert.
 \end{aligned}
$$

For the second part of the problem, we first note that if $x_0$ satisfies $f(x_0)>\frac{1}{2}$, then $G(x_0) = 0$ and if $x_0$ satisfies $f(x_0)\le\frac{1}{2}$, then $G(x_0) = 1$. Hence, we can obtain the desired equation:

$$
\begin{aligned}
\operatorname{Pr}\left(\hat{G}\left(x_{0}\right) \neq G\left(x_{0}\right) | X=x_{0}\right)  &= \operatorname{Pr}\left(\hat{G}\left(x_{0}\right) =1,~G\left(x_{0}\right)=0 | X=x_{0}\right) + \operatorname{Pr}\left(\hat{G}\left(x_{0}\right)=0,~ G\left(x_{0}\right)=1 | X=x_{0}\right) \\
& = \operatorname{Pr}\left(\hat{G}\left(x_{0}\right)>\frac{1}{2}\right) I\left\{f(x_0)\le \frac{1}{2}\right\} + \operatorname{Pr}\left(\hat{G}\left(x_{0}\right)\le\frac{1}{2}\right) I\left\{f(x_0)>\frac{1}{2}\right\}\\
& = \operatorname{Pr}\left(\frac{\hat{G}\left(x_{0}\right)- \E \hat{f}\left(x_{0}\right)}{\Var\left(\hat{f}\left(x_{0}\right)\right)}> \frac{\frac{1}{2}- \E \hat{f}\left(x_{0}\right)}{\Var\left(\hat{f}\left(x_{0}\right)\right)}\right) I\left\{f(x_0)\le \frac{1}{2}\right\}\\
&~~~~ + \operatorname{Pr}\left(\frac{\hat{G}\left(x_{0}\right)- \E \hat{f}\left(x_{0}\right)}{\Var\left(\hat{f}\left(x_{0}\right)\right)} \le \frac{\frac{1}{2}- \E \hat{f}\left(x_{0}\right)}{\Var\left(\hat{f}\left(x_{0}\right)\right)}\right) I\left\{f(x_0)> \frac{1}{2}\right\}\\
&\approx \Phi\left(\frac{-\left(\frac{1}{2}-\E \hat{f}\left(x_{0}\right)\right)}{\sqrt{\Var\left(\hat{f}\left(x_{0}\right)\right)}}\right)I\left\{f(x_0)\le \frac{1}{2}\right\} \\
&~~~~+\Phi\left(\frac{\frac{1}{2}-\E \hat{f}\left(x_{0}\right)}{\sqrt{\Var\left(\hat{f}\left(x_{0}\right)\right)}}\right)I\left\{f(x_0)> \frac{1}{2}\right\}\\
&= \Phi\left(\frac{\operatorname{sign}\left(\frac{1}{2}-f\left(x_{0}\right)\right)\left(\E \hat{f}\left(x_{0}\right)-\frac{1}{2}\right)}{\sqrt{\Var\left(\hat{f}\left(x_{0}\right)\right)}}\right),
 \end{aligned}
$$

where we used the approximation $\hat{f}\left(x_{0}\right) \sim N\left(\E \hat{f}\left(x_{0}\right), \Var\left(\hat{f}\left(x_{0}\right)\right)\right)$ in the problem statement.

As stated right after this exercise in this book, we have the following observations:

- The probability of misclassification depends on the true $f\left(x_{0}\right)$ only through which side of the boundary $\frac{1}{2}$ that it lies.

- If $\mathrm{E} \hat{f}\left(x_{0}\right)$ is on the same
side of $\frac{1}{2}$ as $f\left(x_{0}\right),$ then the numerator is negative, and decreasing the variance
will decrease the misclassification error.

- On the other hand, if $\operatorname{E} \hat{f}\left(x_{0}\right)$ is on the opposite side of $\frac{1}{2}$ to $f\left(x_{0}\right),$ then the numerator is positive and it pays to
increase the variance! Such an increase will improve the chance that $\hat{f}\left(x_{0}\right)$
falls on the correct side of $\frac{1}{2}$ (Friedman, 1997).
