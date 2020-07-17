console.log("will it rain tonight")

class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.ishealthy = true

    }
    hunt() {
        this.food += 2
    }

    eat() {
        
        if (this.food > 0) {
        this.food -= 1           
        } else {
        this.ishealthy = false    
        }
        

    }
}

class Wagon {
    constructor(capacity) {
        this.passengers = []
        this.capacity = capacity
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.getAvailableSeatCount()) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        //    console.log(this.passengers [0].ishealthy )
        //    console.log(this.passengers [1].ishealthy ) 

        for (let itemIndex = 0; itemIndex < this.passengers.length; itemIndex += 1) {
            const currentItem = this.passengers[itemIndex];
            console.log(currentItem.ishealthy)

            if (currentItem.ishealthy === false) { 
            return true



            }
        }

            return false
    }

    totalFood() {

        let allfood = 0 

        for (let itemIndex = 0; itemIndex <this.passengers.length; itemIndex += 1) {
            const currentTraveler = this.passengers [itemIndex];
            allfood += currentTraveler.food
        }
        return allfood
    }

}



let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`)