// Return the iteration count where the given c diverges
export const mbExit = ([cx, cy], iter = 100) => {
  let x = 0, y = 0;
  for (let i = 0; i < iter; i++) {
    let nx = x * x - y * y + cx
    let ny = 2 * x * y + cy
    x = nx;
    y = ny;
    if (Math.abs(x) > 2 || Math.abs(y) > 2) return i;
  }
  return 0;
}

// Rescale x from [a, b] to [c, d]
export const rescale = (x, [a, b], [c, d]) =>
    ((x - a) / (b - a)) * (d - c) + c
