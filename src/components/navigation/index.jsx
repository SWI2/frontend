import {
  BrowserRouter as Router,
  NavLink as RouterLink,
  Route,
  Switch,
} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'

import { withGlobalStore } from '../../store'
import Home from '../../pages/home'
import ReservationList from '../../pages/reservation'
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
            <Route exact path="/car-service">
              <CarService />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/car/:carId">
              <CarInfo />
            </Route>
            <PrivateRoute path="/admin">
              <CarRentalDrawer 
                mobileOpen={ mobileOpen }
                onDrawerToggle={ handleDrawerToggle }
              />
              <PrivateRoute path="/reservations">
                <ReservationList />
              </PrivateRoute>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <LoginModal isOpen={isOpen} handleClose={handleClose} />
      </Router>
    </>
  )
}

export default withGlobalStore(Navigation)
