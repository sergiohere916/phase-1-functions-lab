// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let blocks = Math.abs(someValue - 42);
    return blocks; 
  }
function distanceFromHqInFeet(someValue) {
    let currentDistance = distanceFromHqInBlocks(someValue);
    let feetDistance = currentDistance * 264;
    return feetDistance; 
}
function distanceTravelledInFeet(start, end) {
    let blockDistance = Math.abs(end - start);
    let feetDistance = blockDistance *264;
    return feetDistance;
}
function calculatesFarePrice(start, destination) {
    let feetDistance = distanceTravelledInFeet(start, destination);
    if (feetDistance <= 400) {
        return 0;
    } else if (feetDistance > 400 && feetDistance <= 2000) {
        return (feetDistance -400) * .02;
    } else if (feetDistance > 2000 && feetDistance <= 2500) {
        return 25;
    } else if (feetDistance > 2500) {
        return "cannot travel that far";
    }

}