/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

// * Array, Stack, Sort
var carFleet = function(target, position, speed) {
  const cars = [];  
  
  for(let i = 0; i < position.length; i++) {
    cars.push({ position: position[i], speed: speed[i] });
  }
  
  // sort by position with ascending order
  cars.sort((a, b) => a.position - b.position);
  
  // maximum car fleet count
  let count = cars.length;
  let frontCarIdx = cars.length - 1;
  
  for(let i = cars.length - 2; i >= 0; i--) {
    const { position, speed } = cars[i];
    const timesToReachDestination = (target - position) / speed;
    const { position: frontCarPosition, speed: frontCarSpeed } = cars[frontCarIdx];
    const hasCatchFrontCar = (frontCarPosition + timesToReachDestination * frontCarSpeed) <= target;
    
    if (hasCatchFrontCar) {
      count--;
    } else {
      frontCarIdx = i;
    }
  }
  
  return count;
};