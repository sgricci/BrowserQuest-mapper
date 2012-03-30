
define(['jquery', 'app'], function($, App) {
	var app, game;

	var initApp = function() {
		$(document).ready(function() {
			app = new App();
			app.center();
			
			log.info("App initialized.");
		
			initGame();
		});
	};
	
	var initGame = function() {
		require(['game'], function(Game) {
			
			var canvas = document.getElementById("entities"),
				background = document.getElementById("background"),
				foreground = document.getElementById("foreground"),
				input = document.getElementById("chatinput");

			game = new Game(app);
			game.setup('#bubbles', canvas, background, foreground, input);
			game.setStorage(app.storage);
			app.setGame(game);
			
			if(app.isDesktop && app.supportsWorkers) {
				game.loadMap();
			}

    		game.onGameStart(function() {
                app.initEquipmentIcons();
    		});
    		var name='sgc2c';
		    app.tryStartingGame(name);
		});
	};
	
	initApp();
	log.info("Trying to start game");


});
