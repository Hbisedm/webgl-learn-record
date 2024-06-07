# 改变颜色

颜色由片元着色器生成，我们需要修改片元着色器来改变颜色。


片元着色器没有默认指定精度，需要手动去指定

```glsl
  // 指定精度  // 精度 lowp 低  mediump中 highp 高
  precision mediump float;
```

修改颜色就需要个颜色变量，在片元着色器中声明

```glsl
  uniform vec4 uColor; // 颜色
```

