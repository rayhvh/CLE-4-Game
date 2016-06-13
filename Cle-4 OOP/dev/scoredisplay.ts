/// <reference path="gameobject.ts" />
/// <reference path="health/objects/life.ts" />


class ScoreDisplay extends GameObject {
    
    private score: number = 0;
    public textdiv:HTMLElement;
    public heartdiv:HTMLElement;

    private life:Life;
    private lifes:Array<Life> = new Array<Life>();
    

    constructor(g:Game) {
        super("score", g);
        console.log("Creating display");
       

       this.textdiv = document.createElement("scoretext");
       this.heartdiv = document.createElement("scorehearts");
       this.div.appendChild(this.textdiv);
       this.div.appendChild(this.heartdiv);

       this.lifes.push(new Life(300,0,this),new Life(400,0,this),new Life(500,0,this));
      
    }


    public update(){
        this.textdiv.innerHTML = "Score: "+ this.score; 
    }
    public scoreUp(){
  
        this.score++;
    }
     public scoreDown(){
       
        // haal 10 van score af zodat het wat slomer wordt en zorgt ervoor dat die niet onder de 0 kan raken.
        this.score -= 10;
        if (this.score < 0)  {this.score = 0}
        this.game.lifesleft -= 1;
       if (this.game.lifesleft < 3)
        {
            this.lifes[this.game.lifesleft].removeMe();
            this.lifes.splice(this.game.lifesleft,1)
        }
          
    }
    public giveScore(){
        return this.score;
    }

}