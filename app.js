

let weather = {
    apiKey: "API KEY GOES HERE",
    fecthWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    console.log(response);

                    alert("No weather found.");
                    throw new Error("No weather found.");
                
                  }
                console.log(response);
                return response.json();
            })
            .then((data) => this.displayWeather(data))
                // console.log(this.displayWeather(data));
            
            .catch((error) => {
                console.log("Error Occured" + error);
            });
    },
    displayWeather: (data) => {
        const { name } = data;
        const { temp } = data.main;
        const { icon, description } = data.weather[0];
        document.querySelector(".city").innerHTML = `Wearther in ${name}`;
        document.querySelector(".temp").innerHTML = `${temp} <sup>o</sup>C`;
        document.querySelector(".icon").src =   "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = description;

        // console.log(name,temp,icon,description);
    },
    searchCity: function () {
        this.fecthWeather(document.querySelector(".search").value);
    }

};
document.querySelector(".serach-btn").addEventListener("click", () => {
    weather.searchCity(); 
});
document.querySelector(".search").addEventListener("keyup",(event)=>{
    if(event.key == "Enter"){
        weather.searchCity();
    }  
})
// weather.fecthWeather("karachi");