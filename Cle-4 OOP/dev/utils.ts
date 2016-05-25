/**
 * Utils
 */
class Utils {
    //
    // kijk of twee objecten elkaar raken
    // dit moeten objecten zijn die een public x, y, width en height hebben
    // met overerving kunnen we gaan zorgen dat je hier ook andere objecten behalve ball en paddle aan kan geven
    //
    hasOverlap(c1:Healthy, c2:Player): boolean {
        return !(c2.posX > c1.posX + c1.width || c2.posX + c2.width < c1.posX || c2.posY > c1.posY + c1.height || c2.posY + c2.height < c1.posY);
    }
}