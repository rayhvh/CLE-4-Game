/**
 * Healthy
 */
class Healthy {
    private div : HTMLElement;
    private posX : number = 500;
    private posY : number = 20;
       
    private rightkey : number = 37;
    private leftkey : number = 39;
    
    constructor() {
        // make div
        this.div = document.createElement("healthy");
        document.body.appendChild(this.div);
        
        // div location
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
        
        requestAnimationFrame(() => this.auto());  
    }
   
  
 
 public auto(){
        this.posY++;
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";  
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        
        
    }
}