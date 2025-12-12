function setup() {
  // create the canvas
  canvas = createCanvas(400, 600);
  // attach the canvas to the div in your HTML
  canvas.parent("#sketch-container");
}

function draw() {
  background(220);
  
 body(117, 135, 119);
  
function body(r,g,b){
 
  fill(r,g,b);
  // rect(180, 145, 40, 25)
  
//TAIL
  beginShape()
  vertex(185, 388,);
  bezierVertex(206, 429, 258, 476, 300, 485);
  bezierVertex(313, 486, 311, 479, 303, 475);
  bezierVertex(269, 454, 232, 406, 221, 380)
  endShape();
    
//BODY

  
  stroke(1);
  beginShape();
  vertex(180, 145);
  bezierVertex(190, 145, 190, 170, 180, 170);
  bezierVertex(120, 177, 120, 160, 100, 280);
  bezierVertex(96, 304, 97, 328, 110, 372);
  bezierVertex(122, 398,135, 385, 120, 305);
  bezierVertex(120, 288, 143, 228, 137, 215);
  bezierVertex(135, 240, 142, 246, 151, 258);  
  bezierVertex(159, 269, 166, 287, 154, 321);
  bezierVertex(137, 343, 126, 370, 128, 390);
  bezierVertex(130, 444, 137, 465, 140, 484);
  bezierVertex(135, 497, 140, 544, 146, 561);
  bezierVertex(151, 570, 157, 570, 161, 561);
  bezierVertex(164, 544, 172, 497, 169, 484);
  bezierVertex(180, 444, 192, 419, 195, 383);
  bezierVertex(197, 386, 202, 386, 205, 383);//mid
  bezierVertex(205, 419, 215, 447, 229, 484);
  bezierVertex(225, 497, 235, 544, 239, 561);
  bezierVertex(242, 570, 254, 570, 254, 561);
  bezierVertex(255, 538, 258, 495, 253, 484);
  bezierVertex(256, 445, 280, 373, 239, 325);
  bezierVertex(228, 294, 225, 274, 237, 258);
  bezierVertex(250, 244, 255, 230, 254, 215);
  bezierVertex(250, 226, 259, 251, 278, 305);
  bezierVertex(244, 412, 286, 398, 300, 306);
  bezierVertex(300, 281, 285, 222, 280, 192);
  bezierVertex(276, 180, 270, 175, 220, 170);
  bezierVertex(210, 170, 210, 145, 220, 145);
  endShape();
  
  // TOP
  fill(22, 34, 24)
  beginShape();
  vertex(198, 240);
  bezierVertex(215, 223, 238, 214, 255, 215);
  bezierVertex(255, 230,250, 244, 237, 258);
  bezierVertex(221, 258, 205, 250, 198, 240);
  endShape();
  
// I used chatgpt to explain how to flip the shape horizontally so i wouldnt have to make it again :P
  push();
translate(width/2, 0); // move origin to mirror line
scale(-1, 1);          // flip horizontally
translate(-width/2, 0); // move origin back
 beginShape();
  vertex(202, 240);
  bezierVertex(215, 223, 238, 214, 263, 215);
  bezierVertex(265, 230, 260, 244, 248, 258);
  bezierVertex(221, 258, 207, 250, 202, 240);
  endShape();
pop();
  
//skirt
fill(22, 34, 24)
beginShape();
  vertex(152, 325);
  bezierVertex(175, 340, 225, 340, 240, 325);
  bezierVertex(255, 344, 262, 376, 263, 400);
  bezierVertex(225, 415, 165, 415, 128, 400);
  bezierVertex(124, 379, 137, 345, 152, 325);
  endShape();
  
//shoes
  fill(101, 78, 38);
beginShape();
  vertex(145, 559);
  bezierVertex(139, 581, 137, 587, 143, 594);
  bezierVertex(155, 600, 165, 590, 162, 559);
  bezierVertex(162, 554, 164, 550, 164, 546);
  bezierVertex(158, 552, 147, 552, 142, 546);
  bezierVertex(142, 551, 143, 556, 145, 559);
endShape();
  
   push();
translate(width/2, 0); 
scale(-1, 1);          
translate(-width/2, 0); 
beginShape();
  vertex(145, 559);
  bezierVertex(139, 581, 137, 587, 143, 594);
  bezierVertex(155, 600, 165, 590, 162, 559);
  bezierVertex(162, 554, 164, 550, 164, 546);
  bezierVertex(158, 552, 147, 552, 145, 546);
  bezierVertex(144, 551, 146, 556, 145, 559);
endShape();
pop();
  
  
}

  
//HEAD
  eye(255,255,255,200,100,100);
  eye(102, 204, 255, 200, 100, 50);
  eye(0,0,0,200,100,30);
  eye(255, 255, 255, 191, 90, 10);
 
 
function eye(r,g,b,x,y,w){
  fill(r,g,b);
  stroke(0);
  strokeWeight(1);
  circle(x,y,w);
}

  
}