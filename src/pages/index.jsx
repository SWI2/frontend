import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import LoginModal from '../components/login'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}))

const Home = () => {
  const styles = useStyles()
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <CssBaseline />
      <LoginModal isOpen={isOpen} handleClose={handleClose}/>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            Autopožičovňa
          </Typography>
          <Button color="inherit" onClick={handleOpen}>Prihlásiť sa</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Home
