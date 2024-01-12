import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Mission from './components/mission'
import Functionality from './components/Functionality'
import Experts from './components/Experts.jsx';
import Organization from './components/organization.jsx'
import Offers from './components/Offers.jsx'
import Events from './components/Events.jsx'
import Tab from './utils/tabs.jsx';
const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Mission></Mission>
    <Functionality></Functionality>
    <Experts></Experts>
    <Organization></Organization>
    <Offers></Offers>
    <Events></Events>
    <Tab></Tab>
    </>
   
  )
}

export default Home