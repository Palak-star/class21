function isTouch(obs1,obs2) {

    if (obs1.x - obs2.x < obs2.width/2 + obs1.width/2
      && obs2.x - obs1.x < obs2.width/2 + obs1.width/2
      && obs1.y - obs2.y < obs2.height/2 + obs1.height/2
      && obs2.y - obs1.y < obs2.height/2 + obs1.height/2) {
   return true
  }
  else {
  
    return false
  }
  
  
  }