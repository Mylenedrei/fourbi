
var anim,normal,objet;
var myColor;
var press = false;
var hasArrived = true;
var shakeOn = false;
var anse;
var startPosX, startPosY;
let inc = 0;
let sounds = [];


function preload() {

  pot_anim = loadAnimation("pot/pot_00.png","pot/pot_02.png");
  anse_anim = loadAnimation("anse/anse_00.png","anse/anse_02.png");
  eclair = loadAnimation("eclair/eclair_0000.png","eclair/eclair_0003.png");
  shake_anim = loadAnimation("shake/shake_00.png","shake/shake_06.png");
  //shake_anim = loadAnimation("vacille/vacille_00.png","vacille/vacille_08.png");
  sound_magnet = loadSound('sound/eclair.mp3');
  sound_glue = loadSound('sound/coller.mp3');
  ceramic0 = loadSound('sound/ceramic_0.mp3');
  ceramic1 = loadSound('sound/ceramic_1.mp3');
  ceramic2 = loadSound('sound/ceramic_2.mp3');
  ceramic3 = loadSound('sound/ceramic_3.wav');
  sounds = [ceramic0,ceramic1,ceramic2,ceramic3];
}

function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  myColor = '#ffcccc';
  background(myColor);
  pot_anim.frameDelay = 6;

  anse_anim.frameDelay = 6;
  eclair.frameDelay = 6;
  shake_anim.frameDelay = 6;
  startPosX = innerWidth/2 + 108;
  startPosY = innerHeight/2 + 36;


  anse = new Anse();
  objet_pot = createSprite(innerWidth/2, innerHeight/2);
  objet_pot.addAnimation('start', pot_anim);

  objet_pot.addAnimation('shake', shake_anim);
  //shake_anim.looping = false;


  // shake = createSprite(innerWidth/2, innerHeight/2);
  // shake.addAnimation("default", shake_anim);

  anse.init(startPosX, startPosY);

}


function draw() {

  background(myColor);
  drawSprites();

  anseAnim.onMousePressed= function(){
    press = true;

  };

  anseAnim.onMouseReleased= function(){
    press = false;

  };

  //objet.velocity.x = (mouseX - objet.position.x ) * 0.0;
  //objet.velocity.y = (mouseY - objet.position.y ) * 0.0;


if(press){
  anse.lightning(true);
  anse.display(mouseX,mouseY);
  hasArrived = false;

 } else {

   //console.log(objet_pot.animation.getFrame());
   anse.lightning(false);

   anseAnim.velocity.x = (startPosX - anseAnim.position.x ) * 0.5;
   anseAnim.velocity.y = (startPosY - anseAnim.position.y ) * 0.5;

    if(anseAnim.position.x < startPosX + 20 && anseAnim.position.y < startPosY + 20 && !hasArrived){
      r = int(random(4));

      console.log(r +" / "+sounds[r]);
      sounds[r].play();
      //sound_bowl.play();
      anseAnim.visible = false;
      objet_pot.changeAnimation('shake');
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


var anseAnim, eclairTop, eclairBottom;

class Anse{

  init(startX,startY){

    this.x = startX;
    this.y = startY;

    this.beginPos = createVector(this.x, this.y);
    this.eTop = createVector(this.beginPos.x-55, this.beginPos.y + 45);
    this.eBottom = createVector(this.beginPos.x-50, this.beginPos.y - 45);

    anseAnim = createSprite(this.beginPos.x, this.beginPos.y);
    anseAnim.addAnimation("default",anse_anim);
    eclairTop = createSprite(this.eTop.x, this.eTop.y);
    eclairTop.addAnimation("default",eclair);
    eclairBottom = createSprite(this.eBottom.x, this.eBottom.y);
    eclairBottom.addAnimation("default",eclair);

  }

  display(newX,newY){
      this.newX = newX;
      this.newY = newY;

      anseAnim.position.x = this.newX;
      anseAnim.position.y = this.newY;
      eclairTop.position.x = this.newX - 55;
      eclairTop.position.y = this.newY + 45;
      eclairBottom.position.x = this.newX - 50;
      eclairBottom.position.y = this.newY - 45

  }

  lightning(isVisible){
    this.isVisible = isVisible;
    eclairTop.visible = this.isVisible;
    eclairBottom.visible = this.isVisible;
  }

}

function Group(){

}

function mousePressed() {


}

function objettonClicked(){

}

function resize(){
  console.log("resize");
}
