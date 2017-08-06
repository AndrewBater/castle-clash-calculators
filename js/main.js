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
        generateOutputForCurrentTime(time);
    }

    for (var i = 0; i < heroList.length; i++) {
        var finalOutput = document.createElement("p");
        var hero = heroList[i];
        finalOutput.innerHTML = hero.name + " procced " + hero.procCount + " times.";
        outputBox.appendChild(finalOutput);
    }
}

function generateOutputForCurrentTime(newTime) {
    var tickOutput = document.createElement("p");
    tickOutput.innerHTML = "time: " + newTime;

    for (var i = 0; i < heroList.length; i++) {
        var heroSpan = document.createElement("span");
        heroSpan.innerHTML = heroList[i].getOutputTextForNewTime(newTime);
        tickOutput.appendChild(heroSpan);
    }
    outputBox.appendChild(tickOutput);
}

function setupHeroes() {
    heroList = [];
    var PD = new pumpkinDukeClass();
    PD.setup(5, 9, 8);
    PD.blitz = 5;
    heroList.push(PD);
    // var cupid = new cupidClass();
    // cupid.setup(5, 9, 0);
    // heroList.push(cupid);
    // var val = new valentinaClass();
    // val.setup(5, 9, 0);
    // heroList.push(val);
    var paladin = new heroClass();
    paladin.baseAttackSpeed = 1500;
    paladin.setup("Paladin", 0, 0);
    heroList.push(paladin);
}