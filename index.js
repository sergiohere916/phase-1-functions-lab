// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(42 - location);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(location1, location2) {
    const distance = Math.abs(location1 - location2);
    return distance * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let price;

    if (distance <= 400) {
        price = 0;
    } else if (distance <= 2000) {
        price = .02 * (distance - 400);
    } else if (distance <= 2500) {
        price = 25;
    } else if (distance > 2500) {
        price = "cannot travel that far";
    }

    return price;
}