import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ProductImages from './ProductImages'

const useStyles = makeStyles({
  container: {
    padding: 15
  }
})

const Component = props => {
  const c = useStyles()
  return (
    <div className={c.container}>
      <ProductImages/>
    </div>
  )
}

export default Component