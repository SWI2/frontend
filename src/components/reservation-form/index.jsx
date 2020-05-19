import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import { DateTimePicker } from '@material-ui/pickers'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Slider from 'react-slick'
import dayjs from 'dayjs'
import Alert from '@material-ui/lab/Alert'

import { withGlobalStore } from '../../store'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(3),
  },
  formTitle: {
    textAlign: 'center',
  },
  submit: {
    textAlign: 'right',
  },
  slide: {
    'marginLeft': '30%',
    'marginRight': '30%',
    'marginBottom': theme.spacing(3),
    '& img': {
      width: '100%',
    },
  },
}))

const ReservationForm = ({ images, carId, store }) => {
  const styles = useStyles()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const [showFormError, setShowFormError] = useState(false)
  const [showFormSuccess, setShowFormSuccess] = useState(false)

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    from: dayjs().toISOString(),
    to: dayjs()
      .add(7, 'day')
      .toISOString(),
    note: '',
    card_id: Number(carId),
  })

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await store.reserveCar(values)
      setShowFormSuccess(true)
    } catch (error) {
      console.error(error)
      setShowFormError(true)
    }
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target?.value || event.toISOString() })
  }

  return (
    <Container fixed className={styles.root}>
      <Paper elevation={3} className={styles.paper}>
        <div className={styles.slide}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div>
                {/* eslint-disable-next-line react/no-array-index-key */}
                <img key={index} src={image} />
              </div>
            ))}
          </Slider>
        </div>
        <Typography className={styles.formTitle} component="h1" variant="h4">
          Rezervačný formulár
        </Typography>

        {showFormSuccess && (
          <Alert severity="info">
            Objednávka bola úspešne spracovaná. V krátkej dobe Vás budeme
            kontaktovať. Ďakujeme.
          </Alert>
        )}

        {showFormError && (
          <Alert severity="error">
            Formulár sa nepodarilo odoslať. Prosím skúste ešte raz.
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Meno a priezvisko"
                placeholder=""
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('name')}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Email"
                placeholder=""
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('email')}
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Telefón"
                placeholder=""
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('phone')}
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DateTimePicker
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                format="MM/DD/YYYY HH:MM"
                margin="normal"
                label="Dátum vyzdvihnutia"
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                fullWidth
                onChange={handleChange('from')}
                value={values.from}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DateTimePicker
                margin="normal"
                inputVariant="outlined"
                label="Dátum vrátenia"
                format="MM/DD/YYYY HH:MM"
                fullWidth
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                onChange={handleChange('to')}
                value={values.to}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                placeholder="Poznámka k objednávke"
                multiline
                rows={2}
                rowsMax={4}
                fullWidth
                variant="outlined"
                onChange={handleChange('note')}
              />
            </Grid>
            <Grid item xs={12} className={styles.submit}>
              <Button type="submit" variant="contained" color="primary">
                Objednať
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default withGlobalStore(ReservationForm)
