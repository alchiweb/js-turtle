/*
forward(distance)  //գնալ առաջ (հեռավորություն)
right(angle)            //աջ (անկյուն)
left(angle) 	     //ձախ (անկյուն)	
goto(x,y) 	     //գնա (x կորդինատ, y կորդինատ)
clear() 	                  //մաքրել
penup() 	    //բարձրացնել մատիտը
pendown() 	    //իջեցնել մատիտը
reset() 	                 //սկսել սկզբից, ջնջել ամեն ինչ ....
angle(angle)	   //անկյուն	 
width(width)       //մատիտի հաստությունը(հաստություն)
colour(r,g,b,a) 	   //ընտրել գույն()
*/

width(4);
colour(84, 153, 199,1);
bantik(100,100,100);

colour(40, 180, 99,1);
bantik(60,0,0);

colour(231, 76, 60,1);
bantik(60,-217,234);

colour(26, 82, 118,1);
bantik(60,276,-278);


colour(244, 208, 63,1);
bantik(60,-261,-108);

colour(195, 155, 211,1);
bantik(120,-27,-220);

colour(195, 155, 211,1);
bantik(200,-281,116);


function bantik(n,x,y){
	angle(0);
	right(90);
	goto(x,y);
	for(var  i = 0; i < 180; i++){
		forward(1);
		left(2);
	}
	
	forward(n);
	
}


/*
width(4);
colour(84, 153, 199,1);
bantik(100,100,100);

colour(40, 180, 99,1);
bantik(60,0,0);

colour(231, 76, 60,1);
bantik(60,-217,234);

colour(26, 82, 118,1);
bantik(60,276,-278);


colour(244, 208, 63,1);
bantik(60,-261,-108);

colour(195, 155, 211,1);
bantik(120,-27,-220);




function bantik(n,x,y){
	angle(0);
	goto(x,y);
	for(var  i=0; i<5 ; i++){
		forward(n);
		left(90);
	}
	right(60);
	for(var  i=0; i<3 ; i++){
		forward(n);
		left(120);
	}

	/*
	angle(0);
	right(55);
	goto(x,y);
	for(var i = 0; i<30; i++){
		forward(n);
		left(4)
		goto(x,y);
	}
	*/
	



/*
var a = 100;
width(5);
for (var i = 0; i < 20; i++) {
	dashedForward(200,20,30);
	left(93);
}
*/


/*
fillAll();

goto(-343,339);
for (var i = 0; i < 300; i++) {
	var ang = getRandInt(90,180);
	var l = getRandInt(20,680);
	angle(ang);
	dashedForward(l,20,100);//forward(l);
	goto(-343,339);
}

function fillAll(){
	colour(0,0,0,1);
	goto(-350,348);
	right(90);
	var r = 700;
	while(r>0){
		forward(r);
		right(90);
		r-=0.1;
	}
}
*/
/*
for(var i=0; i<=15; i++){
		width(1);
		forward(50);
		penup();
		forward(30);
		pendown();
		width(4);
		forward(80);
		goto(0,0);
		left(45/2);
}
*/


/* for exersises book 
for(var i=0; i<=15; i++){
		width(4);
		forward(50);
		width(1);
		forward(150);
		goto(0,0);
		left(45/2);
}
//*/


/* TEST 2 V 4 
for(var i=0; i<=15; i++){
		forward(150);
		width(4);
		forward(20);
		width(1);
		goto(0,0);
		left(45/2);
}
//*/


/* TEST 2 V 3
for(var i=0; i<=15; i++){
		forward(150);
		left(60);
		forward(20);
		goto(0,0);
		right(60);
		left(45/2);
}
//*/



/* TEST 2 V 2
for(var i=0; i<=36; i++){
		if(i%2==0){
				forward(150);
		}
		else{
				forward(100);
		}
		goto(0,0);
		left(10);
}
//*/

/* TEST 2 V 1
for(var i=0; i<=7; i++){
		forward(150);
		left(120);
		forward(20);
		goto(0,0);
		right(120);
		left(45);
}
//*/



/*
goto(-300,0);
gradient("r");
goto(-200,0);
gradient("g");
goto(-100,0);
gradient("b");
goto(0,0);
gradient("z");
goto(100,0);
gradient("k");
goto(200,0);
gradient("m");
goto(300,0);
gradient("n");


function gradient(comp){
	width(3);
	for(var r=0; r<255 ; r+=1){
		 		if(comp=="r"){
						colour(r,0,0,1);
				}
				else if(comp=="g"){
						colour(0,r,0,1);
				}
				else if(comp=="b"){
						colour(0,0,r,1);
				}
				else{
						colour(r,r,r,1);
				}				
				forward(1);
	}
}
*/

//goto(50,-81);
function dashedForward(a, stepmin, stepmax){
	var full = 0; 
	var step = 0;
	var r = 0;
	var g = 0;
	var b = 0;
	while(full<a-stepmax){
		r = getRandInt(0,255);
		g = getRandInt(0,255);
		b = getRandInt(0,255);
		alf = Math.random();
		//width(getRandInt(2,3))
		colour(r,g,b,alf);
		step=getRandInt(stepmin,stepmax);
		full+=step;
		forward(step);
		
	}
	forward(a-full);
}
/*
var a = 150;
for (var i = 0; i < 200; i++) {
	//forwardDotted(a+=2);
	//getColor(i);
	dashedForward(a+=2,30,40);
	//forward(a+=2);
	left(121);
}

function getColor(i){
	if(i%3==0){
		colour(34, 153, 84, 1);
	}
	else if(i%3==1){
		colour(192, 57, 43,1);
	}
	else{
		colour(187, 143, 206 ,1);
	}
}
*/
/*
function forwardDotted(a){
	var m=0;
	var k = 0;
	while(m<a){
		k+=getRandInt(1,3);
		forward(k);
		m+=k;
	}
}
*/


/*
goto(-83,-299);
right(90);
width(2);
var r = 20;
for (var n = 3; n < 14; n++) {
	r+=20;
	colour(r,0,0,1);
	var ang = 180-((n-2)/n)*180;
	for (var i = 0; i < n; i++) {
		forward(60);
		left(ang);
	}
}
*/




/*
width(3)
for (var i = 0; i < 100; i++) {
	
	if(i%3==0){
		colour(84, 153, 199,1);
	}
	else if(i%3==1){
		colour(211, 84, 0,1);	
	}
	else{
		colour(125, 60, 152,1);	
	}

	var m = getRandInt(10,100);
	forward(m);
	if(Math.random()>0.5){
		left(90);
	}
	else{
		right(90);
	}
	

}

*/
/*
width(2);
colour(17, 122, 101,1);
for (var i = 0; i < 45; i++) {
	forward(200);
	goto(0,0);
	left(8);
}

colour(108, 52, 131,1);
left(4)
for (var i = 0; i < 45; i++) {
	forward(275);
	goto(0,0);
	left(8);
}
*/



/*
goto(0,0);
var r = 300;
colour(0,0,255,1);

for(var r=300; r>=0; r-=3){
	forward(r);
	goto(0,0);
	left(8);
}

*/
/*
for (var i = 0; i < 45; i++) {
	forward(r);
	goto(0,0);
	left(8);
	r-=3;
}
*/


/*
colour(250,15,24,1);
width(3);
var n = 11;
var a = 100;

goto(181,-10);
var i = 0;
while(i<=n){
	forward(a);
	left(180-  (((n-2)/n)*180));
	i++;
}
*/
/*
forward(150);
left(60);
forward(150);
left(60);
forward(150);
left(60);
forward(150);
left(60);
forward(150);
left(60);
*/



/*
colour(0,0,255,1);
var lngt = [];
for (var i = 0; i < 35; i++) {
	lngt.push(getRandInt(50,350));
}


//var lngt = [100,200,150,30,60,100,150,60,30,120,60,120,150,200,180,154,174,200,150,60,100,240,120,20,130,150,200,120,130,200];

[78,229,215,349,74,330,234,68,125,344,64,328,145,300,149,183,187,153,156,160,325,77,278,319,200,342,222,78,178,160,286,190,94,316,103,341,195,186,268,226,79,158,328,147,86,50,212,283,84,317,126,169,216,200,247,331,290,245,327,146]

ang = 360/lngt.length;

for (var i = 0; i < lngt.length; i++) {
	forward(lngt[i]);
	left(180);
	forward(lngt[i]);
	left(180);
	right(ang);
}
console.log(lngt.join(","));
*/
/*
colour(250,0,0,1);
forward(100);
width(4);
colour(0,255,0,1);
right(90);
forward(100);
*/
//angle(200);
//forward(100);
//goto(-239,255);
/*
var flowers = [
	 [100,100,80]
	,[-200,65,120]
	,[111,-226,120]
	,[-52,-288,56]
	,[-15,271,70]
	,[252,-11,45]
];

var colors = [
	 [52, 152, 219]
	,[160, 64, 0]
	,[39, 174, 96]
	,[127, 179, 213]
	,[46, 64, 83]
	,[192, 57, 43]
];

width(2)
for (var i = 0; i < flowers.length; i++) {
	colour(colors[i][0],colors[i][1],colors[i][2],1);
	drawDandelion(flowers[i][0],flowers[i][1],flowers[i][2]);
}
*/

//drawDandelion(100,100,150);
//drawDandelion(-200,-50,30);


/*
colour(52, 152, 219,1)
for (var i = 0; i < 400; i++) {
	var st = getRandInt(5,25);
	var ang = getRandInt(0,360);
	forward(st);
	left(ang);
}
colour(203, 67, 53,1)
goto(getRandInt(-350,350),getRandInt(-350,350));
for (var i = 0; i < 400; i++) {
	var st = getRandInt(5,25);
	var ang = getRandInt(0,360);
	forward(st);
	left(ang);
}

function animate(action, ms) {
   return setInterval(action, ms);
}
*/

/*
function background(colorArr){
	goto(0,0);
	colour(0,0,0,1);
	for(var i=0; i<800; i+=0.2){
		forward(i);
		right(90);
	}
}
background();

goto(0,0);
for (var i = 0; i < 200; i++) {
	var x = getRandInt(-399,399);
	var y = getRandInt(-399,399);
	var step = getRandInt(100,350);
	var w = getRandInt(1,3);
	width(w);
	setRandColor();
	forward(step);
	goto(0,0);
	right(2);
}
*/

//background(0,0,0,1);
/*
for (var i = 0; i < 400; i++) {
	var x = getRandInt(-399,399);
	var y = getRandInt(-399,399);
	var step = getRandInt(20,150);
	var w = getRandInt(1,3);
	width(w);
	setRandColor();
	goto(x,y);
	forward(step);
}*/


/*
colour(93, 173, 226,1);
var n = 200;
while(n>0){
	forward(n);
	left(120);
	n-=0.5;
}



function drawDandelion(x,y,r,lng){
	goto(x,y);
	for(var i=0; i<36; i++){
		forward(r);
		goto(x,y);
		left(10);
	}
}
*/

/*
for(var i = 0; i < 15; i++) {
	var x = getRandInt(-200,200);
	var y = getRandInt(-200,200);
	var ra = getRandInt(0,50);
	var r = getRandInt(0,255);
	var g = getRandInt(0,255);
	var b = getRandInt(0,255);

	drawCircle(x,y,ra,[r,g,b]);
}
*/

/*
var z = 150;
//drawCircle(0,0,100,[255,0,0]);
for(var i=0; i<15; i++){
	drawPentagon(z);
	z-=10;
	//left(120);
}
*/


//drawCircle(0,0,150,[100,200,150]);



/*
drawCircle(0,0,100,[255,0,0]);
for(var i=0; i<6; i++){
	drawTriangle(150);
	left(60);
}
*/




/*
function drawCircle(x,y,r,color){
	colour(color[0],color[1],color[2],1);
	goto(x,y);
	for(var i=0; i<360*2; i++){
		penup();
		forward(r);
		pendown();
		forward(1);
		penup();
		left(180);
		forward(r+1);
		left(180);
		left(0.5);
	}
}
*/

function getRandInt(min,max){
	var z = Math.floor(Math.random() * (max - min + 1)) + min;
	return z;
}
/*
function drawTriangle(side){
	pendown();
	colour(0,0,255,1);
	for (var i = 0; i <3 ; i++) {
		forward(side);
		left(120);
	}
}


function drawPentagon(side){
	pendown();
	colour(0,0,255,1);
	for (var i = 0; i <5 ; i++) {
		forward(side);
		left(180-((5-2)/5)*180);
	}
}

function setRandColor(){
	var r = getRandInt(0,255);
	var g = getRandInt(0,255);
	var b = getRandInt(0,255);
	colour(r,g,b,1);
}
*/
/*
fillTriangle(100,120,120);

function fillTriangle(side,x,y){
	goto(x,y);
	while(side>0){
		forward(side);
		left(120);
		side-=0.1;
	}
}
*/

/*
drawTriangle(x,y,side,color);
drawSquare(x,y,side,color);
drawPentagon(x,y,side,color);
drawHexagon(x,y,side,color);
*/

/*
for(var i=0; i<360; i++){
	forward(50);
	left(40);
}
*/


/*
colour(36, 113, 163,1);

for (var i = 0; i < 60; i++) {
	var side = getRandInt(30,150);
	drawTriangle(side);
}

function drawTriangle(side){
	goto(getRandInt(-270,270),getRandInt(-270,270));
	width(getRandInt(1,5))
	colour(getRandInt(0,255), getRandInt(0,255), getRandInt(0,255),1);
	left(getRandInt(0,360))
	for (var i = 0; i <4 ; i++) {
		forward(side);
		left(90);
	}
}


function getRandInt(min,max){
	var z = Math.floor(Math.random() * (max - min + 1)) + min;
	return z;
}
*/


/*
drawTriangle(60);
goto(139,-224);
drawTriangle(100);
goto(-226,-184);
drawTriangle(250);
goto(157,177);
drawTriangle(150);

function drawTriangle(side){
	for (var i = 0; i <3 ; i++) {
		forward(side);
		right(120);
	}
}
*/
/*
fillTriangle(100,120,120);

function fillTriangle(side,x,y){
	goto(x,y);
	while(side>0){
		forward(side);
		left(90);
		side-=0.1;
	}
}
*/

/* Օրինակներ փոփոխականների օգտագործման համար */
/* 
//Օրինակ 1 

var a = 400;

forward(a);
left(120);
forward(a);
left(120);
forward(a);
*/

/*
var angles = 12;
var k = 50;
var ang = ((angles-2)/angles) * 180;
var ang = 180-ang;

for(var i=0; i<angles; i++){
	forward(k);
	left(ang);	
}
*/

/*
var i = 400;
goto(209,-82)
while(i>0){
	forward(i);
	left(90);
	i-=20;
}
*/

/*
colour(0,0,255,1);
for(var j=0; j<4; j++){
	var k = 300;
	for(var i=0; i<90; i++){
		forward(k);
		goto(0,0);
		left(4);
		k-=20;
	}
	left(90)
}
*/


/*
var i = 400;
goto(209,-82)
while(i>0){
	forward(i);
	left(150);
	i-=20;
}
*/

/*
colour(255,0,0,1);
for (var i = 0; i < 45; i++) {
	forward(200);
	goto(0,0);
	left(8);
}


colour(0,255,0,1);
var x = -200;
var y = -200;
goto(x,y);
for (var i = 0; i < 45; i++) {
	forward(100);
	goto(x,y);
	left(8);
}

colour(0,0,255,1);
var x = 269;
var y = 274;
goto(x,y);
for (var i = 0; i < 45; i++) {
	forward(70);
	goto(x,y);
	left(8);
}
*/

/*
var k  = 160;
for(var i=0; i<4*4*10; i++){
	forward(k);
	left(90);
	if(i%4==0 && i!=0){
		k-=20;
	}
}
*/


/*
var angles = prompt("Ներմուծիր անկյունների քանակը");
var ang = ((angles-2)/angles ) * 180;
var ang = 180-ang;
if(angles>2 && angles<=6){
	var k = prompt("Ներմուծիր կողմի երկարությունը");
	forward(k);
	left(ang);
	forward(k);
	left(ang);

	if(angles>2){
		forward(k);
		left(ang);
	}

	if(angles>3){
		forward(k);
		left(ang);
	}

	if(angles>4){
		forward(k);
		left(ang);
	}

	if(angles>5){
		forward(k);
		left(ang);
	}

	if(angles>6){
		forward(k);
		left(ang);
	}

}
else if(angles>6){
	alert("6 անկյունից ավել չէմ կարողանում գծել");
}
else{
	alert("1 անկյուն և 2 անկյուն պատկերներ գոյություն չունեն");
}

*/


/*
goto(400,-20);

var n = prompt("Input b");
var k = 45;

forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);

left(k);

forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);

left(k);

forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);

left(k);

forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);

left(k);

forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);

left(k);

forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);

left(k);

forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);

left(k);

forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);
left(90);
forward(n);
*/
/*
width(3);
forward(15);
left(10);
forward(100);
animate(drawTriangle,200);
write("asdfds");
write("asdfds adfg asdf asdf asd");

function drawTriangle(){
   for (var i = 0; i < 3; i++) {
      forward(100);
      left(120);
   }
   left(10);
}

*/


