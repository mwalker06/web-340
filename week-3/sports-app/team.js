/*
============================================
; Title:  team.js
; Author: Megan Walker
; Date:   01/20/23
; Description: team class module
;===========================================
*/

// Creating the Team class
class Team {
    constructor(name, mascot, playerCount) {
        // Initializing the properties in the constructor
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

// Exporting the class using Node's module system
module.exports = Team;
