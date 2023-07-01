import { typing } from "./typingEffect.js";
var text1 = "Welcome To My Homepage";
var text2 = "This is Alex here. My homepage for CS50's Problem Set 8."

var i = 0;
var typingArea = document.getElementsByClassName("typing");

typing(text1, typingArea[0], i);
typing(text2, typingArea[1], i);