import React from 'react'
import {
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ProductItem from './ProductItem'

const useStyles = makeStyles({
  container: {
    paddingLeft: 200,
    paddingRight: 200,
    paddingTop: 20
  },
  paper: {
    borderRadius: 1
  }
})

const Component = () => {
  const c = useStyles()
  return (
    <div className={c.container}>
    
     
      <ProductItem 
        image="https://ae01.alicdn.com/kf/Hd2a390b742f24cc2a96535ad7f43a3bat.jpg_200x200.jpg_.webp"
        name="CHOETECH 100W GaN Fast Dual USB C Charger PD 3.0 For iPhone 11 Pro Max Support AFC FCP QC 3.0 for Samsung S10 Huawei P30 Xiaomi"
      />

    </div>
  )
}

// #1976d2 primary color

export default Component