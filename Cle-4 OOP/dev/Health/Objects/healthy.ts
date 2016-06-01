/// <reference path="../../gameobject.ts" />

class Healthy extends GameObject {

    private count: number = 0;
    public removeMe:boolean;

    constructor() {
        super("healthy");
        this.changeDivBackground("bubble.png");
        this.startPosition((Math.random() * window.innerWidth),-50,50,50);
    }
   
    public hit(){
    this.count++;       
    }
  
 
    public update(){
            this.posY+= 5;
            // delete object when out of screen.
            if(this.count == 1){
                
                this.removeFromGame();
            }
            
            if(this.count == 0 && this.posY == window.innerHeight+200){
            
                this.removeFromGame();
        }
            
            this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";  
            // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
            
            
        }
    private removeFromGame(){
    // de div uit de dom halen
    this.removeMe = true;
        document.body.removeChild(this.div);
        // deze instance uit de array halen
        
        // this.game.removeFromGame(this);
    }
}
