//counter on the left upper corner 

class Counter {
    element;
    _timer = 30;

    constructor(startTime, query){
        this._timer = startTime;
        this.element = document.getElementById('counter');
    }

    get timer(){
        return this._timer; //taking the property of the class
    }

    set timer(value){
        this._timer = value; //changing the property 
        this.element.textContent = Math.trunc(value); //to reduce decimal places
    }

    update () {
    if(this._timer <= 0) 
        window.location = "./gameovertime.html";
        return;
    }


}