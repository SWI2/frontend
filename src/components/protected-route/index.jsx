import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { withGlobalStore } from '../../store'

const PrivateRoute = ({ store, children, ...rest }) => (
  <Route {...rest}>
    {store.isAuthenticated ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: {
            message: 'You need to log in in order to access this page.',
          },
        }}
      />
    )}
  </Route>
)

export default withGlobalStore(PrivateRoute)
