---
layout: post
title: Duplication of a Data Set
# subtitle: Each post also has a subtitle
tag: Statistics
date: 2019-04-10
comments: true
---
Suppose the data we have is $(X_1,Y_1),...,(X_n,Y_n)$ and we fit it to the linear regression model: $Y=X\beta+\varepsilon,~\varepsilon\sim N(\boldsymbol{0},I_n)$. Now we make a duplicate of each data point and get a new data set of size $2n$. How would $\hat\beta$, $R^2$ and adjusted $R^2$ change if we fit the linear model with this new data set?

_Solution:_

We consider the dupilcates are at the positions $n+1$ to $2n$. Then we have

$$
X_{\text{new}} = \begin{pmatrix}
  X \\
  X
 \end{pmatrix}~~ \text{ and }~~ Y_{\text{new}} = \begin{pmatrix}
   Y \\
   Y
  \end{pmatrix}.
$$

Therefore,

$$
\begin{aligned}
\hat\beta_{\text{new}} = (X_{\text{new}}'X_{\text{new}})^{-1}X_{\text{new}}'Y_{\text{new}} &= (2X'X)^{-1}(2X'Y)\\
&= ( X'X)^{-1}X'Y = \hat \beta,
\end{aligned}
$$

which implies that $\hat\beta$ **does not change**.

Recall the formula for $R^2$ is $$ R^2 = \frac{ \| \hat Y -\bar Y \| ^2}{ \|  Y -\bar Y \| ^2 } $$. We note that
$$
\bar{Y}_{\text{new}} =\begin{pmatrix}
\bar{Y} \\
 \bar{Y}
\end{pmatrix} ~~ \text{ and } ~~ \hat{Y}_{\text{new}} = \begin{pmatrix}
   \hat{Y} \\
   \hat{Y}
  \end{pmatrix}.
$$

So we have
$$
\begin{aligned}
R^2_{\text{new}} =  \frac{\|\hat Y_{\text{new}} -\bar Y_{\text{new}} \|^2}{\|  Y_{\text{new}} -\bar Y_{\text{new}} \|^2} = \frac{2\|\hat Y -\bar Y \|^2}{2\|  Y -\bar Y \|^2} = R^2,
\end{aligned}
$$

which implies that $R^2$ **does not change** either.

Now, let's take a look at the new adjusted $R^2$. Recall the relationship between $R^2$ and adjusted $R^2$:

$$
R_{\text{adj}}^2 = 1- (1-R^2)\frac{n-1}{n-p-1} = R^2- (1-R^2)\frac{p}{n-p-1}.
$$

For this new data set, $R^2$ and $p$ remain the same while $n$ becomes $2n$.
So from the above equation, we see that $\frac{p}{n-p-1}$ decreases. Since $-(1-R^2)<0$, $R_{\text{adj}}^2$ should **increase**.

Here are some intuitions behind these results:
- The quantities $\hat\beta$ and $R^2$ both measures the linear correlation between $X$ and $Y$. They should not change even if we duplicate the data set many times.
- Adjusted $R^2$ is a good measure when evaluating model fit. When we make observations on each data point multiple times, we are more "confident" that our model is good.
