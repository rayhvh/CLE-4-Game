
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
    
    private game:Game;
    public removeMe:boolean;
    
    constructor(g:Game) {
        // make div
        this.game = g; 
        this.removeMe = false;
        
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
        
        // delete object when out of screen..
        if(this.count == 1){
            this.removeFromGame();
        }
        
        else if(this.posY == window.innerHeight+200){  
            console.log("erin");          
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
    
    /*
    private removeFromGame(){
        // de div uit de dom halen
        console.log("de div wehalen: " + this.div);
        
         // deze instance uit de array halen
         this.game.removeObject(this);
         document.body.removeChild(this.div);
    }
    */
}