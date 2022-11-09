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

class Tv {
    constructor(brand) {
        this.brand = brand
        this.chennel = 1
        this.volume = 50
    }

    volumeUp(num) {

        if (this.volume + num <= 100) {
            this.volume += num
        } else {
            this.volume = 100
        }
    }
    volumeDown(num) {
        if(this.volume-num <= 0){
            this.volume=num
        }
    }
    setChennel(num) {
        if(this.chennel+ num <= 50 && this.chennel <= 0){
            this.chennel=num
        }
    }

    reset(){
        this.chennel=1
        this.volume=50
    }

    Describe(){
        console.log(`Ovo je ${this.brand}, i na kananalu je ${this.chennel}, sa zvukom na ${this.volume}`)
    }

}

obj1= new Tv('Markov TV')
obj1.Describe()
obj1.volumeDown(20)
obj1.Describe()
obj1.volumeUp(200)
obj1.Describe()
obj1.setChennel(5)
obj1.Describe()
obj1.reset()
obj1.Describe()


