import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'

const useStyles = makeStyles({
  container: {
    padding: 15
  },
  top: {
    display: 'flex'
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
    </div>
  )
}

export default Component