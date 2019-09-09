let bg = 255; 
let extraCanvas;


function setup() {
  createCanvas(500, 500);
  extraCanvas = createGraphics(500, 500);
  extraCanvas.clear();


}


function draw() {
  background(bg);
  stroke('#17111D');
    
if (mouseIsPressed === true) {
    let val = 20.0;
    for (let a = 0; a < 100; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      extraCanvas.noStroke();
      extraCanvas.fill(0,0,0,20);
      extraCanvas.ellipse(mouseX + yoff, mouseY + xoff, val, val);
    } 
}
    
    image(extraCanvas, 0, 0); 
}


function keyTyped() {
  if (key === 'h') {
    bg = loadImage('ima/imah.jpg');
  } else if (key === 'a') {
    bg = loadImage('ima/imaa.jpg');
  } else if (key === 'm') {
    bg = loadImage('ima/imam.jpg');
  } else if (key === 'b') {
    bg = loadImage('ima/imab.jpg');
  } else if (key === 'u') {
    bg = loadImage('ima/imau.jpg');
  } else if (key === 'r') {
    bg = loadImage('ima/imar.jpg');
  } else if (key === 'g') {
    bg = loadImage('ima/imag.jpg');
  } else if (key === 'e') {
    bg = loadImage('ima/imae.jpg');
  } else if (key === 'f') {
    bg = loadImage('ima/imaf.jpg');
  } else if (key === 'o') {
    bg = loadImage('ima/imao.jpg');
  } else if (key === 'n') {
    bg = loadImage('ima/iman.jpg');
  } else if (key === 't') {
    bg = loadImage('ima/imat.jpg');
  } else if (key === 's') {
    bg = loadImage('ima/imas.jpg');
  } else if (key === 'i') {
    bg = loadImage('ima/imai.jpg');
  } else if (key === 'v') {
    bg = loadImage('ima/imav.jpg');
  }
    
}





