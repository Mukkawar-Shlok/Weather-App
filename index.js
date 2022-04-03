const express = require("express");
const request = require("request");

let port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs')
var city = 'Mumbai'
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=type your authid`

app.get('/', (req, res) => {

    request(url, function (error, response, body) {
        weather = JSON.parse(body);
        // console.log(weather);
        let weather_val = {
            city: city,
            temperature: weather.main.temp,
            min_temp: weather.main.temp_min,
            max_temp: weather.main.temp_max,
            des: weather.weather[0].description,
            icon: weather.weather[0].icon
        }

        var weather_data = { weather: weather_val }
        // console.log(weather_data);

        res.render('home', weather_data);
    })

})

app.get('/post', (req, res) => {
    const { search } = req.query
    city = search
    console.log(city);
    request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94c58afacec910ab10262578a14f4815`, function (error, response, body) {
        weather = JSON.parse(body);
        // console.log(weather);
        let weather_val = {
            city: city,
            temperature: weather.main.temp,
            min_temp: weather.main.temp_min,
            max_temp: weather.main.temp_max,
            des: weather.weather[0].description,
            icon: weather.weather[0].icon
        }

        var weather_data = { weather: weather_val }
        // console.log(weather_data);

        res.render('home', weather_data);
    })

})

app.listen(port, () => console.log("listening on port 3000"));
