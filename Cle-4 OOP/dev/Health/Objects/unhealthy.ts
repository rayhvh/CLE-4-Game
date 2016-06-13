/// <reference path="../../gameobject.ts" />

class UnHealthy extends GameObject { 
    
    private images = ["unhealthy/poison1.png", "unhealthy/spider1.png","unhealthy/Ultrapoison.png", "unhealthy/bubble.png" ];
    
    constructor(g:Game) {
        super("unhealthy",g);
        this.changeDivBackground(this.images[Math.floor((Math.random() * this.images.length) + 0)]);
        this.startPosition((Math.random() * window.innerWidth),-50,50,50);    
        this.speed = this.game.difficulty(); 
     
    } 
    
     public hit(){
       //this.score--;
        super.hit();
    }
}