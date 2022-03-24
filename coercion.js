//Coercion implicita
var a = 4 + "7" //47 string

var b = 4 * "7" //28 number

var c = 2 + true; //3

var d = false - 3; //-3 negative number


//Coerción explicita
var e = 20;

var f = d + ""; //20 string

//De number a string
var g = String(d); //Convierte el número en STRING. Coerción explicita

//De string a number
var h = Number(f); //Convier el string en Number