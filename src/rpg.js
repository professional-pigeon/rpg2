export default class Character {
  constructor(name, health, inches, weapon) {
      this.name = name;
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


}
// let character - new Char
// expect(character.name).toEqual("Hector");
// this.name
