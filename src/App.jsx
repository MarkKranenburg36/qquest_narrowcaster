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


function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Greeting />
      <Logo />
      <div className="main">
        <CurrentWeather />
        <WeatherForcast />
        <QueryClientProvider client={queryClient}>
          <WeatherMapWidget
            className={'widget weatherMapWidget'}
          />
          <Carousel />
          <NSWidget />
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
