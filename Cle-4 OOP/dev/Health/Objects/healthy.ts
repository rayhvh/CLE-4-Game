/// <reference path="../../gameobject.ts" />
class Healthy extends GameObject {
    
    private images = ["healthy/apple.png", "healthy/carrot.jpg" ];

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
