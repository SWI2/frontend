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

const useStyles = makeStyles(theme => ({
  form: {
    position: 'absolute',
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
  },
  saveButton: {
    marginTop: theme.spacing(3),
  },
}))

const LoginModal = ({ isOpen, handleClose }) => {
  const styles = useStyles()
  const [values, setValues] = useState({
    name: '',
    password: '',
    showPassword: false,
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  return (
    <Modal open={isOpen} onClose={handleClose} className={styles.modal}>
      <form className={styles.form}>
        <FormControl fullWidth>
          <InputLabel>Prihlasovacie meno</InputLabel>
          <Input value={values.name} onChange={handleChange('name')} />
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
          variant="outlined"
          color="primary"
          className={styles.saveButton}
        >
          Prihlásiť sa
        </Button>
      </form>
    </Modal>
  )
}

export default LoginModal
