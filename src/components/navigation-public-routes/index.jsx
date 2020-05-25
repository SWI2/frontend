import { Route } from 'react-router-dom'
import React from 'react'
import Home from '../../pages/home'
import CarInfo from '../../pages/car-info'
import AboutUs from '../../pages/about-us'
import CarService from '../../pages/car-service'

const NavigationPublicRoutes = () => {

  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/car-service">
        <CarService />
      </Route>
      <Route exact path="/about">
        <AboutUs />
      </Route>
      <Route exact path="/car/:carId">
        <CarInfo />
      </Route>
    </>
  )
}

export default NavigationPublicRoutes
