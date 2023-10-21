//plattforms to jump on 

class Plattform extends Obstacle{

constructor(name, x, y, width, height, src) {
    super(name, x, y, width, height, src);

    this.setBoundaryOffsets(-20, 30, 0, -100);
}

}