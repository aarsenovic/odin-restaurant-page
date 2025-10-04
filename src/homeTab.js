import { 
  restaurantDescriptionText,
  workHoursMondayToFridayText,
  workHoursSaturdayText 
} from "./descriptor";


function createElement(tag, { text, classes = [], children = [] } = {}) {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (classes.length) el.classList.add(...classes);
  children.forEach(child => el.appendChild(child));
  return el;
}

function createHeader() {
  return createElement("h1", { text: "ZenBites" });
}

function createDescription() {
  const descriptionText = createElement("p", { text: restaurantDescriptionText });
  return createElement("div", { classes: ["description-container"], children: [descriptionText] });
}

function createWorkHours() {
  const headerTwo = createElement("h2", { text: "Hours" });
  const workHoursMondayToFriday = createElement("p", { 
    text: workHoursMondayToFridayText, 
    classes: ["work-hours"] 
  });
  const workHoursSaturday = createElement("p", { 
    text: workHoursSaturdayText, 
    classes: ["work-hours"] 
  });

  const workingHoursMiniContainer = createElement("div", { 
    classes: ["working-hours-mini-container"], 
    children: [workHoursMondayToFriday, workHoursSaturday] 
  });

  return createElement("div", { 
    classes: ["working-hours-container"], 
    children: [headerTwo, workingHoursMiniContainer] 
  });
}

function createLocation() {
    const headerTwo = createElement("h2", {text: "Location"})
    const locationText = createElement("p", {text: "Masarikova 10, Sabac", classes:["location-text"]})

    return createElement ("div", {
        classes: ["location-container"],
        children: [headerTwo, locationText]
    })
}




function renderHomeTab() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  content.appendChild(createHeader());
  content.appendChild(createDescription());
  content.appendChild(createWorkHours());
  content.appendChild(createLocation());
}

export default renderHomeTab;
