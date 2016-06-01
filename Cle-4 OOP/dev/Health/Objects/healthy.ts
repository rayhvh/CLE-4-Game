/// <reference path="../../gameobject.ts" />

class Healthy extends GameObject {

    private count: number = 0;
    public removeMe:boolean;

    constructor() {
        super("healthy");
        this.changeDivBackground("apple.png");
        this.startPosition((Math.random() * window.innerWidth),-50,50,50);
    }
   
    public hit(){
        console.log("HITappple");
        this.count++;       
    }
  
 
    public update(){
    // delete object when out of screen..
        if(this.count == 1){
            this.removeFromGame();
        }
        
        else if(this.posY > window.innerHeight+200){  
            console.log("Healthy");          
            this.removeFromGame();        
        }
        
        else{
            this.posY+= 5;
            this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";  
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        }
            
        }
    private removeFromGame(){
    // de div uit de dom halen
    this.removeMe = true;
        document.body.removeChild(this.div);
        // deze instance uit de array halen
        
        // this.game.removeFromGame(this);
    }
}
