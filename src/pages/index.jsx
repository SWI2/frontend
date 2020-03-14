import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as RouterLink,
} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayJSProvider from '@date-io/dayjs'

import AboutUs from './about-us'
import CarService from './car-service'
import LoginModal from '../components/login'
import { initStore, GlobalProvider } from '../store'
import Home from './home'
import './styles.css'
import CarInfo from './car-info'

const useStyles = makeStyles(theme => ({
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
  linkSelected: {
    textDecoration: 'underline',
  },
}))

const store = initStore()

const App = () => {
  const styles = useStyles()
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <GlobalProvider store={store}>
      <MuiPickersUtilsProvider utils={DayJSProvider}>
        <CssBaseline />
        <LoginModal isOpen={isOpen} handleClose={handleClose} />
        <Router>
          <AppBar position="static">
            <Toolbar>
              <div className={styles.logo}>
                <Typography variant="h6">LOGO</Typography>
              </div>
              <nav className={styles.navigation}>
                <Link
                  activeClassName={styles.linkSelected}
                  component={RouterLink}
                  to="/"
                  exact
                >
                  Domov
                </Link>

                <Link
                  activeClassName={styles.linkSelected}
                  component={RouterLink}
                  to="/car-service"
                  exact
                >
                  Autopožičovňa
                </Link>

                <Link
                  activeClassName={styles.linkSelected}
                  component={RouterLink}
                  to="/about"
                  exact
                >
                  O nás
                </Link>
              </nav>
              <div className={styles.login}>
                <Button color="inherit" onClick={handleOpen}>
                  Prihlásiť sa
                </Button>
              </div>
            </Toolbar>
          </AppBar>
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
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </MuiPickersUtilsProvider>
    </GlobalProvider>
  )
}

export default App
