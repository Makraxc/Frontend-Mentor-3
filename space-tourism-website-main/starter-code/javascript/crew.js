/* Import JSON */
import data from "../data.json" with {type: "json"};

/* Crew Nav */
const changeCrew = (index,link) =>{
   document.querySelector(link).addEventListener("click", event =>{
    document.querySelector(".role").textContent = data.crew[index].role;
    document.querySelector(".namePlaceholder").textContent = data.crew[index].name;
    document.querySelector(".descriptionPlaceholder").textContent = data.crew[index].bio;
    document.querySelector(".crewPhotoPlaceholder").src = data.crew[index].images.png;
    
   })
}
changeCrew(0,".link1");
changeCrew(1,".link2");
changeCrew(2,".link3");
changeCrew(3,".link4");
