// /*
//
// Prototype Refactor
//
// 1. Copy and paste your code or the solution from yesterday
//
// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
//
// */
//
// /*
//   === GameObject ===
//   * createdAt
//   * name
//   * dimensions (These represent the character's size in the video game)
//   * destroy() // prototype method that returns: `${this.name} was removed from the game.`
// */
//
// class GameObject {
//     constructor(props) {
//         this.createdAt = props.createdAt;
//         this.name = props.name;
//         this.dimensions = props.dimensions;
//     }
//
//     destroy() {
//         return `${this.name} was removed from the game`;
//     }
// }
//
// /*
//   === CharacterStats ===
//   * healthPoints
//   * takeDamage() // prototype method -> returns the string '<object name> took damage.'
//   * should inherit destroy() from GameObject's prototype
// */
//
// class CharacterStats extends GameObject {
//     constructor(props) {
//         super(props);
//         this.healthPoints = props.healthPoints;
//         this.baseAttack = 10;
//         this.baseHealing = 2;
//     }
//
//     takeDamage() {
//         return `${this.name} took damage.`;
//     }
//
//     flipCoin() {
//         return Math.floor(Math.random() * 2);
//     }
//
//     takeSpecialAction() {
//         return Math.floor(Math.random() * 10) > 6 ? true : false;
//     }
// }
//
// /*
//   === Humanoid (Having an appearance or character resembling that of a human.) ===
//   * team
//   * weapons
//   * language
//   * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//   * should inherit destroy() from GameObject through CharacterStats
//   * should inherit takeDamage() from CharacterStats
// */
//
// class Humanoid extends CharacterStats {
//     constructor(props) {
//         super(props);
//         this.team = props.team;
//         this.weapons = props.weapons;
//         this.language = props.language;
//         this.multiplier = props.multiplier;
//     }
//
//     greet() {
//         return `${this.name} offers a greeting in ${this.language}`;
//     }
//
//     attack = enemy => {
//         let damage = this.baseAttack * this.multiplier;
//         enemy.healthPoints -= damage;
//         console.log(
//             `${this.name} from ${this.team} attacks ${enemy.name} with a ${
//                 this.weapons[Math.floor(Math.random() * this.weapons.length)]
//             } for ${damage} points. ${enemy.name} now has ${
//                 enemy.healthPoints
//             } points of health.`
//         );
//         if (enemy.healthPoints <= 0) {
//             console.log(enemy.destroy());
//         }
//     };
//
//     heal = () => {
//         let healing = this.baseHealing * this.multiplier;
//         this.healthPoints += healing;
//         console.log(
//             `${this.name} healed for ${healing} points. ${this.name} now has ${this.healthPoints}.`
//         );
//     };
//
//     playerAction(enemy, specialAction) {
//         //let boundSpecial = specialAction.bind(this);
//
//         if (this.takeSpecialAction()) {
//             specialAction(enemy);
//         } else if (this.flipCoin() == 0) {
//             this.attack(enemy);
//         } else {
//             this.heal();
//         }
//     }
// }
//
// /*
//  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
//  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
//  * Instances of CharacterStats should have all of the same properties as GameObject.
//  */
//
// // I want to call a function that will first randomly generate a number between 0 - 9 and if it's over 8 then it'll use the specialMove else, it'll just attack or heal like normal.
//
// //Test your work by un-commenting these 3 objects and the list of console logs below:
//
// const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//         length: 2,
//         width: 1,
//         height: 1,
//     },
//     healthPoints: 5,
//     name: 'Bruce',
//     team: 'Mage Guild',
//     weapons: ['Staff of Shamalama'],
//     language: 'Common Tongue',
// });
//
// //console.log(mage);
//
// const swordsman = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//         length: 2,
//         width: 2,
//         height: 2,
//     },
//     healthPoints: 15,
//     name: 'Sir Mustachio',
//     team: 'The Round Table',
//     weapons: ['Giant Sword', 'Shield'],
//     language: 'Common Tongue',
// });
//
// const archer = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//         length: 1,
//         width: 2,
//         height: 4,
//     },
//     healthPoints: 10,
//     name: 'Lilith',
//     team: 'Forest Kingdom',
//     weapons: ['Bow', 'Dagger'],
//     language: 'Elvish',
// });
//
// // console.log(mage.createdAt); // Today's date
// // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// // console.log(swordsman.healthPoints); // 15
// // console.log(mage.name); // Bruce
// // console.log(swordsman.team); // The Round Table
// // console.log(mage.weapons); // Staff of Shamalama
// // console.log(archer.language); // Elvish
// // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// // console.log(mage.takeDamage()); // Bruce took damage.
// // console.log(mage.takeDamage()); // Bruce took damage.
// // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
//
// // Stretch task:
// // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// // * Create two new objects, one a villain and one a hero and fight it out with methods!
//
// class Villain extends Humanoid {
//     constructor(props) {
//         super(props);
//     }
//
//     summonDemons = enemy => {
//         let damage = this.baseAttack * this.multiplier * 2;
//         enemy.healthPoints -= damage;
//         console.log(
//             `${this.name} from ${this.team} summoned Demons!!!! and attacks ${enemy.name} with a Super Demons for ${damage} points. ${enemy.name} now has ${enemy.healthPoints} points of health.`
//         );
//         if (enemy.healthPoints <= 0) {
//             console.log(enemy.destroy());
//         }
//     };
// }
//
// class Hero extends Humanoid {
//     constructor(props) {
//         super(props);
//     }
//
//     callForBackUp = () => {
//         let healing = this.baseHealing * this.multiplier * 8;
//         this.healthPoints += healing;
//         console.log(
//             `${this.name} called for Backup!!! and healed for ${healing} points. ${this.name} now has ${this.healthPoints}.`
//         );
//     };
// }
//
// const myHero = new Hero({
//     createdAt: new Date(),
//     dimensions: {
//         length: 2,
//         width: 2,
//         height: 2,
//     },
//     healthPoints: 150,
//     name: 'Sir Mustachio',
//     team: 'The Round Table',
//     weapons: ['Giant Sword', 'Shield'],
//     language: 'Common Tongue',
//     multiplier: 1.5,
// });
//
// const myVillain = new Villain({
//     createdAt: new Date(),
//     dimensions: {
//         length: 1,
//         width: 2,
//         height: 4,
//     },
//     healthPoints: 100,
//     name: 'Lilith',
//     team: 'Forest Kingdom',
//     weapons: ['Bow', 'Dagger'],
//     language: 'Elvish',
//     multiplier: 2,
// });
//
// function startBattle(villain, hero) {
//     let turns = 0;
//     while (villain.healthPoints > 0 && hero.healthPoints > 0) {
//         villain.playerAction(hero, villain.summonDemons);
//         hero.playerAction(villain, hero.callForBackUp);
//         turns++;
//     }
//     console.log(turns);
// }
//
// startBattle(myVillain, myHero);
