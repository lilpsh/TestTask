import React from 'react'
import './indexH.scss'
import Header from './components/Header'
import Girl from './components/Girl'
import Boy from './components/Boy'
import Users from './components/Users'
// import Form from './components/Form'
import Footer from './components/Footer'


const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <main>
        <Girl />
        <Boy />
        <Users />
      </main>
      <Footer />
    </div>
  )
}

export default Home;
