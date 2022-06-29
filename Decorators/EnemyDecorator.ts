import { Enemy } from "./Enemy";

export default abstract class EnemyDecorator implements Enemy{
    protected enemy: Enemy;

    constructor(enemy: Enemy) {
        this.enemy = enemy;
    }

    takeDamage(damage: number): number {
        return this.enemy.takeDamage(damage);
    }
}