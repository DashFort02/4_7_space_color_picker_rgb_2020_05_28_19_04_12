/*
Grady Fort
4_7
Pick a color between green and purple then set canvas to that.
* note, random is randomNumber in code.org
*/
//https://coolors.co/app
/*
0 make r,g,b variables then print them in console.log
*/

function setup() {
  createCanvas(400, 400);
  var r = random(0,200);
  var g = random(160,255);
  var b = random(200,255);
  console.log(r);
  console.log(g);
  console.log(b);
  background(r,g,b);
}
  //delayTime(1);  //Meant to repeat every second. Why is there an error?
  //random(0,200),random(160,255),random(200,255)
