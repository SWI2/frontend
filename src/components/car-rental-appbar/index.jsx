import {
  NavLink as RouterLink,
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

import { withGlobalStore } from '../../store'

const useStyles = makeStyles(theme => ({
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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}))

const CarRentalAppBar = (props) => {

  const styles = useStyles()

  const drawerIconSelect = () => {
    props.onDrawerIconSelect()
  }

  const loginSelect = () => {
    props.onLoginSelect()
  }

  const logoutSelect = () => {
    store.logout()
  }

  const { store } = props

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
        {store.isLoggedIn && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={drawerIconSelect}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
        <div className={styles.logo}>
          <Typography variant="h6">LOGO</Typography>
        </div>
        {!store.isLoggedIn && (
          <>
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
              <Button color="inherit" onClick={loginSelect}>
                Prihlásiť sa
              </Button>
            </div>
          </>
        )}
        {store.isLoggedIn && (
          <div className={styles.logout}>
            <Button color="inherit" onClick={logoutSelect}>
              Odhlásiť sa
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default withGlobalStore(CarRentalAppBar)
