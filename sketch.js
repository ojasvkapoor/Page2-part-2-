var canvas, backgroundImage , background;
var playB , playBImg
//var database;



 function preload(){
  playBImg = loadImage("playB.png");

  backgroundImage = loadImage("bgg.jpg");
 }
                  
function setup(){
  canvas = createCanvas(windowWidth , windowHeight);
  //database = firebase.database();
  Form = new Form();
 
}


function draw(){
  background(backgroundImage);
  Form.display();

}