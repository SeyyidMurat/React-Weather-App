const getWeatherData = async (country)=>{
    const API_KEY ="5aecae61d3774b619ab181101211111"
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${ country || "İstanbul"}&days=5&aqi=no&alerts=no`);
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error)
    }
}

export default getWeatherData