import { action, observable } from 'mobx'

const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9)

class Alerts {
  @observable alerts = []

  @action
  hide = alert => {
    this.alerts.remove(alert)
  }

  @action
  push = alert => {
    this.hide()
    this.alerts.push({ ...alert, id: generateId() })
  }
}

export default Alerts
