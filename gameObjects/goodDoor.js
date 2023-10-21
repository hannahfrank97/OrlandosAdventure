//final door to win the game 

class GoodDoor extends Obstacle {
    constructor(name, x, y, width, height) {
        super(name, x, y, width, height, "./images/Final_gooddoor.png");
 
    }

    onCollision(otherObject) {
        if(otherObject.name == "orlando") {
        window.location = "./gamewon.html"

        }
    }
}

