"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEnemy_1 = __importDefault(require("./BaseEnemy"));
const ArmourDecorator_1 = require("./Internal decorators/ArmourDecorator");
const HelmetDecorator_1 = require("./Internal decorators/HelmetDecorator");
let enemy = new BaseEnemy_1.default();
let damage = enemy.takeDamage(10);
console.log(damage);
let enemigoDecorado = new HelmetDecorator_1.HelmetDecorator(enemy);
console.log(enemigoDecorado.takeDamage(10));
let enemigoProtegido = new ArmourDecorator_1.ArmourDecorator(enemigoDecorado);
console.log(enemigoProtegido.takeDamage(10));
