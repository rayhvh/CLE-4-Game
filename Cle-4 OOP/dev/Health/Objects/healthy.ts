/// <reference path="../../gameobject.ts" />
class Healthy extends GameObject {
    
    private images = ["healthy/apple2.png", "healthy/banana1.png","healthy/Orange_1.png" ];

    constructor(g:Game) {
        super("healthy",g);
        this.changeDivBackground(this.images[Math.floor((Math.random() * this.images.length) + 0)]);
        this.startPosition((Math.random() * window.innerWidth),-50,50,50);    
        this.speed = this.game.difficulty(); 
  
    }
    
     public hit(){
        //this.score++;
        
        super.hit();
    }

    
}
