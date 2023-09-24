getWeather(displayIcon);


function displayIcon(data) { 
  if (data === 'sunny') {
    console.log('☀️');
  }
  if (data === 'cloudy') {
    console.log('☁️');
  }
}
// function weatherReceived(data) { 
//   let weather = data;
//   console.log(weather);
// }
function getWeather(callback) { 
  setTimeout(() => {
    callback('cloudy');
  },0);
}