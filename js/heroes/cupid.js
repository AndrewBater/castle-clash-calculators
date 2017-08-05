"use strict";

const cupidsArrow = [0, 10, 15, 20, 25, 30, 35, 40, 45, 55, 65];
const cupidsArrowCooldown = 6000;
var arrowSkill = 0;

cupidClass.prototype = new heroClass();
function cupidClass() {
    this.superclassSetup = this.setup;
    this.setup = function(reviteLevel, skillLevel, zerkLevel) {
        this.procCoolDown = cupidsArrowCooldown;
        this.procCount = 0;
        this.baseAttackSpeed = 1200;
        arrowSkill = cupidsArrow[skillLevel];

        this.superclassSetup("Cupid", reviteLevel, zerkLevel);
    }

    this.superclassUpdate = this.update;
    this.update = function(newTime) {

        this.superclassUpdate(newTime);
    }

    this.superclassProc = this.proc;
    this.proc = function(newTime) {
        // adds energy to all other heroes 
        for (var i = 0; i < heroList.length; i++) {
            var hero = heroList[i];
            if (hero.name !== "Cupid") {
                hero.energy += arrowSkill;
            }
        }
        this.superclassProc(newTime);
    }
}