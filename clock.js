 

let t0 = 0;          // second() when growth started
let stemMax = 170;   // stem height 

function setup() {
  // create the canvas
  canvas = createCanvas(600, 600);
  // attach the canvas to the div in your HTML
  canvas.parent("#sketch-container");
  angleMode(DEGREES);
  t0 = second();     // start once
}

function draw() {
  background(102, 204, 255);

  // ground
  noStroke();
  fill(0, 153, 0);
  rect(0, 400, 600, 200);

 
  let s = second();
  let t = (s - t0 + 60) % 60;


  // Stem
  let stemLen = map(t, 0, 6, 0, stemMax);
  if (t > 6) stemLen = stemMax;

  // Leaves
  let leafScale = 0;
  if (t >= 6) {
    leafScale = map(t, 6, 10, 0, 1);
    if (leafScale > 1) leafScale = 1;
  }

  // Head 
  let headScale = 0;
  if (t >= 10) {
    headScale = map(t, 10, 12, 0, 1);
    if (headScale > 1) headScale = 1;
  }

  // Petals
  let petalScale = 0;
  if (t >= 12) {
    petalScale = map(t, 12, 16, 0, 1);
    if (petalScale > 1) petalScale = 1;
  }

  // STEM 
  stroke(0, 153, 0);
  strokeWeight(5);
  line(300, 400, 300, 400 - stemLen);

  // LEAVES 
  let w = 35 * leafScale;   
  let h = 20 * leafScale;   
  noStroke();
  fill(0, 153, 0);

  // leaf 
  push(); 
  translate(-68, 70); 
  rotate(-15); 
  arc(319, 303, w, h, 0, 180); 
  pop();
  
  push(); 
  translate(-68, 71); 
  rotate(-15); 
  arc(319, 303, w, h, 180, 360); 
  pop();

  // leaf 2 
  push(); 
  translate(20, -20); 
  rotate(10); 
  arc(319, 303, w, h, 0, 180); 
  pop();
  
  push(); 
  translate(20, -19); 
  rotate(10); 
  arc(319, 303, w, h, 180, 360); 
  pop();

  // SUNFLOWER HEAD
  push();
  noStroke();
  fill(77, 38, 0);
  circle(300, 200, 50 * headScale);  
  pop();

  // PETALS 
  let pw = 20 * petalScale;
  let ph = 45 * petalScale;

  // petal ring 1
  push(); 
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,153, pw,ph); 
  pop();

  push(); 
  translate(108,-105); 
  rotate(24);  
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,153, pw,ph); 
  pop();
  
  push(); 
  translate(249,-156); 
  rotate(48);  
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,153, pw,ph); 
  pop();
  
  push(); 
  translate(399,-145); 
  rotate(72);  
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,153, pw,ph); 
  pop();
  
  push(); 
  translate(531,-74);  
  rotate(96);  
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,153, pw,ph); 
  pop();
  
  push(); 
  translate(622,43);   
  rotate(120); 
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,153, pw,ph); 
  pop();
  
  push(); 
  translate(-55,133);  
  rotate(-23); 
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,153, pw,ph); 
  pop();
  
  push(); 
  translate(-52,276);  
  rotate(-46); 
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,153, pw,ph); 
  pop();

  // petal ring 2
  push(); 
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,247, pw,ph); 
  pop();

  push(); 
  translate(108,-105); 
  rotate(24);  
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,247, pw,ph); 
  pop();
  
  push(); 
  translate(249,-156); 
  rotate(48);  
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,247, pw,ph);
  pop();
  
  push(); 
  translate(399,-145); 
  rotate(72);  
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,247, pw,ph); 
  pop();
  
  push(); 
  translate(530,-74);  
  rotate(96);  
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,247, pw,ph); 
  pop();
  
  push(); 
  translate(622,43);   
  rotate(120); 
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,247, pw,ph); 
  pop();
  
  push(); 
  translate(-55,134);  
  rotate(-23); 
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,247, pw,ph); 
  pop();
  
  push(); 
  translate(-52,281);  
  rotate(-46); 
  strokeWeight(1); 
  stroke(220,205,0); 
  fill(240,240,0); 
  ellipse(300,247, pw,ph); 
  pop();

}

//restart with key or mouse
function keyPressed(){ t0 = second(); }
function mousePressed(){ t0 = second(); }