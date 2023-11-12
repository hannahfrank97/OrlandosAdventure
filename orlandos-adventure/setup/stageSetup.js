let gameManager = new GameManager();

new GameManager();

let wallMap = [
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 2],
    [0, 0, 2, 4, 0, 0, 0, 0, 2, 4, 4],
    [0, 2, 4, 0, 0, 0, 0, 4, 4, 0],
    [0, 4, 0, 4, 0, 0, 4, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 4],
];

let canvas = new Canvas("canvas");
let orlando = new Orlando("orlando", 210, 308, 125, 125, "./images/spritesheet_Orlando.png");
let plattform = new Plattform ("plattform",1005, 480, 70, 100, "./images/Platform_game.png");
let glasses = new Glasses ("glasses", 1035, 430, 50, 50, "./images/Glasses.png");
orlando.setBoundaryOffsets(60, -60, 20, -9);
orlando.addAnimationInformation("walk_right", 0, 6);
orlando.addAnimationInformation("walk_left", 7, 13);
orlando.addAnimationInformation("jumping_right", 14, 20);
orlando.addAnimationInformation("jumping_left", 21, 27);

orlando.addAnimationInformation("idle_right", 6, 6);
orlando.addAnimationInformation("idle_left", 13, 13);
orlando.addAnimationInformation("idle_jumping_right", 15, 15);
orlando.addAnimationInformation("idle_jumping_left", 22, 22);



function playGround() {
    for (let y = 0; y < wallMap.length; y++) {
        for (let x = 0; x < wallMap[y].length; x++) {
            if (wallMap[y][x] == 1) {
                new Wall("wall", x * 100, y * 100, 100, 100);
            } else if (wallMap[y][x] == 2) {
                new Glasses("glasses", x * 100 + 40, y * 100 + 40, 50, 50, "./images/Glasses.png");
            } else if (wallMap[y][x] == 4) {
                new Plattform ("plattform", x * 100, y * 100, 70, 100, "./images/Platform_game.png"); 
                
            }
        }
    }
}

playGround();

//2 vertical rectangles to manage the sidescroller - not visible 
let moveLeft = new MoveLevel ("moveRight",300,0,10,800, "gameContainer");
let moveRight = new MoveLevel ("moveLeft", 150, 0, 21, 800, "gameContainer");

//2 possible endings
new GoodDoor("goodDoor", 1100, 20, 90, 90);
new BadDoor ("badDoor", 1100, 400, 90, 90);

//wall on top to prevent player from leaving the canvas 
let walltop = new Walltop ("walltop", 1,1,1200,1);

requestAnimationFrame(gameManager.gameLoop);


