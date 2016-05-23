class Game {
    
    private player:Player;
    
    constructor() {
        //
        this.player = new Player;
        
        // start game loop      
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop(){
        // roep hier de move functie van de bal aan
           
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}