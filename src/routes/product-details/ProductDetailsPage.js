import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Divider,
  Typography
} from '@material-ui/core'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'

const useStyles = makeStyles({
  container: {
    padding: 15
  },
  top: {
    display: 'flex',
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    marginTop: 25,
    marginBottom: 10
  },
  description: {
    fontSize: 'small',
    marginLeft: 25
  }
})

const Component = props => {
  const c = useStyles()
  return (
    <div className={c.container}>
      <div className={c.top}>
        <ProductImages/>
        <ProductInfo/>
      </div>
      <Divider/>
      <div>
        <Typography className={c.title} variant="h6">Deskripsi</Typography>
        <Typography className={c.description}>
          Integer blandit tempor urna id rutrum. Duis nec felis eu magna varius semper eu at dolor. Nulla orci purus, porta at nisl nec, porta bibendum eros. Mauris venenatis gravida sem eu fermentum. Suspendisse feugiat erat eget ullamcorper pretium. Pellentesque commodo ante nibh, nec hendrerit dui dapibus rhoncus. Aenean auctor, orci id finibus aliquet, elit odio finibus sapien, ut tempus turpis ex vitae velit. Nullam fermentum ultricies mi quis vulputate. Integer non interdum elit. Praesent malesuada enim in purus porttitor, sit amet dapibus sapien vestibulum. Curabitur ut venenatis ipsum. Praesent sem mi, varius vitae semper quis, feugiat non neque.
        </Typography>
      </div>
    </div>
  )
}

export default Component