//define getSleepHours function
const getSleepHours = day => {
    switch (day) { 
    case 1: 'monday' 
    return 8;
    break;
    case2: 'tuesady' 
    return 12;
    break;
    case3:'wednesday' 
    return 14;
    break;
    case4: 'thursday' 
    return 7;
    break;
    case5: 'friday' 
    return 9;
    break;
    case6: 'saturday' 
    return 6;
    break;
    case7: 'sunday' 
    return 4;
    break;
    default : 
    return 'Invalid day';
}
}     
// Define getActualSleepHours function
const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +getSleepHours('thursday') + getSleepHours('friday') +getSleepHours('saturday') + getSleepHours('sunday');
}    
//Define the getIdealSleepHours function 
const getIdealSleepHours = () => {
    let idealHours ;
    return idealHours * 7;
};
//Define calculateSleeptDebt function
const calculateSleepDebt = idealHours => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours =  getIdealSleepHours(idealHours);
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ${actualSleepHours-idealSleepHours} hours more sleep than needed.');
    } else {
        console.log('you should get some rest. you got ${idealSleepHours - actualSleepHours}hours less sleep than needed.');
    }
    };
    //Define calculateSleepDebt function 
    calculateSleepDebt(12);
