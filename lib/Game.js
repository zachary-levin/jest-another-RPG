const inquirer = require('inquirer');
const Enemy = require('./Enemy.js');
const Player = require('./Player.js');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];
};

inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    // destructure name from the prompt object
    .then(({ name }) => {
        this.player = new Player(name);

        // test the object creation
        console.log(this.currentEnemy, this.player);
        this.startNewBattle();
    });
module.exports = Game;

// NOTE AT END OF 10.4.3: currentEnemy properties don't console.log successfully