var Bubble = (function () {
    function Bubble() {
        var posx = Math.round(Math.random() * window.innerWidth) - 120;
        var newbubble = document.createElement("bubble");
        document.body.appendChild(newbubble);
        newbubble.style.left = posx + "px";
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var posx = Math.round(Math.random() * window.innerWidth) - 120;
        var posy = Math.round(Math.random() * window.innerHeight) - 120;
        this.newfish = document.createElement("fish");
        this.newfish.addEventListener("click", this.killFish.bind(this));
        document.body.appendChild(this.newfish);
        this.newfish.style.top = posy + "px";
        this.newfish.style.left = posx + "px";
        var hue = Math.round(Math.random() * 1080);
        this.newfish.style.filter = "heu-rotate(" + hue + "deg)";
        this.newfish.style.webkitFilter = "hue-rotate(" + hue + "deg)";
    }
    Fish.prototype.killFish = function (e) {
        e.target.classList.add("deadfish");
        console.log(e.target);
    };
    return Fish;
}());
var Main = (function () {
    function Main() {
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
    Main.prototype.startTimer = function () {
        var title = document.getElementsByTagName("titlepic")[0];
        title.style.visibility = 'hidden';
        var startbutton = document.getElementsByTagName("startbutton")[0];
        startbutton.style.visibility = 'hidden';
        setInterval(this.newFish.bind(this), 250);
        setInterval(this.newBubble.bind(this), 500);
    };
    Main.prototype.newFish = function () {
        var newfish = new Fish();
    };
    Main.prototype.newBubble = function () {
        var newbubble = new Bubble();
    };
    Main.prototype.killFish = function (e) {
        e.target.classList.add("deadfish");
        console.log(e.target);
    };
    return Main;
}());
window.addEventListener("load", function () {
    new Main();
});
//# sourceMappingURL=main.js.map