const team = {
    _players : [],
    _games : [],
    getPlayers() {
        return this._players;
    },
    getGames() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName,newAge) {
        const newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints,newOpponentPoints) {
    const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
    };
    this._games.push(newGame);   
    }
};

team.addPlayer('Lebron', 'James', 37);
team.addPlayer('Michael', 'Jordan', 58);
team.addPlayer('Curry', 'Stephen', 34);

team.addGame('celtics', 98,96);
team.addGame('Lakers',110,105);
team.addGame('Raptors',105,100);

console.log(team._players);
console.log(team._games);