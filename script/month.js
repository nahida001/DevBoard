const container = document.getElementById("container");

const t = document.getElementById("date-year"); 
const today = new Date();

const date = today.getDate();            
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthName = monthNames[today.getMonth()];  
const year = today.getFullYear();  

t.classList.add("font-bold");
t.classList.add("text-xl");
t.innerHTML = `
  <h1 class="text-black">${monthName} ${date}, ${year}</h1>
`;

container.appendChild(t);

