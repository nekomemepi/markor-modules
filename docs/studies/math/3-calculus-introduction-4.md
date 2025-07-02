````markdown
# An Introduction to Calculus with KaTeX and MermaidJS

Calculus is a powerful branch of mathematics that deals with rates of
change and accumulation. It has two major branches: **differential
calculus** and **integral calculus**. This introduction will explore
the fundamental concepts of each, using KaTeX for mathematical
notation and MermaidJS for graphical representations.

***

## 1. The Foundation: Limits

Before diving into calculus, we must understand the concept of a
**limit**. A limit describes the value that a function approaches as
the input (or index) approaches some value. Limits are crucial for
defining both derivatives and integrals.

In simple terms, we want to know what value $f(x)$ gets closer and
closer to as $x$ gets closer and closer to a certain number, say $a$.
We write this as:

$$
\lim_{x \to a} f(x) = L
$$

This equation reads: "The limit of $f(x)$ as $x$ approaches $a$ equals $L$."

***

## 2. Differential Calculus: The Rate of Change

Differential calculus is concerned with the **rate at which quantities
change**. The fundamental concept here is the **derivative**, which
measures the instantaneous rate of change of a function.

### The Derivative

The derivative of a function $f(x)$ with respect to the variable $x$
is denoted as $f'(x)$ or $\frac{dy}{dx}$. It's defined as the limit of
the average rate of change of the function over an infinitesimally
small interval. The formula for the derivative is:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

Geometrically, the derivative at a point represents the **slope of the
tangent line** to the function's graph at that point. This is
contrasted with the **secant line**, which connects two points on the
graph and represents the average rate of change over an interval.

The MermaidJS diagram below illustrates a function curve with both a
secant line (average change) and a tangent line (instantaneous
change).

```mermaid
graph TD
    subgraph Function f(x)
        A[Start of Interval] -->|Secant Line| B[End of Interval]
        C(Point of Tangency) -->|Tangent Line| D(Direction of Instantaneous Change)
    end
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#ccf,stroke:#333,stroke-width:4px
````

-----

## 3\. Integral Calculus: The Accumulation of Quantities

Integral calculus is the other side of the coin. It's focused on
**accumulating quantities** and finding the **area under a curve**.
The fundamental concept is the **integral**.

### The Integral

The **definite integral** of a function $f(x)$ from a starting point
$a$ to an ending point $b$ is written as:

$$
\int_{a}^{b} f(x) \,dx
$$

This expression represents the signed area of the region bounded by
the graph of $f(x)$, the x-axis, and the vertical lines $x=a$ and
$x=b$.

We can visualize this as summing up an infinite number of
infinitesimally thin rectangles under the curve, a concept related to
the **Riemann sum**.

The following flowchart illustrates the process of finding the area
under a curve through integration.

```mermaid
graph LR
A[Define Function f(x)] --> B{Choose Interval [a, b]};
B --> C[Set up the Definite Integral<br>∫ f(x) dx from a to b];
C --> D[Find the Antiderivative F(x)];
D --> E[Calculate F(b) - F(a)];
E --> F((Result: Area Under the Curve));
```

-----

## The Fundamental Theorem of Calculus

The most profound result in calculus is the **Fundamental Theorem of
Calculus**, which links the concepts of the derivative and the
integral. It states that differentiation and integration are inverse
operations.

1.  **First Part**: If $F(x)$ is the integral of $f(x)$, then the
    derivative of $F(x)$ is $f(x)$.

```
$$
\\frac{d}{dx} \\int\_{a}^{x} f(t) ,dt = f(x)
$$
```

2.  **Second Part**: This provides a way to compute definite integrals.
    $$
    $$$$\\int\_{a}^{b} f(x) ,dx = F(b) - F(a)
    $$
    $$$$where $F$ is any antiderivative of $f$ (meaning $F' = f$).

This theorem beautifully unifies the two major branches of calculus,
showing that the rate of change (derivative) and accumulation
(integral) are intrinsically connected.
