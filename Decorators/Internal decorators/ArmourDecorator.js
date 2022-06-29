"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmourDecorator = void 0;
const EnemyDecorator_1 = __importDefault(require("../EnemyDecorator"));
class ArmourDecorator extends EnemyDecorator_1.default {
    takeDamage(damage) {
        return this.enemy.takeDamage(damage) / 1.5;
    }
}
exports.ArmourDecorator = ArmourDecorator;
