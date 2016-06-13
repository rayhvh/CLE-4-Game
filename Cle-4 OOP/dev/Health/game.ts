/// <reference path="objects/player.ts" />
/// <reference path="objects/healthy.ts" />
/// <reference path="objects/unhealthy.ts" />
/// <reference path="../utils.ts" />
/// <reference path="../scoredisplay.ts" />
/// <reference path="../gameover.ts" />


class Game {

    private player: Player;
    private Healthy: Healthy;
    private Healthys: Array<Healthy> = new Array<Healthy>();

    private UnHealthy: UnHealthy;
    private UnHealthys: Array<UnHealthy> = new Array<UnHealthy>();

    private utils: Utils;

    public spawnFrequency: number;
    private frameCounter: number = 0;

    public scoreDisplay: ScoreDisplay;
    public gameover: GameOver;

    public lifesleft: number = 3;

    constructor() {

        this.scoreDisplay = new ScoreDisplay(this);

        this.spawnFrequency = 60;

        this.player = new Player(this);
        this.utils = new Utils();

        // start game loop      
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private spawnObject(): void {
        this.Healthys.push(new Healthy(this));
        this.UnHealthys.push(new UnHealthy(this));

    }

    private gameLoop() {


        // update / running game functies.
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
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }


    private updateElements(): void {

        for (var h of this.Healthys) {
            if (h.removeMe) {
                // deze appel moet uit het speld
                // verwijder uit array
                // this.Apples.remove(a);
                var i = this.Healthys.indexOf(h);

                this.Healthys.splice(i, 1);

            } else {
                h.update();
                if (this.utils.hasOverlap(h, this.player)) {
                    h.hit();
                    // de score display aanroepen
                    this.scoreDisplay.scoreUp();
                }
            }
        }

        for (var u of this.UnHealthys) {
            if (u.removeMe) {
                // deze appel moet uit het spel
                // verwijder uit array
                // this.Apples.remove(a);
                var i = this.UnHealthys.indexOf(u);

                this.UnHealthys.splice(i, 1);

            } else {
                u.update();
                if (this.utils.hasOverlap(u, this.player)) {
                    u.hit();
                    // de score display aanroepen
                    this.scoreDisplay.scoreDown();
                }
            }
        }
    }

    public difficulty() {
        // change fall speed of objects
        let currentScore = this.scoreDisplay.giveScore();
        // maak een lege score om zo te returnen
        let speed: number = 0;
        let spawn: number = 50;
        // maak een random om snelheid iets meer willekeurig te maken.
        let random: number = Math.floor(Math.random() * 4);
        // tell random getal op met score en 0.8* deze voor een snelheid
        random += currentScore * 0.5;
        // code voor minimale snelheid. 3 speed.
        if (random < 6) {
            random = 6;
        }
        // snelheid van spawn is 50 - huidige score. gaat steeds sneller. 
        spawn = 50 - (currentScore * 2);
        if (spawn < 20)
        {
            spawn = 20;
        }
        this.spawnFrequency = spawn;
        console.log ("spawn freq " + this.spawnFrequency);
        //snelheid vullen met random gemaakt getal.
        speed = random;
        return speed;



    }

}