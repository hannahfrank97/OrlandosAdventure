class ImageObject extends GameObject {
    image;
    src;
    animations = {};
    columns = 0;
    rows = 0;
    currentSourceX = 0;
    currentSourceY = 0;
    currentStartFrame = 0;
    currentEndFrame = 0;
    currentAnimationFrame = 0;
    isLoaded = false;
    animationDurationPerFrame = 5;
    currentAnimationFrameDuration = 0;

    constructor(name, x, y, width, height, src) {
        super(name, x, y, width, height);

        if(src){
            this.image = new Image();
            this.image.src = src;
            this.image.addEventListener("load", () => {
                this.isLoaded = true;
                this.columns = this.image.naturalWidth / this.dimensions.width;
                this.rows = this.image.naturalHeight / this.dimensions.height;
            });    
        }
    }
   
    draw() {
        // DEBUG ONLY
        if (gameManager.debugMode) {
            gameManager.canvas.drawLayer.fillRect(this.position.x, this.position.y, this.dimensions.height, this.dimensions.width);
        }

        if (this.isLoaded) {
            this.changeFrameOfCurrentAnimation();
            gameManager.canvas.drawLayer.beginPath();
            gameManager.canvas.drawLayer.drawImage(this.image, this.currentSourceX, this.currentSourceY, this.dimensions.width, this.dimensions.height, this.position.x, this.position.y, this.dimensions.height, this.dimensions.width);
            gameManager.canvas.drawLayer.closePath();
        }
    }

    setCurrentAnimation(startFrame, endFrame) {
        this.currentStartFrame = startFrame;
        this.currentEndFrame = endFrame;
        this.currentAnimationFrame = startFrame;
    }

    changeFrameOfCurrentAnimation() {
        this.currentAnimationFrameDuration++;
        if (this.currentAnimationFrameDuration < this.animationDurationPerFrame) {
            return;
        }
        this.currentAnimationFrameDuration = 0;
        if (this.currentAnimationFrame > this.currentEndFrame) {
            this.currentAnimationFrame = this.currentStartFrame;
        }
        let currentRow = Math.floor(this.currentAnimationFrame / this.columns);
        let currentColumn = this.currentAnimationFrame % this.columns;
        this.currentSourceY = currentRow * this.dimensions.height;
        this.currentSourceX = currentColumn * this.dimensions.width;
        this.currentAnimationFrame++;
    }

    addAnimationInformation(name, startFrame, endFrame) {
        let animationInformation = {
            "startFrame": startFrame,
            "endFrame": endFrame
        }

        this.animations[name] = animationInformation;

    }

    setCurrentAnimationByName(name) {
        this.currentStartFrame = this.animations[name].startFrame;
        this.currentEndFrame = this.animations[name].endFrame;
        this.currentAnimationFrame = this.animations[name].startFrame;
    } 
}