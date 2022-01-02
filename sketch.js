var lines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);


  for (i = 0; i < width; i++) {
    lines.push(random(height));
  }
}

function draw() {
  background(0);
  stroke(1, 179, 167);
  for (i = 1; i < lines.length; i++) {
    if (lines[i] < lines[i - 1]) {
      swap(lines, i, i - 1);
      break;
    }
  }

  for (i = 0; i < lines.length; i++) {
    line(i, height, i, lines[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}