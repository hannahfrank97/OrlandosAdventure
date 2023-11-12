class GameObject {
	name = "";
    isActive = true;
    useGravity = false;
    isFalling = false;
    isRigid = false;
    antiGravityForce = 0;
    currentGravityCollisionObject = null;
    mass = 1;

    position =  {
        "x": 20,
        "y": 20
    };

    prevPosition =  {
        "x": 20,
        "y": 20
    };

    boundaries = {
        "getLeftBoundary": () => {
            return this.position.x + this.boundaryOffsets.left;
        }, 
        "getRightBoundary": () => {
            return this.position.x + this.dimensions.width + this.boundaryOffsets.right;
        }, 
        "getTopBoundary": () => {
            return this.position.y + this.boundaryOffsets.top;
        }, 
        "getBottomBoundary": () => {
            return this.position.y + this.dimensions.height + this.boundaryOffsets.bottom;
        }
    };

    boundaryOffsets = {
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0 
    }

    dimensions =  {
        "width": 40,
        "height": 40 //definition size Orlando
    };
    
    constructor(name, x, y, width, height) {
        this.name = name;
        this.position.x = x;
        this.position.y = y;
        this.dimensions.width = width;
        this.dimensions.height = height;
        gameManager.addGameObject(this);
        console.log("new Gameobject has been created");
    }

    storePosition() {
        this.prevPosition.x = this.position.x;
        this.prevPosition.y = this.position.y;
    }

    restorePosition() {
        this.position.x = this.prevPosition.x;
        this.position.y = this.prevPosition.y;
    }
    
    setBoundaryOffsets(left, right, top, bottom) {
        this.boundaryOffsets.left = left;
        this.boundaryOffsets.right = right;
        this.boundaryOffsets.top = top;
        this.boundaryOffsets.bottom = bottom;
    }

    addAntiGravityForce(force) {
        this.antiGravityForce += force;
    }

    update() {

    }

    draw() {
    }

    onCollision(otherObject) {
     
    }

}