  
const days = document.getElementById("day");  
  
const currentDate = new Date();

// current day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = daysOfWeek[currentDate.getDay()];
days.classList.add("font-bold")
days.classList.add("text-xl")
days.innerHTML = `
  <h2 class="text-black">${currentDay}</h2>
`

container.appendChild(days);


//date
