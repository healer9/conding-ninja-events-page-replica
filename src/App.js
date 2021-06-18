import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Events from './components/events/Events'
import ChatIcon from './assets/chat-bot-btn.png'

const App = () => {
  return (
    <>
      <Header />
      <Events />
      <div className="chat-bot">
        <img src={ChatIcon} alt="" />
      </div>
    </>
  )
}

export default App
