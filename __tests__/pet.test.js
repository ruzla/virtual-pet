const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        
        expect(pet.name).toEqual('Fido');
    }); 
  
    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        
        expect(pet.age).toEqual(0);
    });
  });
  
  describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
  });

  describe('hunger', () => {
    const pet = new Pet('Fido');
      
    it('has initial hunger of 0', () => {
        expect(pet.hunger).toEqual(0);
      });

    it('increments the hunger by 5', () => {
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        pet.growUp();
        expect(pet.hunger).toEqual(10);
        pet.growUp();
        expect(pet.hunger).toEqual(15);
    });
  });

  describe('fitness', () => {
      const pet = new Pet('Fido');

    it('has initial fitness of 10', () => {
        expect(pet.fitness).toEqual(10);
    });

    it('decreases fitness by 3', () => {    
        pet.growUp();
        expect(pet.fitness).toEqual(7);
        pet.growUp();
        expect(pet.fitness).toEqual(4);
    });
  });

  describe('walk', () => {

    it('increases fitness by 4', () => {
        const pet = new Pet('fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });

    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
   });
  


  
   