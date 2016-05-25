/**
 * Player
 */
class Player {
    private div : HTMLElement;
    
    public posX : number;
    public posY : number;
    public width: number;
    public height: number;
    
    private speedX : number;
    private speedY : number;
    
    private rightkey : number = 37;
    private leftkey : number = 39;
    private downSpeed : number = 0;
    private upSpeed : number = 0;
    
    constructor() {
        // make div
        this.div = document.createElement("player");
        document.body.appendChild(this.div);       
        
        
        // keyboard listeners
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
        
        this.startPosition();
    }
    
    private startPosition(){
        this.posX = window.innerWidth-130;
        this.posY = window.innerHeight-100;
        this.width = 130;
        this.height = 110;
        // div location
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }
    
 
   // keyboard input zorgt dat de snelheid wordt aangepast
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.rightkey:
            this.upSpeed = 5;
            break;
        case this.leftkey:
            this.downSpeed = 5;
            break;
        }
    }
    
    // speed op 0 alleen als de eigen keys zijn losgelaten
    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.rightkey:
            this.upSpeed = 0;
            break;
        case this.leftkey:
            this.downSpeed = 0;
            break;
        }
    }
  
 
 public move(){
        this.posX = this.posX - this.upSpeed + this.downSpeed;
                        
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px) scaleX(-1)";
    }
}