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
        console.log(this.name)
        console.log(this.health)
        console.log(this.speed)
        console.log(this.strength)
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
    }
}

const sensei1 = new Sensei("Pai Mei");

sensei1.speakWisdom();
sensei1.showStats();