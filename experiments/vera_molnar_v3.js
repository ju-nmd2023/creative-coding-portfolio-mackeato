let cols = 5;
let rows = 5;
let margin = 300;

function setup() {
  createCanvas(900, 700);
  background(0);
  noFill();
  rectMode(CENTER);

  blendMode(ADD);

  cellSize = (width - margin * 2) / cols;
  centerX = margin + cellSize / 2;
  centerY = height / 2 - (rows * cellSize) / 2 + cellSize / 2;

  draw();
  noLoop();
}

function draw() {
  for (let gridY = 0; gridY < rows; gridY++) {
    for (let gridX = 0; gridX < cols; gridX++) {
      const x = centerX + gridX * cellSize;
      const y = centerY + gridY * cellSize;

      const distance = dist(gridX, gridY, (cols - 1) / 2, (rows - 1) / 2);

      const reps = int(map(distance, 0, max(cols, rows) / 2, 4, 10));

      const blueish = color(150, 150, 255, 120);
      const pinkish = color(255, 150, 150, 120);

      for (let i = 0; i < reps; i++) {
        stroke(random() < 0.5 ? blueish : pinkish);

        push();
        translate(
          x + randomGaussian(0, cellSize * 0.05),
          y + randomGaussian(0, cellSize * 0.05)
        );
        rotate(random(-0.12, 0.12));

        const size = cellSize * random(0.65, 0.9);

        strokeWeight(2);
        ellipse(0, 0, size, size);

        strokeWeight(0.2);
        ellipse(0, 0, size * random(0.75, 0.95), size * random(0.75, 0.95));

        pop();
      }
    }
  }
}
