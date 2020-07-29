// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var tank;
var ball;
function setup() {

    var canvas = createCanvas(1200,400);

    tank = new Tanker();
    ball = new Cannon();
}

function draw() {

tank.display();
ball.display();



}


//function keyReleased() {
    // Call the shoot method for the cannon.
//}