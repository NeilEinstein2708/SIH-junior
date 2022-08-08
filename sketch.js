var form,system,code,security;
var score=0;

function preload() {
 
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(0);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 5) {
    clear()
    background(255)
    fill("black")
    textSize(40);
    text("Excellent, Perfect Score, 5/5",250, 200);
  }

  drawSprites()
}