# Linear Algebra Notes
### 1. Vectors
- **Definition**: An ordered list of numbers.
- **Notation**: $ \mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix} $
### 2. Matrices
- **Definition**: A rectangular array of numbers.
- **Notation**: $ A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} $
### 3. Matrix Operations
- **Addition**: $ A + B = \begin{pmatrix} a_{11} + b_{11} & a_{12} + b_{12} \\ a_{21} + b_{21} & a_{22} + b_{22} \end{pmatrix} $
- **Multiplication**: $ C = AB $ where $ c_{ij} = \sum_{k} a_{ik}b_{kj} $
### 4. Determinants
- **2x2 Matrix**: $ \text{det}(A) = a_{11}a_{22} - a_{12}a_{21} $
- **Properties**:
  - $ \text{det}(A) = 0 $ implies $ A $ is singular.
### 5. Eigenvalues and Eigenvectors
- **Definition**: For matrix $ A $, $ \mathbf{v} $ is an eigenvector if $ A\mathbf{v} = \lambda \mathbf{v} $ where $ \lambda $ is the eigenvalue.
### 6. Linear Transformations
- **Definition**: A function $ T: \mathbb{R}^n \to \mathbb{R}^m $ that can be represented by a matrix.
### 7. Systems of Linear Equations
- **Form**: $ A\mathbf{x} = \mathbf{b} $
- **Solution Methods**:
  - Gaussian elimination
  - Matrix inversion (if $ A $ is invertible)
### 8. Vector Spaces
- **Definition**: A set of vectors that can be added together and multiplied by scalars.
### 9. Basis and Dimension
- **Basis**: A set of linearly independent vectors that span the vector space.
- **Dimension**: The number of vectors in a basis.
### 10. Orthogonality
- **Definition**: Two vectors are orthogonal if their dot product is zero.
- **Orthogonal Basis**: A basis where all vectors are orthogonal to each other.
