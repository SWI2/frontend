import React from 'react'
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { withGlobalStore } from '../../store'
import { drawerWidth } from '../../components/car-rental-drawer'

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: drawerWidth,
    },
  },
  title: {
    padding: '10px'
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const ReservationInfo = ({ store }) => {
  const styles = useStyles()

  const [customerOpen, setCustomerOpen] = React.useState(true);
  const onCustomerClick = () => {
    setCustomerOpen(!customerOpen)
  }

  const { reservationId } = useParams()

  return (
    <div className={ styles.container }>
      <h1 className={ styles.title }>Detail rezervace {reservationId}</h1>
      <List className={styles.root}>
        {/* Customer */}
        <ListItem 
          button 
          onClick={ onCustomerClick }
        >
          <ListItemText 
              primary={`Robo Oravec`}
              secondary={`Zákazník`}
          />
          { customerOpen ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>
        <Collapse 
          in={ customerOpen } 
          timeout="auto" 
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItem className={ styles.nested }>
              <ListItemText 
                  primary={`email@example.com`}
                  secondary={`Email`}
              />
            </ListItem>
            <ListItem className={ styles.nested }>
              <ListItemText 
                  primary={`+420 123 123 123`}
                  secondary={`Phone`}
              />
            </ListItem>
          </List>
        </Collapse>
        {/* Reservation info */}
        <ListItem>
          <ListItemText 
              primary={`1.1.1970`}
              secondary={`Datum od`}
          />
        </ListItem>
        <ListItem>
          <ListItemText 
              primary={`1.1.1970`}
              secondary={`Datum do`}
          />
        </ListItem>
        <ListItem>
          <ListItemText 
              primary={`Robo`}
              secondary={`Půjčil`}
          />
        </ListItem>
        <ListItem>
          <ListItemText 
              primary={`Nikto`}
              secondary={`Předal`}
          />
        </ListItem>
        {/* Car */}
        <ListItem>
          <ListItemText 
              primary={`Auto`}
              secondary={`Auto`}
          />
        </ListItem>
      </List>
    </div>
  )
}

export default withGlobalStore(ReservationInfo)
