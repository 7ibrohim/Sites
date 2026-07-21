import React from 'react'
import Navbar from './Navbar/Navabar'
import Footer from "./Footer/Footer"
import Page from './Home/Page'
import Pagetwo from './Home/Pagetwo'
import Natijalar from './Components/Natijalar1.jsx'
import Xizmatlar from './Components/Xizmatlar.jsx'
import Telegram from './Components/Telegram.jsx'
function App() {
  return (
    <div>
      <Navbar/>
      <Page/>
      <Pagetwo/>
      <Natijalar/>
      <Xizmatlar/>
      <Telegram/>
      <Footer/>
    </div>
  )
}

export default App
