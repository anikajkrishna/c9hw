var box;

function setup() {
createCanvas (400,400);
background (51);
box = createSprite(200,200,30,30); 
}

function draw() {

if (keyIsDown (RIGHT_ARROW)) {
background("red");
}

if (key IsDown(LEFT_ARROW)) {
background("blue");
}

if (key IsDown (UP_ARROW)) {
background ("yellow");
}

if (keyIsDown (DOWN_ARROW)) {

background("green");
}

drawSprites();
}
















