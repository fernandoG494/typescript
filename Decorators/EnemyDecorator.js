"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnemyDecorator {
    constructor(enemy) {
        this.enemy = enemy;
    }
    takeDamage(damage) {
        return this.enemy.takeDamage(damage);
    }
}
exports.default = EnemyDecorator;
