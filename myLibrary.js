







function isTouching(object1,object2){

    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
     
    return true;
  }

  else {
    return false;
  }

}
function bounceOff(car1,car2){

  if (car1.x - car2.x < car2.width/2 + car1.width/2
    && car2.x - car1.x < car2.width/2 + car1.width/2) {
      car1.velocityX = car1.velocityX * (-1);
      car2.velocityX = car2.velocityX * (-1);
}
if (car1.y - car2.y < car2.height/2 + car1.height/2
  && car2.y - car1.y < car2.height/2 + car1.height/2){
    car1.velocityY = car1.velocityY * (-1);
    car2.velocityY = car2.velocityY * (-1);
}
}























