var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject(tagname) {
        this.div = document.createElement(tagname);
        document.body.appendChild(this.div);
    }
    GameObject.prototype.changeDivBackground = function (image) {
        this.bgImage = image;
        this.div.style.backgroundImage = "url(images/" + image + ")";
    };
    GameObject.prototype.startPosition = function (posX, posY, width, height) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return GameObject;
}());
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this, "player");
        this.rightkey = 37;
        this.leftkey = 39;
        this.downSpeed = 0;
        this.upSpeed = 0;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
        this.changeDivBackground("fish.png");
        this.startPosition(window.innerWidth - 130, window.innerHeight - 100, 130, 100);
    }
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.rightkey:
                this.upSpeed = 5;
                break;
            case this.leftkey:
                this.downSpeed = 5;
                break;
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.rightkey:
                this.upSpeed = 0;
                break;
            case this.leftkey:
                this.downSpeed = 0;
                break;
        }
    };
    Player.prototype.move = function () {
        this.posX = this.posX - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(-1)";
    };
    return Player;
}(GameObject));
var Healthy = (function (_super) {
    __extends(Healthy, _super);
    function Healthy() {
        _super.call(this, "healthy");
        this.count = 0;
        this.changeDivBackground("apple.png");
        this.startPosition((Math.random() * window.innerWidth), -50, 50, 50);
    }
    Healthy.prototype.hit = function () {
        console.log("HITappple");
        this.count++;
    };
    Healthy.prototype.update = function () {
        if (this.count == 1) {
            this.removeFromGame();
        }
        else if (this.posY > window.innerHeight + 200) {
            console.log("Healthy");
            this.removeFromGame();
        }
        else {
            this.posY += 5;
            this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        }
    };
    Healthy.prototype.removeFromGame = function () {
        this.removeMe = true;
        document.body.removeChild(this.div);
    };
    return Healthy;
}(GameObject));
var UnHealthy = (function (_super) {
    __extends(UnHealthy, _super);
    function UnHealthy() {
        _super.call(this, "unhealthy");
        this.count = 0;
        this.changeDivBackground("bubble.png");
        this.startPosition((Math.random() * window.innerWidth), -50, 50, 50);
    }
    UnHealthy.prototype.hit = function () {
        console.log("hitBubble");
        this.count++;
    };
    UnHealthy.prototype.update = function () {
        if (this.count == 1) {
            this.removeFromGame();
        }
        else if (this.posY > window.innerHeight + 200) {
            console.log("Unhealthy");
            this.removeFromGame();
        }
        else {
            this.posY += 5;
            this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        }
    };
    UnHealthy.prototype.removeFromGame = function () {
        this.removeMe = true;
        document.body.removeChild(this.div);
    };
    return UnHealthy;
}(GameObject));
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.hasOverlap = function (c1, c2) {
        return !(c2.posX > c1.posX + c1.width || c2.posX + c2.width < c1.posX || c2.posY > c1.posY + c1.height || c2.posY + c2.height < c1.posY);
    };
    return Utils;
}());
var Game = (function () {
    function Game() {
        this.Healthys = new Array();
        this.UnHealthys = new Array();
        this.frameCounter = 0;
        this.spawnFrequency = 60;
        this.player = new Player;
        this.utils = new Utils();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.spawnObject = function () {
        this.Healthys.push(new Healthy());
        this.UnHealthys.push(new UnHealthy());
    };
    Game.prototype.gameLoop = function () {
        this.frameCounter++;
        if (this.frameCounter > this.spawnFrequency) {
            this.spawnObject();
            this.frameCounter = 0;
        }
        this.player.move();
        this.updateElements();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.updateElements = function () {
        for (var _i = 0, _a = this.Healthys; _i < _a.length; _i++) {
            var h = _a[_i];
            if (h.removeMe) {
                var i = this.Healthys.indexOf(h);
                this.Healthys.splice(i, 1);
                console.log("verwijder apple " + i + " array = " + this.Healthys.length);
            }
            else {
                h.update();
                if (this.utils.hasOverlap(h, this.player))
                    h.hit();
            }
        }
        for (var _b = 0, _c = this.UnHealthys; _b < _c.length; _b++) {
            var u = _c[_b];
            if (u.removeMe) {
                var i = this.UnHealthys.indexOf(u);
                this.UnHealthys.splice(i, 1);
                console.log("verwijder bubble " + i + " array = " + this.UnHealthys.length);
            }
            else {
                u.update();
                if (this.utils.hasOverlap(u, this.player))
                    u.hit();
            }
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map