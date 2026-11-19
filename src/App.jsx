import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import HeroSection from './components/HeroSection/HeroSection'

const loadData = async () => {
  const res = await fetch('/players.json');
  return res.json();
}

function App() {
  const playerPromise = loadData();

  return (
    <>
      {/* component navbar */}
      <Navbar></Navbar>

      {/* component hero section */}
      <HeroSection data-theme="dark"></HeroSection>

      {/* component available players */}
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers
          playerPromise={playerPromise}
        ></AvailablePlayers>
      </Suspense>

      {/* component selected players */}
      <SelectedPlayers></SelectedPlayers>

    </>
  )
}

export default App
