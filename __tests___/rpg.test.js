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

    test('should create a character object',  () => {
      expect(character.attackRoll()).toBeGreaterThanOrEqual(1);
      expect(character.attackRoll()).toBeLessThanOrEqual(8);
    });

p
  });
