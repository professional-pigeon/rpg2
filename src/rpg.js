export default class Character {
  constructor(name, health, inches, weapon) {
      this.name = name;
      this.health = health;
      this.height = inches;
      this.weapon = weapon;
  }
  
  attackRoll () {
    return Math.ceil((Math.random() * 6));
};
}
// let character - new Char
// expect(character.name).toEqual("Hector");
// this.name
