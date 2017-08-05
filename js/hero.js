"use strict";

const REVITE = [0, 20, 40, 60, 80, 100];
const ZERK = [1, 1.1, 1.15, 1.2, 1.25, 1.3, 1.4, 1.5, 1.7];

function heroClass() {
    this.name;
    this.justAttacked = false;
    this.justProcced = false;
    this.hasAttacked = false;
    this.lastAttack = -50000;
    this.baseAttackSpeed = 1000;
    this.currentAttackSpeed = 1000;
    this.revite = 0;
    this.energy = 0;
    this.procCoolDown = 0;
    this.lastProc = -5000000;
    this.procCount = 0;
    this.zerk = 1;
    this.cyclone = { timeStart: 0, timeEnd: 0, gain: 0 };

    this.setup = function(name, reviteLevel, zerkLevel) {
        this.name = name;
        this.revite = reviteLevel;
        this.energy = REVITE[this.revite];
        this.zerk = ZERK[zerkLevel];
        this.currentAttackSpeed = this.baseAttackSpeed;
    }

    this.setCurrentAttackSpeed = function() {
        var speed = this.baseAttackSpeed;
        for (var i = 0; i < celebrateInstance.length; i++) {
            speed = speed / celebrateSkill;
        }
        var speed = speed / this.zerk;
        this.currentAttackSpeed = Math.ceil(speed / 200) * 200;
    }

    this.setCyclone = function(valSkill) {
        var energyPerTick = (tick * cyclone[valSkill] / cycloneDuration[valSkill]);
    }

    this.update = function(newTime) {
        //first of all set current attack speed
        this.setCurrentAttackSpeed();

        // if the hero is able to attck, call attack function
        if (this.lastAttack + this.currentAttackSpeed <= newTime) {
            this.justAttacked = true;
            this.lastAttack = newTime;
            if (this.energy >= 100 && this.lastProc + this.procCoolDown <= newTime) {
                this.proc(newTime);
            }
            this.energy += 15;
        }
    }

    this.proc = function(newTime) {
        this.lastProc = newTime;
        this.procCount++;
        this.justProcced = true;
        this.energy = 0;
    }

    this.getOutputTextForNewTime = function(newTime) {
        this.justAttacked = false;
        this.justProcced = false;
        this.update(newTime);
        var outputText = "";
        if (this.justAttacked) {
            outputText = this.name + " attacked ";
            if (this.justProcced) {
                outputText += "and procced. " + this.procCount + " total. ";
            } else {
                outputText += " new energy: " + this.energy + ". ";
            }
        }
        return outputText;
    }
}