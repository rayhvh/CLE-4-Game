
/**
 * name
 */
class Apple {
    private div : HTMLElement;
    public posX : number;
    public posY : number;
    public width: number;
    public height: number;
       
    private rightkey : number = 37;
    private leftkey : number = 39;
    
    private count: number = 0;
    
    constructor() {
        // make div
        this.div = document.createElement("apple");
        document.body.appendChild(this.div);
        
        this.startPosition();
        
    }
   
   startPosition(){
       this.posX = 500;
       this.posY = -50;
       this.width = 50;
       this.height =50;
       
       this.posX = (Math.random() * window.innerWidth); 
        // div location
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
   }
   
    public hit(){
        console.log("hitApple");
        this.count++;
    }
  
 
 public update(){
        this.posY+= 4;
        console.log(this.count + "countapple");
        // delete object when out of screen.
        if(this.count == 1){
            document.body.removeChild(this.div);
        }
        
        if(this.count == 0){
            if(this.posY == window.innerHeight+200){
            console.log("APPLE");
            document.body.removeChild(this.div);
        }
        }
        
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";  
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        
        
    }
    
    private removeFromGame(){
        // de div uit de dom halen
         document.body.removeChild(this.div);
         
         // deze instance uit de array halen
         // this.game.removeFromGame(this);
    }
}