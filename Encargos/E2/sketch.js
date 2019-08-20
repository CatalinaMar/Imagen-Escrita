// Llamar Constantes
const Y_AXIS = 1;
let b1, b2, c1, c2;

function setup() {
createCanvas(windowWidth, 550)


  // colores
  c1 = color(0, 102, 153);
  c2 = color(6,25,33);

  noLoop();

}

function draw() {
translate(200, 0);
  //fondo
  background('#F4E6BD');
  // Cielo Noche
    setGradient(100, 100, 288, 440, c1, c2, Y_AXIS);

    //Estrellitas
    strokeWeight(3);
    stroke(color(255));
        point(200, 200);
        point(300, 150);
        point(150, 120);
        point(150, 260);
        point(350, 230);
        point(300, 300);
        point(360, 350);
        point(280, 400);
        point(370, 450);
        point(320, 480);


    //Ventanas

    strokeWeight(3);
    stroke(255,179,0);
    line(320, 10, 320, 600);
    line(90, 180, 500, 180);

    //circulos clo

    colorMode(RGB);
  noStroke(255);
let from = color(255, 179, 0,165);
let to = color(255, 78, 0, 165);
colorMode(RGB); // Try changing to HSB.
let interA = lerpColor(from, to, 0.33);
let interB = lerpColor(from, to, 0.66);
fill(from);
ellipse(205, 295, 110, 110)
fill(interA);
ellipse(195, 348, 110, 110)
fill(interB);
ellipse(185, 430, 190, 190)
fill(to);
ellipse(125, 412, 225, 225)

//Lineas Clo


    //espalda

        strokeWeight(2.5);
        stroke(255);
        noFill();
        arc(185, 440, 210, 210, 40, 10.4)

    //Cola
        strokeWeight(3);
        stroke(6,25,33);
        noFill();
        arc(125, 412, 225, 225, HALF_PI, 4.5)
        arc(125, 412, 225, 225, HALF_PI, 4.5)

        strokeWeight(2.5);
        stroke(255);
        noFill();
        arc(110, 325, 45, 45, 4.7, HALF_PI)

        //patas

        strokeWeight(2.5);
        stroke(255);
        line(110, 523, 280, 523);

    //espalda

        strokeWeight(2.5);
        stroke(255);
        noFill();
        arc(120, 313, 75, 75, 12.3, 13.7)

    //Guata

        strokeWeight(2.5);
        stroke(255);
        noFill();
        arc(185, 420, 190, 190, 11.77, 13)

        strokeWeight(2.5);
        stroke(255);
        noFill();
        arc(243, 335, 30, 30, 11.8, 13.7)

    //Pata

        strokeWeight(2.5);
        stroke(255);
        noFill();
        bezier(180, 410, 190, 390, 275, 365, 255, 510);

    //orejas

        strokeWeight(2.5);
        stroke(255);
        noFill();
        strokeJoin(ROUND);
        beginShape();
        vertex(160, 260);
        vertex(200, 220);
        vertex(200, 250);
        endShape();

        strokeWeight(2.5);
        stroke(255);
        noFill();
        strokeJoin(ROUND);
        beginShape();
        vertex(215, 250);
        vertex(245, 220);
        vertex(245, 255);
        endShape();

    //Cara

        stroke(255);
        noFill();
        bezier(190, 284, 200, 276, 210, 276, 218, 284);

        stroke(255);
        noFill();
        bezier(190, 284, 200, 292, 210, 292, 218, 284);

        stroke(255);
        noFill();
        line(202, 292, 202, 276);

        strokeWeight(3);
        stroke(6,25,33);
        noFill();
        bezier(232, 284, 238, 279, 243, 280, 255, 284);

        strokeWeight(2.5);
        stroke(255);
        noFill();
        triangle(220, 295, 225, 303, 230, 295);

        stroke(255);
        noFill();
        bezier(210, 305, 215, 309, 220, 309, 225, 303);
        bezier(225, 303, 230, 309, 235, 309, 240, 305);


}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

    // Gradiente de arriba a abajo
  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }

  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
