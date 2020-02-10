import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ReactImageMagnify from 'react-image-magnify'

const useStyles = makeStyles({
  container: {

  },
  image: {
 /*   width: 450,
    height: 450,*/
    objectFit: 'cover',
  },
  zoomContainer: {
    zIndex: 1
  }
})

const Component = props => {
  const c = useStyles()
  return (
    <div className={c.container}>
    {/*}  <img 
        className={c.bigImage}
        src="https://img.tek.id/img/content/2019/06/27/17621/apple-siapkan-macbook-pro-generasi-baru-siap-meluncur-september-UIL32am9YD.jpg"
      
      />*/}

      <ReactImageMagnify {...{
          imageClassName: c.image,
          enlargedImageClassName: c.image,
          enlargedImageContainerClassName: c.zoomContainer,
          smallImage: {
              alt: 'Wristwatch by Ted Baker London',
              width: 450,
              height: 450,
              src: 'https://img.tek.id/img/content/2019/06/27/17621/apple-siapkan-macbook-pro-generasi-baru-siap-meluncur-september-UIL32am9YD.jpg'
          },
          largeImage: {
              src: 'https://img.tek.id/img/content/2019/06/27/17621/apple-siapkan-macbook-pro-generasi-baru-siap-meluncur-september-UIL32am9YD.jpg',
              width: 500,
              height: 500
          }
      }} />
    </div>
  )
}

export default Component