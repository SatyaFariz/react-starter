import React from 'react'
import {
  Typography,
  Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Link from '../../common/Link'

const useStyles = makeStyles({
  container: {
    maxWidth: 230,
    borderRadius: 1
  },

  innerContainer: {
    padding: 10
  },
  image: {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    objectFit: 'cover',
    position: 'absolute'
  },
  imageContainer: {
    display: 'block',
    height: 0,
    paddingTop: '100%',
    position: 'relative'
  },

  name: {
    fontSize: 13,
    marginTop: 10
  },

  link: {
    color: 'inherit',
    textDecoration: 'none'
  },
})

const Component = props => {
  const c = useStyles()
  return (
    <Paper elevation={1} className={c.container}>
      <Link to='/product' className={c.link}>
        <div className={c.innerContainer}>
          <div className={c.imageContainer}>
            <img
              className={c.image}
              src={props.image}
              alt={props.image}
            />
          </div>

          <Typography className={c.name}>{props.name}</Typography>

        </div>
      </Link>
    </Paper>
  )
}

export default Component