function getWeather(){
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve('rainny');
    },1000)
  })
}

function getWeatherIcon(weather) { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (weather) {
        case 'sunny':
          resolve('🌞')
          break;
        case 'cloudy':
          resolve('☁️')
          break;
        case 'rain':
          resolve('🌧️')
          break;
        default:
          reject('NOT FOUND ICON')
      }
    }, 100)
  })
}

function onSuccess(data) { 
  console.log('Data: ' + data);
}
function onError(err) { 
  console.log('Error: ' + err);
}

getWeather()
  .then(getWeatherIcon)
  .then(onSuccess)
  .catch(onError)