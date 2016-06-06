/// <reference path="../../gameobject.ts" />

class UnHealthy extends GameObject { 
    
    constructor() {
        super("unhealthy");
        this.changeDivBackground("unhealthy/bubble.png")
        this.startPosition((Math.random() * window.innerWidth),-50,50,50);         
    } 
    
     public hit(){
       
       //this.score--;
        
        
        super.hit();
    }
}