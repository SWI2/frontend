import React from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayJSProvider from '@date-io/dayjs'
import CssBaseline from '@material-ui/core/CssBaseline'

import { initStore, GlobalProvider } from '../store'
import './styles.css'
import Notifications from '../components/notifications'
import Navigation from '../components/navigation'

const store = initStore()

const App = () => (
  <GlobalProvider store={store}>
    <MuiPickersUtilsProvider utils={DayJSProvider}>
      <CssBaseline />
      <Navigation />
      <Notifications />
    </MuiPickersUtilsProvider>
  </GlobalProvider>
)

export default App
