---
layout: post
title: MLE with Censored Data
# subtitle: Each post also has a subtitle
tag: Statistics
date: 2019-10-10
comments: true
---

Suppose bidder A and B are in a series of second-price auctions.

> In real-time bidding (RTB), the second-price auction gives the winner a chance to pay a little less than their original submitted offer. Instead of having to pay the full price, the winning bidder pays the price offered by the second-highest bidder plus $0.01. The final price of the impression is known as the clearing price.  [Source](https://clearcode.cc/blog/first-price-second-price-auction/)

For bidder A, he/she observes his/her offer $X_i,~i=1,..,n$. And only when he/she wins, he/she can observe B's offer $Y_i,~i=1,..,n$.
Suppose the price offered by bidder B has exponential distribution with an unknown parameter $\lambda$. Try to estimate $\lambda$ based on A's observations.

To formulate this problem, I follow what is routinely done with
**censored data** in survival analysis. Define the observation r.v.

$$
V_i = \min\{X_i, Y_i\} = \begin{cases} X_i &\text{ if } X_i \le Y_i \text{ with } C_i = 0\\
Y_i &\text{ if } X_i > Y_i \text{ with } C_i = 1\end{cases}
$$

and the censoring variable

$$
C_i = \begin{cases} 0 &\text{ if } X_i \le Y_i \\
1 &\text{ if } X_i > Y_i \end{cases}.
$$

For the sample $(V_1,C_1),...,(V_n, C_n)$, we have:

$$
\begin{aligned}
P(V_i = v_i,C_i = 1) = P(V_i = v_i,C_i = 1) &= P(X_i >v_i, Y_i = v_i, C_i = 1)\\
& = P(X_i > v_i)P(Y_i=v_i)P(C_i = 1)
\end{aligned}
$$

and

$$
\begin{aligned}
P(V_i = v_i,C_i = 0) =P(V_i = v_i,C_i = 0) & = P(X_i = v_i,Y_i >v_i, C_i = 0)\\
& = P(X_i = v_i)P(Y_i>v_i)P(C_i = 0).
\end{aligned}
$$

Note that only the terms $P(Y_i=v_i)$ and $P(Y_i>v_i)$ involves the parameter $\lambda$. Therefore, we can find the likelihood function of $\lambda$:

$$
\prod_{i=1}^n P(v_i,c_i) \propto \prod_{i=1}^n [f_Y(v_i)]^{c_i}[P(Y_i>v_i)]^{1-c_i}  = \text{Likelihood} =L(\lambda).
$$

Then, we solve the MLE as follows:

$$
\begin{aligned}
L(\lambda) &= \prod_{i=1}^n [f_Y(V_i)]^{C_i}[P(Y_i>V_i)]^{1-C_i} = \prod_{i=1}^n \left[ \lambda e^{-\lambda V_i}\right]^{C_i}\left[e^{-\lambda V_i}\right]^{1-C_i}\\
l(\lambda) & = \log L(\lambda) = \sum_{i=1}^n \left[ C_i \left( \log\lambda -\lambda Y_i\right) +  (1-C_i) \left( -\lambda X_i\right)\right]\\
l'(\lambda) & = \sum_{i=1}^n \left[ C_i \left( \frac{1}{\lambda} -Y_i\right) +  (1-C_i) \left( - X_i\right)\right] = 0\\
\sum_{i=1}^n & \left[ C_i \left( \frac{1}{\lambda} -Y_i\right) +  (1-C_i) \left( - X_i\right)\right] = 0 \\
\sum_{i=1}^n & \left[ \frac{C_i}{\lambda} -C_i Y_i - (1-C_i) X_i\right] = 0 \\
 & \frac{\sum\limits_{i=1}^n C_i}{\lambda}  =\sum_{i=1}^n \left[ C_i Y_i + (1- C_i) X_i \right] \\
 & \hat\lambda = \frac{\sum_{i=1}^n C_i}{\sum_{i=1}^n \left[ C_i Y_i + (1- C_i) X_i \right]} = \frac{\sum_{i=1}^n C_i}{\sum_{i=1}^n V_i},
 \end{aligned}
 $$

and we can easily verify that $l''(\lambda) < 0.$ Thus, the MLE of $\lambda$ is given by $\hat{\lambda} = \frac{\sum_{i=1}^n C_i}{\sum_{i=1}^n V_i}.$ Note that

$$
\hat \lambda =  \frac{\sum_{i=1}^n C_i}{\sum_{i=1}^n V_i} < \frac{n}{\sum_{i=1}^n V_i}=[\text{regular MLE of Exp}(\lambda)].
$$

It suggests that the estimate of $\lambda$ based on the censored data is smaller than the regular MLE if we pretend that the date is uncensored. This makes sense since we either observe $Y_i$ or a smaller quantity $X_i\le Y_i$. If we simply use the regular MLE to estimate the mean based on $V_i$'s, it makes our estimate have a smaller mean, i.e., we overestimate $\lambda$ by using the regular MLE.
