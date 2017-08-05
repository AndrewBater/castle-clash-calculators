"use strict";

const cycloneSkill = [0, 24, 32, 40, 50, 60, 70, 84, 96, 108, 126]
const cycloneDuration = [1, 2000, 2000, 2000, 2500, 2500, 2500, 3000, 3000, 3000, 3500]
const cycloneCooldown = 6000;
var cyclone = { timeStart: 0, timeEnd: 0, gain: 0, active: false };

valentinaClass.prototype = new heroClass();
function valentinaClass() {
    this.skill = 1;

    this.superclassSetup = this.setup;
    this.setup = function(reviteLevel, skillLevel, zerkLevel) {
        this.procCoolDown = cycloneCooldown;
        this.procCount = 0;
        this.baseAttackSpeed = 1200;
        this.skill = skillLevel;

        var energyGainPerTick = tick * cycloneSkill[skillLevel] / cycloneDuration[skillLevel];
        cyclone.gain = energyGainPerTick;

        this.superclassSetup("Valentina", reviteLevel, zerkLevel);
    }

    this.superclassUpdate = this.update;
    this.update = function(newTime) {
        //check if cyclone is within time and set to inactive if necessary
        if (newTime > cyclone.timeEnd) {
            cyclone.active = false;
        }
        this.superclassUpdate(newTime);
    }

    this.superclassProc = this.proc;
    this.proc = function(newTime) {
        // set cyclone start and end time
        cyclone.timeStart = newTime;
        cyclone.timeEnd = newTime + cycloneDuration[this.skill];
        cyclone.active = true;

        this.superclassProc(newTime);
    }
}