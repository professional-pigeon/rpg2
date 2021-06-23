export default class Character {
  constructor(name, maxHealth, health, inches, weapon) {
      this.name = name;
      this.maxHealth = maxHealth;
      this.health = health;
      this.height = inches;
      this.weapon = weapon;
  }
  
  attackRoll () {
    let number = Math.ceil((Math.random() * 6))
    if (this.weapon = "dagger") {
      return number+2;
    };
  };
  
  enemyRoll () {
    let number = Math.ceil((Math.random() * 2))
      return number
  }

  subtractHealth () {
    this.health = this.health - this.enemyRoll();
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


// let character - new Char
// expect(character.name).toEqual("Hector");
// this.name
