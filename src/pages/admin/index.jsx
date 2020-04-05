import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: drawerWidth,
    },
  },
}))

const Admin = () => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <h1>Admin page</h1>
    </div>
  )
}

export default Admin
