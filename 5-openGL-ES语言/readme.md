# OpenGL ES语言

- 大小写敏感
- 强制分号

程序入口

```
void main() {
  // 程序代码
}
```

注释和js相同

```
// 单行注释
/**	多行注释 */
```

强类型语言

基本数据类型

`float`, `int`, `boolean`

变量声明

- 数字字母下划线
- 不能以数字开头
- 不能是关键字或保留字
- 不能以`gl_` `webgl_` `_webgl_` 开头

类型转换

- `int()`
- `float()`
- `bool()`

## 矢量与矩阵

矢量

- vec2 2个浮点数元素的矢量
- vec3 3个浮点数元素的矢量
- vec4 4个浮点数元素的矢量

- ivec2 2个整型元素的矢量
- ivec3 3个整型元素的矢量
- ivec4 4个整型元素的矢量

- bvec2 2个布尔值元素的矢量
- bvec3 3个布尔值元素的矢量
- bvec4 4个布尔值元素的矢量

```

// 赋值
// 使用构造函数
vec4 position = vec4(0.0, 0.0, 0.0, 1.0)
// 访问分量
position.x // 0.0
position.xy // vec2(0.0, 0.0)
position.zxy // vec3(0.0, 0.0, 0.0)

```

矩阵

`矩阵参数是列主序`

- mat2 2*2浮点数元素的矩阵
- mat3 3*3浮点数元素的矩阵
- mat4 4*4浮点数元素的矩阵

## 纹理取样器

取样器

- sampler2D 2D纹理采样器
- samplerCube 立方体纹理采样器

```

// 声明
uniform sampler2D uSampler;

// 声明
uniform samplerCube uSamplerCube;

```

## 分支与循环

分支

- if(){} 和 if(){} else{}
- if(){} else if(){} else {}

循环

- for(){}
- while(){}
- do{}while()

跳出循环

- continue
- break
- discard discard只能在片元着色器中使用，表示放弃当前片元直接处理下一个片元

## 函数


```

// 声明
float getFloat(float x, int y) {
  return x + float(y);
}

// 使用
getFloat(1.0, 2); // 3.0

```

### 内置函数

``` glsl

radians // 角度转弧度
degress // 弧度转角度

sin // 正弦
cos // 余弦
tan // 正切
asin // 反正弦
acos // 反余弦
atan // 反正切

pow // 幂
exp // 指数
log // 对数
sqrt // 平方根

abs // 绝对值
min // 最小值
max // 最大值
sign // 符号
floor // 向下取整
ceil // 向上取整
fract // 小数部分
mod // 取模
clamp // 限制范围
mix // 混合
step // 阶梯函数
smoothstep // 平滑阶梯函数

length // 向量长度
distance // 向量距离
dot // 向量点乘
cross // 向量叉乘
normalize // 向量归一化

faceforward // 反向光照
reflect // 反射
refract // 折射

```

## 存储限定词

- const 常量
- attribute 顶点属性 只能在顶点着色器中使用
- uniform 全局变量 能在顶点着色器和片元着色器中使用
- varying 顶点着色器和片元着色器之间传递的变量
- mediump 精度低的浮点数
- precision 精度

