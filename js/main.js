"use strict";

var outputBox;
var totalTime = 30000; // total battle time in ms
var tick = 200; // time per game update in ms. Change to 100 for iOS
var heroList = [];

window.onload = function() {
    outputBox = document.getElementById("output");

    runBattle();
}

function runBattle() {
    outputBox.innerHtml = "";
    setupHeroes();
    for (var time = 0; time < totalTime; time += tick) {
        var tickOutput = document.createElement("p");
        var outputText = "time: " + time + " (";
        for (var i = 0; i < heroList.length; i++) {
            outputText += heroList[i].getOutputTextForNewTime(time);
        }
        outputText += ")";
        tickOutput.innerHTML = outputText;
        outputBox.appendChild(tickOutput);
    }

    for (var i = 0; i < heroList.length; i++) {
        var finalOutput = document.createElement("p");
        var hero = heroList[i];
        finalOutput.innerHTML = hero.name + " procced " + hero.procCount + " times.";
        outputBox.appendChild(finalOutput);
    }
}

function setupHeroes() {
    heroList = [];
    var PD = new heroClass();
    PD.name = "PD";
    heroList.push(PD);
    var cupid = new heroClass();
    cupid.name = "Cupid";
    cupid.setup(5, 1200);
    heroList.push(cupid);
}