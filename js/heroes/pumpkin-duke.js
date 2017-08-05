"use strict";

const celebrateLevel = [1, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55];
const celebrateDuration = 8000;
var celebrateInstance = [];
var celebrateSkill = 0;

pumpkinDukeClass.prototype = new heroClass();
function pumpkinDukeClass() {
    this.superclassSetup = this.setup;
    this.setup = function(reviteLevel, skillLevel, zerkLevel) {
        this.energy = 0;
        this.procCoolDown = 0;
        this.procCount = 0;
        celebrateSkill = celebrateLevel[skillLevel];
        this.superclassSetup("Pumpkin Duke", reviteLevel, 1000, zerkLevel);
    }

    this.superclassUpdate = this.update;
    this.update = function(newTime) {
        //check past celebrate instances and remove if older than time
        for (var i = 0; i < celebrateInstance.length; i++) {
            if (newTime > celebrateInstance[i] + celebrateDuration) {
                celebrateInstance.splice(i, 1);
            }
        }
        this.superclassUpdate(newTime);
    }

    this.superclassProc = this.proc;
    this.proc = function(newTime) {
        // adds a new celebrate instance for all heroes
        celebrateInstance.push(newTime);
        this.superclassProc(newTime);
    }
}