
var anim,normal,objet;
var myColor;
var press = false;
var hasArrived = true;
var shakeOn = false;
var anse;
var anse_xoffset
var startPosX, startPosY;
let inc = 0;
let sounds = [];
var framedelay = 6;

var isleft = 1;


function preload() {

  pot_anim = loadAnimation("anim/pot/pot_00.png","anim/pot/pot_02.png");
//  anse_anim = loadAnimation("anse/anse_00.png","anse/anse_02.png");

  anse_attached = loadAnimation("anim/anse_attached/anse03.png","anim/anse_attached/anse05.png");
  anse_top = loadAnimation("anim/anse_rotation/anses_0006.png");
  anse_right_t = loadAnimation("anim/anse_rotation/anses_0008.png");
  anse_right = loadAnimation("anim/anse_right/anse00.png","anim/anse_right/anse05.png");
  anse_right_d = loadAnimation("anim/anse_right_down/anse_rd_00.png","anim/anse_right_down/anse_rd_05.png");
  anse_down = loadAnimation("anim/anse_rotation/anses_0006.png");
  shake_anim = loadAnimation("anim/shake/shake_00.png","anim/shake/shake_06.png");


  soundFormats('mp3', 'ogg');
  sound_magnet = loadSound(['sound/electricity.mp3' , 'sound/electricity.ogg'] );
  ceramic0 = loadSound(['sound/ceramic_0.mp3','sound/ceramic_0.ogg']);
  ceramic1 = loadSound(['sound/ceramic_1.mp3','sound/ceramic_1.ogg']);
  ceramic2 = loadSound(['sound/ceramic_2.mp3','sound/ceramic_2.ogg']);
  ceramic3 = loadSound( ['sound/ceramic_3.mp3', 'sound/ceramic_3.ogg'] );

  sounds = [ceramic0,ceramic1,ceramic2,ceramic3];
}


function setup() {
  cursor('../img/cursor0.png');
  //getAudioContext().resume();

  createCanvas(window.innerWidth, window.innerHeight);
  myColor = '#ffcccc';
  background(myColor);


  pot_anim.frameDelay = framedelay;
  anse_attached.frameDelay = framedelay;
  shake_anim.frameDelay = framedelay;
  anse_right.frameDelay = framedelay;
  anse_right_d.frameDelay = framedelay;

  anse_xoffset = 98;
  startPosX = innerWidth/2 + anse_xoffset;
  startPosY = innerHeight/2 + 36;

  anse = new Anse();
  objet_pot = createSprite(innerWidth/2, innerHeight/2);
  objet_pot.addAnimation('start', pot_anim);
  objet_pot.addAnimation('shake', shake_anim);

  anse.init(startPosX, startPosY);

}



function draw() {


  background(myColor);
  textAlign(CENTER, CENTER);

  text(getAudioContext().state, width/2, height/2);


  drawSprites();

  anseAnim.onMousePressed= function(){
    press = true;
    cursor('../img/cursor4.png');


  };

  anseAnim.onMouseReleased= function(){
    press = false;
    cursor('../img/cursor0.png');

  };

  anseAnim.onMouseOver = function(){
    cursor('../img/cursor1.jpg');
  }

  anseAnim.onMouseOut = function(){
      cursor('../img/cursor0.png');
  }

  //console.log(anseAnim.position.x);


if(press){

  anse.display(mouseX,mouseY);
  //sound_magnet.play();


  var angleDeg = (Math.atan2(mouseY - innerHeight/2, mouseX - innerWidth/2) * 180 / Math.PI) + 180;
  var finalVal = parseInt( angleDeg / 45);
  //console.log( finalVal);
  //console.log(angleDeg);

  if(angleDeg > 337.5 || angleDeg <= 22.5 ){
    //console.log("left");
  //  anseAnim.addAnimation('right', anse_right);
    anseAnim.changeAnimation('right');
    anseAnim.mirrorX(-1);
    isleft = -1;

  }else if(angleDeg > 22.5 && angleDeg <= 67.5 ){
    //console.log("top left");
  //  anseAnim.addAnimation('right top', anse_right_t);
    anseAnim.changeAnimation('right top');
    anseAnim.mirrorX(-1);
    isleft = -1;

  }else if(angleDeg > 67.5 && angleDeg <= 112.5 ){
    //console.log("top ");
  //  anseAnim.addAnimation('top', anse_top);
    anseAnim.changeAnimation('top');
    anseAnim.mirrorX(-1);
    isleft = -1;

  }else if(angleDeg > 112.5 && angleDeg <= 157.5 ){
    //console.log("top right ");
  //  anseAnim.addAnimation('right top', anse_right_t);
    anseAnim.changeAnimation('right top');
    anseAnim.mirrorX(1);
    isleft = 1;

  }else if(angleDeg > 157.5 && angleDeg <= 202.5 ){
    //console.log("right");
    //anseAnim.addAnimation('right', anse_right);
    anseAnim.changeAnimation('right');
    anseAnim.mirrorX(1);
    isleft = 1;

  }else if(angleDeg > 202.5 && angleDeg <= 247.5 ){
    //console.log("down right");
  //  anseAnim.addAnimation('right down', anse_right_d);
    anseAnim.changeAnimation('right down');
    anseAnim.mirrorX(1);
    isleft = 1;

  }else if(angleDeg > 247.5 && angleDeg <= 292.5 ){
    //console.log("down");
    //anseAnim.addAnimation('down', anse_down);
    anseAnim.changeAnimation('down');
    anseAnim.mirrorX(1);
    isleft = 1;

  }else if(angleDeg > 292.5  && angleDeg <= 337.5  ){
    //console.log("down left");
    //anseAnim.addAnimation('right down', anse_right_d);
    anseAnim.changeAnimation('right down');
    anseAnim.mirrorX(-1);
    isleft = -1;
  }

  hasArrived = false;
  startPosX = innerWidth/2 + (anse_xoffset * isleft);


 } else {

   anseAnim.velocity.x = (startPosX - anseAnim.position.x ) * 0.5;
   anseAnim.velocity.y = (startPosY - anseAnim.position.y ) * 0.5;


    if(anseAnim.position.x < startPosX + 10 && anseAnim.position.x > startPosX - 10  && anseAnim.position.y < startPosY + 10 && anseAnim.position.y > startPosY - 10 && !hasArrived){
    //  anseAnim.addAnimation('right', anse_right);
      anseAnim.changeAnimation('default');
      anseAnim.mirrorX(isleft);
      r = int(random(4));
      sounds[r].play();
      anseAnim.visible = false;
      objet_pot.changeAnimation('shake');
      objet_pot.mirrorX(isleft);
      shakeOn = true;
      hasArrived = true;

    }


    if(shakeOn){
      if(objet_pot.animation.getFrame() == objet_pot.animation.getLastFrame() ){
        objet_pot.animation.changeFrame(0);
        shakeOn = false;
      }
    }else{
      anseAnim.visible = true;
      objet_pot.changeAnimation('start');
    }
  }

}

function mousePressed() {
  //userStartAudio();
}


var anseAnim, eclairTop, eclairBottom;

class Anse{

  init(startX,startY){

    this.x = startX;
    this.y = startY;

    this.beginPos = createVector(this.x, this.y);

    anseAnim = createSprite(this.beginPos.x, this.beginPos.y);
    anseAnim.addAnimation('default',anse_attached);

    anseAnim.addAnimation('right', anse_right);
    anseAnim.addAnimation('right top', anse_right_t);
    anseAnim.addAnimation('top', anse_top);
    anseAnim.addAnimation('right down', anse_right_d);
    anseAnim.addAnimation('down', anse_down);

  }

  display(newX,newY){
      this.newX = newX;
      this.newY = newY;

      anseAnim.position.x = this.newX;
      anseAnim.position.y = this.newY;

  }


}

function resize(){
}
