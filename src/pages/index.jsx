import Header from '../components/header'
import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Home() {

  const apiKey = '0690861960ddf284b4be7af74b5dfdd4';

  const [aztro, setAztro] = useState({});

  const [city, setCity] = useState([]);
  const [temperature, setTemp] = useState([]);
  const [weather, setWeather] = useState([]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
    localStorage.setItem('city', event.target.value);
  };

  const getAztro = (s) => {
    setAztro('')
    document.getElementById('load').style.display = 'block';
    fetch('https://aztro.sameerkumar.website/?sign='+s+'&day=today', {
      method: "POST"
    }).then(resp => resp.json())
    .then(dados => setAztro(dados))
    .then(() => document.getElementById('load').style.display = 'none')
  }

  const updateWeather = () => {
    try {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(resp => resp.json())
      .then(dados => {
        if(dados.main && dados.weather) {
          setTemp(dados.main)
          setWeather(dados.weather[0])
          document.getElementById('weatherError').style.display = 'none'
        } else {
          var errorDisplay = document.getElementById('weatherError')
          errorDisplay.style.display = 'block';
          errorDisplay.innerHTML = `
            <h1>Something went wrong</h1>
            <p>City name might not be spelled right or the API might be unavailable</p>
          `
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>Daily Log</title>
      </Head>
      <Header/>
      <section id='horoscope'>
        <div className='selectSign'>
          <h1>Select your Sign</h1>
          <div className='signOptions'>
            <p onClick={() => {getAztro('aries')}}>Aries</p>
            <p onClick={() => {getAztro('taurus')}}>Taurus</p>
            <p onClick={() => {getAztro('gemini')}}>Gemini</p>
            <p onClick={() => {getAztro('cancer')}}>Cancer</p>
            <p onClick={() => {getAztro('leo')}}>Leo</p>
            <p onClick={() => {getAztro('virgo')}}>Virgo</p>
            <p onClick={() => {getAztro('libra')}}>Libra</p>
            <p onClick={() => {getAztro('scorpio')}}>Scorpio</p>
            <p onClick={() => {getAztro('sagittarius')}}>Sagittarius</p>
            <p onClick={() => {getAztro('capricorn')}}>Capricorn</p>
            <p onClick={() => {getAztro('araquariusies')}}>Aquarius</p>
            <p onClick={() => {getAztro('pisces')}}>Pisces</p>
          </div>
        </div>
        <div className='horoscope'>
          <div className='date'>
            <h1 id='load' style={{'display': 'none'}}>LOADING...</h1>
            <h1>{aztro.current_date}</h1>
          </div>
          <div className='lucky'>
            <h2>Color: {aztro.color}</h2>
            <h2> Lucky Time: {aztro.lucky_time}</h2>
            <h2>Lucky Number: {aztro.lucky_number}</h2>
            <h2>Mood: {aztro.mood}</h2>
          </div>
          <div className='description'>
            <p>{aztro.description}</p>
          </div>
        </div>
      </section>
      <section id='weather' className='weather'>
        <input value={city} className='selectCity' onChange={handleCityChange}/>
        <button className='searchCity' onClick={() => updateWeather()}>Get Weather</button>
        <div className='weatherStatus'>
          <h1 id='weatherError' className='weatherError'></h1>
          <h1>Weather: {weather.main}</h1>
          <h1>Temperature: {Math.round(temperature.temp - 273.15, -1)}??C</h1>
          <h1>Humidity: {temperature.humidity}%</h1>
        </div>
      </section>
      <section id='about' className='about'>
        <div>
          <h1>About</h1>
          <p>
            System created by Gustavo Amamia Kumagai. 
            It is my first application using Next.JS, 
            consuming the Aztro API and the Open Weather API. 
          </p>
          <p>See other projects at:</p>
          <a href='https://portfolio-gustavo-amamia-kumagai.vercel.app/'>
            portfolio-gustavo-amamia-kumagai.vercel.app
          </a>
        </div>
      </section>
    </>
  )
};
