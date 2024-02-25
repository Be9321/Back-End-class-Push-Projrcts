// the scope of random is too loose
const getRandEvent = () => {
    const random = Math.floor(Math.random()*3);
    switch (random) {
        case 1 : 
        return 'Marathon';
        break;
        case 2 : 
        return 'Triathlon';
        break;
        case 3 : 
        return 'Penthathlon';
        default : 
        return 'Invalid training';
    } 
    };
    // the scope of days is too tight
const getTrainingDays = () => {
    let days;
    switch (days) {
        case 1 : 'Marathon'
        return 50;
        break;
        case 2 : 'Triathlon'
        return 100;
        break;
        case 3 : 'Penthathlon'
        return 200;
        break;
        default :
        return 'Invalid days';
    }
};
//the scope of name is too tight
const logEvent = (name,event) => {
    console.log(`${name}'s event is: ${event}`);
};
const logTime = (name,days) => {
console.log(`${name}'s time is: ${days} days`);
}; 
const name = 'Belyse';
const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name,event);
logTime(name,days);

// test with onother competitor
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 =  'Naomi';
//Define a name varibale.use it as an argument afyter updating logEvent and logTime
logEvent(name2,event2);
logTime(name2,days2);