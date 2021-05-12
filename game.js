class Game{
  getState(){
    database.ref("gameState").on("value", function(data){
      gameState = data.val();
    })
  }

  update(state){
    database.ref("/").update({
      gameState: state
    })
  }

  start(){
    if(gameState == 0){
      form1 = new Form();
      form1.display();
    }
  }
}