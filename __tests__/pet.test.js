// Great test suite, one case that seems missing is what would happen on the method checkUp if none of the conditions are met.
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

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
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

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
   });

   describe('feed', () => {

    it('decrease hunger level by 3', () => {
        const pet = new Pet('fido');
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(2);
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
   });

  describe('checkUp', () => {

    it('if the pet fitness is 3 or less', () => {
        const pet = new Pet('fido');
        pet.fitness = 3;
        expect(pet.checkUp()).toBe('I need a walk'); 
    });

    it('if the pet hunger is 5 or more', () => {
        const pet = new Pet('fido');
        pet.hunger = 5;
        expect(pet.checkUp()).toBe('I am hungry'); 
    });

    it('if the pet hunger is 5 or more and fitness 3 or less', () => {
        const pet = new Pet('fido');
        pet.hunger = 5;
        pet.fitness = 3;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk'); 
    });

    it('if the pet hunger is 4 or less and fitness 4 or more', () => {
        const pet = new Pet('fido');
        pet.hunger = 4;
        pet.fitness = 4;
        expect(pet.checkUp()).toBe('I feel great!'); 
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('parent and child', () => {
    
    it('if parent has child', () => {
        let parent = new Pet('Dave');
        let child = new Pet('Amelia');
        parent.adoptChild(child);
        expect(parent.children[0]).toEqual({ name: 'Amelia', age: 0, hunger: 0, children: [], fitness: 10 });
    });

    it('if parent has two children', () => {
        let parent = new Pet('Dave');
        let child = new Pet('Amelia');
        let secondChild = new Pet('Bob');
        parent.adoptChild(child);
        parent.adoptChild(secondChild);
        expect(parent.children[0]).toEqual({ name: 'Amelia', age: 0, hunger: 0, children: [], fitness: 10 }, {name: 'Bob', age: 0, hunger: 0, children: [], fitness: 10});
    });

 });
    
    



  
   