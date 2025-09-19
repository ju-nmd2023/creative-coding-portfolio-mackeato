let position, velocity, acceleration;
let target;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  position = createVector(width / 2, 30);
  velocity = createVector(5, 8);
  background(255);

  target = createVector(random(width), random(height));
}

function draw() {
  noStroke();

  fill(0);
  ellipse(position.x, position.y, 2);
  ellipse(width - position.x, height - position.y, 2);

  fill(0);
  ellipse(position.x, height - position.y, 2);
  ellipse(width - position.x, position.y, 2);

  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
    position.x = constrain(position.x, 0, width);
  }
  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
    position.y = constrain(position.y, 0, height);
  }
  console.log(target.x);

  const xCap = 80;
  const yCap = 80;

  target.x += random(-200, 200);
  target.y += random(-180, 200);
  target.x = constrain(target.x, width / 2 - xCap, width / 2 + xCap);
  target.y = constrain(target.y, height / 2 - yCap, height / 2 + yCap);

  acceleration = p5.Vector.sub(target, position);
  acceleration.setMag(0.5);

  velocity.add(acceleration);
  velocity.limit(10);
  position.add(velocity);

  t++;
  if (t >= 200) {
    noLoop();
  }
}
