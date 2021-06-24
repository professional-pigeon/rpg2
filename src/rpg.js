import { support } from "jquery";

export default class Character {
  constructor(name, maxHealth, health, inches, weapon) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.health = health;
    this.height = inches;
    this.weapon = weapon;
    // this.strength = strength;
  }

  // class weapon {
  //   constructer(weapon, damage) 
  //   this.weapon = weapon;
  //   this.damage = damage;
  // }

  

  
  attackRoll () {
    let number = Math.ceil((Math.random() * 6));
      return number;
  }
  
  enemyRoll () {
    let number = Math.ceil((Math.random() * 2));
      return number
  }

  // enemyRoll () {
  //   let number = Math.ceil((Math.random() * this.strength))
  //     return number
  // }

  subtractHealth (number) {
    this.health = this.health - number;
    if (this.health <= 0) {
      this.health = "dead"
      return this.health
    } else {
      return this.health
  }
  }

  subtractHealthEnemy () {
    this.health = this.health - this.attackRoll();
    if (this.health <= 0) {
      return "dead"
    } else {
      return this.health
  }
  }

  levelUp () {
    this.height = this.height + 1;
    this.maxHealth = this.maxHealth + 5;
    this.health = this.maxHealth;
  }

}




// Whiteboarding:

// split() sort() to lower case 

// letterArray[A-Z] letter[0-25]

// let testString = "Thank you, for taking the time to do this interview."

// let lowerCaseString = testString.toLowerCase();
// let splitString = lowerCaseString.split("");
// let sortedString = splitString.sort();

// let letterArray = [];
// let alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// let numberOfOccurences = 0;

// alphabetArray.forEach(function(letter){
//   for  (let i = 0; i < sortedString.length; i ++)
//     if (letter === sortedString[i]) {
//       numberOfOccurences ++;
//     } else {
//     }
//     letterArray.push(numberOfOccurences);
//     numberOfOccurences = 0;
// })