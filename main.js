let cityName = document.querySelector(".name");
let temperature = document.querySelector(".temp");
let icons = document.querySelector(".icon");
// get the current location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        //get city name from lat and lon

        fetch(
                "https://api.openweathermap.org/data/2.5/weather?lat=" +
                lat +
                "&lon=" +
                lon +
                "&appid=" +
                "0e2f740fb3c72c42d7c19ef224fe684c"
            )
            .then((response) => response.json())
            .then((data) => {
                cityName.innerHTML = data.name;
                let x = data.main.temp;

                x = `${x}`.replace("0", "").slice(0, 2) + ` c`;

                temperature.innerHTML = x;
                switch (data.weather[0].main) {
                    case "Clouds":
                        icons.innerHTML = `<ion-icon name="cloud-outline"></ion-icon> <br /> <p>Cloudy</p>`;
                        break;
                    case "rain":
                        icons.innerHTML = `<ion-icon name="thunderstorm-outline"></ion-icon> <br /> <p>rain</p>`;
                        break;
                    case "sun":
                        icons.innerHTML = `<ion-icon name="sunny-outline"></ion-icon> <br /> <p>rain</p>`;
                        break;
                    default:
                        icons.innerHTML = `<ion-icon name="partly-sunny-outline"></ion-icon> <br /> <p>rain</p>`;
                }
            });
    });
}