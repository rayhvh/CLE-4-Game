/**
 * GameObject
 */
class GameObject {
    
    protected div : HTMLElement;
    public posX : number;
    public posY : number;
    public width: number;
    public height: number;
    
    protected bgImage:string;
    
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
}