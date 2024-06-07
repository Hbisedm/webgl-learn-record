# 平移矩阵

OpenGL API接受的矩阵要求是列主序的，如果一个OpenGL的应用使用的是行主序的矩阵，那么在将矩阵传给OpenGL API前，需要先转换为列主序。

$$
  \begin{Bmatrix}
   1 & 0 & 0 & 0 \\
   0 & 1 & 0 & 0 \\
   0 & 0 & 1 & 0 \\
   x & y & z & 1 \\
  \end{Bmatrix} 
$$