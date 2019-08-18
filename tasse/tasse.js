
var anim,normal,objet;
var myColor;
  

function preload() {
  
  normal = loadAnimation("img/tasse01.png","img/tasse02.png","img/tasse03.png");
  
}

function setup() {
 
  createCanvas(window.innerWidth, window.innerHeight);
  myColor = '#ffcccc';
  background(myColor);


  objet = createSprite(40, 20);
  objet.addAnimation("default",normal);
  objet.scale = 1;
  objet.position.x = innerWidth/2;
  objet.position.y= innerHeight/2;
  objet.velocity.y = 0.5;
  
  mouseX = window.innerWidth/2;
  mouseY = window.innerHeight/2;

   objet.onMouseOver = function() {
   
  }

  objet.onMouseOut = function() {
   
  }
  
  objet.onMousePressed = function(){    
     
  }

}

function draw() {

  background(myColor);
  drawSprites();

  objet.velocity.x = (mouseX - objet.position.x ) * 0.0;
  objet.velocity.y = (mouseY - objet.position.y ) * 0.0;

}

function mousePressed() {

}

function objettonClicked(){

}

function resize(){
  console.log("resize");
}


