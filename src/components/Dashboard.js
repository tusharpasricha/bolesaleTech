import React from 'react'
import Aboutus from './aboutus'
import Categories from './categories'
import Connectus from './connect'
import Feature from './feature'
import Footer from './footer'
import Getintouch from './getintouch'
import Home from './home'
import Navbar from './navbar'

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Aboutus/>
    <Categories/>
    <Feature/>
    <Getintouch/>
    <Connectus/>
    <Footer/>

    </>


  )
}

export default Dashboard