/**
 * Healthy
 */
class Healthy {
    private div : HTMLElement;
    private posX : number = window.innerWidth-130;
    private posY : number = window.innerHeight-100;
    private speedX : number;
    private speedY : number;
    
    private rightkey : number = 37;
    private leftkey : number = 39;
    private downSpeed : number = 0;
    private upSpeed : number = 0;
    
    constructor() {
        // make div
        this.div = document.createElement("healthy");
        document.body.appendChild(this.div);
        
        // div location
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
        
    }
   
  
 
 public move(){
        this.posX-200;
        this.posY-200;
                        
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px) scaleX(-100)";
    }
}