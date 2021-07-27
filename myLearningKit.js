window.onload = function btncreater(){
  var btndiv = document.getElementById("btns")
  for(var i = 1; i <= 40; i++){
    btndiv.innerHTML += "<button onclick = \"p"+i+"Func()\"> Problem " + i + "</button>";
  }
}
//Problem 01
function p1Func() {
	
  
    document.getElementById("problem").innerHTML="<p>Draw a flowchart for a computer program to receive two numbers and output their sum.</p>";
   

    document.getElementById("flowchart").setAttribute("src","flowcharts/img_01.jpg");

    document.getElementById("flowchart").style.display="none";

    document.getElementById("js").setAttribute("src","JavaS_solutions/sol_01.png");
    document.getElementById("js").style.display="none";

    document.getElementById("another").setAttribute("src","images/dosa/dosa2.jpg");
    document.getElementById("another").style.display="none";

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;

}

function add(){
  var num1 = prompt("Input your Number");
  var num2 = prompt("Input your Number"); 
  var sum = num1 + num2;
  alert("Sum of Numbers: "+ sum);
}

//Problem 02
function p2Func() {
	
  
  document.getElementById("problem").innerHTML="<p>   Draw a flowchart for a computer program to receive three numbers and store them in memory spaces called a, b, and c as three sides of a triangle and, by using Heron’s formula, calculate and output the area of the triangle.</p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_02.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_02.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function area(){

  var a = prompt("Input First Side: ");
  var a = prompt("Input Second Side: ");
  var a = prompt("Input Third Side: ");

  var p = ( a + b + c ) / 2
  var tarea = Math.sqrt(p * ( p - a ) * ( p - b ) * ( p - c ));
  var area = tarea.toFixed(2) 

  alert("Area of triangle is: " + area);

}


//Problem 03
function p3Func() {
	
  
     document.getElementById("problem").innerHTML="<p> Draw a flowchart for a computer program to receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c) and calculate and output its roots. Write a precondition that assumes coefficients are good enough such that a solution in real number exists. </p>";
    
 
     document.getElementById("flowchart").setAttribute("src","flowcharts/img_03.jpg");

     document.getElementById("flowchart").style.display="none";

     document.getElementById("js").setAttribute("src","JavaS_solutions/sol_03.png");
     document.getElementById("js").style.display="none";

     document.getElementById("another").setAttribute("src","JavaS_solutions/sol_03.png");
     document.getElementById("another").style.display="none";
 
 
     document.getElementById("check1").checked=false;
     document.getElementById("check2").checked=false;
     document.getElementById("check3").checked=false

}
function equation(){

  var a = prompt("Input coffisient of x^2: ");
  var a = prompt("Input coffisient of x: ");
  var a = prompt("Input constnat number: ");

  
  var root1 = ( -b + Math.sqrt( ( b * b ) - ( 4 * a * c ))) / ( 2 * a );
  var root2 = ( -b - Math.sqrt( ( b * b ) - ( 4 * a * c ))) / ( 2 * a );
  var root1 = root1.toFixed(2)
  var root2 = root2.toFixed(2)

  alert("First root: "  + root1 + "</br>" + "Second root: "  + root2); 

}

//Problem 04
function p4Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Draw a flowchart to receive three numerical coefficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_04.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_04.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function equation(){

  var a = prompt("Input coffisient of x^2: ");
  var a = prompt("Input coffisient of x: ");
  var a = prompt("Input constnat number: ");

  var d = ( b * b ) - ( 4 * a * c)

  if (d > 0){
      prompt("This equation has 2 real roots");
  }
  else if( d < 0 ){
          prompt("This equation have no real roots");
  }
  else{
          prompt("This equation has real roots which are equal");
       
  }

  

}    

//Problem 05
function p5Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Draw a flowchart to receive a number and map it to a letter grade based on York standard. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_05.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_05.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}


function mapping(){

  var a = prompt("Input your score: ")


  switch (true){
   case (a>89): 
      answer="A+";
      break;
   case (a>79): 
      answer="A";
      break;

  case (a>75): 
      answer="B+";
      break;

  case (a>69): 
      answer="B";
      break;

  case (a>65): 
      answer="C+";
      break;

  case (a>59): 
      answer="c";
      break;

  case (a>55): 
      answer="D+";
      break;

  case (a>49): 
      answer="D";
      break;

  case (a>39): 
      answer="E";
      break;

   default:
      answer="F";
  }

  alrt(answer);

}


//Problem 06
function p6Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Draw a flowchart that outputs whether the input is positive or negative until a zero is received. When a zero is received, the button is disabled, </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_06.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_06.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function problem06(){

  var a = parseInt(document.getElementById("num1").value);

if( a > 0){
    document.getElementById("output").innerHTML = "Positive"
}
else if( a < 0){
  document.getElementById("output").innerHTML = "Negative"
}
else{
   document.getElementById("dsbl").disabled=true;
}
  
}

//Problem 07
function p7Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Draw a flowchart to continue receiving numbers and output if they are positive or negative until a zero is entered. When a zero is entered, the program should output how many positive and how many negative numbers have been entered, then it stops. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_07.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_07.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

var p = 0
var n = 0

function problem06(){

    var a = parseInt(document.getElementById("num1").value);
 
  if( a >=0){
       if(a==0)
      {
          document.getElementById("output").innerHTML = "Number of Positive: " + p + "</br>" + "Number of Negative: " + n;
      }
     else{
         p = p + 1;

         document.getElementById("output").innerHTML = "Positive";
     }
  }

  else{
      n = n + 1
      document.getElementById("output").innerHTML = "Negative";
  }
}

//Problem 08
function p8Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Draw a flowchart to continue receiving numbers and output if they are divisible by 6 or not until a zero is entered. When a zero is entered, the program should output how many of the entered numbers were divisible by 6, then it stops. </p>";
 
  document.getElementById("flowchart").setAttribute("src","flowcharts/img_08.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_06.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";

  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

//Problem 09
function p9Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Devise a flowchart to receive a positive number and output each digit separately. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_09.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_09.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function problem_09() {
  //outputObj is the class given to the div where the answer should be displayed
  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
 
  outputObj.innerHTML="number: "+a+"<br><br>its digits: ";

  while( a > 0 ){
       var n = a % 10
      a = Math.floor(a/10)
      outputObj.innerHTML = outputObj.innerHTML + n + ",";
      
  }
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

//Problem 10
function p10Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Devise a flowchart to receive a positive number and output how many of its digits are equal to 7. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_10.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_10.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;  
  document.getElementById("check3").checked=false

}

function problem_10() {
  //outputObj is the class given to the div where the answer should be displayed
  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
 
 
  outputObj.innerHTML="number: "+a+"<br><br>Number of 7's: ";

  var c = 0
  while( a > 0 ){
       var n = a % 10
      a = Math.floor(a/10)
      if(n==7)
      c = c + 1
      
  }
   
 outputObj.innerHTML = outputObj.innerHTML + c;
  
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

//Problem 11
function p11Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Devise a flowchart to receive a positive number and output sum of its digits. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_11.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_11.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function problem_11() {
  
  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
 
 
  outputObj.innerHTML="number: "+a+"<br><br>Sum of digits: ";

  var s = 0
  while( a > 0 ){
       var n = a % 10
      a = Math.floor(a/10)

      s = s + n
      
  }
   
 outputObj.innerHTML = outputObj.innerHTML + s;

  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

//Problem 12
function p12Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Devise a flowchart to receive a positive number and output yes if it's equal to its reverse; otherwise, output no. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_12.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_12.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function problem_12() {
  
  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
 var p=a;
  var c=0;
  outputObj.innerHTML="number: "+a+"<br><br>";
   while(a>0)
   {
    var b=(a%10);
    c=c*10+b;
    a=Math.floor(a/10);
   }

  if(p==c)
  outputObj.innerHTML=outputObj.innerHTML+"equal to its reverse?  yes";
  else
  outputObj.innerHTML=outputObj.innerHTML+"equal to its reverse?  no";

  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

//Problem 13
function p13Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Devise an algorithm to receive a positive number, as n, and output n! (n Factorial). </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_13.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_13.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function problem_13() {
  
  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
 
  outputObj.innerHTML="number: "+a+"<br><br>Factorial: ";
   
  var p = a
  var f = 1
  for(var i=2;i<=a;i++)
  {
  f=f*i;
  }

  outputObj.innerHTML=outputObj.innerHTML+p+"! = "+f;
   
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

//Problem 14
function p14Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Devise an algorithm to input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence. In Fibonacci sequence, the first two values are 0 and 1 and other values are sum of the two values preceding it. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_14.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_14.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}


function problem_14() {
  
  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
 var secondlast = 0;
 var last = 1;
 var newvalue;
  outputObj.innerHTML="number: "+a+"<br><br> Fibonacci Sequence : 0,1,";

   for(var i=0;i<=a-2;i++)
   {
   newvalue = secondlast + last;
   secondlast = last;
   last = newvalue;
   outputObj.innerHTML=outputObj.innerHTML+""+newvalue+",";
}
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}


//Problem 15
function p15Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Devise an algorithm to input a positive integer, n, – and by using XX characters – output the figure below that has n rows and each row k has k pairs of XX. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_15.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_15.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function problem_15() {
  
  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
 var secondlast = 0;
 var last = 1;
 var newvalue;
  outputObj.innerHTML="number: "+a+"<br><br>";
  outputObj.setAttribute("style", "text-align:left;");
   for(var i=0;i<=a;i++)
   {
       for(var j=0;j<=i-1;j++)
      outputObj.innerHTML = outputObj.innerHTML + "xx";
      outputObj.innerHTML = outputObj.innerHTML + "<br>";

}
   
  


  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}


function p16Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Trace the following flowchart for when input is 9 and complete the trace table. Also, write pre- postconditions for this flowchart. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_16.png");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_16.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p17Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Trace the following flowchart for when input values are 12, 3, 3, 6, 11, 14, 1, 1, and complete the trace table. Also, write pre- post-conditions for this flowchart. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_17.png");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_17.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p18Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Trace the following flowchart for when input values are 12, 3, -3, 6, -11, -14, -1, -1, -3, 2, 0 and complete the trace table. Also, write pre- post-conditions for this flowchart. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_18.png");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_18.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p19Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Trace the following flowchart for when input values are 12, 3, -3, 6, 11, 3, -1, -1 and complete the trace table. Also, write pre- post-conditions for this flowchart. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_19.png");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_19.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p20Func() {
	
  
  document.getElementById("problem").innerHTML="<p> This exercise uses sub-algorithms. Trace it for when input value is 6 and complete the trace tables. Also note that there are two variables name num, one in the main algorithm and another in the sub-algorithm. Write pre- post-conditions for each of these algorithms (the main one and the sub-algorithm). </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_20.png");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_20.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p21Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a Program to recieve a number and output all prime numbers which are less than the number and has 7 as a digit. </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_20.png");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_21.png");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p22Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find product of digits </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_22.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_22.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p23Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find square of n rows </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_23.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_23.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p24Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find stars formed in a right angled triangle form </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_24.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_24.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p25Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find pascal triangle </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_25.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_25.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p26Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Grades </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_26.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_26.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p27Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Area of triangle </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_27.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_27.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p28Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find How many Positive Numbers in an array </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_28.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_28.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p29Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find the entered numbers are negative or postive </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_29.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_29.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p30Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Numbers will be shown positive or Negative till a 0 is entered </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_30.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_30.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p31Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Checking Roots </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_31.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_31.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p32Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Lucky Lottery </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_32.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_32.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p33Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Random Name </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_33.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_33.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p34Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Sum of n Primes </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_34.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_34.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p35Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find GCD of the number inputed </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_35.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_35.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p36Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find LCM </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_36.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_36.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p37Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Power of a to b without using power function </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_37.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_37.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p38Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Multiplication Table </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_38.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_38.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p39Func() {
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Convert base to 2 </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_39.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_39.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function p40Func() {  
	
  
  document.getElementById("problem").innerHTML="<p> Device a program to find Sum of 10 to 30 </p>";
 

  document.getElementById("flowchart").setAttribute("src","flowcharts/img_40.jpg");

  document.getElementById("flowchart").style.display="none";

  document.getElementById("js").setAttribute("src","JavaS_solutions/sol_40.jpg");
  document.getElementById("js").style.display="none";

  document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display="none";


  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false

}

function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {	 
     document.getElementById("flowchart").style.display="inline";
	 
  }
  else {	 
     document.getElementById("flowchart").style.display="none";
	  
  }
}



function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
    document.getElementById("js").style.display="inline";	 
	 
	 
  }
  else {
    document.getElementById("js").style.display="none"; 
	  
	  
  }
}


function checkUncheck3(){
    if (document.getElementById("check3").checked==true) {
      document.getElementById("another").style.display="inline";	 
      
       
    }
    else {
      document.getElementById("another").style.display="none"; 
        
        
    }
  }

function zoomIn(){
    
    document.getElementById("flowchart").style.width="200%";
  }

function zoomOut(){
    document.getElementById("flowchart").style.width="100%";
}
function zoomInS(){
    
  document.getElementById("js").style.width="200%";
}

function zoomOutS(){
  document.getElementById("js").style.width="100%";
}