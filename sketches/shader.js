const fragmentSource = document.querySelector('script[type="x-shader/x-fragment"]').textContent

const canvas = document.querySelector('canvas')
const gl = canvas.getContext('webgl')

const vs = gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource(vs, `
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0., 1.);
}
`)
gl.compileShader(vs)

const hp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT)
const precision = hp?.precision ? 'highp' : 'mediump';

const fs = gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(fs, `
precision ${precision} float;

${fragmentSource}
`)
gl.compileShader(fs)

const p = gl.createProgram()
gl.attachShader(p, vs)
gl.attachShader(p, fs)
gl.linkProgram(p)

const log = gl.getProgramInfoLog(p)
if (log) console.error(log)

gl.deleteShader(vs);
gl.deleteShader(fs);

gl.useProgram(p)

const quad = new Float32Array([
  -1, -1, // bottom-left
  +1, -1, // bottom-right
  -1, +1, // top-left
  +1, +1, // top-right
])

const buf = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buf)
gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW)

const pi = gl.getAttribLocation(p, 'position')
gl.enableVertexAttribArray(pi)
gl.vertexAttribPointer(pi, 2, gl.FLOAT, false, 0, 0)

const ri = gl.getUniformLocation(p, 'resolution')
const ti = gl.getUniformLocation(p, 'time')

let prevW = 0, prevH = 0

function draw(ms) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = canvas.clientWidth * dpr;
  const height = canvas.clientHeight * dpr;
  if (width != prevW || height != prevH) {
    canvas.width = prevW = width
    canvas.height = prevH = height
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
    gl.uniform2f(ri, gl.drawingBufferWidth, gl.drawingBufferHeight)
  }

  gl.uniform1f(ti, ms * 0.001)
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

  requestAnimationFrame(draw)
}

requestAnimationFrame(draw)