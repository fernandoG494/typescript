import EnemyDecorator from "../EnemyDecorator";

export class HelmetDecorator extends EnemyDecorator{
    takeDamage(damage: number): number {
        return this.enemy.takeDamage(damage) / 2;
    }
}