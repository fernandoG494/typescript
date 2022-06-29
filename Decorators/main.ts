import BaseEnemy from './BaseEnemy';
import EnemyDecorator from './EnemyDecorator';
import { ArmourDecorator } from './Internal decorators/ArmourDecorator';
import { HelmetDecorator } from './Internal decorators/HelmetDecorator';

let enemy = new BaseEnemy();
let damage = enemy.takeDamage(10);
console.log(damage);

let enemigoDecorado = new HelmetDecorator(enemy);
console.log(enemigoDecorado.takeDamage(10));

let enemigoProtegido = new ArmourDecorator(enemigoDecorado);
console.log(enemigoProtegido.takeDamage(10));
