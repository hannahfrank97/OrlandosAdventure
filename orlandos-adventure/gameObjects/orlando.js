//player figure 

class Orlando extends ImageObject {
    moveBy = {
        "left": 0,
        "top": 0,
    };

    moveVelocity = 2;
    startJump = false;
    facingDirection = 1; //in which direction player is looking - important for jumping animation 

    score = new Score("score");

    constructor(name, x, y, width, height, src) {
        super(name, x, y, width, height, src);
        console.log("Orlando has been created");
        this.useGravity = true;
        this.mass = .6;
    }

    update() {
        this.position.x += this.moveBy.left;
        this.position.y += this.moveBy.top;
        this.checkWorldPostion();

        if (this.startJump) {
            this.addAntiGravityForce(200); //how high Orlando jumps
            this.startJump = false;
        }
    }

    checkWorldPostion() {
        if (this.boundaries.getBottomBoundary() <= gameManager.canvas.canvasBoundaries.top) {
            this.position.y = gameManager.canvas.canvasBoundaries.bottom;
        }
        else if (this.boundaries.getTopBoundary() >= gameManager.canvas.canvasBoundaries.bottom) {
            this.position.y = gameManager.canvas.canvasBoundaries.top - this.dimensions.height;
        }
        else if (this.boundaries.getRightBoundary() <= gameManager.canvas.canvasBoundaries.left) {
            this.position.x = gameManager.canvas.canvasBoundaries.right;
        }
        else if (this.boundaries.getLeftBoundary() >= gameManager.canvas.canvasBoundaries.right) {
            this.position.x = gameManager.canvas.canvasBoundaries.left - this.dimensions.width;
        }
    }

    onCollision(otherObject) {
        if (otherObject.name == "glasses") {
            this.score.increaseScore();
        }
    }




}