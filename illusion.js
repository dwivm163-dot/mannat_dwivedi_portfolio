function setup() {
  // create the canvas
  canvas = createCanvas(600, 600);
  // attach the canvas to the div in your HTML
  canvas.parent("#sketch-container");
}

function draw() {
  background(24, 38, 36); // deep teal background
  
  //HEAD + NECK OUTLINE
  push();
  if (mouseIsPressed) {
    stroke(0,0,0); // outlines visible when pressed
  } else {
    noStroke();
  }
  fill(28, 52, 48);     // head/neck fill
  beginShape();
  vertex(214, 276);
  bezierVertex(235, 210, 338, 158, 408, 295);
  bezierVertex(430, 343, 427, 442, 347, 478);
  bezierVertex(318, 488, 311, 485, 300, 486);
  bezierVertex(330, 472, 345, 441, 351, 420);
  bezierVertex(334, 410, 317, 393, 288, 391);
  bezierVertex(381, 390,377, 228, 285, 248);
  bezierVertex(272, 250, 255, 259, 249, 270);
  bezierVertex(257, 285, 249, 310, 238, 315);
  bezierVertex(241, 319, 237, 332, 230, 340);
  bezierVertex(216, 319, 211, 294, 214, 276);
  endShape();
  pop();
  
    // MIDDLE BODY OUTLINE
  push();
  stroke(28, 52, 48);
  fill(28, 52, 48);     // body fill
  beginShape();
  vertex(288, 391);
  bezierVertex(183, 402, 113, 295, 137, 215);
  bezierVertex(85, 227, 35, 246, -18, 315);
  bezierVertex(28, 400, 160, 509, 300, 486);//
  bezierVertex(330, 472, 345, 441, 351, 420);
  bezierVertex(334, 410, 317, 393, 288, 391);
  endShape();
  pop();
  
//FEATHERS OR TAIL OUTLINE
  push();
  stroke(28, 52, 48);
  noFill();
  beginShape();
  vertex(137, 215);
  bezierVertex(190, 90, 389, 75, 465, 214);
  bezierVertex(517, 298, 565, 500, 410, 602);
  endShape();
  pop();
  
 ////////////////////////DETAILS//////////////////////////////////////
  // //neck scales
  let px = 370, py = 280;
  push();
  translate(px, py);  
  scale(1, -1); 
  rotate(55);
  translate(-px,-py);
  for (let x = 230; x < 400; x += 13) {
    for (let y = 170; y < 340; y += 9) {
      fill(28, 52, 48); // lighter teal scales
       if (mouseIsPressed) {
    stroke(0); // outlines visible when pressed
  } else {
    noStroke();
  }
      circle(x, y, 15);
    }
  }
  pop();
  
  //tail
  push();
  strokeWeight(5);
  noFill();
  stroke(32, 64, 58); // muted tail lines
  bezier(134, 144, 255, 31, 390, 80, 485, 159);
  bezier(526, 105, 373, 5, 187, 10, 103, 94);
  bezier(72, 50, 182, -40, 377, -40, 485, 16);
  translate(-10, - 15)
  bezier(134, 144, 255, 31, 390, 80, 485, 159);
  bezier(526, 105, 373, 5, 187, 10, 103, 94);
  bezier(72, 50, 182, -40, 377, -40, 485, 16);
  translate(20, 30)
  bezier(134, 144, 255, 31, 390, 80, 485, 159);
  bezier(526, 105, 373, 5, 187, 10, 103, 94);
  bezier(72, 50, 182, -40, 377, -40, 485, 16);
  pop();
  

/// curve 1
  push();
   translate(-60, -175);
  noStroke();
  rotate(3);
  let K = 2;   // scale up size
  fill(44, 72, 66);
  ellipse(124, 217, 25*K, 40*K);

  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-60, 25);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  pop();
  
  push();
  translate(-80, -165);
  noStroke();
  rotate(-3);
   if (mouseIsPressed) {
    fill(28, 52, 48);
  } else {
    fill(44, 72, 66);
  }
  ellipse(124, 217, 25, 40);
  translate(-60, 25);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  pop();
  
  push();
  noFill();
  stroke(32, 64, 58);
  strokeWeight(3);
  translate(-70, -163)
  bezier(148, 216, 147, 171, 116, 163, 108, 181);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-28,8);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  pop();

  
/// curve 2
  push();
  translate(-55, -128);
  noStroke();
  rotate(1);
  fill(44, 72, 66);
  ellipse(124, 217, 25*K, 40*K);

  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-60, 25);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  pop();
  
  push();
  translate(-70, -120);
  rotate(-3);
  noStroke();
   if (mouseIsPressed) {
    fill(28, 52, 48);
  } else {
    fill(44, 72, 66);
  }
  ellipse(124, 217, 25, 40);
  translate(-60, 25);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  pop();
  
  push();
  noFill();
  stroke(32, 64, 58);
  strokeWeight(3);
  translate(-58, -122)
  bezier(148, 216, 147, 171, 116, 163, 108, 181);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-28,10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  pop();

  
/// curve 3
  push();
  translate(-25, -85);
  noStroke();
  rotate(1);
  fill(44, 72, 66);
  ellipse(124, 217, 25*K, 40*K);

  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-60, 25);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  pop();
  
  push();
  translate(-40, -78);
  rotate(-3);
  noStroke();
   if (mouseIsPressed) {
    fill(28, 52, 48);
  } else {
    fill(44, 72, 66);
  }
  ellipse(124, 217, 25, 40);
  translate(-60, 25);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  pop();
  
  push();
  noFill();
  stroke(32, 64, 58);
  strokeWeight(3);
  translate(-28, -80)
  bezier(148, 216, 147, 171, 116, 163, 108, 181);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-28,10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  pop();

//// curve 4  
 push();
  translate(-5, -45);
  noStroke();
  rotate(1);
  fill(44, 72, 66);
  ellipse(124, 217, 25*K, 40*K);

  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-60, 25);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  pop();
  
  push();
  translate(-18, -40);
  rotate(-3);
  noStroke();
   if (mouseIsPressed) {
    fill(28, 52, 48);
  } else {
    fill(44, 72, 66);
  }
  ellipse(124, 217, 25, 40);
  translate(-60, 25);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  translate(-43, 8);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  pop();
  
  push();
  noFill();
  stroke(32, 64, 58);
  strokeWeight(3);
  translate(-8, -40)
  bezier(148, 216, 147, 171, 116, 163, 108, 181);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-28,10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-59,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  pop();
 
//curve 5  
  push();
  translate(-16, 5);
  noStroke();
  rotate(-5);
  fill(44, 72, 66);
  ellipse(124, 217, 25*K, 40*K);

  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-60, 25);
  rotate(-10);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25*K, 40*K);
  pop();
  
  push();
  translate(-16, 5);
  rotate(-5);
  noStroke();
   if (mouseIsPressed) {
    fill(28, 52, 48);
  } else {
    fill(44, 72, 66);
  }
  ellipse(124, 217, 25, 40);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-60, 28);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-60, 25);
  rotate(-10);
  ellipse(124, 217, 25, 40);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  translate(-43, 12);
  rotate(-5);
  ellipse(124, 217, 25, 40);
  pop();
  
  push();
  stroke(32, 64, 58);
  strokeWeight(3);
  noFill();
  bezier(148, 194, 141, 171, 116, 163, 108, 181);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-28,10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-55,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-57,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  translate(-57,30);
  rotate(-10);
  bezier(108, 181, 100, 170, 82, 175, 80, 190);
  pop();

//scale cover (large shape)
  push();
  stroke(28, 52, 48);
  strokeWeight(1);
  fill(44, 72, 66); // muted cover to blend
  beginShape();
  vertex(214, 276);
  bezierVertex(235, 210, 338, 158, 408, 295);
  bezierVertex(430, 343, 427, 442, 347, 478);
  bezierVertex(318, 488, 311, 485, 300, 486);
  bezierVertex(160, 509, 28, 400, -18, 315 );
  bezierVertex(-500, 447, 174, 800, 410, 602);
  bezierVertex(565, 500, 517, 298,465, 214);
  bezierVertex(389, 75, 190, 90, 137, 215);
  bezierVertex(113, 295, 183, 402, 288, 391);
  bezierVertex(381, 390,377, 228, 285, 248);
  bezierVertex(272, 250, 255, 259, 249, 270);
  bezierVertex(257, 285, 249, 310, 238, 315);
  bezierVertex(241, 319, 237, 332, 230, 340);
  bezierVertex(216, 319, 211, 294, 214, 276);
  endShape();
  pop();
  
  push();
  stroke(28, 52, 48);
  fill(28, 52, 48);
  beginShape();
  vertex(288, 391);
  bezierVertex(183, 402, 113, 295, 137, 215);
  bezierVertex(85, 227, 35, 246, -18, 315);
  bezierVertex(28, 400, 160, 509, 300, 486);//
  bezierVertex(330, 472, 345, 441, 351, 420);
  bezierVertex(334, 410, 317, 393, 288, 391);
  endShape();
  pop();

  //cover
  push();
  noStroke();
  fill(28, 52, 48);
  beginShape();
  vertex(326, 254);
  bezierVertex(338, 248, 348, 236, 344, 221);
  bezierVertex(322, 215, 311, 238, 315, 247);
  endShape();
  pop();
  
  push();
  stroke(28, 52, 48);
  fill(28, 52, 48);
  beginShape();
  vertex(349, 347);
  bezierVertex(361, 366, 396, 374, 419, 371);
  bezierVertex(422, 413, 380, 490, 300, 486);
  bezierVertex(330, 472, 345, 441, 351, 420);
  bezierVertex(334, 410, 317, 393, 288, 391);
  bezierVertex(323, 383, 340, 367, 349, 347);
  endShape();
  pop();
  
///HEAD FEATHERS 
  push();
  noFill();
  if (mouseIsPressed) {
    stroke(0);
  } else {
    noStroke();
  }
  bezier(213, 276, 206, 265, 195, 265, 188, 271);
  circle(190, 275, 8);
  bezier(213, 276, 208, 258, 186, 251, 172, 265);
  circle(174, 269, 9);
  bezier(213, 276, 214, 251, 181, 235, 158, 258);
  circle(160, 263, 10);
  pop();
  
//beak
  push();
  if (mouseIsPressed) {
    stroke(0);
  } else {
    noStroke();
  }
  noFill();
  beginShape();
  vertex(238, 315);
  bezierVertex(241, 319, 237, 332, 230, 340);
  bezierVertex(225, 333, 221, 325, 219, 317);
  bezierVertex(224, 322, 232, 322, 238, 315);
  endShape();
  pop();
  
//eye
  push();
   if (mouseIsPressed) {
    stroke(0);
  } else {
    noStroke();
  }
  noFill();
  circle(225, 300, 6);
  bezier(226, 308, 218, 299, 226, 294, 223, 287);
  pop();
  
// mid design triangle (mute)
  push();
  if (mouseIsPressed) {
    stroke(0);
  } else {
    noStroke();
  }
  fill(50, 84, 76);
  beginShape();
  vertex(300, 486);
  bezierVertex(330, 472, 345, 441, 351, 420);
  bezierVertex(334, 410, 317, 393, 288, 391);
  bezierVertex(282, 391, 280, 392, 263, 391);
  bezierVertex(300, 401, 328, 418, 339, 424);
  bezierVertex(333, 438, 309, 470, 280, 489);
  endShape();
  pop();

///// TAIL FEATHER “heads” and details (muted teals)

//feather head 1
  push();
  translate(-20, 155);
  rotate(-14);
  push();
  strokeWeight(10);
  stroke(50, 80, 74);
  fill(40, 66, 62);
  beginShape();
  vertex(483, 140);
  bezierVertex(459, 195, 501, 244, 555, 255);
  endShape();
  translate(517, 194); 
  rotate(58); 
  scale(1, -1); 
  rotate(-58); 
  translate(-516, -194);
  beginShape();
  vertex(483, 140);
  bezierVertex(459, 195, 501, 244, 555, 255);
  endShape();
  pop();
  
  // feather lines/ details
  push();
  noFill();
  strokeWeight(4);
  stroke(56, 90, 82);
  bezier(483, 140, 459, 195, 501, 244, 555, 255);
  translate(517, 194); rotate(58); scale(1, -1); rotate(-58); translate(-516, -194);
  bezier(483, 140, 459, 195, 501, 244, 555, 255);
  pop();
  
  // eye rings (muted)
  push();
  noStroke();
  fill(44, 72, 66); circle(505, 174, 45);
  fill(60, 92, 84); circle(505, 174, 38);
  fill(28, 44, 40); circle(504, 172, 23);
  triangle(493, 162, 499, 159, 501, 167);
  pop();
  pop();
  
 //feather head 2
  push();
  translate(-18, 125);
  rotate(-13);
  push();
  strokeWeight(10);
  stroke(50, 80, 74);
  translate(-5, 20);
  rotate(-10);
  fill(40, 66, 62);
  beginShape();
  vertex(483, 140);
  bezierVertex(459, 195, 501, 244, 555, 255);
  endShape();
  translate(517, 194); rotate(58); scale(1, -1); rotate(-58); translate(-516, -194);
  beginShape();
  vertex(483, 140);
  bezierVertex(459, 195, 501, 244, 555, 255);
  endShape();
  
  push();
  noFill();
  strokeWeight(4);
  stroke(56, 90, 82);
  bezier(483, 140, 459, 195, 501, 244, 555, 255);
  translate(517, 194); rotate(58); scale(1, -1); rotate(-58); translate(-516, -194);
  bezier(483, 140, 459, 195, 501, 244, 555, 255);
  pop();
  pop();
  
  push();
  translate(20, -68)
  noStroke();
  fill(44, 72, 66); circle(505, 174, 45);
  fill(60, 92, 84); circle(505, 174, 38);
  fill(28, 44, 40); circle(504, 172, 23);
  triangle(493, 162, 499, 159, 501, 167);
  pop();
  pop();
  
   //feather head 3
  push();
  translate(-10, 125);
  rotate(-14);
  push();
  strokeWeight(10);
  stroke(50, 80, 74);
  translate(-5, -10);
  rotate(-15);
  fill(40, 66, 62);
  beginShape();
  vertex(483, 140);
  bezierVertex(459, 195, 501, 244, 555, 255);
  endShape();
  translate(517, 194); rotate(58); scale(1, -1); rotate(-58); translate(-516, -194);
  beginShape();
  vertex(483, 140);
  bezierVertex(459, 195, 501, 244, 555, 255);
  endShape();
  
  push();
  noFill();
  strokeWeight(4);
  stroke(56, 90, 82);
  bezier(483, 140, 459, 195, 501, 244, 555, 255);
  translate(517, 194); rotate(58); scale(1, -1); rotate(-58); translate(-516, -194);
  bezier(483, 140, 459, 195, 501, 244, 555, 255);
  pop();
  pop();
  
  push();
  translate(30, -140);
  noStroke();
  fill(44, 72, 66); circle(505, 174, 45);
  fill(60, 92, 84); circle(505, 174, 38);
  fill(28, 44, 40); circle(504, 172, 23);
  triangle(493, 162, 499, 159, 501, 167);
  pop();
  pop();
  
//feather head 4
  push();
  translate(-135, 70);
  rotate(-18);
  push();
  strokeWeight(10);
  stroke(50, 80, 74);
  translate(-5, 20);
  rotate(-10);
  fill(40, 66, 62);
  beginShape();
  vertex(483, 140);
  bezierVertex(459, 195, 501, 244, 555, 255);
  endShape();
  translate(517, 194); rotate(58); scale(1, -1); rotate(-58); translate(-516, -194);
  beginShape();
  vertex(483, 140);
  bezierVertex(459, 195, 501, 244, 555, 255);
  endShape();
  
  push();
  noFill();
  strokeWeight(4);
  stroke(56, 90, 82);
  bezier(483, 140, 459, 195, 501, 244, 555, 255);
  translate(517, 194); rotate(58); scale(1, -1); rotate(-58); translate(-516, -194);
  bezier(483, 140, 459, 195, 501, 244, 555, 255);
  pop();
  pop();
  
  push();
  translate(20, -68)
  noStroke();
  fill(44, 72, 66); circle(505, 174, 45);
  fill(60, 92, 84); circle(505, 174, 38);
  fill(28, 44, 40); circle(504, 172, 23);
  triangle(493, 162, 499, 159, 501, 167);
  pop();
  pop();
  
//feather head 5
  push();
  translate(-125, 105);
  rotate(-12);
  push();
  strokeWeight(10);
  stroke(50, 80, 74);
  translate(-5, 20);
  rotate(-10);
  fill(40, 66, 62);
  beginShape();
  vertex(483, 140);
  bezierVertex(459, 195, 501, 244, 555, 255);
  endShape();
  translate(517, 194); rotate(58); scale(1, -1); rotate(-58); translate(-516, -194);
  beginShape();
  vertex(483, 140);
  bezierVertex(459, 195, 501, 244, 555, 255);
  endShape();
  
  push();
  noFill();
  strokeWeight(4);
  stroke(56, 90, 82);
  bezier(483, 140, 459, 195, 501, 244, 555, 255);
  translate(517, 194); rotate(58); scale(1, -1); rotate(-58); translate(-516, -194);
  bezier(483, 140, 459, 195, 501, 244, 555, 255);
  pop();
  pop();
  
  push();
  translate(20, -68)
  noStroke();
  fill(44, 72, 66); circle(505, 174, 45);
  fill(60, 92, 84); circle(505, 174, 38);
  fill(28, 44, 40); circle(504, 172, 23);
  triangle(493, 162, 499, 159, 501, 167);
  pop();
  pop();

}