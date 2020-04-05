import { observable, action } from 'mobx'

import Alerts from './alerts'

class Root {
  @observable isLoggedIn = false

  @observable alerts = new Alerts()

  @action
  getNotifications() {
    const arrayToReturn = [...this.notifications]
    this.notifications = []
    return arrayToReturn
  }

  @action
  login() {
    // login action here
    this.isLoggedIn = true
  }

  @action
  logout() {
    // logout action here
    this.isLoggedIn = false
    this.alerts.alerts.push({
      message: 'Boli ste úspešne odhlásený',
    })
  }
}

export default Root
