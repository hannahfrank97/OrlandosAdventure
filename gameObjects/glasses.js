//objects that need to be collected 

class Glasses extends ImageObject{

    constructor(name, x, y, width, height, src) {
        super(name, x, y, width, height, src);
    }

    onCollision(otherObject) {
        if(otherObject.name == "orlando") {
            this.isActive = false;
        }
    }
}