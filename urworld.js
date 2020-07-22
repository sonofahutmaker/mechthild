// JavaScript Document

var reds, blues, greens;
var r,g,b;
var cols;
var tri = false;
var cir = false;
var rectang = false;
var num = 1;
var myDiv;
var col_string;
var link_div;
var monk;
var rando;
var monkx;
var mx, my;
var wran;
var phrase = '';
var word_bool = false;
var v;
var wordx = 0;
var wordy = 0;
var myFont;
var font_col;
var colly;
var angle;
var alpha;
var img;
var text_input;
var button;
var ur_text;
var textx;
var texty;
var text_bool = false;
var rr, gg, bb;
var bigint;
var collie;
var imgx = 250;
var imgy = 250;
var thing;
var strx;
var stry;
var on = true;


function setup(){
	createCanvas(windowWidth,windowHeight);
	reds = createSlider(0,255,242);
	greens = createSlider(0,255,192);
	blues = createSlider(0,255,251);
	alpha = createSlider(0,255,255);
	reds.position(10,10);
	greens.position(10,30);
	blues.position(10,50);
	alpha.position(10,70);
	cols = createInput("#fa82ce","color");
	cols.id('cols');
	font_col = createInput("#f94e2a","color");
	font_col.id('font_col');
	myDiv = createDiv('ur task: draw the soul | tell ur story: ');
	myDiv.id('love');
	link_div = createDiv('<a href = "flowinglight.html">become inspired</a>');
	link_div.id('link');
	link_div.position(windowWidth-200,windowHeight-100);
	monk = createDiv('<img src = "images/monk/monk.gif" id = "monk">'); //new
	monk.id('monk'); //new
	myFont = loadFont('assets/Lobster/Lobster-Regular.ttf');
	v = ['It shall be called a flowing light of my Godhead into all hearts',
			 'God greet you, Lady Love',
			 'I shall make that up to you in one hour with the Holy Spirit on earth',
			 'Your voice is string music to my ears',
			 'Your words are spices for my mouth',
			 'Your longings are the lavishness of my gift',
			 'Ill embrace you tightly',
			 'And permeate you utterly',
			 'And Ill steal you from your body',
			 'And give you to your Lover',
			 'O Love, this letter I have written out of your mouth',
			 'I am weak with longing for him',
			 'That I bound you made me happy',
			 'How do you, vile worm, expect to survive before me?',
			 'Lord, you are my lover',
			 'We praise you, Lord, that you have instructed us in your intimacy',
			 'O you chosen Sun',
			 'O you full Moon',
			 'This is the soul that loves God',
			 'You taste like a grape',
			 'Your radiance is like the sun',
			 'You are an enhancement of my most sublime love',
			 'You are an allurement to my Godhead',
			 'You are my resplendent mountain',
			 'The deeper her wounds become, the more violently she struggles',
			 'The more she labors, the more contentedly she rests',
			 'The more quiet her silence, the louder she calls',
			 'the greater the marvels she works with his strength in proportion to her power',
			 'The more his desire grows, the more extravagent their wedding celebration becomes',
			 'The narrower the bed of love becomes, the more intense are the embraces',
			 'The sweeter the kisses on the mouth become, the more lovingly the gaze at each other',
			 'The more she consumes, the more she has',
			 'The more ardent she remains, the sooner she bursts into flame',
			 'The more she burns, the more beautifully she glows'		
	]
	angle = PI/36
	text_input = createInput();
	text_input.position(1335,35);
	button = createButton('submit');
	button.position(text_input.x + text_input.width,37);
}

function draw(){
	r = reds.value();
	g = greens.value();
	b = blues.value();
	a = alpha.value();
	col_string = cols.value();
	collie = color(col_string);
	colly = font_col.value();
	background(r,g,b);
	noStroke();
	fill(255);
	triangle(150,60,175,10,200,60);
	circle(240,35,27);
	rect(290,10,50,50);
	triangle(375,30,400,10,425,30);
	rect(387,30,25,30);
	rect(447,10,25,30);
	triangle(435,40,460,60,485,40);
	rect(text_input.x + text_input.width + 60,10,50,50);
	cols.position(505,15);
	cols.size(50,50);
	font_col.position(565,15);
	font_col.size(50,50);
	myDiv.position(625,10);
	fill("#4a0c55");
	textFont(myFont);
	textSize(20);
	text('ON/',text_input.x + text_input.width + 70,30,50);
	text('OFF',text_input.x + text_input.width + 70,50,50);
	if (word_bool){
		//translate(-width/2,-height/2);
		fill(colly);
		textFont(myFont);
		textSize(24);
		text(phrase,wordx,wordy);
	}
	if(text_bool){
		//translate(-width/2,-height/2);
		if (on){
			image(img,textx,texty-30);
		}
		fill(colly);
		stroke(74,12,85);
		strokeWeight(2);
		textFont(myFont);
		textSize(24);
		thing = text(ur_text, textx, texty, 250);
		thing;
	}
	stroke(74,12,85);
	strokeWeight(1);
	fill(red(collie),green(collie),blue(collie),a);
	if (tri){
		myTriangle();
	}
	if (cir){
		myCircle();
	}
	if (rectang){
		myRect();
	}
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}

function mouseClicked(){
	if (mouseX < 200 && mouseX > 150 && mouseY > 10 && mouseY < 60){
		tri = true;
	}
	if (mouseX > 213 && mouseX <267 && mouseY < 62 && mouseY > 8){
		cir = true;	
	}
	if (mouseX > 290 && mouseX < 340 && mouseY > 10 && mouseY < 60){
		rectang = true;
	}
	if (mouseX >375 && mouseX < 425 && mouseY > 10 && mouseY < 60){
		num = num + 50;
	}
	if (mouseX > 435 && mouseX < 485 && mouseY > 10 && mouseY < 60){
		if (num > 50){
			num = num - 50;
		}
	}
	monk_appear();	//new
	if (mouseX > mx && mouseX < mx + 195 && mouseY > my && mouseY < my + 300){
		words();
	}
	if (mouseX > button.x && mouseX < button.x + button.width && mouseY > 30 && mouseY < 45){
		write();
	}
	if (mouseX > text_input.x + text_input.width + 60 && mouseX < text_input.x + text_input.width + 110 && mouseY > 10 && mouseY < 60){
		if (on){
			on = false;
		}
		else{
			on = true;
		}
	}
}

function mouseDragged(){
	if (mouseX < 10 || mouseX > 150){
		if (mouseY < 10 || mouseY > 60){
			angle = angle + PI/360;
			if (angle > 2*PI){
				angle = 0;
			}
		}
	}
}

function myCircle(){
	translate(width/2,height/2);
	for (var i = 0; i < num; i++){
		rotate(i * angle);
		var d = sqrt(i + 0.5) *10;
		circle(d, 0, 25);
	}
}

function myTriangle(){
	translate(width/2,height/2);
	for (var i = 0; i < num; i++){
		rotate(i * angle);
		var d = sqrt(i + 0.5) *10;
		triangle(d, 0, d+15,15,d+30,0);
	}
}

function myRect(){
	translate(width/2,height/2);
	for (var i = 0; i < num; i++){
		rotate(i * angle);
		var d = sqrt(i + 0.5) *10;
		rect(d, 0, 30,30);
	}
}

function monk_appear(){ //new function
	rando = floor(random(50));
	monkx = floor(random(2));
	if (rando % 8 == 0){
		if (monkx == 1){
			mx = windowWidth-200;
			my = random(windowHeight)
		}
		else{
			mx = 0;
			my = random(windowHeight);
		}
		monk.position(mx,my);
	}
}

function words(){
	wran = floor(random(34));
	phrase = v[wran];
	word_bool = true;
	wordx = random(windowWidth);
	wordy = random(windowHeight);
}

function write(){
	text_bool = true;
	ur_text = text_input.value();
	imgx = ur_text.length * 15;
	if (imgx>250){
		imgx = 250;
	}
	imgy = ((ur_text.length * 15) / 250)*30 + 20;
	if (imgy == 20){
		imgy = 1;
	}
	if (imgx == 0){
		imgx = 1;
	}
	strx = imgx.toString();
	stry = imgy.toString();
	textx = random(windowWidth);
	texty = random(windowHeight);
	img = loadImage("https://picsum.photos/"+strx+"/"+stry+"/?random");
}
