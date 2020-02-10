import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Divider,
  Select,
  MenuItem,
  FormControl
} from '@material-ui/core'
import StarRatings from '../../common/StarRatings'

const useStyles = makeStyles({
  container: {
    paddingLeft: 15
  },
  name: {
    fontSize: 'larger',
    fontWeight: 400
  },
  ratingInfoContainer: {
    display: 'flex',
    alignItems: 'baseline',
    marginTop: 5,
    marginBottom: 5
  },
  reviewsCount: {
    fontSize: 'small',
    marginLeft: 20
  },
  priceInfoContainer: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  discountedPrice: {
    textDecoration: 'line-through',
    marginLeft: 15,
    fontSize: 14,
    color: '#E53935',
  },
  price: {
    fontSize: 22,
    fontWeight: 600
  },
  discountRate: {
    fontSize: 12,
    color: 'grey',
    marginLeft: 15
  },
  variationAttribute: {
    fontWeight: 500,
    marginBottom: 5
  },
  variationContainer: {
    marginBottom: 15
  },
  selectInput: {
    padding: 7,
    paddingLeft: 10,
    paddingRight: 10
  },
})

const Component = props => {
  const c = useStyles()
  return (
    <div className={c.container}>
      <Typography className={c.name}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus nisl, commodo id tellus a, posuere tincidunt dui.
      </Typography>

      <div className={c.ratingInfoContainer}>
        <StarRatings
          rating={2.403}
          starDimension="17px"
          starSpacing="1px"
          starRatedColor="#F9A825"
        />

        <Typography className={c.reviewsCount}>214 ulasan</Typography>
      </div>

      <Divider/>

      <div className={c.priceInfoContainer}>
        <Typography className={c.price}>Rp100.000</Typography>
        <Typography className={c.discountedPrice}>Rp150.000</Typography>
        <Typography className={c.discountRate}>40%</Typography>
      </div>

      <div className={c.variationContainer}>
        <Typography className={c.variationAttribute}>Warna:</Typography>
        <FormControl variant="outlined">
          <Select labelId="label" id="select" value="20"
            classes={{ outlined: c.selectInput }}
          >
            <MenuItem value="10">Red</MenuItem>
            <MenuItem value="20">Black</MenuItem>
            <MenuItem value="10">Blue</MenuItem>
            <MenuItem value="20">Grey</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={c.variationContainer}>
        <Typography className={c.variationAttribute}>Ukuran:</Typography>
        <FormControl variant="outlined">
          <Select labelId="label" id="select" value="20"
            classes={{ outlined: c.selectInput }}
          >
            <MenuItem value="10">S</MenuItem>
            <MenuItem value="20">M</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Component