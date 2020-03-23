
export default class ServiseWeatherApi {

    async getResource(url) {
        
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getDataByCityName(city) {
        const dataWeather = await this.getResource(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6aebc52b238b091e301f34ff37af58c0`);
        return this._transformData(dataWeather)
    }

    async getDataByCordinates(lat, lon) {
        const dataWeather = await this.getResource(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=6aebc52b238b091e301f34ff37af58c0`);
        return this._transformData(dataWeather)

    }

    _transformData(data) {
        // const date = new Date(data.dt); 
        return ({
          city: data.name,
          temperatureDay: data.main.temp,
          wind: data.wind.speed,
          date: data.dt
        })
    }
}


