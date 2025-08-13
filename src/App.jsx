import { useState, useRef } from "react"
import axios from "axios"
import "./App.css"
import WeatherInformations from "../componets/Weatherinformations/Weatherinformations"
import WeatherInformations5Days from "../componets/Weatherinformations5Days/Weatherinformations5Days"

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function seachCity() {
    const city = inputRef.current.value
    const key = "783d4db6f7806d51b4af24dd38d2cba9"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&Lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&Lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)
  }
  

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={seachCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}
      {weather && <WeatherInformations5Days  weather5Days={weather5Days} /> }
    </div>
  );
}

export default App;
