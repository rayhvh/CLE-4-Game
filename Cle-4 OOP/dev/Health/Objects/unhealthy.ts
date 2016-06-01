/// <reference path="../../gameobject.ts" />

class UnHealthy extends GameObject {
    
    private count: number = 0;
    private game:Game;
    public removeMe:boolean;
    
    constructor() {
        super("unhealthy");
        this.changeDivBackground("bubble.png")
        // make div
        // this.game = g; 
        // this.removeMe = false;
        
        this.startPosition((Math.random() * window.innerWidth),-50,50,50);
                
    }
   
   
    public hit(){
        console.log("hitBubble");
        this.count++;
    }
  
 
 public update(){
        
        // delete object when out of screen..
        if(this.count == 1){
            this.removeFromGame();
        }
        
        else if(this.posY > window.innerHeight+200){  
            console.log("Unhealthy");          
            this.removeFromGame();        
        }
        
        else{
            this.posY+= 5;
            this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";  
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        }
        
    }
    
    private removeFromGame(){
        this.removeMe = true;
        document.body.removeChild(this.div);
    }
    
}