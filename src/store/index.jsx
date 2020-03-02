import React, { createContext, useContext } from 'react'
import { observer } from 'mobx-react'

import RootStore from './root'

const GlobalContext = createContext({})
let globalStore = null

export const initStore = () => {
  if (!globalStore) {
    globalStore = new RootStore()
    return globalStore
  }

  return globalStore
}

export const withGlobalStore = Component => {
  const ObservableComponent = observer(Component)
  return props => {
    const context = useContext(GlobalContext)
    return <ObservableComponent store={context} {...props} />
  }
}

export const GlobalProvider = ({ children, store }) => (
  <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
)

export default GlobalProvider
