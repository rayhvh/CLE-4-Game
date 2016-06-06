/**
 * GameObject
 */
class GameObject {
    
    protected div : HTMLElement;
    public posX : number;
    public posY : number;
    public width: number;
    public height: number;
    
    //protected score: number = 0;
    
    protected bgImage:string;
    
    private count: number = 0;
    private object: string;
    public removeMe:boolean;
    
    constructor(tagname:string) {
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
   
      public hit(object:string){
        //this.object = object;
        // moet naar healthy.ts
        /*
        if(object == "Healthy"){
            console.log("Score++");
            this.score++;
            
        }
        // unhealthy.ts
        else if(object == "UnHealthy"){
            console.log("Score--");
            this.score--;
        }
        */
        
        this.count++;
        console.log("Optellen " + this.count);
    }
    /*
    public giveScore(){
        return this.score;
    }
  */
 
 public update(){
        
        // delete object when out of screen..
        if(this.count == 1){
            this.removeFromGame();
        }
        
        else if(this.posY > window.innerHeight+200){       
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