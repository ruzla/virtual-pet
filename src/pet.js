const MAXIMUM_FITNESS = 10;
const AGE_INCREASE = 1;
const HUNGER_INCREASE = 5;
const FITNESS_DECREASE = 3;
const FITNESS_INCREASE = 4;
const HUNGER_DECREASE = 3;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age += AGE_INCREASE;
    this.hunger += HUNGER_INCREASE;
    this.fitness -= FITNESS_DECREASE;
};

Pet.prototype.walk = function() {

    // this.fitness = (this.fitness + FITNESS_INCREASE) <= MAXIMUM_FITNESS ? this.fitness + FITNESS_INCREASE : MAXIMUM_FITNESS;
   
    if ((this.fitness + FITNESS_INCREASE) <= MAXIMUM_FITNESS) {
        this.fitness += FITNESS_INCREASE;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    };
};
  
Pet.prototype.feed = function() {
    if ((this.hunger - HUNGER_DECREASE) >= MINIMUM_HUNGER) {
        this.hunger = this.hunger - HUNGER_DECREASE; 
    } else {
        this.hunger = MINIMUM_HUNGER;
    };
};

Pet.prototype.checkUp = function() {
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