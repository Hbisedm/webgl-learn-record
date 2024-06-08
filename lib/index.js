		/*** @param {!WebGLRenderingContext} gl */
function initShader(gl, vertexShaderSource, fragmentShaderSource) {
		 //创建顶点着色器和片元着色器对象
		 const vertexShader = gl.createShader(gl.VERTEX_SHADER)
		 const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

		 //指定顶点着色器源代码
		 gl.shaderSource(vertexShader, vertexShaderSource)
		 //指定片元着色器源代码
		 gl.shaderSource(fragmentShader, fragmentShaderSource)

		 // 编译着色器
		 gl.compileShader(vertexShader)
		 gl.compileShader(fragmentShader)

		 // 创建程序对象
		 const program = gl.createProgram()

		 // 关联着色器 和 程序对象
		 gl.attachShader(program, vertexShader)
		 gl.attachShader(program, fragmentShader)

		 gl.linkProgram(program) //链接程序对象

		 gl.useProgram(program) //使用程序对象

		 return program
}

/** 平移矩阵 */
function getTranslateMatrix(x = 0, y = 0, z = 0) {
	return new Float32Array([
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		x, y, z, 1
	])
}


/** 缩放矩阵 */
function getScaleMatrix(x = 1, y = 1, z = 1) {
	return new Float32Array([
		x, 0, 0, 0,
		0, y, 0, 0,
		0, 0, z, 0,
		0, 0, 0, 1
	])
}


/** 绕z轴旋转矩阵 */
function getRotateMatrix(deg) {
	return new Float32Array([
		Math.cos(deg), Math.sin(deg), 0, 0,
		-Math.sin(deg), Math.cos(deg), 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
	])
}

/** 矩阵相乘 */
function mixMatrix(A, B) {
	return new Float32Array([
		A[0] * B[0] + A[4] * B[1] + A[8] * B[2] + A[12] * B[3],
		A[1] * B[0] + A[5] * B[1] + A[9] * B[2] + A[13] * B[3],
		A[2] * B[0] + A[6] * B[1] + A[10] * B[2] + A[14] * B[3],
		A[3] * B[0] + A[7] * B[1] + A[11] * B[2] + A[15] * B[3],


		A[0] * B[4] + A[4] * B[5] + A[8] * B[6] + A[12] * B[7],
		A[1] * B[4] + A[5] * B[5] + A[9] * B[6] + A[13] * B[7],
		A[2] * B[4] + A[6] * B[5] + A[10] * B[6] + A[14] * B[7],
		A[3] * B[4] + A[7] * B[5] + A[11] * B[6] + A[15] * B[7],


		A[0] * B[8] + A[4] * B[9] + A[8] * B[10] + A[12] * B[11],
		A[1] * B[8] + A[5] * B[9] + A[9] * B[10] + A[13] * B[11],
		A[2] * B[8] + A[6] * B[9] + A[10] * B[10] + A[14] * B[11],
		A[3] * B[8] + A[7] * B[9] + A[11] * B[10] + A[15] * B[11],



		A[0] * B[12] + A[4] * B[13] + A[8] * B[14] + A[12] * B[15],
		A[1] * B[12] + A[5] * B[13] + A[9] * B[14] + A[13] * B[15],
		A[2] * B[12] + A[6] * B[13] + A[10] * B[14] + A[14] * B[15],
		A[3] * B[12] + A[7] * B[13] + A[11] * B[14] + A[15] * B[15]
	])
}

/** 归一化函数  归一到0-1的区间内 */
function normalize(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  const middle = Math.sqrt(sum);
  for (let i = 0; i < arr.length; i++) {
    arr[i] /= middle;
  }
}

/** 叉积函数 求2个平面的法向量 */
function cross(v1, v2) {
  return new Float32Array([
    v1[1] * v2[2] - v1[2] * v2[1],
    v1[2] * v2[0] - v1[0] * v2[2],
    v1[0] * v2[1] - v1[1] * v2[0]
  ]);
}

/** 点积函数 求某点在x,y,z轴上的投影长度 */
function dot(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}


/** 向量差 获取视点到目标点之间的向量 */
function minus(v1, v2) {
  return new Float32Array([
    v1[0] - v2[0],
    v1[1] - v2[1],
    v1[2] - v2[2]
  ]);
}

/** 视图矩阵获取 */
function getViewMatrix(eyex, eyey, eyez, lookAtx, lookAty, lookAtz, upx, upy, upz) {
  // 视点
  var eye = new Float32Array([eyex, eyey, eyez]);
  // 目标点
  var lookAt = new Float32Array([lookAtx, lookAty, lookAtz]);
  // 上方向
  var up = new Float32Array([upx, upy, upz]);
  // 观察平面
  var z = minus(eye, lookAt);

  normalize(z)
  normalize(up)
  var x = cross(up, z);

  normalize(x)
  var y = cross(z, x);

  // 视图矩阵
  var viewMatrix = new Float32Array([
    x[0], y[0], z[0], 0,
    x[1], y[1], z[1], 0,
    x[2], y[2], z[2], 0,
    -dot(x, eye), -dot(y, eye), -dot(z, eye), 1
  ]);
  return viewMatrix;
}