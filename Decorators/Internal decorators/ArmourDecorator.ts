import EnemyDecorator from "../EnemyDecorator";

export class ArmourDecorator extends EnemyDecorator {
    takeDamage(damage: number): number {
        return this.enemy.takeDamage(damage) / 1.5;
    }
}