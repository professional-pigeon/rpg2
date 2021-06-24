import Character from '../src/rpg.js';

describe('Character', () => {

  let character;
    
    beforeEach(() =>  {
      character = new Character("Hector", 10, 10, 1, "Dagger");
    });

    test('should create a character object',  () => {
      expect(character.name).toEqual("Hector");
      expect(character.maxHealth).toEqual(10);
      expect(character.health).toEqual(10);
      expect(character.height).toEqual(1);
      expect(character.weapon).toEqual("Dagger");
    });

    test('should generate attack value',  () => {
      expect(character.attackRoll()).toBeGreaterThanOrEqual(1);
      expect(character.attackRoll()).toBeLessThanOrEqual(6);
    });

    test('should generate enemy attack value',  () => {
      expect(character.enemyRoll()).toBeGreaterThanOrEqual(1);
      expect(character.enemyRoll()).toBeLessThanOrEqual(2);
    });

    test("should lower your health as a result of a roll", () => {
      let number = 2;
      expect(character.subtractHealth(number)).toBeLessThan(character.maxHealth);
    });
    
    test("should lower your health as a result of a roll", () => {
      let number = 2;
      const character = new Character("Hector", 10, 1, 1, "Dagger");
      expect(character.subtractHealth(number)).toEqual("dead");
    });

    test("when you level up you get taller", () => {
      character.levelUp();
      expect(character.height).toEqual(2);
    });

    test("when you level up you get more maxHealth", () => {
      character.levelUp();
      expect(character.height).toEqual(2);
      expect(character.maxHealth).toEqual(15);
    });

    test("when you level up you're health resets to the max value", () => {
      character.levelUp();
      expect(character.height).toEqual(2);
      expect(character.maxHealth).toEqual(15);
      expect(character.health).toEqual(character.maxHealth);
    });

    test("should subtract attackRoll from health", () => {
      let number = 2;
      character.subtractHealthEnemy(number);
      expect(character.health).toBeLessThan(character.maxHealth)
    });

   
    
  });





