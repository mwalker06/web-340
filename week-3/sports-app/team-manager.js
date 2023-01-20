/*
============================================
; Title:  team-manager.js
; Author: Megan Walker
; Date:   01/20/2023
; Description: team manager array module
;===========================================
*/

// Importing the Team class from the team.js file
const Team = require('./team');

// Creating an array of five Team objects
const teams = [
    new Team("Carolina", "Hurricanes", 23),
    new Team("Columbus", "Blue Jackets", 23),
    new Team("New Jersey", "Devils", 23),
    new Team("New York", "Rangers", 23),
    new Team("Florida", "Panthers", 23)
];

// Creating the getTeams function
const getTeams = () => {
    return teams;
}
module.exports.getTeams = getTeams;

// Creating the getTeam function
const getTeam = (name) => {
    return teams.find(team => team.name === name);
}
module.exports.getTeam = getTeam;

// Creating the displayTeam function
const displayTeam = (team) => {
    return "Name: " + team.name + "\nMascot: " + team.mascot + "\nPlayer Count: " + team.playerCount;
}
module.exports.displayTeam = displayTeam;
