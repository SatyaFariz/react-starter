import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Divider,
  Typography,
  Button
} from '@material-ui/core'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'

const useStyles = makeStyles({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  rightCol: {
    width: 1000
  },
  verticalDivider: {
    paddingLeft: 20,
    paddingRight: 20
  },
  top: {
    display: 'flex',
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    marginBottom: 15
  },
  descriptionContainer: {
    paddingTop: 15,
    paddingBottom: 15
  },
  description: {
    fontSize: 'small',
    marginLeft: 25,
    marginBottom: 15
  },
  attribute: {
    fontSize: 'small',
    display: 'flex',
    alignItems: 'center'
  },
  attributeName: {
    fontWeight: 'bold',
    fontSize: 'small',
  },
  button: {
    elevation: 0,
    marginBottom: 10
  }
})

const Component = props => {
  const c = useStyles()
  return (
    <div className={c.container}>
      <div className={c.rightCol}>
        <Button variant="contained" className={c.button}
          fullWidth
          disableElevation
        >
          Beli sekarang
        </Button>

      </div>

      <div className={c.verticalDivider}>
        <Divider orientation="vertical"/>
      </div>

      <div>
        <div className={c.top}>
          <ProductImages/>
          <ProductInfo/>
        </div>
        <Divider/>
        <div className={c.descriptionContainer}>
          <Typography className={c.title} variant="h6">Deskripsi</Typography>
          <Typography className={c.description}>
            Integer blandit tempor urna id rutrum. Duis nec felis eu magna varius semper eu at dolor. Nulla orci purus, porta at nisl nec, porta bibendum eros. Mauris venenatis gravida sem eu fermentum. Suspendisse feugiat erat eget ullamcorper pretium. Pellentesque commodo ante nibh, nec hendrerit dui dapibus rhoncus. Aenean auctor, orci id finibus aliquet, elit odio finibus sapien, ut tempus turpis ex vitae velit. Nullam fermentum ultricies mi quis vulputate. Integer non interdum elit. Praesent malesuada enim in purus porttitor, sit amet dapibus sapien vestibulum. Curabitur ut venenatis ipsum. Praesent sem mi, varius vitae semper quis, feugiat non neque.
          </Typography>

          <div>
            <Typography className={c.attribute}>
              <Typography className={c.attributeName} component="span">
                Brand:&nbsp;
              </Typography>
              Apple
            </Typography>
            <Typography className={c.attribute}>
              <Typography className={c.attributeName} component="span">
                Manufacturer:&nbsp;
              </Typography>
              Apple
            </Typography>
            <Typography className={c.attribute}>
              <Typography className={c.attributeName} component="span">
                RAM:&nbsp;
              </Typography>
              16GB
            </Typography>
            <Typography className={c.attribute}>
              <Typography className={c.attributeName} component="span">
                Processor:&nbsp;
              </Typography>
              Intel i7
            </Typography>
            <Typography className={c.attribute}>
              <Typography className={c.attributeName} component="span">
                Tahun:&nbsp;
              </Typography>
              2017
            </Typography>
          </div>
        </div>

        <Divider/>
      </div>
    </div>
  )
}

export default Component