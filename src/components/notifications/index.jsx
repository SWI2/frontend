import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import { withGlobalStore } from '../../store'

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />

const Notifications = ({ store }) =>
  store.alerts.alerts.map(element => {
    const { id, message, severity = 'info' } = element
    return (
      <Snackbar
        autoHideDuration={4000}
        key={id}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open
        onClose={() => store.alerts.hide(element)}
      >
        <Alert onClose={() => store.alerts.hide(element)} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    )
  })

export default withGlobalStore(Notifications)
