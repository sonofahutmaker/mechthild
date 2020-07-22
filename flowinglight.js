// JavaScript Document
var myDiv;
var myCanvas;
let first = 0;
let firsty = 0;
let secx = 0;
var mySound; 
var sound_num;
var sound_name; 
var myTitle;
var gifDiv;
let v;
let sound1, sound2, sound3, sound4, sound5;
var explan;
var secdiv;
var seclink;

function preload(){
 	sound1 = createAudio("assets/sound0.mp3");
	sound2 = createAudio("assets/sound1.mp3");
	sound3 = createAudio("assets/sound2.mp3");
	sound4 = createAudio("assets/sound3.mp3");
	sound5 = createAudio("assets/sound4.mp3");
}

function setup(){
	myTitle = createDiv('the flowing light of ur godhead ;)');
	myTitle.id('title');
	myDiv = createDiv(			
			'<img src = "pages/1.png"><img src = "pages/2.png"><img src = "pages/3.png"><img src = "pages/4.png"><img src = "pages/5.png"><img src = "pages/6.png"><img src = "pages/7.png"><img src = "pages/8.png"><img src = "pages/9.png"><img src = "pages/10.png"><img src = "pages/11.png"><img src = "pages/12.png"><img src = "pages/13.png"><img src = "pages/14.png">');
	myDiv.id('myDiv');
	myCanvas = createCanvas(870,670);
	gifDiv = createDiv('<img src = "images/mecht_girl.gif" id = "mech">');
	gifDiv.id(gifDiv);
	firstx = 0;
	firsty = 0;
	secx = 0;
	secy = 0;
	explan = createDiv("Mechthild of Magdeburg's 'The Flowing Light of the Godhead' is a religious text written by the equivalant of a nun in the 13th century. as a woman, her authorship had to be explained by biblical examples of god working through those of the 'weaker' sex. her work was also transcribed by a male monk, who had to vouch for her virginity so her words could be legitimized. although it is an unlikely source, this text can be read as inherently feminist, as it personifies a female Love and then implies a more powerful position for her than god, and Mechthild uses the religious context to express complex sexual desires that would have otherwise been seen as improper. enjoy :)")
	explan.id('explan');
	seclink = createDiv('<a href = "urworld.html">transcend</a>'); //new
	seclink.id('link'); //new
	seclink.position(windowWidth-150, windowHeight-50); //new
	secdiv = createDiv("now that you've learned a little bit about Mechthild and read her work, can you do what she did? can you work with limited resources to create something lasting? don't forget Mechthild was illiterate, so she needed a monk to transcribe her words. but can you work with his prying eyes and imperfect rendering of your ideas?"); //new
	secdiv.id('secdiv'); //new
	secdiv.position(windowWidth-250, windowHeight - 200); //new
	secdiv.size(200,150); //new
}

function draw(){
	clear();
	myTitle.position(windowWidth/4 - 200, 20);
	myDiv;
	myDiv.position(windowWidth/4,100);
	myCanvas.position(windowWidth/4,100);
	gifDiv;
	gifDiv.position(20,100);
	gifDiv.size(windowWidth/4,AUTO);
	explan.position(30, 630);
	explan.size(windowWidth/4 - 50,200);
	noStroke();
	fill(250,130,206,100);
	rect(firstx,firsty,secx-firstx,15);
}

function make_sound(){
	sound_num = floor(random(5));
	if (sound_num == 0){
		sound_name = sound1;
	}
	else if (sound_num == 1){
		sound_name = sound2;
	}
	else if (sound_num == 2){
		sound_name = sound3;
	}
	else if (sound_num == 3){
		sound_name = sound4;
	}
	else {
		sound_name = sound5;
	}
}

function mousePressed(){
	make_sound();
	firstx = mouseX;
	firsty = mouseY;
	sound_name.play();
}

function mouseDragged(){
	secx = mouseX;

}

function mouseReleased(){
	secx = mouseX;
}

