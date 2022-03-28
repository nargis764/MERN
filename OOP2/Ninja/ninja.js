class Ninja {
    constructor(name,health,speed=3,strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log("Name: " + this.name + ", " + "Health: " + this.health + ", " + "Speed: " + this.speed + ", " + "Strength: " + this.strength )
        // console.log(this.health)
        // console.log(this.speed)
        // console.log(this.strength)
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

//const ninja1 = new Ninja("Ash", 5);
//ninja1.showStats();
// ninja1.drinkSake().showStats();