// Sidescroller

class MoveLevel extends GameObject { 

gameContainer;
minMarginLeft;

constructor (name,x,y,width,height,gameContainerId) {
super (name,x,y,width,height);
this.gameContainer = document.getElementById(gameContainerId);
let currentGameContainerWidth = parseInt(this.gameContainer.style.width);
let currentCanvasWidth = gameManager.canvas.canvasHTMLElement.width;
this.minMarginLeft = currentGameContainerWidth - currentCanvasWidth;

}

onCollision(otherObject) {
let currentGameContainerMLeft = parseInt(gameContainer.style.marginLeft);
let currentGameContainerWidth = parseInt (gameContainer.style.width)

let shouldMoveLevel = false;

if (this.name == "moveRight" && otherObject.name == "orlando" && otherObject.moveBy.left > 0 && currentGameContainerMLeft > this.minMarginLeft) {
    shouldMoveLevel = true;
}
else if (this.name == "moveLeft" && otherObject.name == "orlando" && otherObject.moveBy.left < 0 && currentGameContainerMLeft < 0) {
shouldMoveLevel = true;

}

if (shouldMoveLevel) {

    gameContainer.style.marginLeft = currentGameContainerMLeft - otherObject.moveBy.left + "px";
    gameContainer.style.width = currentGameContainerWidth + otherObject.moveBy.left + "px";

    moveLeft.position.x += otherObject.moveBy.left;
    moveRight.position.x += otherObject.moveBy.left;

}

}

}

    