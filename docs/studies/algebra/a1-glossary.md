## Linear Algebra Glossary

### A
---
**Adjoint of a Matrix**
:   The transpose of the cofactor matrix of a given square matrix $A$. It's denoted as $adj(A)$ and is primarily used to find the inverse of a matrix using the formula $A^{-1} = \frac{1}{\det(A)}adj(A)$.

**Augmented Matrix**
:   A matrix formed by appending the columns of another matrix, typically the constant vector $\vec{b}$ in a system of linear equations $A\vec{x} = \vec{b}$. The resulting augmented matrix is denoted $[A | \vec{b}]$ and is used to solve the system via row reduction.

### B
---
**Basis**
:   A set of **linearly independent** vectors that **span** a vector space. The number of vectors in a basis gives the dimension of the vector space. Any vector in the space can be expressed as a unique linear combination of the basis vectors.

### C
---
**Change of Basis**
:   The process of converting the coordinates of a vector from one basis representation to another. This is achieved by multiplying the coordinate vector by a **change-of-basis matrix**.

**Characteristic Polynomial**
:   For a square matrix $A$, the polynomial in a variable $\lambda$ defined by $p(\lambda) = \det(A - \lambda I)$, where $I$ is the identity matrix. The roots of this polynomial are the **eigenvalues** of the matrix $A$.

**Cofactor**
:   The signed minor of an element $a_{ij}$ in a matrix. The cofactor, denoted $C_{ij}$, is calculated as $C_{ij} = (-1)^{i+j}M_{ij}$, where $M_{ij}$ is the minor of the element $a_{ij}$. Cofactors are used to compute the determinant and the adjoint of a matrix.

**Column Space**
:   The vector subspace spanned by the column vectors of a matrix $A$. The column space, denoted $Col(A)$, is also the **image** of the linear transformation represented by $A$. Its dimension is the **rank** of the matrix.

**Cramer's Rule**
:   An explicit formula for the solution of a system of linear equations with a unique solution, where the value of each variable is given as a ratio of two determinants. For a system $A\vec{x} = \vec{b}$, the solution for variable $x_i$ is $x_i = \frac{\det(A_i)}{\det(A)}$, where $A_i$ is the matrix formed by replacing the $i$-th column of $A$ with $\vec{b}$.

### D
---
**Determinant**
:   A scalar value computed from the elements of a square matrix. It reveals key properties of the matrix and the linear transformation it represents. A matrix is **invertible** if and only if its determinant is non-zero. It is denoted as $\det(A)$ or $|A|$.

**Diagonalizable Matrix**
:   A square matrix $A$ that is similar to a diagonal matrix. This means there exists an invertible matrix $P$ (whose columns are the eigenvectors of $A$) and a diagonal matrix $D$ (whose diagonal entries are the corresponding eigenvalues) such that $A = PDP^{-1}$.

**Dimension**
:   The number of vectors in any **basis** for a vector space. It corresponds to the number of independent parameters needed to specify a point within the space. It is denoted as $\dim(V)$.

### E
---
**Echelon Form**
:   A simplified form of a matrix achieved through row operations. In row echelon form, every leading non-zero entry (pivot) of a row is to the right of the leading entry of the row above it, and all-zero rows are at the bottom.

**Eigenvalue**
:   A scalar, denoted $\lambda$, associated with a square matrix $A$. It represents a factor by which an eigenvector is stretched or shrunk when the linear transformation $A$ is applied to it. Eigenvalues are the roots of the **characteristic polynomial**.

**Eigenvector**
:   A non-zero vector, denoted $\vec{v}$, that changes only by a scalar factor ($\lambda$, the eigenvalue) when a linear transformation $A$ is applied to it. The defining equation is $A\vec{v} = \lambda\vec{v}$. Eigenvectors point in directions that are invariant under the transformation.


### G
---
**Gram-Schmidt Process**
:   An algorithm for converting a set of linearly independent vectors into an **orthonormal basis** for the subspace they span.

### H
---
**Homogeneous System**
:   A system of linear equations of the form $A\vec{x} = \vec{0}$. Such a system always has the trivial solution $\vec{x} = \vec{0}$. Non-trivial solutions exist if and only if the matrix $A$ is **singular** (i.e., $\det(A)=0$).

### I
---
**Identity Matrix**
:   A square matrix with ones on the main diagonal and zeros everywhere else, denoted by $I$. It acts as the multiplicative identity in matrix multiplication, meaning $AI = IA = A$.

**Image**
:   For a linear transformation $T: V \to W$, the image is the set of all possible output vectors in the codomain $W$. It is a subspace of $W$. For a matrix transformation, the image is the **column space**. It is denoted as $Im(T)$.

**Inner Product**
:   An operation that generalizes the dot product to abstract vector spaces. It takes two vectors and produces a scalar, satisfying properties of linearity, symmetry, and positive-definiteness. It allows for the definition of geometric concepts like length and angle. It is denoted as $\langle \vec{u}, \vec{v} \rangle$.

**Inner Product Space**
:   A vector space equipped with a specific **inner product**.

**Inverse Matrix**
:   For a square matrix $A$, its inverse, denoted $A^{-1}$, is the matrix that "undoes" the action of $A$. It satisfies the property $A A^{-1} = A^{-1} A = I$. A matrix must be **invertible** to have an inverse.

**Invertible Matrix**
:   A square matrix that has an inverse. An $n \times n$ matrix is invertible if and only if its determinant is non-zero, its rank is $n$, or its null space contains only the zero vector. Also called a **non-singular matrix**.

### K
---
**Kernel**
:   For a linear transformation $T: V \to W$, the kernel is the set of all vectors in the domain $V$ that are mapped to the zero vector in $W$. It is a subspace of $V$. For a matrix transformation, the kernel is the **null space**. It is denoted as $Ker(T)$.

### L
---
**Linear Combination**
:   An expression formed by multiplying a set of vectors by scalars and adding the results. For vectors $\{\vec{v}_1, \dots, \vec{v}_n\}$ and scalars $\{c_1, \dots, c_n\}$, a linear combination is the vector $\vec{w} = c_1\vec{v}_1 + c_2\vec{v}_2 + \dots + c_n\vec{v}_n$.

**Linear Dependence**
:   A set of vectors is linearly dependent if at least one vector in the set can be written as a linear combination of the others. This means there is redundancy in the set.

**Linear Independence**
:   A set of vectors is linearly independent if no vector in the set can be expressed as a linear combination of the others. This means every vector in the set contributes a unique direction.

**Linear Map (or Transformation)**
:   A function $T$ between two vector spaces that preserves vector addition and scalar multiplication. This means $T(\vec{u} + \vec{v}) = T(\vec{u}) + T(\vec{v})$ and $T(c\vec{v}) = cT(\vec{v})$. Every linear map can be represented by a matrix.

**Linear System**
:   A set of one or more linear equations involving the same variables, often written in the matrix form $A\vec{x} = \vec{b}$.

### M
---
**Matrix**
:   A rectangular array of numbers arranged in rows and columns, used to represent data or a linear transformation.

**Minor**
:   For an element $a_{ij}$ in a matrix, the minor $M_{ij}$ is the determinant of the submatrix formed by deleting the $i$-th row and $j$-th column.

### N
---
**Null Space**
:   The set of all vectors $\vec{x}$ that are solutions to the homogeneous equation $A\vec{x} = \vec{0}$. The null space is the **kernel** of the linear transformation represented by matrix $A$. It is denoted as $Nul(A)$.

**Nullity**
:   The dimension of the **null space** of a matrix or linear transformation.

### O
---
**Orthogonal Basis**
:   A **basis** in which all vectors are mutually orthogonal (their inner product is zero).

**Orthogonal Matrix**
:   A square matrix $Q$ whose columns form an **orthonormal basis**. A key property is that its transpose is equal to its inverse: $Q^T = Q^{-1}$. These matrices represent transformations that preserve lengths and angles, such as rotations and reflections.

**Orthogonal Vectors**
:   Two vectors whose **inner product** is zero. In Euclidean space, this means they are perpendicular.

**Orthonormal Basis**
:   An **orthogonal basis** where each vector also has a length (norm) of 1.

### P
---
**Pivot**
:   The first non-zero entry in a row of a matrix that is in **row echelon form**.

**Projection**
:   The vector projection of a vector $\vec{a}$ onto another vector $\vec{b}$ is the "shadow" of $\vec{a}$ on the line defined by $\vec{b}$. It is calculated as $proj_{\vec{b}} \vec{a} = \frac{\vec{a} \cdot \vec{b}}{||\vec{b}||^2} \vec{b}$.

### R
---
**Rank**
:   The dimension of the **column space** (or equivalently, the row space) of a matrix. The rank represents the number of linearly independent columns or rows and corresponds to the dimension of the image of the linear transformation. The **Rank-Nullity Theorem** states that for an $m \times n$ matrix $A$, $rank(A) + nullity(A) = n$.

**Row Space**
:   The vector subspace spanned by the row vectors of a matrix. Its dimension is equal to the **rank** of the matrix.

### S
---
**Scalar**
:   A single numerical quantity (like a real or complex number) that is used to scale a vector.

**Singular Matrix**
:   A square matrix that is not **invertible**. Its determinant is zero.

**Span**
:   The set of all possible **linear combinations** of a given set of vectors. The span of a set of vectors always forms a vector subspace.

**Subspace**
:   A subset of a larger vector space that is itself a vector space under the same operations. A subset is a subspace if it contains the zero vector and is closed under vector addition and scalar multiplication.

**Symmetric Matrix**
:   A square matrix that is equal to its own transpose ($A = A^T$).

### T
---
**Trace**
:   The sum of the elements on the main diagonal of a square matrix, denoted $tr(A)$. The trace is also equal to the sum of the matrix's **eigenvalues**.

**Transpose**
:   An operation that flips a matrix over its main diagonal by swapping its rows and columns. The transpose of a matrix $A$ is denoted $A^T$.

### V
---
**Vector**
:   An element of a vector space. Geometrically, it can be visualized as an arrow with a specific magnitude (length) and direction. It is often represented as a column or row of numbers.

**Vector Space**
:   A collection of objects called **vectors**, along with a field of **scalars**, that satisfy a set of ten axioms governing vector addition and scalar multiplication. Examples include the Euclidean space $\mathbb{R}^n$ and spaces of functions.
