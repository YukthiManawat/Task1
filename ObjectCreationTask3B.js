function Car(brand,model,year,mileage,isNew,color){
   
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.isNew = isNew;
    this.color = color;

    this.calculateAge = function() {
        const currYear = new Date().getFullYear();
        return currYear-this.year;
        };
    
    this.increaseMileage = function(newMileage) {
        this.mileage = newMileage;
    };

    this.needOilChange = function() {
        return this.mileage >= 20000;
    };

    this.changeColor = function (newColor) {
        this.color = newColor;
    };
}
const myCar = new Car("Audi","Q8",2022,15000,false,"black");

console.log("Currently :", myCar);

myCar.increaseMileage(18800);
console.log("Updated State: ", myCar);

console.log("Car Age: ", myCar.calculateAge());
console.log("Is there a need for oil change: ", myCar.needOilChange());

myCar.changeColor("blue");
console.log("Color Changes: ", myCar);