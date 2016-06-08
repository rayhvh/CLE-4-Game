/// <reference path="../../gameobject.ts" />

class UnHealthy extends GameObject { 
    
    private images = ["unhealthy/poison1.png", "unhealthy/spider1.png","unhealthy/Ultrapoison.png", "unhealthy/bubble.png" ];
    
    constructor() {
        super("unhealthy");
        this.changeDivBackground(this.images[Math.floor((Math.random() * this.images.length) + 0)]);
        this.startPosition((Math.random() * window.innerWidth),-50,50,50);         
    } 
    
     public hit(){
       
       //this.score--;
        
        
        super.hit();
    }
}