import './App.css'
import navLogo from './assets/logo.png'
import coinImg from './assets/coin.png'

function App() {

  return (
    <>
      {/* navbar */}
      <div className="navbar max-w-7xl mx-auto mt-12.5 mb-6">

        {/* navbar left logo */}
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-17.5 h-17.5" src={navLogo} alt="" />
          </a>
        </div>

        {/* navbar right coin */}
        <div className="flex items-center ">
          <span className='font-bold text-xl mr-1'>60000000000</span>
          <span className='font-bold text-xl mr-1'>Coin</span>
          <img src={coinImg} alt="" />
        </div>

      </div>
    </>
  )
}

export default App
