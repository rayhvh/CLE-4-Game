
class Main {
    constructor() {
		var posx = window.innerWidth / 2;
        var posy = window.innerHeight / 2;

		var title = document.createElement("titlepic");
		document.body.appendChild(title);
		title.style.top = posy - 200 + "px";
		title.style.left = posx - 400 + "px";

		var start = document.createElement("startbutton");
		start.addEventListener("click", this.startTimer.bind(this));
		document.body.appendChild(start);
		start.style.top = posy - 80 + "px";
		start.style.left = posx - 150 + "px";
    }
	startTimer() {

		var title = <HTMLScriptElement>document.getElementsByTagName("titlepic")[0];
		title.style.visibility = 'hidden';
		var startbutton = <HTMLScriptElement>document.getElementsByTagName("startbutton")[0];
		startbutton.style.visibility = 'hidden';

		setInterval(this.newFish.bind(this), 250);
		setInterval(this.newBubble.bind(this), 500);
	}

	newFish() {
		let newfish = new Fish();
	}
	newBubble() {
		let newbubble = new Bubble();
	}

}

// hier starten we de applicatie
window.addEventListener("load", function () {
    new Main();
});

