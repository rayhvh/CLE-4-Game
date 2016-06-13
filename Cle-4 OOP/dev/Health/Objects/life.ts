/// <reference path="../../scoredisplay.ts" />
/**
 * Life 
 */
class Life {

    private div: HTMLElement;
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    private score:ScoreDisplay;
    
    constructor(xpos:number, ypos:number, score:ScoreDisplay) {
        this.score = score;
        this.div = document.createElement("heart");
        this.score.heartdiv.appendChild(this.div);


                
        this.x = xpos;
        this.y = ypos;
        this.width = 100;
        this.height = 100;
        this.draw();
    }

     public draw():void
     {
           this.div.style.transform = "translate("+this.x+"px, "+this.y +"px)";  
     }

     public removeMe():void 
     {
         this.score.heartdiv.removeChild(this.div);
     }


}