/* Init Declaration */
const planetImagePlaceholder = document.querySelector(
  ".planetImagePlaceholder"
);
const planetName = document.querySelector(".planetName");
const planetDescription = document.querySelector(".description p");
const distanceValue = document.querySelector(".distanceValue");
const travelTime = document.querySelector(".travelTime");

// Import JSON data
import data from "../data.json" with { type: "json" };
const addContent = (index, planet) =>{
  document.querySelector(planet).addEventListener("click", event=>{
    planetName.textContent = data.destinations[index].name;
    planetDescription.textContent = data.destinations[index].description;
    planetImagePlaceholder.src = data.destinations[index].images.png;
    distanceValue.textContent = data.destinations[index].distance;
    travelTime.textContent = data.destinations[index].travel;
  })
}
addContent(0,".moon");
addContent(1, ".mars");
addContent(2, ".europa");
addContent(3, ".titan");
