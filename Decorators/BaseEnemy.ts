import { Enemy } from "./Enemy";

export default class BaseEnemy implements Enemy {
    takeDamage(damage: number): number {
        return damage;
    }
}
