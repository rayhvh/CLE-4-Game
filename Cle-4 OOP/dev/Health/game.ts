class Game {
    
    private player:Player;    
    private Healthy:Healthy;
    private Healthys:Array<Healthy> = new Array<Healthy>();
    
    private Healthy:Apple;
    private Apples:Array<apple> = new Array<apple>();
    
    private utils:Utils;
    
    private spawnFrequency:number;
    private frameCounter:number = 0;
    
    constructor() {
        //
        //for(let i=0;i<10;i++){
        //        this.Healthys.push( new Healthy() );
                           
        //}
       
        this.spawnFrequency = 60;
        
        this.player = new Player;
        
        this.utils = new Utils();
        
        // start game loop      
        requestAnimationFrame(this.gameLoop.bind(this));
        
    }
     
    private spawnObject():void {
         this.Healthys.push( new Healthy() );
         this.Apples.push( new apple() );
    }
    
    private gameLoop(){
        this.frameCounter++;
        if(this.frameCounter > this.spawnFrequency){
            this.spawnObject();
            this.frameCounter = 0;
            console.log(this.frameCounter);
            
        }
        
        // roep hier de move functie van de bal aan
        this.player.move();
                     
        for(let i = 0;i<this.Healthys.length;i++){
            this.Healthys[i].update();
        }
        
        for(let i = 0;i<this.Apples.length;i++){
            this.Apples[i].update();
        }
        
        this.updateElements();   
           
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private updateElements():void {
        for (var h of this.Healthys) {
           
            if(this.utils.hasOverlap(h, this.player)) h.hit();
            
           // h.update();
        }
        
    }
    
    
}