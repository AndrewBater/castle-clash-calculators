"use strict";

const REVITE = [0, 20, 40, 60, 80, 100];

function heroClass() {
    this.name;
    this.hasAttacked = false;
    this.lastAttacked = 0;
    this.baseAttackSpeed = 1000;
    this.currentAttackSpeed = 1000;
    this.revite = 0;
    this.energy = 0;

    this.setup = function(reviteLevel) {
        this.revite = reviteLevel;
        this.energy = REVITE[this.revite];
    }

    this.update = function(newTime) {
        if (this.hasAttacked) {
            if (this.lastAttacked + this.currentAttackSpeed <= newTime) {
                this.hasAttacked = false;
            }
        }

        if (!this.hasAttacked) {
            this.hasAttacked = true;
            this.lastAttacked = newTime;
            this.energy += 15;
        }
    }

    this.getTimeOutputText = function(newTime) {
        this.update(newTime);
        return (this.name + " attacked, new energy " + this.energy + ". ");
    }
}