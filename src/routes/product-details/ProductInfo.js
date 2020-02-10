import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Typography
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

})

const Component = props => {
  const c = useStyles()
  return (
    <div className={c.container}>
      <Typography className={c.name}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus nisl, commodo id tellus a, posuere tincidunt dui.
      </Typography>

      <div>
        <StarRatings
          rating={2.403}
          starDimension="17px"
          starSpacing="1px"
          starRatedColor="#F9A825"
        />
      </div>
    </div>
  )
}

export default Component