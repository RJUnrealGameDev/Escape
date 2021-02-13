
var character, imgChar;

var winBar;

var back, imgBack;

var gameOver, imgGameOver;

var soldier1,soldier2,soldier3,soldier4,soldier5, imgsoldier1,imgsoldier2,imgsoldier3,imgsoldier4,imgsoldier5;
var soldierSiteArea1,soldierSiteArea2,soldierSiteArea3,soldierSiteArea4,soldierSiteArea5;

function preload() {
	imgBack = loadImage("Back.jpg");
	imgChar = loadImage("Character.png");
	imgsoldier1 = loadImage("SoldierBack.png");
	imgsoldier2 = loadImage("SoldierFront.png");
	imgsoldier3 = loadImage("SoldierFront.png");
	imgGameOver = loadImage("GameOver.png");
}

function setup() {
	createCanvas(1200,720);

	back = createSprite(600,360,1200,72);
	
	character = createSprite(900,620,30,30);
	winBar = createSprite(70,70,70,70);
	soldier1 = createSprite(600,360,70,70);
	soldier2 = createSprite(80,640,70,70);
	soldier3 = createSprite(1120,640,70,70);
	gameOver = createSprite(600,360,1200,720);

	soldierSiteArea1 = createSprite(soldier1.x,soldier1.y + 100,300,600);
	soldierSiteArea2 = createSprite(soldier2.x,soldier2.y,100,1500);
	soldierSiteArea3 = createSprite(soldier3.x,soldier3.y,100,1100);

	winBar.shapeColor = "white";

	back.addImage("images",imgBack);
	character.addImage("character",imgChar);
	soldier1.addImage("soldier",imgsoldier1);
	soldier2.addImage("soldier",imgsoldier2);
	soldier3.addImage("soldier",imgsoldier3);
	gameOver.addImage("imgBack",imgGameOver);
}

function draw() {
	background("lightblue");

	back.scale = 2;
	character.scale = 0.2;
	soldier1.scale = 0.3;
	soldier2.scale = 0.3;
	soldier3.scale = 0.3;

	if(keyWentDown("w")){
		character.velocityY = -3;
	} else if(keyWentDown("s")){
		character.velocityY = 3;
	} else if(keyWentDown("a")){
		character.velocityX = -3;
	} else if(keyWentDown("d")){
		character.velocityX = 3;
	}

	if(keyWentUp("w")){
		character.velocityY = 0;
	} else if(keyWentUp("s")){
		character.velocityY = 0;
	} else if(keyWentUp("a")){
		character.velocityX = 0;
	} else if(keyWentUp("d")){
		character.velocityX = 0;
	}

	character.collide(soldier1);

	gameOver.visible = false;

	if(character.isTouching(soldierSiteArea1) || character.isTouching(soldierSiteArea2) || 
	character.isTouching(soldierSiteArea3)){
		gameOver.visible = true;

		if(keyWentDown("w")){
			character.velocityY = 0;
		} else if(keyWentDown("s")){
			character.velocityY = 0;
		} else if(keyWentDown("a")){
			character.velocityX = 0;
		} else if(keyWentDown("d")){
			character.velocityX = 0;
		}
	
		if(keyWentUp("w")){
			character.velocityY = 0;
		} else if(keyWentUp("s")){
			character.velocityY = 0;
		} else if(keyWentUp("a")){
			character.velocityX = 0;
		} else if(keyWentUp("d")){
			character.velocityX = 0;
		}
	}

	if(character.isTouching(winBar)){
		var win = createSprite(600,360,800,600);
		win.shapeColor = "black";
		fill("white");
		textFont("Agency FB");
		textSize(30);
		text("You Won"), 20, 670;
	}

	soldierSiteArea1.visible = false;
	soldierSiteArea2.visible = false;
	soldierSiteArea3.visible = false;

	drawSprites();

	fill("white");
	textFont("Agency FB");
	textSize(30);
	text("Reach the square to win", 20, 670);
	text("Tip: Don't get close to enemies!", 20, 700);
}
