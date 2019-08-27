let bg = 255;

function setup() {
  createCanvas(500, 500);


}


function draw() {
 background(bg);
  stroke('#17111D');
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

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
  // uncomment to prevent any default behavior
  // return false;
}