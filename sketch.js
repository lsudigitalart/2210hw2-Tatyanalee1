function setup() {
  creativeCanvas(400, 269);
}

function draw() {
  background(200);

  ellipse(10, 10, 20);
  ellipseMode(CENTER)
  fill(225);

  rect (20, 20, 20, 100);
  fill(0, 255, 0);

  rect(45, 20, 20, 100);
  fill(255, 0, 255);

  rect(80, 20, 20, 100);
  fill(255);
}
