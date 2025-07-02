```markdown
# Introduction to Calculus

Calculus is a branch of mathematics that deals with rates of change
and accumulation of quantities. It is broadly divided into two main
areas: differential calculus and integral calculus. This introduction
will cover the basics of both, using Mermaid.js for visual
representations and KaTeX for mathematical equations.

## Differential Calculus

Differential calculus is concerned with the study of rates of change
and slopes of curves. The fundamental concept here is the derivative.

### Derivative

The derivative of a function at a chosen input value measures the rate
at which the output of the function is changing with respect to
changes in its input, at that point. It is defined as:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

### Graphical Representation

To visualize the derivative, we can use Mermaid.js to create a graph of the function and its derivative.

```mermaid
graph TD
    A[f(x) = x^2] --> B[f'(x) = 2x]
    A --> C[Graph of f(x)]
    B --> D[Graph of f'(x)]
```

### Tangent Line

The derivative at a point gives the slope of the tangent line to the
curve at that point. For the function $ f(x) = x^2 $ at $ x = 1 $,
the tangent line equation is:

$$
y - f(1) = f'(1)(x - 1)
$$

Substituting $ f(1) = 1 $ and $ f'(1) = 2 $:

$$
y - 1 = 2(x - 1)
$$

Simplifying, we get:

$$
y = 2x - 1
$$

## Integral Calculus

Integral calculus is concerned with the accumulation of quantities and
the areas under curves. The fundamental concept here is the integral.

### Integral

The definite integral of a function $ f(x) $ from $ a $ to $ b $ is
defined as:

$$
\int_{a}^{b} f(x) \, dx
$$

It represents the signed area between the curve $ f(x) $ and the
x-axis over the interval $[a, b]$.

For example, the integral of $ f(x) = x^2 $ from 0 to 1 is:

$$
\int_{0}^{1} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{0}^{1} = \frac{1}{3}
$$

### Graphical Representation

To visualize the integral, we can use Mermaid.js to create a graph of
the function and the area under the curve.

```mermaid
graph TD
    A[f(x) = x^2] --> B[Integral from 0 to 1]
    A --> C[Graph of f(x)]
    B --> D[Area under the curve]
```

### Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus establishes a relationship between
differentiation and integration. It states that if $ f $ is continuous
on $[a, b]$ and $ F(x) = \int_{a}^{x} f(t) \, dt $, then $ F'(x) = f(x) $.

This theorem is crucial as it allows us to compute definite integrals
using antiderivatives.

## Conclusion

Calculus is a powerful tool for understanding change and accumulation.
Differential calculus helps us understand rates of change and slopes,
while integral calculus helps us understand areas and accumulations.
By using Mermaid.js for graphs and KaTeX for equations, we can
visualize and understand these concepts more effectively.

