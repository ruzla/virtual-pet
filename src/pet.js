const FITNESS_MAXIMUM = 10;
const FITNESS_INCREASE = 4;
const FITNESS_DECREASE = 3;

const HUNGER_INCREASE = 5;
const HUNGER_DECREASE = 3;
const HUNGER_MINIMUM = 0;

const AGE_INCREASE = 1;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.adoptChild = function(child) {
    this.children.push(child);
};

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };
    
    this.age += AGE_INCREASE;
    this.hunger += HUNGER_INCREASE;
    this.fitness -= FITNESS_DECREASE;
    
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };
    
    if ((this.fitness + FITNESS_INCREASE) <= FITNESS_MAXIMUM) {
        this.fitness += FITNESS_INCREASE;
    } else {
        this.fitness = FITNESS_MAXIMUM;
    };
};
  
Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };
    
    if ((this.hunger - HUNGER_DECREASE) >= HUNGER_MINIMUM) {
        this.hunger = this.hunger - HUNGER_DECREASE; 
    } else {
        this.hunger = HUNGER_MINIMUM;
    };
};

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };
    
    if(this.hunger >= 5 && this.fitness <= 3) 
        return 'I am hungry AND I need a walk';
    
    else if(this.hunger <= 4 && this.fitness >= 4)
        return 'I feel great!'

    else if(this.fitness <= 3)
        return 'I need a walk'

    else if(this.hunger >= 5)
        return 'I am hungry'    
};

module.exports = Pet;