// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const afterEach = () =>{
    return (drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE').to.eql(['Antonia', 'Nuru', 'Amari', 'Mo'])
}
function returnFirstTwoDrivers(){
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(){
    return drivers.slice(-2);
}
// selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier function
function createFareMultiplier(integer) {
  return function(value) {
    return integer * value;
  }
}

// fareDoubler function
function fareDoubler(fare) {
  return createFareMultiplier(2)(fare);
}

// fareTripler function
function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
}

// selectDifferentDrivers function
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}




