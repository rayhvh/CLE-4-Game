/**
 * Healthy
 */
class Healthy {
    private div : HTMLElement;
    public posX : number;
    public posY : number;
    public width: number;
    public height: number;
       
    private rightkey : number = 37;
    private leftkey : number = 39;
    
    constructor() {
        // make div
        this.div = document.createElement("healthy");
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
        console.log("hit");
    }
  
 
 public update(){
        this.posY++;
        // delete object when out of screen.
        if(this.posY == window.innerHeight){
            document.body.removeChild(this.div);
        }
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";  
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        
        
    }
}