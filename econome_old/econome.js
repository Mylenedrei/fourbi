
var anim,normal,objet;
var myColor;
var framedelay = 6;
var ctx,canvas,offsetX,offsetY;
var rects;



function preload() {

  anim_base = loadAnimation("anim/full/econome_00.png","anim/full/econome_02.png");

}

function setup() {

  createCanvas(innerWidth,innerHeight);
  canvas = document.getElementById("defaultCanvas0");
  ctx = canvas.getContext("2d");

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


}

function draw() {

  background(myColor);
  drawSprites();

  clickableArea();
  //
  // object.velocity.x = (mouseX - object.position.x ) * 0.0;
  // object.velocity.y = (mouseY - object.position.y ) * 0.0;


  object.onMouseOver = function() {

 }

 object.onMouseOut = function() {

 }

 object.onMousePressed = function(){

   //handleMouseDown();
   console.log("press");

 }

}

function clickableArea(){


    var size = 50;
    var col = 2;
    var row = 6;

    noFill();
    stroke(255);
    translate(innerWidth/2 , innerHeight/2);
    translate(-(col/2) * size , -(row/2) * size);
    rotate(-PI/12.0);

    ellipse(0,0,50,50);
    //rotate(PI/4.0);
    for(var i=0; i<col; i++){
      for(var j=0; j<row; j++){

        rect(0 + (i*size), 0+(j*size), size,size);
      }
    }


}

// function clickableArea(){
//   canvas = document.getElementById("defaultCanvas0");
//   ctx = canvas.getContext("2d");
//   //var canvasOffset = canvas.offset();
//   offsetX = canvas.offsetLeft;
//   offsetY = canvas.offsetTop;
//   rects = [];
// rects.push({
//     x: innerWidth,
//     y: innerHeight,
//     width: 30,
//     height: 30,
//     fillcolor: "red",
//     isFilled: false
// });
// rects.push({
//     x: innerWidth+30,
//     y: innerHeight+30,
//     width: 30,
//     height: 30,
//     fillcolor: "blue",
//     isFilled: false
// });
// drawRect();
//
// }
//
// function drawRect() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (var i = 0; i < rects.length; i++) {
//         var rect = rects[i];
//         if (rect.isFilled) {
//             ctx.fillStyle = rect.fillcolor;
//             ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
//         }
//         ctx.strokeStyle = "black";
//         ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
//     }
// }
//
// function hit(rect, x, y) {
//     return (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height);
// }
//
// function handleMouseDown() {
//
//     var newMouseX = parseInt(mouseX - offsetX);
//     var newMouseY = parseInt(mouseY - offsetY);
//     for (var i = 0; i < rects.length; i++) {
//         var rect = rects[i];
//         if (hit(rect, newMouseX, newMouseY)) {
//             rect.isFilled = !rect.isFilled;
//         }
//     }
//
//     drawRect();
// }




function mousePressed() {
  console.log("press function");
}



function resize(){
  resizeCanvas(innerWidth, innerHeight);
  cameraReset();

  object.position.x = innerWidth/2;
  object.position.y = innerHeight/2;



}

function cameraReset(){
this.camera.position.x = width/2;
this.camera.position.y = height/2;
}
