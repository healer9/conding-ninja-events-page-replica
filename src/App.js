import React from 'react'
import Header from './components/header/Header'
import Events from './components/events/Events'
import ChatIcon from './assets/chat-bot-btn.png'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Events />
      <div className="chat-bot">
        <img src={ChatIcon} alt="" />
      </div>
      <Footer />
    </>
  )
}

export default App
