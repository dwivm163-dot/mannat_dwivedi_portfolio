
let eyeSep, eyeW, eyeOpenBase;
let hornSize, hornAngle;
let hairLen;
let mouthW, mouthH;
let fangLen;

let canvas;

function setup() {
  // create the canvas
  canvas = createCanvas(400, 400);
  // attach the canvas to the div in your HTML
  canvas.parent("#sketch-container");
  angleMode(DEGREES);


  // initial random variation
  eyeSep = random(58, 72);
  eyeW = random(18, 28);
  eyeOpenBase = random(8, 14);
  hornSize = random(0.8, 1.3);
  hornAngle = random(-10, 10);
  hairLen = random(0.95, 1.20);
  mouthW = random(28, 46);
  mouthH = random(5, 12);
  fangLen = random(0, 10);
}

function draw() {
  background(8);

  // scale whole face with mouseY 
  let faceScale = map(mouseY, 0, height, 1.2, 0.6);

  // eye changes a bit with mouseX
  let eyeOpen = eyeOpenBase * map(mouseX, 0, width, 0.7, 1.3);

  // pupils look around with the mouse
  let pupilX = map(mouseX, 0, width, -3, 3);
  let pupilY = map(mouseY, 0, height, -2, 2);

  // draw face centered
  push();
  translate(width/2, height*0.55);
  scale(faceScale);

  // colors (fixed)
  let skinR=255, skinG=65, skinB=170;      // pink skin
  let hairR=110, hairG=0,  hairB=75;       // dark hair
  let lineR=30,  lineG=0,  lineB=40;

  //hair
  let hairW = 188;                  // bob width
  let domeH = 154 * hairLen;        // top arc height 
  let domeY = -20;                  // center y of the top arc 
  let rectH = 138 * hairLen;        // rectangle height 

  // BACK BOB (behind the head)
  noStroke();
  fill(hairR, hairG, hairB);
  arc(0, domeY, hairW, domeH, 0, 180, CHORD);
  rect(-hairW/2, domeY, hairW, rectH, 10);


  // HEAD
  fill(skinR, skinG, skinB);
  ellipse(0, 20, 150, 160);
// SINGLE BANG ARC (on forehead)
  fill(hairR, hairG, hairB);
  arc(0, -6, 189, 160, 180, 360, CHORD);
 
  // HORNS 
  fill(hairR+30, hairG, hairB+30);
  push();
  translate(-50, -50);
  rotate(-12 + hornAngle);
  ellipse(0, 0, 22*hornSize, 38*hornSize);
  ellipse(10, -16*hornSize, 18*hornSize, 30*hornSize);
  ellipse(18, -30*hornSize, 14*hornSize, 24*hornSize);
  pop();

  push();
  translate(50, -50);
  rotate(12 - hornAngle);
  ellipse(0, 0, 22*hornSize, 38*hornSize);
  ellipse(-10, -16*hornSize, 18*hornSize, 30*hornSize);
  ellipse(-18, -30*hornSize, 14*hornSize, 24*hornSize);
  pop();

  // EYES (whites)
  noStroke();
  fill(255);
  push(); translate(-eyeSep/2, 18); rotate(-2); ellipse(0, 0, eyeW, eyeOpen); pop();
  push(); translate( eyeSep/2, 18); rotate( 2); ellipse(0, 0, eyeW, eyeOpen); pop();

  // PUPILS
  fill(20);
  push(); translate(-eyeSep/2, 18); ellipse(pupilX, pupilY, 6, 6); pop();
  push(); translate( eyeSep/2, 18); ellipse(pupilX, pupilY, 6, 6); pop();

  // BROWS
  stroke(hairR, hairG, hairB);
  strokeWeight(4);
  noFill();
  push(); translate(-eyeSep/2, 5); rotate(-5); line(-12, 0, 12, 0); pop();
  push(); translate( eyeSep/2, 5); rotate( 5); line(-12, 0, 12, 0); pop();

  // MOUTH + FANGS
  noStroke();
  fill(lineR, lineG, lineB);
  ellipse(0, 60, mouthW, mouthH);

  fill(255);
  triangle(-6, 60, -2, 60, -4, 60 + fangLen);
  triangle( 6, 60,  2, 60,  4, 60 + fangLen);

  // light blush
  fill(255, 100, 160, 90);
  ellipse(-eyeSep/2, 40, 22, 12);
  ellipse( eyeSep/2, 40, 22, 12);
  pop(); 
}

// Click to get a new random variation
function mousePressed() {
  eyeSep = random(58, 72);
  eyeW = random(18, 28);
  eyeOpenBase = random(8, 14);
  hornSize = random(0.8, 1.3);
  hornAngle = random(-10, 10);
  hairLen = random(0.95, 1.20);
  mouthW = random(28, 46);
  mouthH = random(5, 12);
  fangLen = random(0, 10);

}
