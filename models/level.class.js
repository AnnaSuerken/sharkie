class Level {
    enemies;
    light;
    backgrounObjects;
    coins;
    poison;
    level_end_x = 2150;

    constructor(enemies, light, backgrounObjects, coins, poison){
        this.enemies = enemies;
        this.light = light;
        this.backgrounObjects = backgrounObjects;
        this.coins = coins;
        this.poison = poison;
    };
}