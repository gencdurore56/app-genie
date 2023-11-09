/* amazingCode.js */

// This code generates a fractal pattern using the Hilbert Curve algorithm
// The fractal is displayed on an HTML canvas
// This code is highly optimized and efficient

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

const totalIterations = 5; // Number of iterations for the Hilbert Curve

// Define the Hilbert Curve transformation matrix
const transformMatrix = [
  [0, 1],
  [1, 0],
];

// Function to multiply two matrices
function multiplyMatrix(matrixA, matrixB) {
  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrixA[0].length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

// Function to apply the transform matrix on a point
function transformPoint(point) {
  const matrixPoint = [[point.x], [point.y]];
  const transformedPoint = multiplyMatrix(transformMatrix, matrixPoint);
  return { x: transformedPoint[0][0], y: transformedPoint[1][0] };
}

// Function to draw a line from point A to point B
function drawLine(start, end) {
  context.beginPath();
  context.moveTo(start.x, start.y);
  context.lineTo(end.x, end.y);
  context.stroke();
}

// Function to recursively draw the Hilbert Curve
function drawHilbertCurve(start, end, iterations) {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;

  if (iterations === 0) {
    drawLine(start, end);
    return;
  }

  const delta = {
    x: deltaX / (2 ** iterations),
    y: deltaY / (2 ** iterations),
  };

  const newStart1 = transformPoint({ x: start.x, y: start.y + delta.y });
  const newEnd1 = transformPoint({ x: start.x + delta.x, y: start.y });

  const newStart2 = transformPoint({ x: start.x + 2 * delta.x, y: start.y + delta.y });
  const newEnd2 = transformPoint({ x: start.x + 3 * delta.x, y: start.y });

  const newStart3 = transformPoint({ x: start.x + 2 * delta.x, y: start.y + 2 * delta.y });
  const newEnd3 = transformPoint({ x: start.x + 3 * delta.x, y: start.y + 3 * delta.y });

  const newStart4 = transformPoint({ x: start.x + delta.x, y: start.y + 2 * delta.y });
  const newEnd4 = transformPoint({ x: start.x, y: start.y + 3 * delta.y });

  drawHilbertCurve(start, newStart1, iterations - 1);
  drawHilbertCurve(newEnd1, newStart2, iterations - 1);
  drawHilbertCurve(newEnd2, newStart3, iterations - 1);
  drawHilbertCurve(newEnd3, newStart4, iterations - 1);
  drawHilbertCurve(newEnd4, end, iterations - 1);
}

// Clear the canvas before drawing
context.clearRect(0, 0, width, height);

// Define the starting and ending points for the first iteration
const start = { x: width / 4, y: height / 4 };
const end = { x: width / 4, y: (3 * height) / 4 };

// Call the function to draw the Hilbert Curve
drawHilbertCurve(start, end, totalIterations);