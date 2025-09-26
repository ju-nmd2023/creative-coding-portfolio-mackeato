const num = 10;
let dots = [];
let started = false;
let synth;

const scale = [0, 2, 4, 7, 9];
const base = 60;

function setup() {
  createCanvas(800, 500);
  background(245);
  noStroke();
  fill(20, 120);

  for (let i = 0; i < num; i++) {
    dots.push({
      x: random(width),
      y: random(height),
      vx: random(-1, 1),
      vy: random(-1, 1),
    });
  }
}

function draw() {
  fill(245, 245, 245, 10);
  rect(0, 0, width, height);

  fill(20, 220, 100);
  for (let d of dots) {
    d.x += d.vx;
    d.y += d.vy;

    d.vx += random(-0.05, 0.05);
    d.vy += random(-0.05, 0.05);
    d.vx = constrain(d.vx, -1.5, 1.5);
    d.vy = constrain(d.vy, -1.5, 1.5);

    if (d.x < 0) d.x += width;
    if (d.x > width) d.x -= width;
    if (d.y < 0) d.y += height;
    if (d.y > height) d.y -= height;

    circle(d.x, d.y, 8);
  }

  if (started && frameCount % 12 === 0) {
    const i = (frameCount / 12) % num | 0;
    pingDot(dots[i]);
  }
}

function mousePressed() {
  if (started) return;
  Tone.start().then(() => {
    synth = new Tone.Synth({
      oscillator: { type: "sine" },
      envelope: { attack: 0.005, decay: 0.15, sustain: 0, release: 0.1 },
    }).toDestination();
    started = true;
  });
}

function pingDot(d) {
  const notesPerOct = scale.length;
  const totalNotes = notesPerOct * 2;
  let idx = floor(map(d.x, 0, width, 0, totalNotes));
  idx = constrain(idx, 0, totalNotes - 1);
  const octave = floor(idx / notesPerOct);
  const step = scale[idx % notesPerOct];
  const midi = base + octave * 12 + step;

  const vel = map(d.y, 0, height, 0.25, 0.9);

  const freq = Tone.Frequency(midi, "midi");
  synth.triggerAttackRelease(freq, "8n", undefined, vel);
}
