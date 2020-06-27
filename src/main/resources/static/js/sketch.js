//Este código asume que las librerías de P5.js ya están cargadas.
//Esta función se ejecuta una sola vez al inicio del script.
let circles = [];
function setup() {
  createCanvas(640, 480);
}

function posX(){
    return mouseX;
    
}

function posY(){
    return mouseY;
    
}

function setObtainCircles(circleList){
   circles = circleList;
}

function clean(){
    this.circles = [];
}

// Esta función se ejecuta repetidas veces indefinidamente.
function draw() {
    
  if (mouseIsPressed === true) {
    fill(0,0,0);
  }
  if (mouseIsPressed === false) {
    fill(255,255,255);
  }
    for (let i = 0; i < circles.length; i++) {
        ellipse(circles[i].posx, circles[i].posy, 20, 20);
    }
  
}