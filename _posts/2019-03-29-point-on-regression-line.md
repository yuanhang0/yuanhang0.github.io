---
layout: post
title: Removal of a Data Point on the Regression Line
# subtitle: Each post also has a subtitle
categories: Statistics
date: 2019-03-29
comments: true
---
Suppose the data we have is $(X_1,Y_1),...,(X_n,Y_n)$ and we fit it to the linear regression model: $Y=X\beta+\varepsilon,~\varepsilon\sim N(\boldsymbol{0},I_n)$. Assume that the i-th observation $(X_i, Y_i)$ lie exactly on the fitted line. Would $\hat\beta$ change if we delete $(X_i, Y_i)$ and perform linear regression on the rest $n-1$ observations?

Initially, I thought $\hat\beta$ would not change due to the following reasoning.

Let $X_{(i)}$ denote the $X$ matrix with i-th row deleted and let $Y_{(i)}$ denote the $Y$ vector with i-th component $Y_i$ deleted. Suppose that $\hat\beta$ is the ordinary least square estimator of $\beta$ based on the original data set. Then we have:

$$
\begin{aligned}
\min\limits_{\beta} \|Y- X\beta\|^2 &= \min\limits_{\beta} \|Y_{(i)}-X_{(i)}\beta \|^2+\|Y_i-X_i\beta\|^2 \\
&= \|Y_{(i)}-X_{(i)}\hat\beta\|^2+\|Y_i-X_i\hat\beta\|^2\\
&= \|Y_{(i)}-X_{(i)}\hat\beta\|^2,
\end{aligned}
$$

where the last equality follows from the fact that $(X_i, Y_i)$ lie on the fitted line.

Then I made a wrong assertion:
~~$\hat\beta$ not only minimizes $\|Y- X\beta\|^2$, but also minimizes $\|Y_{(i)}-X_{(i)}\hat\beta\|^2$~~. Indeed, the fact that $x_0$ minimizes both $f(x)+g(x)$ and $g(x)$ does not imply $x_0$ minimizes $f(x)$.

In general, $\hat\beta$ would change. Consider the data set given by $(0,0), (x_1, y_1), (x_1, -y_1)$. Then the regression line is simply $y=0$. (There are multiple ways to check this. A direct one is the geometric approach.) Now, $(0,0)$ lies on this line. However, its removal will change the regression line dramatically.
