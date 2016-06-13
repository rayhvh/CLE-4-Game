/**
 * GameOver
 */
class GameOver extends GameObject {
    constructor(g:Game) {
        super("gameover",g);

        this.changeDivBackground("gameover.png");
        this.startPosition((window.innerWidth / 2 - 512) ,(window.innerHeight / 2 - 244) ,1024,488);
    }
}