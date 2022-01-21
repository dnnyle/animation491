const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./lavaB.jpg");
ASSET_MANAGER.queueDownload("./lavafish.png");

ASSET_MANAGER.downloadAll(() => { 
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	//addbackground
	gameEngine.addEntity(new lavafish(gameEngine));
	gameEngine.addEntity(new background());
	
	
	gameEngine.init(ctx);

	gameEngine.start();
});
