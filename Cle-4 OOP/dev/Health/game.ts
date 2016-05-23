class Game {
    
    private player:Player;
    private Healthy:Healthy;
    
    constructor() {
        //
        this.player = new Player;
        this.Healthy = new Healthy;
        
        // start game loop      
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop(){
        // roep hier de move functie van de bal aan
           this.player.move();
           this.Healthy.auto();
           
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}