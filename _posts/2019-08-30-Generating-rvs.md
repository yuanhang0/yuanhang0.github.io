---
layout: post
title: Generating r.v.'s
# subtitle: Each post also has a subtitle
tag: [Statistics, Coding]
date: 2019-08-30
comments: true
---

Suppose that we can generate uniform r.v. $U$ on $(0,1)$.

### Generate $X\sim U(a,b)$
We can simply scale U to make its support be the desired interval:
- Return $X = (b-a)U+a$.

## Generate $X\sim F$ where $F^{-1}$ has a closed-form expression
Let r.v. $X$ have a distribution function $F$. Denote the inverse of $F$
by $F^{-1}$. Then $X$ can be generated as follows:

- Return $X = F^{-1}(U)$.

If $F^{-1}$ doesn't exist,  we use the generalized inverse function

$$
\begin{aligned}
F^{-1}(u)=\min \{x : F(x) \geq u\}.
\end{aligned}
$$

This method is also known as the inverse transform sampling.

To see why $X$ would follow the desired distribution, we compute its cdf $F_X(x)$ and check if it matches $F(x)$:

$$
\begin{aligned}
F_X(x) = P(X\le x) &= P(F^{-1}(U) \le x )\\
& = P(F(F^{-1}(U)) \le F(x) )\\
&= P(U\le F(x)) = F(x),
\end{aligned}
$$

where in the last step we used the fact that $U\sim U(0,1)$ has cdf $F_U(u) = P(U\le u) = u,$ if $u\in (0,1)$.

Here are some examples:
- $X = -\log U \sim \operatorname{Exp}(1)$;

- $X = -\frac{\log U}{\lambda} \sim \operatorname{Exp}(\lambda)$;

- $X =\frac{(− \log U)^{1/a}} {\lambda} \sim$ Weibull $(a, \lambda)$.

##### Generate $Z\sim N(0,1)$
Normal distribution doesn't have closed-form cdf $F$ or $F^{-1}$. One way of generating normal r.v.'s is based on the [Box-Muller transform](https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform). The following is the code that I use in C.

``` CPP
float norm(long *idum)
/*
 Returns a r.v. X~N(0,1). Call with a negative integer idum to initialize.
*/
{
    float ran1(long *idum); // ran1 generates r.v. U ~ U(0,1).
    static int iset = 0;
    static float gset;
    float fac,rsq,v1,v2;

    if (iset == 0){
        do{
            v1 = 2.0*ran1(idum)-1.0;
            v2 = 2.0*ran1(idum)-1.0; // Two r.v.'s ~ U(-1,1).
            rsq = v1*v1+v2*v2;
        }while (rsq >= 1.0||rsq == 0.0); // Try until they are in unit circle.
        fac = sqrt(-2.0*log(rsq)/rsq);
        // Box-Muller transformation
        gset = v1*fac;
        iset = 1;   // Set flag.
        return v2*fac;
    }
    else{
        iset = 0;
        return gset;
    }
}
```
##### Generate $X\sim N(\mu,\sigma^2)$
If $Z\sim N(0,1)$, then $\sigma Z+\mu \sim N(\mu, \sigma^2)$. Thus, we can apply a linear transformation on the standard normal r.v. $Z$ to get $X$:
- Return $X = \sigma Z+\mu$.

##### Generate $X\sim Ber(p)$ and $X\sim B(n,p)$
The method below can be considered as an example of the inverse transform sampling described above.
- Generate $U \sim U(0,1)$;

- If $U\le p$, return $X = 1$;

- Else return $X = 0$;

To generate $X\sim B(n,p)$, we may use the fact that $X = \sum\limits_{i=1}^n X_i \sim B(n,p)$, where $X_i$'s are iid r.v.'s from $Ber(p)$.

##### Generate $X\sim \operatorname{Geometric}(p)$ and $X\sim \operatorname{NegBin}(n,p)$

For a Geometric distribution with pmf:

$$
P(X = k) = p(1-p)^{k},~~~~k = 0, 1,\cdots,
$$

$X$ can be considered as the number of failures until the first success in a sequence of independent Bernoulli trials with parameter $p$. So the algorithm is:

- Generate iid Bernoulli random variables $X_{1}, X_{2},\cdots$;

- Stop when we obtain the first success and suppose its index is $I$;

- Return $X = I-1$.

To generate $X\sim \operatorname{NegBin}(n,p)$, we may use the fact that

$$
X = \sum\limits_{i=1}^n X_i \sim \operatorname{NegBin}(n,p),
$$

where $X_i$'s are iid r.v.'s from $\operatorname{Geometric}(p)$.

In general, generating a discrete r.v. $X$ with a finite support can be done via similar steps as above.

##### Generate $X\sim \operatorname{Poisson}(\lambda)$
Possion random variables have a countable support $\mathbb{N}$. It's not preferable to generate it from direct inverting the cdf since the accuracy would be bad for $P(X=k)$ when $k$ is large.

Instead, we use the fact that for a Possion process with rate $\lambda = 1$, the number of arrivals in an interval of length $\lambda$ has distribution $\operatorname{Poisson}(\lambda)$.
We generate a random sample $X_i$'s from $\operatorname{Exp}(1)$ that denotes the inter-event times. Then we count the number of events in the interval of lenght $\lambda$. Equivalently, we keep track of $\sum_{i=1}^{I+1} X_{i}$ until their sum first exceeds $\lambda$. The algorithm is as follows:

- Generate iid inter-event times $X_{1}, X_{2}, \cdots$ from $\operatorname{Exp}(1)$;

- We stop at index $I$ when the sum exceeds $\lambda$ for the first time

$$
\sum_{i=1}^{I+1} X_{i}>\lambda ;
$$

- Return $X=I$.

Recall how we generate $\operatorname{Exp}(1)$ from uniform distribution. It's straightforward to show that the algorithm below is equivalent to the previous one.

- Generate iid inter-event times $U_{1}, U_{2}, \cdots$ from $U(0,1)$;

- We stop at index $I$ when the product is smaller than $e^{-\lambda}$ for the first time

$$
\prod_{i=1}^{I+1} U_{i} < e^{-\lambda} ;
$$

- Return $X=I$.
