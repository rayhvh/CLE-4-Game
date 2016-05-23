class Fish{
	
	newfish ;
	
    constructor(){
        var posx =  Math.round(Math.random() * window.innerWidth)-120;
        var posy =  Math.round(Math.random() * window.innerHeight)-120;
		this.newfish = document.createElement("fish");
		this.newfish.addEventListener("click",this.killFish.bind(this));
		document.body.appendChild(this.newfish);
		this.newfish.style.top = posy +"px";
		this.newfish.style.left = posx+ "px";
		var hue = Math.round(Math.random() * 1080);
		this.newfish.style.filter = "heu-rotate("+ hue +"deg)";
	    this.newfish.style.webkitFilter = "hue-rotate("+ hue +"deg)";
    }
		killFish(e) {

		e.target.classList.add("deadfish");
		console.log(e.target);

	}

}