import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';

export default function ReservationListItem(props) {
  const { customer, rent_date, return_date } = props.reservation
  return (
    <ListItem>
        <ListItemText 
            primary={`Customer: ${customer.name}`}
            secondary={`From: ${rent_date} To: ${return_date}`}
        />
    </ListItem>
  )
}
