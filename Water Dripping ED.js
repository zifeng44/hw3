var x = 230;
var y = 220;
var z = 5+3

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,40);
  noStroke();

  // draw pipe
  rect(0, 210, 240, 20);
	fill(255,255,100);

  // draw drip
  ellipse(x, y, 12);
  ellipse(x-20, y, 10);
	ellipse(x-40, y, 10);
	ellipse(x-60, y, 10);
	ellipse(x-80, y, 10);
	ellipse(x-100, y, 10);
	ellipse(x-120, y, 12);
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + z

	
	// draw drip2
	fill(255);

	ellipse(x, y-300, 11);
  ellipse(x-20, y-300, 9);
	ellipse(x-40, y-300, 9);
	ellipse(x-60, y-300, 9);
	ellipse(x-80, y-300, 9);
	ellipse(x-100, y-300, 9);
	ellipse(x-120, y-300, 11);
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 2.5
 
	
	// if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
  }
}
