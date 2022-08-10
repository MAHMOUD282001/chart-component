let innerChart = document.querySelector(".chart div");


function fetchingData() {
  fetch("./data.json").then(response => {
    return response.json();
 })
 .then(data =>      
     innerChart.innerHTML += 
                         `
                           ${data.days.map(day=> `
                           <div>
                             <div class = "height-value">${day.amount}</div>
                             <div class="colored" style= "height: ${day.amount * 2.25}px"></div>
                             <p class = "day">${day.day}</p>
                           </div>
                           `).join('')}
                         `
 ); 

}

fetchingData();


const myTimeout = setTimeout(() => {

  let coloredDivs = document.querySelectorAll(".colored");
  
  let heightValues = document.querySelectorAll(".height-value");
  
  
  
  
    for(let i = 0; i < coloredDivs.length; i++){
    coloredDivs[i].addEventListener("mouseover", () => {
      
      heightValues[i].classList.add("active")
      
    
    })
    
    coloredDivs[i].addEventListener("mouseleave", () => {
      
      heightValues[i].classList.remove("active")
      
    
    })
  }
  
}, 1000);
