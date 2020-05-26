import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { withGlobalStore } from '../../store'

const PrivateRoute = ({ store, children, ...rest }) => {
  const component = store.isLoggedIn ? children : <Redirect to="/" />
  return <Route {...rest} render={() => component} />
}

export default withGlobalStore(PrivateRoute)
