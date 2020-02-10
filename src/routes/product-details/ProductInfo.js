import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Divider
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
  }
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
    </div>
  )
}

export default Component