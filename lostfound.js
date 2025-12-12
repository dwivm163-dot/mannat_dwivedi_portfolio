let canvas;

function setup() {
  // create the canvas
  canvas = createCanvas(400, 400);
  // attach the canvas to the div in your HTML
  canvas.parent("#sketch-container");
  angleMode(DEGREES);
}

function draw() { 
  background(0, 51, 102);
  
  stroke(255, 255, 255);
  strokeWeight(1);
  line(338, 30, 338, 45);
  
  stroke(255, 255, 255);
  strokeWeight(1);
  line(330, 37, 346, 37);
  
  push();           
  blendMode(ADD);
  noStroke();

  fill(255, 40);  
  ellipse(338, 37, 13, 13);   // halo
  fill(255, 180); 
  ellipse(338, 37, 6, 6);   // core

  push();
  translate(40,40)
  fill(255, 40);  
  ellipse(338, 37, 13, 13);   // halo
  fill(255, 180); 
  ellipse(338, 37, 6, 6);   // core
  translate(-80,0)
  fill(255, 40);  
  ellipse(338, 37, 13, 13);   // halo
  fill(255, 180); 
  ellipse(338, 37, 6, 6);   // core
  translate(-40,-40);
  fill(255, 40);  
  ellipse(338, 37, 13, 13);   // halo
  fill(255, 180); 
  ellipse(338, 37, 6, 6);   // core
  translate(-80,0);
  fill(255, 40);  
  ellipse(338, 37, 13, 13);   // halo
  fill(255, 180); 
  ellipse(338, 37, 6, 6);   // core 
  translate(-80,0);
  fill(255, 40);  
  ellipse(338, 37, 13, 13);   // halo
  fill(255, 180); 
  ellipse(338, 37, 6, 6);   // core
  translate(-80,0)
  fill(255, 40);  
  ellipse(338, 37, 13, 13);   // halo
  fill(255, 180); 
  ellipse(338, 37, 6, 6); // core
  translate(40,40)
  fill(255, 40);  
  ellipse(338, 37, 13, 13);   // halo
  fill(255, 180); 
  ellipse(338, 37, 6, 6); // core
  translate(80,0)
  fill(255, 40);  
  ellipse(338, 37, 13, 13);   // halo
  fill(255, 180); 
  ellipse(338, 37, 6, 6); // core
  translate(80,0)
  fill(255, 40);  
  ellipse(338, 37, 13, 13);   // halo
  fill(255, 180); 
  ellipse(338, 37, 6, 6); // core
  pop(); 

  pop();
  
  push(); // stars 
  translate(40,40) 
  stroke(255, 255, 255);
  strokeWeight(1);
  line(338, 30, 338, 45);
  line(330, 37, 346, 37);
  translate(-80,0)
  line(338, 30, 338, 45);
  line(330, 37, 346, 37);
  translate(-40,-40);
  line(338, 30, 338, 45);
  line(330, 37, 346, 37);
  translate(-80,0)
  line(338, 30, 338, 45);
  line(330, 37, 346, 37);
  translate(-80,0)
  line(338, 30, 338, 45);
  line(330, 37, 346, 37);
  translate(-80,0)
  line(338, 30, 338, 45);
  line(330, 37, 346, 37);
  translate(40,40)
  line(338, 30, 338, 45);
  line(330, 37, 346, 37);
  translate(80,0)
  line(338, 30, 338, 45);
  line(330, 37, 346, 37);
  translate(80,0)
  line(338, 30, 338, 45);
  line(330, 37, 346, 37);
  pop();
  
  noStroke();
  fill(204, 153, 0);
  rect(0, 260, 400, 140);

  fill(153, 102, 0);
  ellipse(70,280,140,70);
  ellipse(200,285,140,70);
  ellipse(335,280,140,70);
  
  fill(255, 255, 255)
  ellipse(70, 270, 140, 70)
  fill(255, 255, 255)
  ellipse(200, 270, 140, 70)
  fill(255, 255, 255)
  ellipse(335, 270, 140, 70)
  
  fill(102, 204, 255);
  ellipse(70,260,140,70);
  ellipse(200,260,140,70);
  ellipse(335,260,140,70);
  
  rect(0, 200, 400, 60);
  fill(0, 134, 179);
  rect(0, 200, 400, 40)
  fill(0, 134, 179);
  
  ellipse(70,240,140,70);
  ellipse(200,240,140,70);
  ellipse(335,240,140,70);
  
  push();
  noStroke();

  // Band 1 (slight tilt left)
  push();
  translate(10, 138);
  rotate(-4);             // degrees
  fill(255, 220);
  ellipse(0, 0, 85, 13);
  ellipse(40, -6, 65, 9);
  ellipse(80, 2, 95, 15);
  ellipse(120, -4, 55, 7);
  pop();

  push();
  translate(38, 150);
  rotate(-2);             
  fill(255, 200);
  ellipse(0, 0, 110, 20);
  ellipse(50, -4, 80, 14);
  ellipse(95, 2, 90, 18);
  ellipse(140, -3, 60, 12);
  pop();

  push();
  translate(380, 140);
  rotate(180);              // degrees
  fill(255, 180);
  ellipse(0, 0, 70, 14);
  ellipse(30, 4, 90, 18);
  ellipse(70, -2, 60, 12);
  pop();  

  pop();
}