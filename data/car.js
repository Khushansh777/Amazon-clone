// create class 'car'
class Car {
    #brand;
    #model;
    speed = 0;
    trunk = false;
    // to initialize brand,model acc to user input
    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model;
    }
    // console.log the brand and model
    displayinfo(){
        // console.log(`${this.#brand},${this.#model}, Speed: ${this.speed.toFixed(1)} kmph,${this.trunk}`);
    }
    // inc spped by 5kmph if 0 < speed < 200kmph
    go(){
        this.speed >= 0 && this.speed < 200 && !this.trunk
        ? this.speed +=5
        : this.speed += 0
        this.displayinfo()
    }
    // dec speed by  5kmph if  0 < speed < 200 kmph
    brake(){
        this.speed > 0 && this.speed <= 200 
        ? this.speed -=5
        : this.speed += 0 
        this.displayinfo();
    }

    // created fn to open trunk
    opentrunkopen(){
        this.trunk = open
    }
    // created fn to close trunk
    opentrunkopen(){
        this.trunk = close
    }

}

// race car
class Racecar extends Car{
    cureentacceration ;
    accelerationfactor = 1.8;
    constructor(brand, model, cureentacceration){
        super(brand,model)
        this.cureentacceration = cureentacceration;
    }
    // change code to acclerate the car
    go(){
        if(this.speed < 500){
            this.speed  += this.cureentacceration
  
        if(this.speed < 100){    
            this.speed *= this.accelerationfactor  
        }

        else if(this.speed < 200){
            this.speed *= 1.4
        }
        
        else if(this.speed < 300){
            this.speed *= 1.2;
        }  
        else if(this.speed < 400){
            this.speed *= 1.1;
        }  
        else if(this.speed < 480){
            this.speed *= 1;
        }  
        else if(this.speed < 490){
            this.speed *= .99;
        } 
        else if(this.speed < 490){
            this.speed *= .91;
        } 
        if(this.speed > 500){
        this.speed = 500;
        this.cureentacceration = 0;
    }
     // console.log(`🚗💨 ${this.speed.toFixed(1)} km/h (Accel: ${this.cureentacceration.toFixed(1)})`);
        this.displayinfo();
    }
  

    }
    
}

const Mclaren  = new Racecar('Mclaren','P1', 10);
for (let index = 0; index < 100; index++) {
    Mclaren.go()
}


// creates 2 instaceof car
const car =  new Car('aston martin','DBX V8');
const car2 =  new Car('Rolls Royce ', 'Cullinan');


// call fn to console.log
// car.displayinfo();
car2.displayinfo();

// test go and brake
/*
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();

car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();
car.go();


car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();
car.brake();

*/