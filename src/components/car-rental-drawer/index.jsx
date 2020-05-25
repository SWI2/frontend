
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'

export const drawerWidth = 240

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

const CarRentalDrawer = (props) => {

  console.log(`Mobile open: ${props.mobileOpen}`)

  const styles = useStyles()

  const onDrawerToggle = () => {
    props.onDrawerToggle()
  }

  const drawerItems = (
    <div>
      <div className={styles.toolbar} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Rezervace" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Vozidla" />
        </ListItem>
      </List>
    </div>
  )

  return (
    <>
      <nav className={styles.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={ props.mobileOpen }
            onClose={ onDrawerToggle }
            classes={{
              paper: styles.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            { drawerItems }
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: styles.drawerPaper,
            }}
            variant="permanent"
            open
          >
            { drawerItems }
          </Drawer>
        </Hidden>
      </nav>
    </>
  )
}

export default CarRentalDrawer
