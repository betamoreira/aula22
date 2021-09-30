const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var mecanismo, mundo;
var solo;

function setup() {
  var canvas = createCanvas(400, 400);

  mecanismo = Engine.create();
  mundo = mecanismo.world;

  var solo_opcao ={
    isStatic: true
  }

  solo = Bodies.rectangle(200,390,200,20, solo_opcao);

  World.add(mundo,solo);
  
  console.log(solo);
  console.log(solo.position.x);
  console.log(solo.position.y);
}
function draw(){
background(0);

Engine.update(mecanismo);

rectMode(CENTER);
rect(solo.position.x,solo.position.y,400,20);


}