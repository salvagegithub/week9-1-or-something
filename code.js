
//Gives variables for firstName,lastName, and badgeNumb
function checkCreds() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    //Name validation
    if (fullName.length > 19) {
        document.getElementById("loginStatus").innerHTML = "Name has too many characters.";
    } else if (fullName.length <= 1) {
        document.getElementById("loginStatus").innerHTML = "Name does not have any characters.";
    }

    //badgeNumb Validation
    if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number";
    }
    //Access Granted and full verification
    if (fullName.length < 20 && badgeNumb < 1000 && badgeNumb >= 1) {
        alert("Access Granted, welcome " + fullName);
        location.replace("index.html");
    }
}

function play() {
    //die1 and die2 are variables. Lines 92 and 95 will generate a random number up to 6, and the Math.ceil command will round it to the nearest number.
    var die1 = Math.ceil(Math.random() * 6);


    var die2 = Math.ceil(Math.random() * 6);


    //var sum is taking the output of the variables die1 and die2, then adding them.
    var sum = die1 + die2
    //Lines 101-106 will say "Die 1=" then it will add die1. Then it will have a break, then do the same for die2. Then another break and it will add die1 and die2 togther. Then another break.
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    //This is an if statement saying if the sum is 7 or 11, output "CRAPS - you lose"
    // The || means or.
    if (sum == 7 || sum == 11) {
        document.write("CRAPS - you lose")
        document.write("<br/>")
    }
    //This is an else if statement saying if die1 equals die2 and die1 has a modulus (remander of 2 after division equalling 0, making it an even number)
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win")
        document.write("<br/>")
    }

}

function start() {
//Start Button
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

//Space Station Sounds Function

function spaceSounds() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

class InputData {
    constructor(
            time_seconds,
            latitude,
            longitude,
            gpsAltitude,
            bmpSensorAltitude,
            bmpSensorPressure,
            bmpSensorTemperature,
            cssSensorTemperature,
            cssSensorEco2,
            cssSensorTvoc,
            uv,
            accelX,
            accelY,
            accelZ,
            magneticX,
            magneticY,
            magneticZ,
            gyroX,
            gyroY,
            gyroZ
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gpsAltitude = gpsAltitude;
        this.bmpSensorAltitude = bmpSensorAltitude;
        this.bmpSensorPressure = bmpSensorPressure;
        this.bmpSensorTemperature = bmpSensorTemperature;
        this.cssSensorTemperature = cssSensorTemperature;
        this.cssSensorEco2 = cssSensorEco2;
        this.cssSensorTvoc = cssSensorTvoc;
        this.uv = uv;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    
    }
}

function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg +=  " " + units;
    msg += "</td>";
    return msg;
}

function getData() {
    var loadedData = loadData();
    return loadedData;
}
