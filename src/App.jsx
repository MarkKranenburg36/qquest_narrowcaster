import './App.css'
import './Components/widget.css'
import WeatherMapWidget from './Components/WeatherMapWidget'
import NSWidget from './Components/NSWidget'
import Greeting from './Components/Greeting'
import { Logo } from './Components/Logo'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CurrentWeather } from './Components/CurrentWeather'
import { WeatherForcast } from './Components/WeatherForcast'
import { Carousel } from './Components/Carousel'
import FactsWidget from './Components/FactsWidget'
import { useEffect, useState } from "react";



function App() {
  const queryClient = new QueryClient();
  const [time,setTime] = useState()

    useEffect (() =>{
        const intervalTime = setInterval(() => {

            const dateObject = new Date()
      
            const hour = dateObject.getHours()
            const minute = dateObject.getMinutes()
      
            const currentTime = hour + ' : ' + minute
            
            setTime(currentTime)
          }, 1000)

        return ()=>{
            clearInterval(intervalTime)
        }
      
    })
  return (
    <>
      <div className='upper'>
        <Greeting />
        <h1 style={{color: 'white'}}>{time}</h1>
        <Logo />
      </div>
      <div className="main">
        <div className='leftContainer'>
          <CurrentWeather />
          <WeatherForcast />
          <FactsWidget />
        </div>
        <QueryClientProvider client={queryClient}>
          <Carousel />
          <NSWidget />
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
