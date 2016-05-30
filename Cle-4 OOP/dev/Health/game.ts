class Game {
    
    private player:Player;    
    private Healthy:Healthy;
    private Healthys:Array<Healthy> = new Array<Healthy>();
    
    private Apple:Apple;
    private Apples:Array<Apple> = new Array<Apple>();
    
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
         this.Apples.push( new Apple(this) );
    }
    
    /*
    public removeObject(a:Apple):void {
        // remove the last instance from the array
        //this.Apples.pop();
        
        
        // zoek in de array naar a
        // als gevonden, haal dan die instance uit de array
         for (var i=0;i  <this.Apples.length; i++) {
             console.log("checking " + i  + " = " + a);
             
            if(this.Apples[i] == a){
                console.log("gevonden, verwijder " + i);
            }
        }
        
        console.log("aantal apples is "+ this.Apples.length);
        
    }
    */
    
    private gameLoop(){
        this.frameCounter++;
        if(this.frameCounter > this.spawnFrequency){
            this.spawnObject();
            this.frameCounter = 0;            
        }
        
        // roep hier de move functie van de bal aan
        this.player.move();
        this.updateElements();   
           
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    
    private updateElements():void {
        for (var h of this.Healthys) {
            if(h.removeMe){
                // deze appel moet uit het spel
                // verwijder uit array
                // this.Apples.remove(a);
                var i = this.Healthys.indexOf(h);
               
                this.Healthys.splice(i,1);
                
                 console.log("verwijder bubble " + i + " array = "  + this.Healthys.length);
            } else {
            
            
                h.update();
                if(this.utils.hasOverlap(h, this.player)) h.hit();
            }
        }
        for (var a of this.Apples) {
            if(a.removeMe){
                // deze appel moet uit het spel
                // verwijder uit array
                // this.Apples.remove(a);
                var i = this.Apples.indexOf(a);
               
                this.Apples.splice(i,1);
                
                 console.log("verwijder appel " + i + " array = "  + this.Apples.length);
            } else {
            
            
                a.update();
                if(this.utils.hasOverlap(a, this.player)) a.hit();
            }
        }
    }
}