
var anim,normal,objet;
var myColor;
var framedelay = 6;


function preload() {

  anim_base = loadAnimation("anim/default/eponge01.png","anim/default/eponge03.png");

}

function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  myColor = '#fe5d26';
  background(myColor);
  anim_base.frameDelay = framedelay;

  objet = createSprite(40, 20);

  objet.addAnimation("default", anim_base);
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
      //window.open('http://capitalc.amsterdam/members','_blank');
  }

}

function draw() {

  background(myColor);
   drawSprites();
  //
  objet.velocity.x = (mouseX - objet.position.x ) * 0.0;
  objet.velocity.y = (mouseY - objet.position.y ) * 0.0;

}

function mousePressed() {

}

function objettonClicked(){

}

function resize(){
  //console.log("resize");
}
