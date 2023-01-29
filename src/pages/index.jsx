import Header from '@/components/header/index'
import styles from '@/styles/home.module.css'
import { useState } from 'react'

export default function Home() {

  const [aztro, setAztro] = useState({});

  const getAztro = (s) => {
    setAztro('')
    document.getElementById('load').style.display = 'block';
    fetch('https://aztro.sameerkumar.website/?sign='+s+'&day=today', {
      method: "POST"
    }).then(resp => resp.json())
    .then(dados => setAztro(dados))
    .then(() => document.getElementById('load').style.display = 'none')
  }

  return (
    <>
      <Header/>
      <section id='aztro'>
        <div className={styles.selectSign}>
          <h1>Select your Sign</h1>
          <div className={styles.signOptions}>
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
        <div className={styles.horoscope}>
          <div className={styles.date}>
            <h1 id='load' style={{'display': 'none'}}>LOADING...</h1>
            <h1>{aztro.current_date}</h1>
          </div>
          <div className={styles.lucky}>
            <h2>Color: {aztro.color}</h2>
            <h2> Lucky Time: {aztro.lucky_time}</h2>
            <h2>Lucky Number: {aztro.lucky_number}</h2>
            <h2>Mood: {aztro.mood}</h2>
          </div>
          <div className={styles.description}>
            <p>{aztro.description}</p>
          </div>
        </div>
      </section>
      <section id='about' className={styles.about}>
        <div>
          <h1>About</h1>
          <p>
            System created by Gustavo Amamia Kumagai. 
            It is my first application using Next.JS, 
            consuming the Aztro API. 
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
