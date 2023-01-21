/*
============================================
; Title:  index.js
; Author: Megan Walker
; Date:   01/20/2023
; Description: index.js main program for teams module
;===========================================
*/

// Imports the TeamManager module from the team-manager.js file
const TeamManager = require('./team-manager'); 

// Gets a an array of team objects from the team-manager.js file.
let teams = TeamManager.getTeams();

// Displays the contents of the teams array.
console.log('-- DISPLAYING TEAMS --');
for (let team of teams) {
    console.log(TeamManager.displayTeam(team));
}

// Creates a variable named team1 and calls the getTeam() function. 
let team1 = TeamManager.getTeam('New York');

// Creates a variable name team2 and calls the getTeam() function.
let team2 = TeamManager.getTeam('Carolina')

// Displays the contents of the team1 variable 
console.log('\n\n-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(team1));

// Displays the contents of the team2 variable.
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(team2));
