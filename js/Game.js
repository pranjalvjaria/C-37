class Game {
  constructor() {}

  getState() {
    var gameStateref=database.ref("gameState")
    gameStateref.on("value",function(data){
      gameState=data.val()
    })
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
  }
}
