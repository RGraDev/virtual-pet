const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
const FITNESS_THRESHOLD = 5;
const HUNGER_THRESHOLD = 3;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
  }

  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  }

  growUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }

    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
  }

  walk() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }

    if (this.fitness + 4 > MAX_FITNESS) {
      this.fitness = MAX_FITNESS;
    } else {
      this.fitness += 4;
    }
  }

  feed() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }

    if (this.hunger - 3 < MIN_HUNGER) {
      this.hunger = MIN_HUNGER;
    } else {
      this.hunger -= 3;
    }
  }

  checkUp() {
    if (!this.isAlive) {
      return "Your pet is no longer alive :(";
    }

    if (this.hunger >= HUNGER_THRESHOLD && this.fitness <= FITNESS_THRESHOLD) {
      return "I am hungry AND I need a walk";
    } else if (this.hunger >= HUNGER_THRESHOLD) {
      return "I am hungry";
    } else if (this.fitness <= FITNESS_THRESHOLD) {
      return "I need a walk";
    } else {
      return "I feel great!";
    }
  }
}

module.exports = Pet;
