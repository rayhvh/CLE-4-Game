/// <reference path="../../gameobject.ts" />
class Healthy extends GameObject {
    
    private images = ["healthy/apple2.png", "healthy/banana1.png","healthy/Orange_1.png" ];

    constructor() {
        super("healthy");
        this.changeDivBackground(this.images[Math.floor((Math.random() * this.images.length) + 0)]);
        this.startPosition((Math.random() * window.innerWidth),-50,50,50);      
    }
    
     public hit(){
        //this.score++;
        
        super.hit();
    }
}
