import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let randomN = 0;

let frase = "";

window.onload = function() {
  //write your code here
  frase = who[randomNumber()] +" "+ action[randomNumber()] +" "+ what[randomNumber()] +" "+ when[randomNumber()];
  document.getElementById("excuse").innerHTML = frase;
  console.log("Hello Rigo from the console!");
};

function randomNumber() {
  return Math.floor(Math.random()*3);
}