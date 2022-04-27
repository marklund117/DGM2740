// what is the path to the JSON file?
const apiURL = "/hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

for (i = 0; i < myList.length; i++) { // loop for each hotel object in the JSON

// FIGURE STUFF
let myImageTag = document.createElement("img") // create an image
myImageTag.src = myList[i].photo;
let myCaptionTag = document.createElement("figcaption") // make a caption
myCaptionTag.textContent = myList[i].name
let myFigureTag = document.createElement("figure") // make a figure
myFigureTag.appendChild(myImageTag)
myFigureTag.appendChild(myCaptionTag)
// DIV WITH TWO SPANS
// SPAN ONE
let spanOne = document.createElement("span") // create span one
let iconOne = document.createElement("ion-icon") // create ion icon one
let paraOne = document.createElement("p") // create para one
let paraTwo = document.createElement("p") // create para two
iconOne.setAttribute("name", "car") // set up car icon
paraOne.innerText = myList[i].address[0] // first part of address set
paraTwo.innerText = myList[i].address[1] // second part of address set
spanOne.appendChild(iconOne)
spanOne.appendChild(paraOne)
spanOne.appendChild(paraTwo)
// SPAN TWO
let spanTwo = document.createElement("span") // create span two
let iconTwo = document.createElement("ion-icon") // create ion icon two
let paraThree = document.createElement("p") // create para three
iconTwo.setAttribute("name", "call") // set phone icon
paraThree.innerText = myList[i].phone // set para 3
spanTwo.appendChild(iconTwo)
spanTwo.appendChild(paraThree)
// NOW WE NEED TO PUT THE TWO SPANS IN A DIV
let spanDiv = document.createElement("div") // create span div
spanDiv.appendChild(spanOne)
spanDiv.appendChild(spanTwo)
// now we need to put that div and the figure in a section
hotelSection = document.createElement("section") // create section
hotelSection.appendChild(myFigureTag) // put in the figure
hotelSection.appendChild(spanDiv) // add the span div

// now finally we can put each span in the DOM
document.getElementById("hotelwrapper").appendChild(hotelSection)
  
}  
  }); //end of "then" fat arrow function