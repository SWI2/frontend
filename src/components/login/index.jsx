import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'

import { withGlobalStore } from '../../store'

const useStyles = makeStyles(theme => ({
  form: {
    position: 'relative',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  saveButton: {
    marginTop: theme.spacing(3),
  },
}))

const LoginModal = ({ store, isOpen, handleClose }) => {
  const history = useHistory()
  const styles = useStyles()
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  })
  const [showWrongCredentials, setShowWrongCredentials] = useState(false)
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await store.login(values)
      history.push('/admin/reservation')
      handleClose()
    } catch (error) {
      setShowWrongCredentials(true)
    }
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  return (
    <Modal open={isOpen} onClose={handleClose} className={styles.modal}>
      <div className={styles.form}>
        {showWrongCredentials && (
          <Alert severity="error">
            Zadaný účet neexistuje. Skúste to znovu.
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel>Prihlasovacie meno</InputLabel>
            <Input
              type="email"
              value={values.email}
              onChange={handleChange('email')}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-password">Heslo</InputLabel>
            <Input
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={styles.saveButton}
          >
            Prihlásiť sa
          </Button>
        </form>
      </div>
    </Modal>
  )
}

export default withGlobalStore(LoginModal)
