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
    marginBottom: 5,
    fontSize: 14
  },
  variationContainer: {
    marginBottom: 15
  },
  selectInput: {
    padding: 7,
    paddingLeft: 10,
    paddingRight: 10
  },
  highlights: {
    paddingLeft: 15,
    display: 'grid',
    gridGap: '3px'
  },
  highlightItem: {
    fontSize: 'small'
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

      <div>
        <ul className={c.highlights}>
          <li>
            <Typography className={c.highlightItem}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus quam, porttitor vitae massa nec.
            </Typography>
          </li>

          <li>
            <Typography className={c.highlightItem}>
              Vivamus lacinia quam tortor, vel molestie metus cursus non.
            </Typography>
          </li>

          <li>
            <Typography className={c.highlightItem}>
              Suspendisse pulvinar tempor dignissim. Fusce placerat luctus mauris ut ultricies. Duis luctus leo et purus vehicula consectetur.
            </Typography>
          </li>

          <li>
            <Typography className={c.highlightItem}>
              Ut quis justo a eros aliquet volutpat eu vitae leo. Sed venenatis justo sed urna tempus feugiat. 
            </Typography>
          </li>

          <li>
            <Typography className={c.highlightItem}>
              Nunc lobortis in erat ut iaculis. Aliquam pellentesque sem vel libero pulvinar, ac convallis diam laoreet.
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Component