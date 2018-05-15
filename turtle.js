/*
showGrid(20);      //գծել կորդինատային առանցքները
forward(distance)  //գնալ առաջ (հեռավորություն)
right(angle)       //աջ (անկյուն)
left(angle) 	   //ձախ (անկյուն)	
goto(x,y) 	       //գնա (x կորդինատ, y կորդինատ)
clear() 	       //մաքրել
penup() 	       //բարձրացնել մատիտը
pendown() 	       //իջեցնել մատիտը
reset() 	       //սկսել սկզբից, ջնջել ամեն ինչ ....
angle(angle)	   //անկյուն	 
width(width)       //մատիտի հաստությունը(հաստություն)

//ընտրել գույն(), արգումենտը, երեք թիվ, զանգված, գույնի անունը կամ #հեքսկոդը
color(r,g,b)
color([r,g,b])
color("red")
color("#ff0000")
*/

showGrid(50);
setSpeed(200);

width(5);
color("blue");
forward(120);

width(1);
left(65);
color("red");
forward(150);

goto(184,-208);
width(2);
right(100);
color("green");
forward(150);