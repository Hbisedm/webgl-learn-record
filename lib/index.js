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