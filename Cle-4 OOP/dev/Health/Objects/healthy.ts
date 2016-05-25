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
    
    private count: number = 0;
    
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
        this.count++
        
        
    }
  
 
 public update(){
        this.posY+= 5;
        // delete object when out of screen.
        if(this.count == 1){
            document.body.removeChild(this.div);
        }
        
        if(this.count == 0){
            if(this.posY == window.innerHeight+200){
            console.log("ben je er?");
            document.body.removeChild(this.div);
        }
        }
        
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";  
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        
        
    }
}

/**
 * name
 */
class apple {
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
        console.log("hit");
        this.count++
        if(this.count == 1){
            document.body.removeChild(this.div);
        }      
    }
  
 
 public update(){
        this.posY += 2;
        // delete object when out of screen.
        if(this.posY == window.innerHeight+200){
        console.log("posY waarde --> " + this.posY);
            
           document.body.removeChild(this.div);
           console.log("tesjes");
        }
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";  
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        
        
    }
}