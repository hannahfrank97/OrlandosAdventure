//final door to lose the game 

class BadDoor extends Obstacle {
    constructor(name, x, y, width, height) {
        super(name, x, y, width, height, "./images/Final_door_game.png");
 
    }

    onCollision(otherObject) {
        if(otherObject.name == "orlando") {
        window.location = "./gameover.html"

        }
    }


}