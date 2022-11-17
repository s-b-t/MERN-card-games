const CardGameController = require('../controllers/CardGame.controller');

module.exports = function(app){
    app.get('/', CardGameController.index);
}