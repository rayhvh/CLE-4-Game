/// <reference path="objects/player.ts" />
/// <reference path="objects/healthy.ts" />
/// <reference path="objects/unhealthy.ts" />
/// <reference path="../utils.ts" />
/// <reference path="../scoredisplay.ts" />



class Game {
    
    private player:Player;
    private Healthy:Healthy;
    private Healthys:Array<Healthy> = new Array<Healthy>();
    
    private UnHealthy:UnHealthy;
    private UnHealthys:Array<UnHealthy> = new Array<UnHealthy>();
    
    private utils:Utils;
    
    public spawnFrequency:number;
    private frameCounter:number = 0;

    public scoreDisplay:ScoreDisplay;    

    constructor() {
        // this.spawnFrequency = this.Healthy.difficulty();
        this.spawnFrequency = 60;  

        this.player = new Player(this);
        this.utils = new Utils();
        this.scoreDisplay = new ScoreDisplay(this);
        
        // start game loop      
        requestAnimationFrame(this.gameLoop.bind(this));
    }
     
    private spawnObject():void {
         this.Healthys.push( new Healthy(this) );
         this.UnHealthys.push( new UnHealthy(this) );
            
    }
    
    private gameLoop(){
        this.frameCounter++;
        if(this.frameCounter > this.spawnFrequency){
            this.spawnObject();
            this.frameCounter = 0;            
        }
        
        // roep hier de move functie van de bal aan
        this.player.move();
        this.updateElements();   
        this.scoreDisplay.update();
           
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    
    private updateElements():void {
        
        for (var h of this.Healthys) {
            if(h.removeMe){
                // deze appel moet uit het speld
                // verwijder uit array
                // this.Apples.remove(a);
                var i = this.Healthys.indexOf(h);
               
                this.Healthys.splice(i,1);
                
                 // console.log("verwijder apple " + i + " array = "  + this.Healthys.length);
            } else {            
                h.update();
                if(this.utils.hasOverlap(h, this.player)) {
                    h.hit();
                    // de score display aanroepen
                    this.scoreDisplay.scoreUp();
                }
            }
        }
        
        for (var u of this.UnHealthys) {
            if(u.removeMe){
                // deze appel moet uit het spel
                // verwijder uit array
                // this.Apples.remove(a);
                var i = this.UnHealthys.indexOf(u);
               
                this.UnHealthys.splice(i,1);
                
                 // console.log("verwijder bubble " + i + " array = "  + this.UnHealthys.length);
            } else {      
                u.update();
                if(this.utils.hasOverlap(u, this.player)){
                   u.hit(); 
                   // de score display aanroepen
                    this.scoreDisplay.scoreDown();
                } 
            }
        }
    }

        public difficulty(){
        // change fall speed of objects
        let currentScore = this.scoreDisplay.giveScore();
        let speed:number = 0;
        console.log(currentScore);
        if(currentScore > 4){
            speed+= 5;
            this.spawnFrequency = 10;
        }
        else{
            speed+= 5;
            this.spawnFrequency = 60;
        }
        return speed;
        
     
    }
    
}