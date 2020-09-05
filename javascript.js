console.log("will it rain tonight");

class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.ishealthy = true;
  }
  hunt() {
    this.food += 2;
  }

  eat() {
    if (this.food > 0) {
      this.food -= 1;
    } else {
      this.ishealthy = false;
    }
  }
}

class Doctor extends Traveler {
    constructor(name) {
        this.name = name {
        this.food = 1;
        this.ishealthy = true
        super;

        eat() {
            if (this.food > 0) {
              this.food -= 2;
            } else {
              this.ishealthy = false;

        }

    }
        
    }
   
    class Hunter extends Traveler {
        constructor(name) {
            this.name = name {
            this.food = 5;
            this.ishealthy = true
            super;


class Wagon {
  constructor(capacity) {
    this.passengers = [];
    this.capacity = capacity;
  }

  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }

  join(traveler) {
    if (this.getAvailableSeatCount()) {
      this.passengers.push(traveler);
    }
  }

  shouldQuarantine() {
    //    console.log(this.passengers [0].ishealthy )
    //    console.log(this.passengers [1].ishealthy )

    for (
      let itemIndex = 0;
      itemIndex < this.passengers.length;
      itemIndex += 1
    ) {
      const currentItem = this.passengers[itemIndex];
      console.log(currentItem.ishealthy);

      if (currentItem.ishealthy === false) {
        return true;
      }
    }

    return false;
  }

  totalFood() {
    let allfood = 0;

    for (
      let itemIndex = 0;
      itemIndex < this.passengers.length;
      itemIndex += 1
    ) {
      const currentTraveler = this.passengers[itemIndex];
      allfood += currentTraveler.food;
    }
    return allfood;
  }
}

// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let drsmith = new Doctor("Dr. Smith");
let sarahunter = new Hunter("Sara");
let maude = new Traveler("Maude");
console.log(
  `#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`
);
wagon.join(henrietta);
console.log(
  `#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`
);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(
  `#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`
);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(
  `#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`
);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(
  `#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`
);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(
  `#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`
);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);
