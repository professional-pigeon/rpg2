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
      return "dead"
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

// export class Enemy {
//   constructor(name, maxHealth, health, inches, weapon) {
//       this.name = name;
//       this.maxHealth = maxHealth;
//       this.health = health;
//       this.height = inches;
//       this.weapon = weapon;
      // this.strength = strength;



      
  