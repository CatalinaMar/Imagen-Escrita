//Declaraciones

let pathPoints = []
let startTime = 0.0;
let drawTime = 0.0;

function setup() {
  createCanvas(windowWidth, 700); 
  background(0);

} 

function draw() {
  //declarar el camino
  pathPoints = circlePoints();
  stroke(255,50);
  
 // el retorno y orden
  
  for(let j=0;j<7;j++){
	pathPoints = complexifyPath(pathPoints);
  }

  //camino
    
  stroke(255,15);
  for(let i=0;i<pathPoints.length -1;i++){
    let v1 = pathPoints[i];
    let v2 = pathPoints[i+1];
    line(v1.x,v1.y,v2.x,v2.y);
  }

  textFont('Cormorant Garamond');
  textSize(14);
  noStroke();
  fill(0);
  text('Hola', 120, 120);
  text('Como', 220, 220);
  text('Estas', 320, 320);
    
  textSize(16);
  fill(255);
  textAlign(LEFT);
  text('Haikú', 900, 500);
    
}

function circlePoints() {
  //Porte de la circunferencia
    let r0 = 150;
    let r1 = 100;
  
  //tiempo del recorrido
	let t = ( millis() - startTime )*0.015;
  	let dt = t - drawTime;

    
    //Ubicacion de centro
    let center = createVector(0.1*width, 0.1*height); 
    
    //figura de la orbita
    let  orbit = createVector(cos(6.0*t),sin(6.0*t)).mult(r0) ; 
  	let origin =   p5.Vector.add(center,  createVector(cos(5.0*t),sin(5.0*t)).mult(r0)) ; 
  

    let p1 = p5.Vector.add(center,orbit);
	
  
  	let p = p1.mult(2.0).sub(origin);
  
    return [origin,p];
}


function complexifyPath(pathPoints){
  //create a new path array from the old one by adding new points inbetween the old points
  var newPath = [];
  
  for(var i=0;i<pathPoints.length -1;i++){
    var v1 = pathPoints[i];
    var v2 = pathPoints[i+1];
    var midPoint = p5.Vector.add(v1, v2).mult(0.5);
    var distance =  v1.dist(v2);
    
    //Nivel de distrorcion del pincel en el recorrido
    var standardDeviation = 0.400*distance;
    var v = createVector(randomGaussian(midPoint.x,standardDeviation),randomGaussian(midPoint.y,standardDeviation))
   	append(newPath,v1);
    append(newPath,v);
  }
  
  //No se porque 
  append(newPath,pathPoints[pathPoints.length-1]);
  return newPath;  
}

