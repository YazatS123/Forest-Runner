var level = 0;
var preLevel = 0;
var obstacleTypes = [];
var entry;
var rand;
var canvas;
function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  entry = new Story;
}
function draw() {
  background(255,255,255);
  if(preLevel != level){
    levelTypeSet();
    rand = Math.round(random(0, obstacleTypes.length - 1));
    console.log(rand);
    console.log(obstacleTypes.length);
    preLevel = level;
  }
  drawSprites();
  entry.display();
}