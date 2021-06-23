import Character from '../src/rpg.js';

describe('Character', () => {

  let character;
    
    beforeEach(() =>  {
      character = new Character("Hector", 10, 1, "dagger");
    });

    test('should create a character object',  () => {
      expect(character.name).toEqual("Hector");
      expect(character.health).toEqual(10);
      expect(character.height).toEqual(1);
      expect(character.weapon).toEqual("dagger");
    });

    test('should generate attack value',  () => {
      expect(character.attackRoll()).toBeGreaterThanOrEqual(1);
      expect(character.attackRoll()).toBeLessThanOrEqual(8);
    });

    test('should generate enemy attack value',  () => {
      expect(character.enemyRoll()).toBeGreaterThanOrEqual(1);
      expect(character.enemyRoll()).toBeLessThanOrEqual(2);
    });

    test("should lower your health as a result of a roll", () => {
      expect(character.subtractHealth()).toBeLessThan(10);
    });
    
    test("should lower your health as a result of a roll", () => {
      const character = new Character("Hector", 1, 1, "dagger");
      expect(character.subtractHealth()).toEqual("dead");
    });

});
