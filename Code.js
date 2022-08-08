
var a = Math.floor(Math.random()*20)+1;
var b = Math.floor(Math.random()*10)+1;
var c = Math.floor(Math.random()*20)+1;
var d = Math.floor(Math.random()*10)+1;
var e = Math.floor(Math.random()*20)+1;
var f = Math.floor(Math.random()*10)+1;
var g = Math.floor(Math.random()*20)+1;
var h = Math.floor(Math.random()*10)+1;
var i = Math.floor(Math.random()*20)+1;
var j = Math.floor(Math.random()*10)+1;

var k = a*b
var l = c*d
var m = e*f
var n = g*h
var o = i*j

var accessCode1 = k + "";
var accessCode2 = l + "";
var accessCode3 = m + "";
var accessCode4 = n + "";
var accessCode5 = o + "";







function clues() {
    
    fill("white")
    textSize(15)
    text(a +" x " + b, 100,60)
    fill("lightblue")
  

    fill("white")
    textSize(15)
    text(c + " x " + d, 700,60)
    fill("lightblue")
   
    fill("white")
    textSize(15)
    text(e + " x "+ f, 100,260)
    fill("lightblue")

    fill("white")
    textSize(15)
    text(g + " x " + h, 700,260)
    fill("lightblue")

    fill("white")
    textSize(15)
    text(i + " x " + j, 400,160)
    fill("lightblue")
}