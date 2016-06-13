/**
 * GameObject
 */
class GameObject {
    
    public div : HTMLElement;
    public posX : number;
    public posY : number;
    public width: number;
    public height: number;
    
    protected bgImage:string;
    
    public speed:number = 0;
    private object: string;
    public removeMe:boolean;

    private scores: number = 0;
    public game: Game;
    
    constructor(tagname:string  ,g:Game) {
      this.game = g;
        // make div
        this.div = document.createElement(tagname);
        document.body.appendChild(this.div);
    }
    
    protected changeDivBackground(image:string){
        this.bgImage = image;
       
        this.div.style.backgroundImage = "url(images/"+image+")";
    }
    
     protected startPosition(posX:number,posY:number,width:number,height:number){
       this.posX = posX;
       this.posY = posY;
       this.width = width;
       this.height = height;

        // div location
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
   }
   
      public hit(){        
         this.removeFromGame();
    }
 
 public update(){
      
        // delete object when out of screen..
        if(this.posY > window.innerHeight+200){       
            this.removeFromGame();        
        }
        
        else{

            this.posY+= this.speed;
            this.div.style.transform = "translate("+this.posX+"px, "+this.posY +"px)";  
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        }
        
    }
    
    private removeFromGame(){
        this.removeMe = true;
        document.body.removeChild(this.div);
    }


   
}