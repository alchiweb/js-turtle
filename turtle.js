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

//ընտրել գույն(), արգումենտը, երեք թիվ, զանգված, գույնի անունը կամ #հեքսկոդը
color(r,g,b) 	   
color([r,g,b])
color("red")
color("#ff0000")
*/

width(5);
forward(50);
left(90);
color("red");
forward(100);
forward(50);
left(90);
color("#00ff00");
forward(100);
forward(50);
left(90);
color(255,255,0);
forward(100);
color([100,50,120]);
left(80);
forward(155);