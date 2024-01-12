import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Mission from './components/mission'
import Functionality from './components/Functionality'
import Experts from './components/Experts.jsx';
import Organization from './components/organization.jsx'
import Offers from './components/Offers.jsx'
import Events from './components/Events.jsx'
import Testimonials from './components/Testimonials.jsx'
import Founders from './components/Founders.jsx'
import Activity from './components/Activities.jsx'
import Footer from './components/Footer.jsx'

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
    <Testimonials></Testimonials>
    <Founders></Founders>
    <Activity></Activity>
    <Footer></Footer>
    </>
   
  )
}

export default Home