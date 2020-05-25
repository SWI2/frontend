import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom'

export default function ReservationListItem(props) {
  const { id, customer, rent_date, return_date } = props.reservation
  const history = useHistory()

  function handleClick() {
    history.push(`reservation/${id}`)
  }

  return (
    <ListItem
      button
      onClick={handleClick}
    >
        <ListItemText 
            primary={`Customer: ${customer.name}`}
            secondary={`From: ${rent_date} To: ${return_date}`}
        />
    </ListItem>
  )
}
