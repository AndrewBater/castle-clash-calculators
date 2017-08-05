"use strict";

const REVITE = [0, 20, 40, 60, 80, 100];

function heroClass() {
    this.name;
    this.justAttacked = false;
    this.hasAttacked = false;
    this.lastAttack = 0;
    this.baseAttackSpeed = 1000;
    this.currentAttackSpeed = 1000;
    this.revite = 0;
    this.energy = 0;
    this.procCoolDown = 0;
    this.lastProc = 0;

    this.setup = function(reviteLevel, speed) {
        this.revite = reviteLevel;
        this.energy = REVITE[this.revite];
        this.baseAttackSpeed = speed;
        this.currentAttackSpeed = speed;
    }

    this.update = function(newTime) {
        if (this.hasAttacked) {
            if (this.lastAttack + this.currentAttackSpeed <= newTime) {
                this.hasAttacked = false;
            }
        }

        if (!this.hasAttacked) {
            this.justAttacked = true;
            this.hasAttacked = true;
            this.lastAttack = newTime;
            this.energy += 15;
        }
    }

    this.getTimeOutputText = function(newTime) {
        this.justAttacked = false;
        this.update(newTime);
        if (this.justAttacked) {
            return (this.name + " attacked, new energy " + this.energy + ". ");
        } else { return ""; }
    }
}