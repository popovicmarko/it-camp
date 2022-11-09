class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    Accelerate(acNum) {
        this.speed += acNum
    }
    Brake(bNum) {
        this.speed -= bNum
    }
    Describe() {
        console.log(`Ovo je ${this.brand} i ide brzinom ${this.speed} km/h`)
    }
}
obj1 = new Car("BMW", 240)
obj1.Describe()
obj1.Accelerate(20)
obj1.Describe()
obj1.Brake(40)
obj1.Describe()

