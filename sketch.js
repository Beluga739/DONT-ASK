 var gordan_ramsayIMG,kniveIMG,white_breadIMG,whole_wheat_breadIMG,hamburger_bunsIMG,hotdog_bunsIMG,comment_bubbleIMG,bagutteIMG,briocheIMG;

var gordan_ramsay,knive,comment_bubble;
var white_bread,whole_wheat_bread,hamburger_buns,hotdog_buns,bagutte,brioche;


function preload(){
  gordan_ramsayIMG = loadImage("ASSETS/gordan_ramasy.jpg");
  kniveIMG = loadImage("ASSETS/kinve.jpg");
  white_breadIMG = loadImage("ASSETS/white_bread.jpg");
  whole_wheat_breadIMG = loadImage("ASSETS/whole_wheat_bread.jpg");
  hamburger_bunsIMG = loadImage("ASSETS/hamburger_buns.jpg");
  hotdog_bunsIMG = loadImage("ASSETS/hotdog_buns.jpg");
  comment_bubbleIMG = loadImage("ASSETS/comment_bubble.jpg");
  bagutteIMG = loadImage("ASSETS/bagutte_jpg.jpg");
  briocheIMG = loadImage("ASSETS/brioche.jpg");

  
  
}

function setup() {
  createCanvas(1950, 1000);
  
  gordan_ramsay = createSprite(450,750,10,10);
  gordan_ramsay.addImage(gordan_ramsayIMG);

  white_bread = createSprite(975,500,10,10);
  white_bread.addImage(white_breadIMG);

  knive = createSprite(300,300,10,10);
  knive.addImage(kniveIMG);

  whole_wheat_bread = createSprite(975,500,10,10);
  whole_wheat_bread.addImage(whole_wheat_breadIMG);

  hamburger_buns = createSprite(975,500,10,10);
  hamburger_buns.addImage(hamburger_bunsIMG);

  hotdog_buns = createSprite(975,500,10,10);
  hotdog_buns.addImage(hotdog_bunsIMG);

  bagutte = createSprite(975,500,10,10);
  bagutte.addImage(bagutteIMG);

  brioche = createSprite(975,500,10,10);
  brioche.addImage(briocheIMG);
}

function draw() {
  background("red")
  knive.x=mouseX
  knive.y=mouseY
  cutlines()
  drawSprites()
}
function cutlines() {
  if(mousePressedOver(knive)){
    for(var i = 0; i<=300; i=i+30){
    var dash = createSprite(900+i,500,20,5)
    dash.shapeColor = "white"
    }
  }
}

