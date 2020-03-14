import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import { KeyboardDatePicker } from '@material-ui/pickers'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Slider from 'react-slick'

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

const ReservationForm = () => {
  const styles = useStyles()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Container fixed className={styles.root}>
      <Paper elevation={3} className={styles.paper}>
        <div className={styles.slide}>
          <Slider {...settings}>
            <div>
              <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2020/Civic-Sedan/non-VLP/Global-Nav/Updated-MY20-Civic-Sedan-non-VLP-nav-2x.png" />
            </div>
            <div>
              <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2020/Civic-Sedan/non-VLP/Global-Nav/Updated-MY20-Civic-Sedan-non-VLP-nav-2x.png" />
            </div>
            <div>
              <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2020/Civic-Sedan/non-VLP/Global-Nav/Updated-MY20-Civic-Sedan-non-VLP-nav-2x.png" />
            </div>
          </Slider>
        </div>
        <Typography className={styles.formTitle} component="h1" variant="h4">
          Rezervačný formulár
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Meno a priezvisko"
              placeholder=""
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Email"
              placeholder=""
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Telefón"
              placeholder=""
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              margin="normal"
              label="Dátum vyzdvihnutia"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <KeyboardDatePicker
              margin="normal"
              inputVariant="outlined"
              label="Dátum vrátenia"
              format="MM/dd/yyyy"
              fullWidth
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
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
            />
          </Grid>
          <Grid item xs={12} className={styles.submit}>
            <Button variant="contained" color="primary">
              Objednať
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default ReservationForm
