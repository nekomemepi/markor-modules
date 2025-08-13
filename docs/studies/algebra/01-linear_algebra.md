### Example 1: Vector Addition
Let $\mathbf{a} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} 1 \\ 4 \end{pmatrix}$. The sum is:  
$\mathbf{a} + \mathbf{b} = \begin{pmatrix} 2 \\ 3 \end{pmatrix} + \begin{pmatrix} 1 \\ 4 \end{pmatrix} = \begin{pmatrix} 3 \\ 7 \end{pmatrix}$  
### Example 2: Matrix Multiplication
$\mathbf{C}_{ij}$ of the product is obtained by multiplying
term-by-term the entries of the ith row of A and the jth column of B,
and summing these n products.  

Let $\mathbf{A} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $\mathbf{B} = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$. The product is:  
$\mathbf{C} = \mathbf{A} \cdot \mathbf{B} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \cdot \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$  
### Example 3: Determinant of a 2x2 Matrix
For the matrix $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the determinant is given by:  
$\text{det}(\mathbf{A}) = ad - bc$  
### Example 4: Eigenvalues of a Matrix
Eigenvalues are scalars associated with a square matrix, indicating
how much the eigenvector is stretched or compressed during a linear
transformation. Eigenvectors are non-zero vectors that change only in
scale when the matrix is applied to them. To find them, solve the
equation $Av = \lambda v$, where $A$ is the matrix, $v$ is the
eigenvector, and $\lambda$ is the eigenvalue. The eigenvalues are
found by solving the characteristic polynomial $\det(A - \lambda I) =
0$.  
For the matrix $\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$, the characteristic polynomial is:  
$\text{det}(\mathbf{A} - \lambda \mathbf{I}) = \begin{vmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{vmatrix} = (4 - \lambda)(3 - \lambda) - 2 = \lambda^2 - 7\lambda + 10$  
The eigenvalues are the roots of the polynomial:  
$\lambda^2 - 7\lambda + 10 = 0$  
### Example 5: Solving a System of Equations
Consider the system:  
$$\begin{align}
x + 2y &= 5 \\
3x + 4y &= 11
\end{align}$$  
This can be represented in matrix form as:  
$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 11 \end{pmatrix}$  
You can solve for $\begin{pmatrix} x \\ y \end{pmatrix}$ using various methods such as substitution or elimination.
