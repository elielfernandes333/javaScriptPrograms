//Perimetro do círculo de raio R

var r = prompt("Digite o Valor do raio R");
var PI = 3.14159265;
var area = PI * Math.pow(r,2);
var volume = (4/3) * PI * Math.pow(r,3);
alert("A área do círculo é de: " + area.toFixed(2) + " e o volume do círculo é de: " + volume.toFixed(2));
