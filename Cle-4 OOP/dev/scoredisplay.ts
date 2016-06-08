/// <reference path="gameobject.ts" />


class ScoreDisplay extends GameObject {
    
    private score: number = 0;
    private divs: HTMLElement;
    constructor(g:Game) {
        super("score", g);
        console.log("Creating display");
        
        
    }
    public update(){
        console.log("Update de score display");
      
        this.div.innerHTML = "Score: "+ this.score; 
    }
    public scoreUp(){
        console.log("omhoog");
        this.score++;
    }
     public scoreDown(){
        console.log("omlaag");
        this.score--;
    }
    public giveScore(){
        return this.score;
    }

}