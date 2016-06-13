var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject(tagname, g) {
        this.speed = 0;
        this.scores = 0;
        this.game = g;
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
    GameObject.prototype.hit = function () {
        this.removeFromGame();
    };
    GameObject.prototype.update = function () {
        if (this.posY > window.innerHeight + 200) {
            this.removeFromGame();
        }
        else {
            this.posY += this.speed;
            this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        }
    };
    GameObject.prototype.removeFromGame = function () {
        this.removeMe = true;
        document.body.removeChild(this.div);
    };
    return GameObject;
}());
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver(g) {
        _super.call(this, "gameover", g);
        this.changeDivBackground("gameover.png");
        this.startPosition((window.innerWidth / 2 - 512), (window.innerHeight / 2 - 244), 1024, 488);
    }
    return GameOver;
}(GameObject));
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(g) {
        _super.call(this, "player", g);
        this.rightkey = 37;
        this.leftkey = 39;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.flip = 1;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
        this.changeDivBackground("fish.png");
        this.startPosition(window.innerWidth - 130, window.innerHeight - 100, 130, 100);
    }
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.rightkey:
                this.upSpeed = 25;
                this.flip = 1;
                break;
            case this.leftkey:
                this.downSpeed = 25;
                this.flip = -1;
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
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(" + this.flip + ")";
    };
    return Player;
}(GameObject));
var Healthy = (function (_super) {
    __extends(Healthy, _super);
    function Healthy(g) {
        _super.call(this, "healthy", g);
        this.images = ["healthy/apple2.png", "healthy/banana1.png", "healthy/Orange_1.png"];
        this.changeDivBackground(this.images[Math.floor((Math.random() * this.images.length) + 0)]);
        this.startPosition((Math.random() * window.innerWidth), -50, 50, 50);
        this.speed = this.game.difficulty();
    }
    Healthy.prototype.hit = function () {
        _super.prototype.hit.call(this);
    };
    return Healthy;
}(GameObject));
var UnHealthy = (function (_super) {
    __extends(UnHealthy, _super);
    function UnHealthy(g) {
        _super.call(this, "unhealthy", g);
        this.images = ["unhealthy/poison1.png", "unhealthy/spider1.png", "unhealthy/Ultrapoison.png", "unhealthy/bubble.png"];
        this.changeDivBackground(this.images[Math.floor((Math.random() * this.images.length) + 0)]);
        this.startPosition((Math.random() * window.innerWidth), -50, 50, 50);
        this.speed = this.game.difficulty();
    }
    UnHealthy.prototype.hit = function () {
        _super.prototype.hit.call(this);
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
var Life = (function () {
    function Life(xpos, ypos, score) {
        this.score = score;
        this.div = document.createElement("heart");
        this.score.heartdiv.appendChild(this.div);
        this.x = xpos;
        this.y = ypos;
        this.width = 100;
        this.height = 100;
        this.draw();
    }
    Life.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Life.prototype.removeMe = function () {
        this.score.heartdiv.removeChild(this.div);
    };
    return Life;
}());
var ScoreDisplay = (function (_super) {
    __extends(ScoreDisplay, _super);
    function ScoreDisplay(g) {
        _super.call(this, "score", g);
        this.score = 0;
        this.lifes = new Array();
        console.log("Creating display");
        this.textdiv = document.createElement("scoretext");
        this.heartdiv = document.createElement("scorehearts");
        this.div.appendChild(this.textdiv);
        this.div.appendChild(this.heartdiv);
        this.lifes.push(new Life(300, 0, this), new Life(400, 0, this), new Life(500, 0, this));
    }
    ScoreDisplay.prototype.update = function () {
        this.textdiv.innerHTML = "Score: " + this.score;
    };
    ScoreDisplay.prototype.scoreUp = function () {
        this.score++;
    };
    ScoreDisplay.prototype.scoreDown = function () {
        this.score -= 10;
        if (this.score < 0) {
            this.score = 0;
        }
        this.game.lifesleft -= 1;
        if (this.game.lifesleft < 3) {
            this.lifes[this.game.lifesleft].removeMe();
            this.lifes.splice(this.game.lifesleft, 1);
        }
    };
    ScoreDisplay.prototype.giveScore = function () {
        return this.score;
    };
    return ScoreDisplay;
}(GameObject));
var Game = (function () {
    function Game() {
        this.Healthys = new Array();
        this.UnHealthys = new Array();
        this.frameCounter = 0;
        this.lifesleft = 3;
        this.scoreDisplay = new ScoreDisplay(this);
        this.spawnFrequency = 60;
        this.player = new Player(this);
        this.utils = new Utils();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.spawnObject = function () {
        this.Healthys.push(new Healthy(this));
        this.UnHealthys.push(new UnHealthy(this));
    };
    Game.prototype.gameLoop = function () {
        if (this.lifesleft >= 1) {
            this.frameCounter++;
            if (this.frameCounter > this.spawnFrequency) {
                this.spawnObject();
                this.frameCounter = 0;
            }
            this.player.move();
            this.updateElements();
            this.scoreDisplay.update();
        }
        else if (this.lifesleft == 0) {
            console.log("game voorbij");
            this.gameover = new GameOver(this);
            this.lifesleft = -1;
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.updateElements = function () {
        for (var _i = 0, _a = this.Healthys; _i < _a.length; _i++) {
            var h = _a[_i];
            if (h.removeMe) {
                var i = this.Healthys.indexOf(h);
                this.Healthys.splice(i, 1);
            }
            else {
                h.update();
                if (this.utils.hasOverlap(h, this.player)) {
                    h.hit();
                    this.scoreDisplay.scoreUp();
                }
            }
        }
        for (var _b = 0, _c = this.UnHealthys; _b < _c.length; _b++) {
            var u = _c[_b];
            if (u.removeMe) {
                var i = this.UnHealthys.indexOf(u);
                this.UnHealthys.splice(i, 1);
            }
            else {
                u.update();
                if (this.utils.hasOverlap(u, this.player)) {
                    u.hit();
                    this.scoreDisplay.scoreDown();
                }
            }
        }
    };
    Game.prototype.difficulty = function () {
        var currentScore = this.scoreDisplay.giveScore();
        var speed = 0;
        var random = Math.floor(Math.random() * 4);
        random += currentScore;
        if (random < 3) {
            random = 3;
        }
        this.spawnFrequency = 75 - (currentScore * 2);
        speed = random;
        return speed;
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map