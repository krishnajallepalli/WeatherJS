function getWeather() {
    weather.getWeather()
    .then(results => ui.paint(results))
    .catch(err => {
        ui.clear(document.getElementById('city').value);
        console.log(err);
    });
}