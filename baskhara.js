//Formula de Baskhara

var a = prompt("Digite o valor de A na raiz");
var b = prompt("Digite o valor de B na raiz");
var c = prompt("Digite o valor de C na raiz");

var x1 = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/2*a
var x2 = (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/2*a

alert("O resultado de x1 é: "+ x1 + " e o resultado de x2 é: " +x2); 
