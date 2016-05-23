class Bubble{
    constructor(){
        var posx =  Math.round(Math.random() * window.innerWidth)-120;
		var newbubble = document.createElement("bubble");
		document.body.appendChild(newbubble);
		newbubble.style.left = posx+ "px";
    }
    
}
