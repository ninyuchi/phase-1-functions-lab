// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
     const headquartersLocation = 42;
      return Math.abs (pickupLocation-headquartersLocation);

  }

  function distanceFromHqInFeet(pickupLocation) {
   const blocks = distanceFromHqInBlocks(pickupLocation);
    const blockFeet = 264;
    return blockFeet * blocks;
  }
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blockFeet = 264;
    const blocks = Math.abs(destinationBlock-startBlock);
    return blockFeet * blocks;
    
  }
  function calculatesFarePrice(startBlock, destinationBlock) {
    const distanceInFeet = distanceTravelledInFeet (startBlock, destinationBlock);
    if (distanceInFeet <= 400){
    return 0;
    }
    else if ( distanceInFeet <= 2000){
        const fare = (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
        return fare;
    }
    else if(distanceInFeet <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
    

    
  }