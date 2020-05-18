function displayList() {
const randomText = new Array ();
randomText[0] = "Man overvejde på et tidspunkt at male broen pink";
randomText[1] = "Hvis man står stille på broen i mere end 10 sek får man en gratis durum";
randomText[2] = "Broen kan holde til din mor";
randomText[3] = "Trump prøvede at købe den med fik et nej og græd";
randomText[4] = "Broen kan holde til at godzilla angriber den";
randomText[5] = "Der et luft over broen";
randomText[6] = "Selve broen har mere ost i fundament end der findes i hele usa";

var i = Math.random();
i = 7 * i;
i = Math.floor(i);
var i = Math.floor(7*Math.random())
var result = document.getElementById('result1'); 
    var myResult1 = randomText[i]
    document.getElementById('result1').value = myResult1;
}