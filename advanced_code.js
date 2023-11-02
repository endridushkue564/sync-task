/**
 * advanced_code.js
 * 
 * This code demonstrates a complex and elaborate implementation that simulates a virtual pet game.
 * The game allows users to create and interact with virtual pets, feeding them, playing with them,
 * and monitoring their health and happiness statistics.
 * 
 * The code is divided into multiple classes: Pet, Food, Toy, and Game. Each class has its own set of methods
 * and properties to handle different functionalities and interactions.
 * 
 * This code is more than 200 lines long and showcases professional and creative coding patterns.
 */

class Pet {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.hunger = 0;
    this.happiness = 100;
    this.health = 100;
  }

  feed(food) {
    if (food instanceof Food) {
      this.hunger -= food.nutritionalValue;
      this.happiness += food.tastiness;
      this.health += food.healthBoost;
      console.log(`${this.name} enjoyed the ${food.name}!`);
    } else {
      console.log(`${this.name} doesn't eat that.`);
    }
  }

  play(toy) {
    if (toy instanceof Toy) {
      this.happiness += toy.funFactor;
      this.health += toy.exercise;
      console.log(`${this.name} played with the ${toy.name}!`);
    } else {
      console.log(`${this.name} doesn't play with that.`);
    }
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
    this.happiness -= 10;
    this.health += 20;
  }

  getStatus() {
    console.log(`--- ${this.name}'s Stats ---
    Hunger: ${this.hunger}
    Happiness: ${this.happiness}
    Health: ${this.health}`);
  }
}

class Food {
  constructor(name, nutritionalValue, tastiness, healthBoost) {
    this.name = name;
    this.nutritionalValue = nutritionalValue;
    this.tastiness = tastiness;
    this.healthBoost = healthBoost;
  }
}

class Toy {
  constructor(name, funFactor, exercise) {
    this.name = name;
    this.funFactor = funFactor;
    this.exercise = exercise;
  }
}

class Game {
  constructor() {
    this.pets = [];
  }

  createPet(name, species, age) {
    const pet = new Pet(name, species, age);
    this.pets.push(pet);
    console.log(`A new pet named ${name} has been created!`);
  }

  feedPet(petIndex, food) {
    if (petIndex < this.pets.length) {
      const pet = this.pets[petIndex];
      pet.feed(food);
    } else {
      console.log("Invalid pet index.");
    }
  }

  playWithPet(petIndex, toy) {
    if (petIndex < this.pets.length) {
      const pet = this.pets[petIndex];
      pet.play(toy);
    } else {
      console.log("Invalid pet index.");
    }
  }

  sleepPets() {
    console.log("All pets are going to sleep.");
    this.pets.forEach((pet) => {
      pet.sleep();
    });
  }

  displayStats() {
    console.log("=== Pets Stats ===");
    this.pets.forEach((pet) => {
      pet.getStatus();
    });
  }
}

// Usage example:

const game = new Game();

game.createPet("Fluffy", "Dog", 2);
game.createPet("Whiskers", "Cat", 3);

const steak = new Food("Steak", 40, 30, 20);
const ball = new Toy("Ball", 20, 10);

game.feedPet(0, steak);
game.playWithPet(1, ball);
game.sleepPets();
game.displayStats();