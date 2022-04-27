// main JS file for weather project - 2740 mark lund

// 5780026 provo ID

const APIURL = "//api.openweathermap.org/data/2.5/forecast?id=5780026&appid=9f7df78cf2a5612553e12843b7e2d193&units=imperial"
// imperial units

const d = new Date() // system date

const SystemDateNum = d.getDay() // get local day

let weekdays = new Array(7) // new weekdays array
weekdays[0] = "Sunday" // sunday at index 0
weekdays[1] = "Monday"
weekdays[2] = "Tuesday"
weekdays[3] = "Wednesday"
weekdays[4] = "Thursday"
weekdays[5] = "Friday"
weekdays[6] = "Saturday"

fetch(APIURL) // lets get the weather
.then((response) => response.json())
.then((weatherinfo) => {
    console.log(weatherinfo)

    document.querySelector("#name").textContent = weatherinfo.city.name // page name
    let localList = weatherinfo.list // get the list into a local variable
    let dayNumber = SystemDateNum // day number from system

    for (i = 0; i < localList.length; i++) {
        
        let time = localList[i].dt_txt
        if (time.includes('21:00:00')) {
            dayNumber += 1 // its a new day, increment
            if (dayNumber === 7) {
                dayNumber = 0 // reset if we are going around the weekend
            } // end weekend handler

            // now let's build our display
            let dayName = document.createElement("span")
            dayName.textContent = weekdays[dayNumber] // pick from the 7 we set
            let dayTemp = document.createElement("p")
            dayTemp.textContent = weatherinfo.list[i].main.temp + "\xB0 F"
            let iconcode = weatherinfo.list[i].weather[0].icon;
            let imagePath = `//openweathermap.org/img/wn/${iconcode}@2x.png` // make path
            let dayPic = document.createElement("img") // image tag
            dayPic.src = imagePath
            let dayDiv = document.createElement("div")
            dayDiv.appendChild(dayName)
            dayDiv.appendChild(dayTemp)
            dayDiv.appendChild(dayPic)
            document.querySelector('#weatherwrapper').appendChild(dayDiv)
        } // end if
    }
})




