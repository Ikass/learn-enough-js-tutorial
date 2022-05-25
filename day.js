// refactor into a function
// returns the day of the week
function dayName(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return daysOfTheWeek[date.getDay()];
}

// greeting for the current day
function greeting(date) {
    return `Hello, world! Happy ${dayName(date)}.`;
}