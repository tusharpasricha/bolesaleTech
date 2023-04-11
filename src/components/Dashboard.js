import React from 'react'
import Aboutus from './aboutus'
import Afternav from './afternav'
import Categories from './categories'
import Connectus from './connect'
import Feature from './feature'
import Footer from './footer'
import Getintouch from './getintouch'
import Home from './home'
import Navbar from './navbar'

import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
    <Navbar/>
    <Afternav/>
    <Home/>
    
    <Categories/>
    
    <Getintouch/>
    <Feature/>
    <Aboutus/>
    <Connectus/>
    <Footer/>

    </div>


  )
}

export default Dashboard