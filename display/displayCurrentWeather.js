export function displayCurrentWeather(data){
    document.querySelector('#temperature').textContent = data.temperature + '°C';
    document.querySelector('#weather').textContent = data.weather;
    document.querySelector('#weather-icon').src = `../icon/02d.png`;
}