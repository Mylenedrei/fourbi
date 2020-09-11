
var anim,normal,objet;
var myColor;
var framedelay = 6;


function preload() {

  anim_base = loadAnimation("anim/default/econome_00.png","anim/default/econome_02.png");

}

function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  myColor = '#89891a';
  background(myColor);

  anim_base.frameDelay = framedelay;



  object = createSprite(innerWidth/2, innerHeight/2);
  object.addAnimation("default",anim_base);
  // object.position.x = innerWidth/2;
  // object.position.y= innerHeight/2;
  // object.velocity.y = 0.5;
  //
  // mouseX = window.innerWidth/2;
  // mouseY = window.innerHeight/2;

   object.onMouseOver = function() {

  }

  object.onMouseOut = function() {

  }

  object.onMousePressed = function(){
      //window.open('http://capitalc.amsterdam/members','_blank');
  }

}

function draw() {

  background(myColor);
   drawSprites();
  //
  // object.velocity.x = (mouseX - object.position.x ) * 0.0;
  // object.velocity.y = (mouseY - object.position.y ) * 0.0;

}

function mousePressed() {

}

function objettonClicked(){

}

function resize(){
  //console.log("resize");
}
