
var anim,normal,objet;
var myColor;
var framedelay = 6;
var ctx,canvas,offsetX,offsetY;
var rects;
var areas = [];


function preload() {

  anim_base = loadAnimation("anim/full/econome_00.png","anim/full/econome_02.png");
  anim_1 = loadAnimation("anim/full/econome_24.png");
  anim_2 = loadAnimation("anim/full/econome_23.png");
  anim_3 = loadAnimation("anim/full/econome_22.png");
  anim_4 = loadAnimation("anim/full/econome_21.png");
  anim_5 = loadAnimation("anim/full/econome_20.png");
  anim_6 = loadAnimation("anim/full/econome_19.png");
  anim_7 = loadAnimation("anim/full/econome_18.png");
  anim_8 = loadAnimation("anim/full/econome_17.png");
  anim_9 = loadAnimation("anim/full/econome_15.png");
  anim_10 = loadAnimation("anim/full/econome_14.png");
  anim_11 = loadAnimation("anim/full/econome_13.png");
  anim_12 = loadAnimation("anim/full/econome_12.png");
  anim_13 = loadAnimation("anim/full/econome_11.png");
  anim_14 = loadAnimation("anim/full/econome_10.png");
  anim_15 = loadAnimation("anim/full/econome_09.png");

}

function setup() {

  createCanvas(innerWidth,innerHeight);
  // canvas = document.getElementById("defaultCanvas0");
  // ctx = canvas.getContext("2d");

  myColor = '#89891a';
  background(myColor);


  initAnimations();
  //initGrid();
  //initCurve();
  initVectors();

}

function initAnimations(){

  anim_base.frameDelay = framedelay;

  object = createSprite(innerWidth/2, innerHeight/2);
  object.addAnimation("default",anim_base);
  object.addAnimation("anim_1", anim_1);
  object.addAnimation("anim_2", anim_2);
  object.addAnimation("anim_3", anim_3);
  object.addAnimation("anim_4", anim_4);
  object.addAnimation("anim_5", anim_5);
  object.addAnimation("anim_6", anim_6);
  object.addAnimation("anim_7", anim_7);
  object.addAnimation("anim_8", anim_8);
  object.addAnimation("anim_9", anim_9);
  object.addAnimation("anim_10", anim_10);
  object.addAnimation("anim_11", anim_11);
  object.addAnimation("anim_12", anim_12);
  object.addAnimation("anim_13", anim_13);
  object.addAnimation("anim_14", anim_14);
  object.addAnimation("anim_15", anim_15);


}

function draw() {

  background(myColor);



  drawSprites();
  //drawGrid();
  //drawCurve();
  drawVectors();

  // for(var i = 0; i<areas.length ; i++){
  //   var mybtn = areas[i];
  //   mybtn.draw();
  // }


  //
  // object.velocity.x = (mouseX - object.position.x ) * 0.0;
  // object.velocity.y = (mouseY - object.position.y ) * 0.0;


  object.onMouseOver = function() {

 }

 object.onMouseOut = function() {

 }

 object.onMousePressed = function(){

 }

}
var vector;
function initVectors(){
  vector = new VectorObj();
}

function drawVectors(){

  translate(innerWidth/2 , innerHeight/2);
  var translateX = -85;
  var translateY = -110;
  translate(translateX, translateY);

  xOffset = innerWidth/2 + translateX;
  yOffset = innerHeight/2 + translateY;
  mx = mouseX - xOffset;
  my = mouseY - yOffset;

  vector.display();

}

var t;
var ind = 6;
var nextPoint = false;
var px = [14,16, 18, 20, 24, 26, 30, 34, 38, 42, 46,  50,  54,  58,  62,  66,  70,  110, 130, 140, 136, 133, 130, 127, 124, 121, 118, 115, 112, 109 ];
var py = [0 ,11, 22, 33, 44, 55 ,66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 180, 250, 250, 170, 159, 148, 137, 126, 115, 104, 93,  82,  71,  60 ];
var tanx, tany;

function VectorObj(){
  this.x1 = px[ind];
  this.y1 = py[ind];
  this.x2 = px[ind+1];
  this.y2 = py[ind+1];




  this.cx = px[7];
  this.cy = py[7];
  this.cd = 60;

  this.display = function(){

    noFill();
    stroke(0,0,255);
    beginShape();
      for(var i = 0; i < px.length; i++){
        vertex(px[i], py[i]);
      }
    endShape();
    fill(0,0,255);
    for(var i = 0; i < px.length; i++){
      ellipse(px[i], py[i],5,5);
    }
    //noStroke();
    stroke(255,200);
    fill(255,100);
    line(this.cx, this.cy, mx, my);
    ellipse(this.cx, this.cy, this.cd, this.cd);

    // for (var i = 0; i < 10; i++) {
    //   var inc = i/10;
    //   var x = lerp(this.x1, this.x2, inc);
    //   var y = lerp(this.y1, this.y2, inc);
    //   fill(255);
    //   ellipse(x, y, 5, 5);
    // }




  }

  this.onMove = function(){
    var d = dist(mx,my,this.cx,this.cy);
    if(d < this.cd/2){
      cursor('grabbing');
    }else{
    cursor('default'); }

  }

  this.onPress = function(){
    var d = dist(mx,my,this.cx,this.cy);
    if(d < this.cd/2){
      hasHit = true;
    }
  }


  this.onDrag = function(){



    // var d = dist(mx,my,this.cx,this.cy);
    // if(d < this.cd/2){
    //   hasHit = true;
    // }else{
    //   hasHit = false;
    // }

    //if(hasHit){

    if(hasHit){



      //
      // if(this.y1 < this.y2 && my < this.y1 ){
      //   t = 0;
      // }
        //console.log("t: "+ t);

      if(t == 1 && ind < px.length){
          if(ind == px.length-1){
            ind = 0;
          }else{
            ind++;
          }

          this.x1 = px[ind];
          this.y1 = py[ind];
          if(ind < px.length - 1){
            this.x2 = px[ind+1];
            this.y2 = py[ind+1];
          }else if(ind == px.length - 1) {
            this.x2 = px[0];
            this.y2 = py[0];
          }

          console.log("up " + ind);

      } else if(t == 0 && ind >= 0){

        if(ind == 0){

          this.x1 = px[px.length - 1];
          this.y1 = py[px.length - 1];
          this.x2 = px[0];
          this.y2 = py[0];
          ind = px.length - 1;

        }else{
          ind--;
          this.x1 = px[ind];
          this.y1 = py[ind];
          this.x2 = px[ind+1];
          this.y2 = py[ind+1];
        }


        console.log("down " + ind);
      }
      //console.log(ind+"/"+ px.length);

      // var valueX = map(mx, this.x1, this.x2, 0, 1);
      // var valueY = map(my, this.y1, this.y2, 0, 1);

      var deltaX = this.x2 - this.x1;
      var deltaY = this.y2 - this.y1;

      var xa = mx;
      var ya = my;
      var xb = this.x1;
      var yb = this.y1;
      var xc = this.x2;
      var yc = this.y2;

      tanx = (( xb * yc - xc * yb ) * (yc - yb) - (ya * (yc-yb) - xa * (xb-xc)) * (xb-xc)) / ((xb-xc)*(xb-xc) + (yc-yb)*(yc-yb));
      tany = (( xb * yc - xc * yb ) * (xb - xc) + (ya * (yc-yb) - xa * (xb-xc)) * (yc-yb)) / ((xb-xc)*(xb-xc) + (yc-yb)*(yc-yb));

        var valueX = map(tanx, this.x1, this.x2, 0, 1);
        var valueY = map(tany, this.y1, this.y2, 0, 1);



      console.log("deltaX: "+deltaX +" deltaY "+ deltaY);
      if(this.x1 == this.x2){
        t = valueY;
      }else if(this.y1 == this.y2){
       t = valueX;
     }else{
       t = (valueX + valueY) / 2 ;
      }
      console.log(t);
     console.log("valx: "+valueX+" / valy: "+ valueY);
     //t = valueY;

     //console.log("tanx: "+tanx+" / tany: "+ tany);
     //console.log(	atan2(this.x2, this.y2));



      t = constrain(t, 0, 1);

      this.cx = lerp(this.x1, this.x2, t);
      this.cy = lerp(this.y1, this.y2, t);
      var angleDeg = (Math.atan2(my - this.y2, my - this.x2) * 180 / Math.PI) + 180;
      // var finalVal = parseInt( angleDeg / 45);
      console.log(angleDeg);
      console.log(	atan2(this.y1 - this.y2, this.x1 - this.x2));




      console.log(ind);

      if(ind == 0){
        object.changeAnimation("anim_1");
      }else if(ind == 1){
        object.changeAnimation("anim_2");
      }else if(ind == 2){
        object.changeAnimation("anim_3");
      }else if(ind == 3){
        object.changeAnimation("anim_4");
      }else if(ind == 4){
        object.changeAnimation("anim_5");
      }else if(ind == 5){
        object.changeAnimation("anim_6");
      }else if(ind == 6){
        object.changeAnimation("anim_7");
      }else if(ind == 7){
        object.changeAnimation("default");
      }else if(ind == 8){
        object.changeAnimation("anim_9");
      }else if(ind == 9){
        object.changeAnimation("anim_10");
      }else if(ind == 10){
        object.changeAnimation("anim_11");
      }else if(ind == 11){
        object.changeAnimation("anim_12");
      }else if(ind == 12){
        object.changeAnimation("anim_13");
      }else if(ind == 13){
        object.changeAnimation("anim_14");
      }else if(ind == 14){
        object.changeAnimation("anim_15");
      }else if(ind == 15){
        object.changeAnimation("anim_15");
      }else if(ind == 16){
        object.changeAnimation("anim_1");
      }else if(ind == 17){
        object.changeAnimation("anim_2");
      }else if(ind == 18){
        object.changeAnimation("anim_3");
      }else if(ind == 19){
        object.changeAnimation("anim_4");
      }else if(ind == 20){
        object.changeAnimation("anim_5");
      }else if(ind == 21){
        object.changeAnimation("anim_6");
      }else if(ind == 22){
        object.changeAnimation("anim_7");
      }else if(ind == 23){
        object.changeAnimation("anim_default");
      }else if(ind == 24){
        object.changeAnimation("anim_8");
      }else if(ind == 25){
        object.changeAnimation("anim_9");
      }else if(ind == 26){
        object.changeAnimation("anim_10");
      }else if(ind == 27){
        object.changeAnimation("anim_11");
      }else if(ind == 28){
        object.changeAnimation("anim_12");
      }else if(ind == 29){
        object.changeAnimation("anim_13");
      }




}

  }

  this.onRelease = function(mx,my){
    hasHit = false;

  }
}


var curve;
function initCurve(){
  curve = new CurveObj();
}


function drawCurve(){
  translate(innerWidth/2 , innerHeight/2);
  var translateX = -85;
  var translateY = -110;
  translate(translateX, translateY);

  xOffset = innerWidth/2 + translateX;
  yOffset = innerHeight/2 + translateY;
  mx = mouseX - xOffset;
  my = mouseY - yOffset;

  curve.display();

}





var cposx, cposy;
function CurveObj(){

  // this.cx = cx;
  // this.cy = cy;
  // this.cd = cd;
  this.x1 = 20;
  this.y1 = 0;
  this.x4 = 75;
  this.y4 = 180;
  this.x2 = 30;
  this.y2 = 45;
  this.x3 = 70;
  this.y3 = 165;

  var hasHit = false;
  var tPoints = [0, 6, 12, 18, 24,  30, 35, 40, 48, 56, 64, 72, 80, 88, 100];

  var startx = bezierPoint(this.x1, this.x2, this.x3, this.x4, tPoints[7]/100);
  var starty = bezierPoint(this.y1, this.y2, this.y3, this.y4, tPoints[7]/100);

  this.cx = startx;
  this.cy = starty;
  this.cd = 60;

  this.display = function(){
    //noStroke();
    stroke(255,200);
    noFill();
    //line(this.x1,this.y1, this.x4, this.y4);
    bezier(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    fill(255,150);
    ellipse(this.cx, this.cy, this.cd, this.cd);
    for (var i = 0; i < tPoints.length; i++) {
      var t = tPoints[i]/100;
      var x = bezierPoint(this.x1, this.x2, this.x3, this.x4, t);
      var y = bezierPoint(this.y1, this.y2, this.y3, this.y4, t);
      fill(255);
      ellipse(x, y, 5, 5);
    }

    // var x = bezierPoint(x1, x2, x3, x4, 0.5);
    // var y = bezierPoint(y1, y2, y3, y4, 0.5);
    // ellipse(x, y, 20, 20);

  }

  this.onMove = function(){
    var d = dist(mx,my,this.cx,this.cy);
    if(d < this.cd/2){
      cursor('grabbing');
    }else{
    cursor('default'); }

    // console.log("mx:"+ mx+"/ my:"+my);
    // var valueX = map(mx, 0, 100, 0, 1);
    // var valueY = map(my, 0, 220, 0, 1);
    //   console.log("valx:"+ valueX+"/ valy:"+valueY);
    // this.cx = bezierPoint(this.x1, this.x2, this.x3, this.x4, valueY);
    // this.cy = bezierPoint(this.y1, this.y2, this.y3, this.y4, valueY);

  }

  this.onPress = function(){
    var d = dist(mx,my,this.cx,this.cy);
    if(d < this.cd/2){
      hasHit = true;
    }

  cposx = this.x;
  cposy = this.cy;
  }


  this.onDrag = function(){

    // var d = dist(mx,my,this.cx,this.cy);
    // if(d < this.cd/2){
    //   hasHit = true;
    // }else{
    //   hasHit = false;
    // }
    if(hasHit && my <= this.y4 && my >= this.y1 && mx <= this.x4 && mx >= this.x1 ){


      var valueX = map(mx, this.x1, this.x4, 0, 1);
      var valueY = map(my, this.y1, this.y4, 0, 1);
      var t = (valueX + valueY)/2;
      console.log(t);
      if(t >= 0 && t<= 1){
        this.cx = bezierPoint(this.x1, this.x2, this.x3, this.x4, t);
        this.cy = bezierPoint(this.y1, this.y2, this.y3, this.y4, t);
      }

      var v = parseInt(t*100);


      console.log(v);

      if(v >= tPoints[0] && v < tPoints[1]){
        object.changeAnimation("anim_1");
      }else if(v >= tPoints[1] && v < tPoints[2]){
        object.changeAnimation("anim_2");
      }else if(v >= tPoints[2] && v < tPoints[3]){
        object.changeAnimation("anim_3");
      }else if(v >= tPoints[3] && v < tPoints[4]){
        object.changeAnimation("anim_4");
      }else if(v >= tPoints[4] && v < tPoints[5]){
        object.changeAnimation("anim_5");
      }else if(v >= tPoints[5] && v < tPoints[6]){
        object.changeAnimation("anim_6");
      }else if(v >= tPoints[6] && v < tPoints[7]){
        object.changeAnimation("anim_7");
      }else if(v >= tPoints[7] && v < tPoints[8]){
        object.changeAnimation("default");
      }else if(v >= tPoints[8] && v < tPoints[9]){
        object.changeAnimation("anim_9");
      }else if(v >= tPoints[9] && v < tPoints[10]){
        object.changeAnimation("anim_10");
      }else if(v >= tPoints[10] && v < tPoints[11]){
        object.changeAnimation("anim_11");
      }else if(v >= tPoints[11] && v < tPoints[12]){
        object.changeAnimation("anim_12");
      }else if(v >= tPoints[12] && v < tPoints[13]){
        object.changeAnimation("anim_13");
      }else if(v >= tPoints[13] && v < tPoints[14]-3){
        object.changeAnimation("anim_14");
      }else if(v <= tPoints[14] && v >= tPoints[14]-3){
        object.changeAnimation("anim_15");
      }
    }
  }

  this.onRelease = function(mx,my){
    hasHit = false;

  }

}


var grid = [];
var sizeW = 45;
var sizeH = 15;
var col = 2;
var row = 15;
var mid = 60;
var index;

function initGrid(){
  index = 0;
  //translate(innerWidth/2 , innerHeight/2);
  for(var i=0; i<col; i++){
    for(var j=0; j<row; j++){
      grid.push(new GridObj(i*(sizeW+mid) + (j*5), j*sizeH , index));
      index++;
    }
  }
}

var xOffset, yOffset, mx, my;
function drawGrid(){

//  rectMode(CENTER);

  translate(innerWidth/2 , innerHeight/2);
  //rotate(-PI/12.0);
  //ellipse(0,0,20,20);
  var translateX = -0.9  * (col) * sizeW -(mid/2);
  var translateY = -1.15 * (row/2) * sizeH;
  translate(translateX, translateY);

  xOffset = innerWidth/2 + translateX;
  yOffset = innerHeight/2 + translateY;

  mx = mouseX - xOffset;
  my = mouseY - yOffset;

  for(var i=0; i<grid.length; i++){
    grid[i].display();
  }
}





var firstIndex = 6;
var lastIndex = 6;
var isMoving = true;
var hasMoved = true;
function GridObj(x, y, index){
  this.x = x;
  this.y = y;
  this.index = index;
  this.w = sizeW;
  this.h = sizeH;
  this.col = color(255,0);

  this.display = function(){
    //noStroke();
    stroke(255,200);
    fill(255,0);
    rect(this.x, this.y, this.w, this.h);
    fill(255);
    textSize(12);
    var s = String(this.index);
    text(s, this.x + 10, this.y + 15);
  }

  this.onPress = function(){
    if (mx >= this.x && my >= this.y && mx < this.x + this.w && my < this.y + this.h) {
      console.log("lastindex: " +lastIndex + " / index:" + this.index);
      if (this.index <= lastIndex + 1 && this.index >= lastIndex - 1 || this.index == lastIndex ){
        isMoving = true;
      }else{
        isMoving = false;
      }
      console.log(isMoving);
      //firstIndex = this.index;
    }

  }

  this.onDrag = function(){


    if (mx >= this.x && my >= this.y && mx < this.x + this.w && my < this.y + this.h) {
      //this.col = color(255,0,255);
      console.log(this.index);
    //  console.log("/ first: "+firstIndex +"/ last: "+lastIndex)
      //console.log(isMoving);
      if(isMoving){

      switch(index) {
        case 0:
            object.changeAnimation("anim_1");
          break;
        case 1:
            object.changeAnimation("anim_2");
          break;
        case 2:
            object.changeAnimation("anim_3");
          break;
        case 3:
            object.changeAnimation("anim_4");
          break;
        case 4:
            object.changeAnimation("anim_5");
          break;
        case 5:
            object.changeAnimation("anim_6");
          break;
        case 6:
            object.changeAnimation("anim_7");
          break;
        case 7:
            object.changeAnimation("default");
          break;
        case 8:
              object.changeAnimation("anim_9");
          break;
        case 9:
              object.changeAnimation("anim_10");
          break;
        case 10:
            object.changeAnimation("anim_11");
          break;
        case 11:
            object.changeAnimation("anim_12");
          break;
        case 12:
            object.changeAnimation("anim_13");
          break;
        case 13:
            object.changeAnimation("anim_14");
          break;
        case 14:
            object.changeAnimation("anim_15");
          break;
        case 15:
            object.changeAnimation("anim_16");
          break;
        }

        hasMoved = true;
      }

    }
  }

  this.onRelease = function(){
    if (mx >= this.x && my >= this.y && mx < this.x + this.w && my < this.y + this.h && hasMoved) {
      lastIndex = this.index;
      isMoving = false;
      hasMoved = false;
    }
  }


}



function mouseDragged(){



  // for(var i=0; i<grid.length; i++){
  //   grid[i].onDrag();
  // }
  // curve.onDrag();
  vector.onDrag();
}

function mouseMoved(){

  //curve.onMove();
  vector.onMove();
}

function mousePressed(){

  // for(var i=0; i<grid.length; i++){
  //   grid[i].onPress();
  // }
  // curve.onPress();
  vector.onPress();
}

function mouseReleased() {

  // for(var i=0; i<grid.length; i++){
  //   grid[i].onRelease();
  // }
  // curve.onRelease();
  vector.onRelease();
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
