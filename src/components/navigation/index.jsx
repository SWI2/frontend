import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { withGlobalStore } from '../../store'
import Home from '../../pages/home'
import ReservationList from '../../pages/reservation'
import ReservationInfo from '../../pages/reservation-info'
import PrivateRoute from '../protected-route'
import CarInfo from '../../pages/car-info'
import AboutUs from '../../pages/about-us'
import CarService from '../../pages/car-service'

import LoginModal from '../login'
import CarRentalAppBar from '../car-rental-appbar'
import CarRentalDrawer from '../car-rental-drawer'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '64px',
    height: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  logo: {
    flexGrow: 0.2,
  },
  navigation: {
    'flexGrow': 0.6,
    'fontSize': theme.typography.h6.fontSize,
    'fontWeight': theme.typography.h6.fontWeight,
    '& > *': {
      color: 'unset',
      marginLeft: theme.spacing(5),
    },
  },
  login: {
    display: 'flex',
    flexGrow: 0.2,
    justifyContent: 'flex-end',
  },
  logout: {
    display: 'flex',
    flexGrow: 0.2,
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  linkSelected: {
    textDecoration: 'underline',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}))

const Navigation = (props) => {

  const { store } = props

  const styles = useStyles()
  const [isOpen, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <Router>
        <div className={styles.root}>
          <CarRentalAppBar 
            onDrawerIconSelect={ handleDrawerToggle }
            onLoginSelect={ handleOpen }
          />
          <Switch>
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
            <PrivateRoute exact path="/admin/reservation">
              <CarRentalDrawer 
                mobileOpen={ mobileOpen }
                onDrawerToggle={ handleDrawerToggle }
              />
              <ReservationList />
            </PrivateRoute>
            <PrivateRoute exact path="/admin/reservation/:reservationId">
              <CarRentalDrawer 
                mobileOpen={ mobileOpen }
                onDrawerToggle={ handleDrawerToggle }
              />
              <ReservationInfo />
            </PrivateRoute>
          </Switch>
        </div>
        <LoginModal isOpen={isOpen} handleClose={handleClose} />
      </Router>
    </>
  )
}

export default withGlobalStore(Navigation)
