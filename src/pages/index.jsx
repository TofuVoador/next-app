import Header from '@/components/header/index'
import styles from '@/styles/home.module.css'
import { useState } from 'react'

export default function Home() {

  const [aztro, setAztro] = useState({});
  const [sign, setSign] = useState('');

  const clickSign = (s) => {
    setSign(s)
    getAztro()
  }

  const getAztro = () => {
    fetch('https://aztro.sameerkumar.website/?sign='+sign+'&day=today', {
      method: "POST"
    }).then(resp => resp.json())
    .then(dados => setAztro(dados))
  }

  return (
    <>
      <Header/>
      <section id='aztro'>
        <div className={styles.selectSign}>
          <h1>Select your Sign</h1>
          <div className={styles.signOptions}>
            <p onClick={() => {clickSign('aries')}}>Aries</p>
            <p onClick={() => {clickSign('taurus')}}>Taurus</p>
            <p onClick={() => {clickSign('gemini')}}>Gemini</p>
            <p onClick={() => {clickSign('cancer')}}>Cancer</p>
            <p onClick={() => {clickSign('leo')}}>Leo</p>
            <p onClick={() => {clickSign('virgo')}}>Virgo</p>
            <p onClick={() => {clickSign('libra')}}>Libra</p>
            <p onClick={() => {clickSign('scorpio')}}>Scorpio</p>
            <p onClick={() => {clickSign('sagittarius')}}>Sagittarius</p>
            <p onClick={() => {clickSign('capricorn')}}>Capricorn</p>
            <p onClick={() => {clickSign('araquariusies')}}>Aquarius</p>
            <p onClick={() => {clickSign('pisces')}}>Pisces</p>
          </div>
        </div>
        <div className={styles.horoscope}>
          <div className={styles.date}>
            <h1>{aztro.current_date}</h1>
          </div>
          <div className={styles.lucky}>
            <h2>Color: {aztro.color}</h2>
            <h2>Lucky Time: {aztro.lucky_time}</h2>
            <h2>Lucky Number: {aztro.lucky_number}</h2>
            <h2>Mood: {aztro.mood}</h2>
          </div>
          <div className={styles.description}>
            <p>{aztro.description}</p>
          </div>
        </div>
      </section>
      <section id='about'>

      </section>
      <section id='contact'>
        
      </section>
    </>
  )
};
