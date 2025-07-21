/* Import JSON */
import data from "../data.json" with {type: "json"};

/* Technology Nav */
const changeTech = (index,link) =>{
   document.querySelector(link).addEventListener("click", event =>{
   document.querySelector(".namePlaceholder").textContent = data.technology[index].name;
   document.querySelector(".descriptionPlaceholder").textContent = data.technology[index].description;
   document.querySelector(".technology ").src = data.technology[index].images.portrait;
   })
}
changeTech(0,".vehicle");
changeTech(1,".spaceport");
changeTech(2,".capsule");