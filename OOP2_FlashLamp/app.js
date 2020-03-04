let Battery = function (energy) {
    this.energy = energy;

    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        return energy;
    };
    this.decreaseEnergy = function () {
        if (energy > 0) {
            energy--;
        }
    }
};

let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    this.light = function () {
        if (this.status) {
            alert("Lighting");
        } else {
            alert("Not Lighting");
        }
    };
    this.turnOn = function () {
        this.status = true;
        this.battery.decreaseEnergy();
    };
    this.turnOff = function () {
        this.status = false;
    };
};

let battery = new Battery(2);

let flashlamp = new FlashLamp();
flashlamp.setBattery(battery);
document.write(flashlamp.getBatteryInfo() + "<br/>");
flashlamp.turnOn();
document.write(flashlamp.getBatteryInfo() + "<br/>");
flashlamp.light();
flashlamp.turnOff();
document.write(flashlamp.getBatteryInfo() + "<br/>");
flashlamp.light();