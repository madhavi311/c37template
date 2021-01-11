class Player {
  constructor(){
    //step 2.
    //define constructor propeties
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    //step 3. 
    // use the update function to update name and distance to the player
  }

 
  static getPlayerInfo(){
    //step 5.
     //static function will be called by themselves rather than by objects of the class
  }
}
