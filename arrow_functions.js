// Exercise 1
// const team = {
//     members: ['Jane', 'Bill'],
//     teamName: 'Super Squad',
//     teamSummary: function() {
//         return this.members.map(member => `${member} is on team ${this.teamName}`)
//     }
// }

// console.log(team.teamSummary())

// Exercise 2

// 'this' inside fat arrows function reference the outer level object,
// In this case the 'this' is referencing Window which is outer level of profile 
const profile = {
    name: 'Alex',
    getName: function() { 
        return this.name
    }
};

console.log(profile.getName())