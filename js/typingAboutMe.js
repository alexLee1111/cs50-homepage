import { typing } from "./typingEffect.js";

var text1 = "Yes, It is me. The rubber duck that programmers have been crying to. After all this time, I am moved by the sweat and tears you all shed. I decided to set my imaginary foot into the programming world and join you all.";

var i = 0;
var typingArea = document.getElementsByClassName("typing");

typing(text1, typingArea[0], i);