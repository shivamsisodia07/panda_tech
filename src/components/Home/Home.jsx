import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Mission from './components/mission'
import Functionality from './components/Functionality'
import Experts from './components/Experts.jsx';
import Organization from './components/organization.jsx'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Mission></Mission>
    <Functionality></Functionality>
    <Experts></Experts>
    <Organization></Organization>
    </>
   
  )
}

export default Home