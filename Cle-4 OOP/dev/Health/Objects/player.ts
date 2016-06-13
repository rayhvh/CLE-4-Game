/// <reference path="../../gameobject.ts" />

class Player extends GameObject {    
   
    private speedX : number;
    private speedY : number;
    
    private rightkey : number = 37;
    private leftkey : number = 39;
    private downSpeed : number = 0;
    private upSpeed : number = 0;
    private flip:number = 1;

    constructor(g:Game) {
        super("player", g);       
        
        // keyboard listeners
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
        
        this.changeDivBackground("fish.png");
        this.startPosition(window.innerWidth -130,window.innerHeight -150,130,100);
    }  
 
   // keyboard input zorgt dat de snelheid wordt aangepast
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.rightkey:
            this.upSpeed = 25;
            // flip aanpassen zorgt voor scaleX en flipt je img naar goede kant zodat ie omdraait.
            this.flip = 1;
            break;
        case this.leftkey:
            this.downSpeed = 25;
            this.flip = -1;
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
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px) scaleX("+ this.flip +")";
    }
}