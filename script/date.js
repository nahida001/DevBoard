

document.getElementById("day").addEventListener('click', function(event){
    event.preventDefault();
  // current date  
 const currentDate = new Date();

//  current day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = daysOfWeek[currentDate.getDay()];

// Display the current day and the name "Tariq"
console.log(`${currentDay}`);
console.log(`Tariq`);

})
