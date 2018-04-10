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


//showGrid(20);

width(5);
color("red");
forward(50);
left(90);

color(20,200,0);
forward(200);

color("magenta");
right(135);
goto(-108,-113);
forward(120);


/*
width(1);
goto(-277,167);  
color("red");
strangeSquare(100);

goto(21,189); 
color("blue");
strangeSquare(200);

goto(-59,69);  
color("green");
strangeSquare(150);

goto(-210,-173);
color("magenta");
strangeCirle(100);


goto(114,-198);
color("blue");
strangeLine(150);
*/