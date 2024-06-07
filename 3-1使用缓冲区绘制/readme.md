# 什么是缓冲区对象

缓冲区对象是WebGL系统中的一块内存区域，可以一次性地向缓冲区对象中填充大量的顶点数据，然后将这些数据保存在其中，供`顶点着色器`使用。


## 类型化数组-Float32Array

在webgl中，需要处理大量的**相同类型数据**，所以引入类型化数组，这样程序就可以预知到数组中的数据类型，提高性能。

类型化数组类型:

Int32Array、UInt32Array、Float32Array、Float64Array

## 绑定缓冲区

gl.bindBuffer(target, buffer)

target:

- gl.ARRAY_BUFFER:表示缓冲区存储的是顶点的数据
- gI.ELEMENT_ARRAY_BUFFER:表示缓冲区存储的是顶点的索引值

buffer: 缓冲区对象


