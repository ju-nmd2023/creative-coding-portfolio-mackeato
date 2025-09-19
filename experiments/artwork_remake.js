function setup() {
  createCanvas(innerWidth, innerHeight);
  background(130, 230, 255);
  noLoop();
}

let lumps = 20;
let detailMargin = 0.05;

function lumpShape(x, y, r) {
  push();
  noStroke();
  fill(255, 255, 200);
  ellipse(x + r * detailMargin, y - r * detailMargin, r);

  fill(200, 200, 200);
  ellipse(x - r * detailMargin, y + r * detailMargin, r);

  fill(250);
  ellipse(x, y, r);
  pop();
}

function cloud() {
  for (let i = 0; i < lumps; i++) {
    let x = width / 2 + random(-80, 80);
    let y = height / 2 + random(-40, 40);
    let r = random(40, 80);
    lumpShape(x, y, r);
  }
}

function draw() {
  cloud();
}
