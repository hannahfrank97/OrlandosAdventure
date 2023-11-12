/*score on the upper left corner, shows how many 
glasses have been collected*/ 

class Score extends GameObject {
    score = 0;
    image = new Image();
    isLoaded = false;
    element;

    constructor(ScoreId) {
        super("score", 10, 10, 32, 32);
        this.image.src = "./images/Glasses.png";
        this.image.addEventListener("load", () => {
            this.isLoaded = true;
        });
        this.element = document.querySelector("#score");
        this.element.textContent = "0";
    }
    increaseScore() {
        this.score++;
        this.element.textContent = this.score;
    }
    
}