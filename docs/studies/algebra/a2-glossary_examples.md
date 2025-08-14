## Linear Algebra Glossary with Examples

### A
---
**Adjoint of a Matrix**

* **Meaning:** Think of the adjoint as a "helper" matrix. Its main
  purpose is to help find the **inverse** of another matrix,
especially when doing it by hand. You construct it by taking the
**determinants** of smaller pieces of the original matrix and
arranging them in a specific, transposed way.

* **Example:** For a simple $2 \times 2$ matrix $A = \begin{pmatrix} a
  & b \\ c & d \end{pmatrix}$, its adjoint is found by swapping the
diagonal elements and negating the off-diagonal ones: $adj(A) =
\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$. So, for $A =
\begin{pmatrix} 4 & 1 \\ 3 & 2 \end{pmatrix}$, its adjoint is $adj(A)
= \begin{pmatrix} 2 & -1 \\ -3 & 4 \end{pmatrix}$.


**Augmented Matrix**

* **Meaning:** An augmented matrix is a convenient bookkeeping tool
  for solving a system of linear equations. You take the grid of
numbers that multiply the variables (the coefficient matrix) and
"augment" it by tacking on the column of numbers from the other side
of the equals signs. This lets you solve the whole system at once
using row operations.

* **Example:** The system of equations: $x + 2y = 5$, $3x + 4y = 6$
  becomes the augmented matrix $[A|\vec{b}] =
\left[\begin{array}{cc|c} 1 & 2 & 5 \\ 3 & 4 & 6 \end{array}\right]$.
The vertical line is just there to remind you where the equals signs
were.

### B
---
**Basis**

* **Meaning:** A basis is the smallest possible set of "direction"
  vectors you need to be able to build any other vector in a given
space. For a basis to be valid, its vectors must be **linearly
independent** (none of them can be created by combining the others)
and they must **span** the entire space (their combinations can reach
every single point).

* **Example:** In the 2D plane ($\mathbb{R}^2$), the standard basis is
  the set of vectors representing the x and y directions:
$\{\vec{e}_1, \vec{e}_2\} = \left\{ \begin{pmatrix} 1 \\ 0
\end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix} \right\}$. You can
get anywhere just by moving some amount in the x-direction and some
amount in the y-direction.

### C
---
**Change of Basis**

* **Meaning:** This is the process of translating a vector's
  coordinates from one system of reference (one basis) to another.
Imagine describing a location using "north-south/east-west" and then
wanting to translate that into a different grid system, like "along
Main Street/along Park Avenue". The change-of-basis matrix is the
formula for that translation.

* **Example:** The vector $\vec{v} = \begin{pmatrix} 3 \\ 1
  \end{pmatrix}$ has coordinates $(3,1)$ in the standard basis. In a
different basis, like $$C = \left\{ \begin{pmatrix} 1 \\ 1
\end{pmatrix}, \begin{pmatrix} 1 \\ -1 \end{pmatrix} \right\}$$ we'd
find its coordinates are $(2,1)$, because $$2\begin{pmatrix} 1 \\ 1
\end{pmatrix} + 1\begin{pmatrix} 1 \\ -1 \end{pmatrix} =
\begin{pmatrix} 3 \\ 1 \end{pmatrix}$$.


**Characteristic Polynomial**

* **Meaning:** This is a special polynomial you create from a square
  matrix. Its single most important job is to help you find the
matrix's **eigenvalues**. You find them by setting this polynomial
equal to zero and solving for its roots. It's "characteristic" because
it's unique to a matrix and reveals its fundamental scaling
properties.

* **Example:** For the matrix $A = \begin{pmatrix} 2 & 1 \\ 1 & 2
  \end{pmatrix}$, the characteristic polynomial is found by
calculating $p(\lambda) = \det(A - \lambda I)$. This gives $$p(\lambda)
= \det\begin{pmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{pmatrix} =
(2-\lambda)^2 - 1^2 = \lambda^2 - 4\lambda + 3$$.


**Cofactor**

* **Meaning:** For any single element in a square matrix, its cofactor
  is a signed number calculated from the elements *not* in that
element's row or column. It's a key ingredient used in one method of
calculating the matrix's overall **determinant**. The sign (+ or -)
depends on the element's position in a checkerboard pattern.

* **Example:** For $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 &
  8 & 9 \end{pmatrix}$, the cofactor of the top-left element,
$a_{11}=1$, is $$C_{11} = (-1)^{1+1} \det\begin{pmatrix} 5 & 6 \\ 8 & 9
\end{pmatrix} = 1 \cdot (5 \cdot 9 - 6 \cdot 8) = -3$$.


**Column Space**

* **Meaning:** The column space is the set of all possible "output"
  vectors a matrix can produce. If you think of the matrix's columns
as a set of fundamental direction vectors, the column space is
everywhere you can get to by stretching and adding those directions
together (i.e., making **linear combinations**).

* **Example:** For the matrix $A = \begin{pmatrix} 1 & 3 \\ 2 & 6
  \end{pmatrix}$, the two column vectors are $\vec{c}_1 =
\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $\vec{c}_2 = \begin{pmatrix}
3 \\ 6 \end{pmatrix}$. Since $\vec{c}_2$ is just $3 \times \vec{c}_1$,
they both point along the same line. The column space is therefore not
the whole 2D plane, but just the single line passing through the
origin and the point $(1, 2)$.


**Cramer's Rule**

* **Meaning:** This is a direct recipe for solving a system of linear
  equations. It gives you the answer for each variable as a ratio of
two **determinants**. While it's a neat theoretical formula, for
systems larger than $3 \times 3$ it's usually much slower than other
methods like row reduction.

* **Example:** For the system $2x + y = 5$ and $3x + 4y = 10$, the
  main determinant is $\det(A) = \det\begin{pmatrix} 2 & 1 \\ 3 & 4
\end{pmatrix} = 5$. To find $x$, you replace the x-column with the
constants and find that determinant: $\det(A_x) = \det\begin{pmatrix}
5 & 1 \\ 10 & 4 \end{pmatrix} = 10$. Then $x =
\frac{\det(A_x)}{\det(A)} = \frac{10}{5} = 2$.

### D
---
**Determinant**

* **Meaning:** The determinant is a single number that tells you about
  the "scaling factor" of a matrix transformation. For a 2D matrix,
it's the area of the parallelogram formed by the column vectors. For
3D, it's the volume. A determinant of 0 means the transformation
collapses space into a lower dimension (e.g., a plane into a line),
and the matrix is not **invertible**.

* **Example:** The matrix $A = \begin{pmatrix} 3 & 1 \\ 0 & 2
  \end{pmatrix}$ transforms the standard basis vectors into
$\begin{pmatrix} 3 \\ 0 \end{pmatrix}$ and $\begin{pmatrix} 1 \\ 2
\end{pmatrix}$. The area of the parallelogram these vectors form is
their determinant: $\det(A) = 3 \cdot 2 - 1 \cdot 0 = 6$.


**Diagonalizable Matrix**

* **Meaning:** A matrix is diagonalizable if its transformation can be
  simplified to just stretching or compressing along its
**eigenvector** directions. From the "perspective" of its
eigenvectors, the transformation is very simple. This property is
incredibly useful for calculating high powers of a matrix, like
$A^{100}$, because you only need to raise the diagonal entries (the
eigenvalues) to that power.

* **Example:** The matrix $A = \begin{pmatrix} 2 & 1 \\ 1 & 2
  \end{pmatrix}$ is diagonalizable. It can be rewritten as $A =
PDP^{-1}$ where $D = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$ is
the diagonal matrix of its eigenvalues. So $$A^2 = PD P^{-1} P D P^{-1}
= PD^2 P^{-1}$$ which is much easier to compute.


**Dimension**

* **Meaning:** The dimension of a space is the minimum number of
  coordinates you need to uniquely identify any point within it. A
line has dimension 1, a flat surface has dimension 2, and the world we
live in has dimension 3. It's equal to the number of vectors in any
**basis** for that space.

* **Example:** The vector space $\mathbb{R}^3$ (all vectors of the
  form $\begin{pmatrix} x \\ y \\ z \end{pmatrix}$) has a dimension of
3. A plane passing through the origin in $\mathbb{R}^3$ is a
**subspace** with a dimension of 2.

### E
---
**Echelon Form**

* **Meaning:** This is a "stair-step" arrangement of a matrix,
  achieved by using simple row operations. The goal is to create zeros
below each leading non-zero number (called a **pivot**). This
organized form makes a system of equations much easier to solve by
back-substitution.

* **Example:** The matrix $\begin{pmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0
  & 0 & 6 \end{pmatrix}$ is in echelon form. The pivots 1, 4, and 6
form a staircase pattern, making it easy to solve for the variables
starting from the bottom row and working up.


**Eigenvalue & Eigenvector**

* **Meaning:** An **eigenvector** is a special, non-zero vector that,
  when a matrix transformation is applied to it, doesn't change its
direction—it only gets scaled (stretched, shrunk, or flipped). The
**eigenvalue** is the number representing that scaling factor. They
are the "soul" of a matrix, revealing its fundamental behavior.

* **Example:** Imagine a transformation that stretches everything
  horizontally by a factor of 3. Any horizontal vector, like $\vec{v}
= \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, is an eigenvector. After the
transformation, it becomes $\begin{pmatrix} 3 \\ 0 \end{pmatrix}$. The
eigenvector is $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and its
corresponding eigenvalue is $\lambda=3$.

### G
---
**Gram-Schmidt Process**

* **Meaning:** This is a step-by-step recipe for taking a messy set of
  basis vectors and "tidying them up." It turns them into an
**orthonormal basis**, where every vector is perfectly perpendicular
to every other vector, and each one has a length of exactly 1.

* **Example:** If you have two non-perpendicular basis vectors in a
  plane, Gram-Schmidt would first take one vector, then take the
second vector and subtract the part of it that lies along the first
vector. This leaves a new vector that is perfectly perpendicular.
Finally, it would scale both vectors to have a length of 1.

### H
---
**Homogeneous System**

* **Meaning:** This is a system of linear equations where all the
  numbers on the right side of the equals signs are zero (e.g.,
$A\vec{x} = \vec{0}$). These systems are important because their
solutions form the **null space** of the matrix, and they always have
at least one solution: the "trivial" solution where all variables are
zero.

* **Example:** The system $x + 2y = 0$, $3x - y = 0$ is homogeneous.
  Its only solution is $(x,y)=(0,0)$. However, the system $x+2y=0$,
$2x+4y=0$ is also homogeneous and has infinite solutions—any point on
the line $y = -x/2$.

### I
---
**Identity Matrix**

* **Meaning:** The identity matrix, $I$, is the matrix equivalent of
  the number 1. Multiplying any matrix or vector by the identity
matrix leaves it completely unchanged. It represents a transformation
that does nothing.

* **Example:** The $2 \times 2$ identity matrix is $I =
  \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$. If you multiply it by
any vector $\vec{v} = \begin{pmatrix} x \\ y \end{pmatrix}$, you get
back the same vector: $I\vec{v} = \vec{v}$.


**Image**

* **Meaning:** The image is the set of all possible outputs of a
  transformation. If you apply a transformation to every single vector
in your starting space, the resulting collection of vectors is the
image. For matrix transformations, this is the same as the **column
space**.

* **Example:** If a transformation $T$ takes any point in a 2D plane
  and maps it onto the x-axis, the image of $T$ is the entire x-axis.


**Inner Product**

* **Meaning:** This is a general way to multiply two vectors to get a
  single number (a scalar). The most famous inner product is the dot
product. It's used to define geometric concepts like length and angle
in any vector space.

* **Example:** The standard inner product (dot product) of $\vec{u} =
  \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $\vec{v} = \begin{pmatrix}
4 \\ -5 \end{pmatrix}$  
is $\langle \vec{u}, \vec{v} \rangle = (1)(4) +
(2)(-5) = 4 - 10 = -6$.


**Inverse Matrix**

* **Meaning:** An inverse matrix, $A^{-1}$, is the "undo" button for a
  matrix transformation $A$. If $A$ turns vector $\vec{x}$ into
$\vec{y}$, then $A^{-1}$ turns $\vec{y}$ right back into $\vec{x}$.
Not all matrices have an inverse; they must be square and have a
non-zero determinant.

* **Example:** If matrix $A$ represents a 90-degree clockwise
  rotation, its inverse $A^{-1}$ represents a 90-degree
counter-clockwise rotation.

### K
---
**Kernel**

* **Meaning:** The kernel is the set of all "input" vectors that get
  squashed down to the zero vector by a transformation. If the kernel
contains more than just the zero vector, it means the transformation
loses information by merging multiple input vectors into a single
output. It's the same concept as the **null space**.

* **Example:** Consider a transformation that projects every vector in
  3D space straight down onto the xy-plane. Any vector that is already
on the z-axis, like $\begin{pmatrix} 0 \\ 0 \\ 5 \end{pmatrix}$, gets
mapped to the origin $\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$. The
kernel of this transformation is the entire z-axis.

### L
---
**Linear Combination**

* **Meaning:** This is the most fundamental operation in linear
  algebra. It's just the process of scaling a set of vectors by some
numbers (scalars) and then adding the results together.

* **Example:** The vector $\vec{w} = \begin{pmatrix} 7 \\ 2
  \end{pmatrix}$ is a linear combination of $\vec{v}_1 =
\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and $\vec{v}_2 = \begin{pmatrix}
1 \\ 1 \end{pmatrix}$ because we can write $\vec{w} = 5\vec{v}_1 +
2\vec{v}_2$.


**Linear Dependence / Independence**

* **Meaning:** A set of vectors is **linearly dependent** if at least
  one of them is redundant because it can be built from a combination
of the others. The set is **linearly independent** if every vector is
unique and adds a new direction that can't be reached by combining the
others.

* **Example:** In $\mathbb{R}^2$, the vectors $\left\{ \begin{pmatrix}
  1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix},
\begin{pmatrix} 2 \\ 3 \end{pmatrix} \right\}$ are dependent because
the third vector is just $2\begin{pmatrix} 1 \\ 0 \end{pmatrix} +
3\begin{pmatrix} 0 \\ 1 \end{pmatrix}$. The set $\left\{
\begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1
\end{pmatrix} \right\}$ is independent.

### M
---
**Matrix**

* **Meaning:** A matrix is a grid of numbers that typically represents
  a **linear map**. It tells you how a transformation stretches,
shears, rotates, and reflects space by showing where the basis vectors
land. The first column is where the first basis vector ($\vec{i}$)
goes, the second column is where the second basis vector ($\vec{j}$)
goes, and so on.

* **Example:** The matrix $A = \begin{pmatrix} 0 & -1 \\ 1 & 0
  \end{pmatrix}$ tells us that the first basis vector $\begin{pmatrix}
1 \\ 0 \end{pmatrix}$ goes to $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$
and the second basis vector $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$
goes to $\begin{pmatrix} -1 \\ 0 \end{pmatrix}$. This describes a
90-degree counter-clockwise rotation of the entire plane.

### N
---
**Null Space**

* **Meaning:** This is the set of all vectors that a matrix turns into
  the zero vector. It's the same as the **kernel**. It answers the
question: "Which vectors get completely erased by this
transformation?"

* **Example:** For the matrix $A = \begin{pmatrix} 1 & 1 \\ 1 & 1
  \end{pmatrix}$, we want to find vectors $\vec{x} = \begin{pmatrix}
x_1 \\ x_2 \end{pmatrix}$ where $A\vec{x} = \vec{0}$. This gives the
equation $x_1 + x_2 = 0$. The null space is the line $y=-x$, which
includes vectors like $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$,
$\begin{pmatrix} -2 \\ 2 \end{pmatrix}$, etc.


**Nullity**

* **Meaning:** Nullity is just the **dimension** of the null space. A
  nullity of 0 means only the zero vector gets sent to zero. A nullity
of 1 means a whole line of vectors gets sent to zero. A nullity of 2
means a whole plane does, and so on.

* **Example:** For the matrix $A = \begin{pmatrix} 1 & 1 \\ 1 & 1
  \end{pmatrix}$ in the previous example, the null space is a line. A
line has dimension 1, so the nullity of $A$ is 1.

### O
---
**Orthogonal Matrix**

* **Meaning:** This is a special square matrix that represents a
  "rigid" transformation—one that doesn't change lengths or angles,
like a rotation or a reflection. Its columns (and rows) are all
**orthonormal**. A very useful property is that its inverse is just
its transpose ($Q^{-1} = Q^T$).

* **Example:** The matrix $Q = \begin{pmatrix} 0 & -1 \\ 1 & 0
  \end{pmatrix}$ which rotates the plane by 90 degrees is an
orthogonal matrix. Its columns $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$
and $\begin{pmatrix} -1 \\ 0 \end{pmatrix}$ are perpendicular and have
length 1.


**Orthogonal Vectors**

* **Meaning:** Two vectors are orthogonal if they are geometrically
  perpendicular. The mathematical test is that their **inner product**
(or dot product) is zero.

* **Example:** The vectors
$\vec{u} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ and
$\vec{v} = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$ in
$\mathbb{R}^2$ are orthogonal because their dot product is
$(2)(-1) + (1)(2) = 0$.

### R
---
**Rank**

* **Meaning:** The rank of a matrix is the dimension of its output
  space (**column space**). It tells you how many dimensions the
transformed space has. If a $3 \times 3$ matrix has a rank of 2, it
means it takes 3D space and squishes it down onto a 2D plane.

* **Example:** The matrix $A = \begin{pmatrix} 1 & 0 & 5 \\ 0 & 1 & 3
  \\ 0 & 0 & 0 \end{pmatrix}$ has a rank of 2. Although it has 3
columns, the third is a combination of the first two ($5\vec{c}_1 +
3\vec{c}_2$). So the output space is only 2-dimensional.

### S
---
**Span**

* **Meaning:** The span of a set of vectors is all the points you can
  reach by making **linear combinations** of those vectors. It's the
region of space "painted" or "built" by that set of vectors.

* **Example:** The span of the single vector $\begin{pmatrix} 1 \\ 2
  \end{pmatrix}$ is the infinite line passing through the origin and
(1, 2). The span of the two vectors $\left\{ \begin{pmatrix} 1 \\ 0 \\
0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \right\}$
in 3D space is the entire xy-plane.


**Subspace**

* **Meaning:** A subspace is a part of a larger vector space that is a
  valid vector space in its own right. The three rules are: it must
contain the zero vector, it must be "closed" under addition (adding
any two vectors in it gives another vector in it), and it must be
"closed" under scalar multiplication.

* **Example:** In $\mathbb{R}^3$, any plane or line that passes
  through the origin is a subspace. The xy-plane is a subspace of
$\mathbb{R}^3$. A plane that does not pass through the origin is *not*
a subspace.


**Symmetric Matrix**

* **Meaning:** This is a square matrix that is a perfect mirror image
  of itself across its main top-left-to-bottom-right diagonal. These
matrices have many nice properties; for example, their eigenvalues are
always real numbers and their eigenvectors are always orthogonal.

* **Example:** The matrix $A = \begin{pmatrix} 1 & 5 & -3 \\ 5 & 7 & 2
  \\ -3 & 2 & 0 \end{pmatrix}$ is symmetric.  
Notice that the entry in row 1, column 2 (which is 5) is the same as the entry
in row 2, column 1.

### T
---
**Trace**

* **Meaning:** The trace is a quick property you get from a square
  matrix by simply adding up the numbers on its main diagonal. While
easy to find, it has a deep connection to the matrix's behavior: the
trace is always equal to the sum of the matrix's **eigenvalues**.

* **Example:** For the matrix $A = \begin{pmatrix} 5 & 1 \\ 1 & 3
  \end{pmatrix}$, the trace is $tr(A) = 5 + 3 = 8$.


**Transpose**

* **Meaning:** The transpose is what you get when you "flip" a matrix
  over its main diagonal, turning its rows into columns and
vice-versa.

* **Example:** If $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6
  \end{pmatrix}$, its transpose is $A^T = \begin{pmatrix} 1 & 4 \\ 2 &
5 \\ 3 & 6 \end{pmatrix}$.

### V
---
**Vector Space**

* **Meaning:** A vector space is the fundamental playground of linear
  algebra. It's any collection of objects (which we call "vectors")
that can be added together and multiplied by scalars, as long as these
operations follow a standard set of 10 common-sense rules (axioms).

* **Example:** The most common vector space is $\mathbb{R}^n$, the set
  of all vectors with $n$ real-number entries. However, the set of all
polynomials of degree 2 or less, $P_2$, is also a vector space, where
the polynomials themselves are the "vectors".
