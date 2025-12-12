let mode = "intro"; //"intro"=show legend overlay, "data"=show record
let ang = 0;

function setup() {
  // create the canvas
  canvas = createCanvas(600, 600);
  // attach the canvas to the div in your HTML
  canvas.parent("#sketch-container");
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  //guide lines
  noFill();
  strokeWeight(1);
  stroke(255);
  circle(300, 300, 190);
  circle(300, 300, 250);
  circle(300, 300, 310);
  circle(300, 300, 370);
  circle(300, 300, 430);
  circle(300, 300, 490);
  circle(300, 300, 550);
  
  // colour-genre
  //stroke(255, 127, 195)pop
  //stroke(46, 92, 184)hip
  //stroke(163, 102, 255)rnb
  //stroke(90, 159, 118)alt
  
//CENTER
  push();
 translate(300, 300);   
 rotate(ang);           

 noStroke();
 fill(198, 151, 175);
 circle(0, 0, 150);     

 fill(255);
 arc(0, 0, 150, 150, 0, 30);
 arc(0, 0, 150, 150, 180, 210);

 fill(0);
 circle(0, 0, 40);
 pop();

 ang += 1.2;      
  

  
  // Monday
  push();
  noFill();
  strokeWeight(15);
  stroke(255, 127, 195);
  arc(300, 300, 190, 190, 250, 270);
  stroke(163, 102, 255);
  arc(300, 300, 190, 190, 270, 280);
  stroke(255, 127, 195);
  arc(300, 300, 190, 190, 0, 10);
  stroke(46, 92, 184);
  arc(300, 300, 190, 190, 10, 30);
  stroke(90, 159, 118);
  arc(300, 300, 190, 190, 200, 235);
  stroke(163, 102, 255);
  arc(300, 300, 190, 190, 180, 200);
  pop(); 
  
  // TUESDAY
  push();
  noFill();
  strokeWeight(15);
  stroke(163, 102, 255);
  arc(300, 300, 250, 250, 270, 280);
  stroke(46, 92, 184);
  arc(300, 300, 250, 250, 280, 290);
  stroke(255, 127, 195);
  arc(300, 300, 250, 250, 320, 330);
  stroke(163, 102, 255);
  arc(300, 300, 250, 250, 330, 345);
  stroke(90, 159, 118)
  arc(300, 300, 250, 250, 345, 350);
  stroke(90, 159, 118)
  arc(300, 300, 250, 250, 20, 40);
  stroke(163, 102, 255);
  arc(300, 300, 250, 250, 40, 70);
  stroke(255, 127, 195);
  arc(300, 300, 250, 250, 70, 90);
  stroke(46, 92, 184);
  arc(300, 300, 250, 250, 90, 100);
  stroke(90, 159, 118);
  arc(300, 300, 250, 250, 135, 170);
  stroke(163, 102, 255)
  arc(300, 300, 250, 250, 170, 210);
  pop();
  
  //wednesday
  push();
  noFill();
  strokeWeight(15);
  stroke(255, 127, 195);
  arc(300, 300, 310, 310, 250, 270);
  stroke(163, 102, 255);
  arc(300, 300, 310, 310, 270, 280);
  stroke(46, 92, 184);
  arc(300, 300, 310, 310, 0, 30);
  stroke(163, 102, 255)
  arc(300, 300, 310, 310, 30, 45);
  stroke(255, 127, 195);
  arc(300, 300, 310, 310, 45, 55);
  stroke(90, 159, 118)
  arc(300, 300, 310, 310, 55, 85);
  stroke(163, 102, 255);
  arc(300, 300, 310, 310, 185, 195);
  stroke(90, 159, 118);
  arc(300, 300, 310, 310, 195, 215);
  pop();
  
  //Thursday
  push();
  noFill();
  strokeWeight(15);
  stroke(46, 92, 184);
  arc(300, 300, 370, 370, 250, 280);
  stroke(255, 127, 195);
  arc(300, 300, 370, 370, 330, 365);
  stroke(163, 102, 255);
  arc(300, 300, 370, 370, 365, 375);
  stroke(46, 92, 184);
  arc(300, 300, 370, 370, 100, 120);
  stroke(255, 127, 195);
  arc(300, 300, 370, 370, 120, 125);
  stroke(163, 102, 255);
  arc(300, 300, 370, 370, 165, 170);
  stroke(90, 159, 118);
  arc(300, 300, 370, 370, 170, 200);
  stroke(46, 92, 184);
  arc(300, 300, 370, 370, 200, 210);
  pop();
  
  //FRIDAY
  push();
  noFill();
  strokeWeight(15);
  stroke(90, 159, 118);
  arc(300, 300, 430, 430, 260, 270);
  stroke(163, 102, 255);
  arc(300, 300, 430, 430, 270, 285);
  stroke(90, 159, 118);
  arc(300, 300, 430, 430, 0, 25);
  stroke(90, 159, 118);
  arc(300, 300, 430, 430, 80, 90);
  stroke(163, 102, 255);
  arc(300, 300, 430, 430, 90, 100);
  stroke(46, 92, 184);
  arc(300, 300, 430, 430, 170, 200);
  stroke(255, 127, 195);
  arc(300, 300, 430, 430, 200, 230);
  pop();
  
  //SUNDAY
  push();
  noFill();
  strokeWeight(15);
  stroke(255, 127, 195);
  arc(300, 300, 550, 550, 300, 320);
  stroke(163, 102, 255);
  arc(300, 300, 550, 550, 0, 40);
  stroke(90, 159, 118);
  arc(300, 300, 550, 550, 40, 70);
  stroke(255, 127, 195);
  arc(300, 300, 550, 550, 70, 80);
  stroke(90, 159, 118);
  arc(300, 300, 550, 550, 180, 190);
  stroke(163, 102, 255);
  arc(300, 300, 550, 550, 190, 200);
  stroke(90, 159, 118);
  arc(300, 300, 550, 550, 110, 130);
  stroke(46, 92, 184);
  arc(300, 300, 550, 550, 130, 140);
  pop();
 

// INTRO OVERLAY (legend & instructions)
  if (mode === "intro") {
    drawIntroOverlay();
  }
}


function mouseClicked(){
  if (mode === "intro") mode = "data";
}


function keyPressed(){
  if (key === ' ') mode = "data";
  if (key === 'I' || key === 'i') mode = "intro";
}

//Intro/Legend overlay (drawn on top when mode === "intro") 
function drawIntroOverlay(){
  push();
  noStroke();
  fill(0, 200);
  rect(0, 0, width, height);

  // title
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text("VINYL WEEK — How to Read", width/2, 86);
  textSize(13);
  fill(215);
  text("Each ring = a day (inner Mon → outer Sun). Colored dashes = listening sessions.", width/2, 108);

  // legend panel
  let x = 80, y = 140, w = width - 160, h = 300;
  fill(0, 170);
  rect(x, y, w, h, 14);

  // sections
  fill(240);
  textAlign(LEFT); textSize(14);
  text("Mapping", x+20, y+28);

  textSize(12); fill(220);
  text("• Rings (center → edge): Mon, Tue, Wed, Thu, Fri, Sat, Sun", x+20, y+52);
  text("• Time of day = angle around the ring (clockwise, 12 at top)", x+20, y+72);
  text("• Each colored dash = one listening session", x+20, y+92);

  // genre swatches 
  textSize(14); fill(240);
  text("Genres", x+20, y+126);

  function swatch(cx, cy, r, g, b, label){
    stroke(r,g,b);
    strokeWeight(10);
    noFill();
    arc(cx, cy, 28, 28, -30, 30); // short arc sample
    noStroke(); fill(225); textSize(12);
    text(label, cx+22, cy+4);
  }


  swatch(x+20,  y+148, 46, 92, 184, "Hip Hop");
  swatch(x+20,  y+176, 90,159,118, "Alt");
  swatch(x+180, y+148,255,127,195,"Pop");
  swatch(x+180, y+176,163,102,255,"R&B");

  // day order mini-hint
  fill(220); textSize(12);
  text("Day order (inner→outer): Mon  Tue  Wed  Thu  Fri  Sat  Sun", x+20, y+214);

  // controls
  textAlign(CENTER); fill(235);
  textSize(12);
  text("Press SPACE or CLICK to start • Press I to show this screen again", width/2, y+h+28);

  pop();
}