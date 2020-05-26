import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from 'react-router-dom'

export default function ReservationListItem(props) {
  const { reservation } = props
  const { id, customer, rent_date, return_date } = reservation
  const history = useHistory()

  function handleClick() {
    history.push(`reservation/${id}`)
  }

  return (
    <ListItem button onClick={handleClick}>
      <ListItemText
        primary={`Jméno zákazníka: ${customer.name}`}
        secondary={`Od: ${rent_date} Do: ${return_date}`}
      />
    </ListItem>
  )
}
