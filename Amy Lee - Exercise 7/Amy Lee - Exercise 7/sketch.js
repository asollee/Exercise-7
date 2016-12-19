// Exercise 7 - Amy Lee

var ophelia;
var font;
var liesel;
var openBook;
var bookStack;
var x, y;
var stringY = 10;
//var stringX = random(width);

//var string = "She could almost taste the words as they stacked up around her";
//var splitString = split(string, " ");

function preload() {
  //ophelia = loadImage("ex7_data/ophelia.jpg");
  liesel = loadImage("ex7_data/liesel2.jpg");
  openBook = loadImage("ex7_data/open book.jpg");
  bookStack = loadImage("ex7_data/book stack.jpg");

  //font = createFont("Georgia", 24);
  //initialize();
}

function setup() {
  createCanvas(500, 600);
  textFont("Georgia", 16);
  //image(liesel, width/2, 400, 10, 10);
}

function draw() {
  background(0);

  loadPixels();
  bookStack.loadPixels();

  push();
  scale(1.9);
  //image(liesel, width/2 - liesel.width/2, height/2 - liesel.height/2);
  image(liesel, 0 - 100, -10);
  pop();

  push();
  scale(0.1);
  imageMode(CENTER);
  image(openBook, mouseX * 10, 500);
  pop();

  /*
    for (var y = 0; y < height; y ++){
      var loc = x + y * width;
      if (loc != mouseY){
        bookStack.loadPixels[loc] = color(0);
      }
    }
    updatePixels();
    
    // FAILED ATTEMPT
    //^^^ I tried to use the book stack image and only dislay it according to the mouseY location
    // I don't think this was exactly how I should have done it, but I tried anyway...
  */

  // want one word from string to fall at a time, and stay at bottom of the window. This would happen for every
  //word and so the words would "stack up".
  var string = "She could almost taste the words as they stacked up around her";
  var splitString = split(string, " ");
  var stringX = random(width);
  fill(255);
  for (var i = 0; i <= splitString.length; i += 1) {
    //for (var y = 10; y <= height; y += 1) {
    text(String(splitString[i]), stringX, stringY);
    // why do the words not drop one at a time but all at once??? That's not what I want. 
    //I want it to drop one at a time...
    //text(String(splitString[0]), mouseX - 20, stringY);
    //text(String(splitString[1]), mouseX - 15, stringY);
    stringY += 10;
    if (stringY == height) {
      stringY = 0;
    }

  } // i for loop BB
  //} // y for loop BB
}