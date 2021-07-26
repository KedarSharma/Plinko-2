const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var c,cimg;

var state = "start";

var score = 0;

var engine,world;

var d = [];
var b = [];

var p = [];
var pl = [];
var pli = [];
var plin = [];
var plink = [];

var divi = [];
var divis = [];

var mTime;

var bleft = 10;

for(var a =0; a<=11;a++){
	divi[a] = "free";
	divis[a] = 100*randomInteger(2,5);
}

function preload(){
	cimg = loadImage("Canon.png");
}

function setup() {

	engine = Engine.create();
	world = engine.world;

	canvas = createCanvas(1200,650);

	c = createSprite(600,30);
	c.addImage(cimg);
	c.scale = 0.03;
	c.velocityX = 0;

	for(var a = 0;a<10;a++){
		b[a] = new Ball(10000,190);
	}

	g1 = new Ground(width/2,1147,2*width,1000,{isStatic : true});

	border1 = new Ground(width/2,-500,2*width,1000,{isStatic : true});
	border2 = new Ground(-500,height/2,1000,2*height,{isStatic : true});
	border4 = new Ground(width+500,height/2,1000,2*height,{isStatic : true});
	
	for(var a = 0;a<=12;a++){
		d[a] = new Ground(100*a,600,10,100);
	}

	for(var a = 0;a<12;a++){
		p[a] = new Plinko(100*a + 50,200);
		pli[a] = new Plinko(100*a + 50,350);
		plink[a] = new Plinko(100*a + 50,500);
	}

	for(var a = 0;a<11;a++){
		pl[a] = new Plinko(100*(a+1),275);
		plin[a] = new Plinko(100*(a+1),425);
	}

	Engine.run(engine);
}

function draw() {

	rectMode(CENTER);

	if(state == "start"){
		background("black");
		textSize(70);
		stroke("red");
		strokeWeight(3);
		fill("yellow");
		text("PLINKO- I",400,65);

		stroke("blue");
		line(395,75,720,75);

		fill("#2c39e0");
		ellipse(15,125,10,10);
		ellipse(15,205,10,10);
		ellipse(15,285,10,10);
		ellipse(15,405,10,10);

		fill("yellow");
		stroke("#000000");
		rect(600,550,600,100);

		fill(255,255,255);
		textSize(50);
		stroke("black");
		text("Press Enter To Play",375,565);

		textSize(40);
		fill("#28F7A4");
		noStroke();
		text("Welcome to Plinko.",30,140);
		text("Use the space bar to drop projectiles from the cannon.",30,220);
		text("Try to maximize your points by dropping the projectile into high \nscoring divisions.",30,300);
		text("The points of each division change randomly after every 10 \nseconds.",30,420);

		if(keyCode == 13){
			state = "play";
			c.velocityX = 10;
			mTime = Math.round(performance.now()/1000);
		}
	}

	if(state == "play"){
		background("#a4f5f5");

		g1.display();

		if(c.x+(c.height*c.scale)/2 >=width){
			c.velocityX = -10;
		}
		if(c.x-(c.height*c.scale)/2 <=0){
			c.velocityX = 10;
		}

		for(var a = 0;a<=12;a++){
			d[a].display();
		}

		for(var a = 0;a<12;a++){
			p[a].display();
			pli[a].display();
			plink[a].display();
		}

		for(var a = 0;a<11;a++){
			pl[a].display();
			plin[a].display();
		}

		for(var a = 0;a<10;a++){
			b[a].display();
		}

		textit();

		launch();

		changePoints();
		
		myFunction0();
		myFunction1();
		myFunction2();
		myFunction3();
		myFunction4();
		myFunction5();
		myFunction6();
		myFunction7();
		myFunction8();
		myFunction9();

		textSize(30);
		fill("black");
		stroke("black");
		strokeWeight(3);
		text("Score : " + score,width/2,50);

		text("Balls left : "+ bleft,800,50);

		drawSprites();

		if(b[9].visibility == "false"){
			setTimeout(function(){
				state = "end"
			},500);
		}

	}
	
	if(state == "end"){
		background("black")
		textSize(60);
		fill("red");
		stroke("red");
		strokeWeight(2);
		text("You scored "+score,400,height/2-25);
	}
}

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function textit(){
    for(var a = 0;a<=11;a++){
        textSize(20);
        fill("black");
		stroke("black");
		strokeWeight(1);
        text(divis[a],100*a+32,570);
    }
}

function changePoints(){
	var time = Math.round(performance.now()/1000);
	if((time-mTime)%10 == 0 && (time-mTime) >0){
		for(var a = 0;a<=11;a++){
			divis[a] = 100*randomInteger(2,5);
		}
	}
	console.log(time-mTime);
}