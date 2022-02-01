function milesToKm(miles) {
    var km = miles * 1.609344;
    return km;
}

var marathonCalculatio = milesToKm(26.2);
console.log("Marathon distance in km: ", marathonCalculatio);

var myHomeToUniversity = milesToKm(43);
console.log("My home to University distance in km: ", myHomeToUniversity);




function inchToFoot(inch) {
    var inch = inch * 0.08333333;
    return inch;
}

var myRoomInch = inchToFoot(400);
console.log("My room in foot: ", myRoomInch);

var myWashroomInch = inchToFoot(138);
console.log("My Wash room in foot: ", myWashroomInch);