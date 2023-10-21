//invisable wall on top to prevent player from leaving the canvas when jumping 


class Walltop extends Obstacle {

    constructor(name, x, y, width, height) {
        super(name, x, y, width, height);
 
    }

    draw() {
            gameManager.canvas.drawLayer.beginPath();
            gameManager.canvas.drawLayer.rect (this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
            gameManager.canvas.drawLayer.closePath();
        }
    }
