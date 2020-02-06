import React from 'react'
import { 
  AppBar,
  Toolbar,
  Divider,
  InputBase,
  Avatar
} from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  appBar: {
    background: 'white',
    borderBottom: '1px',
    borderColor: '#f1f1f1'
  },
  inputContainer: {
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    background: '#f1f1f1'
  },
  inputBase: {
    width: 700
  },
  divider: {
    background: '#efefef'
  },
  searchIconContainer: {
    paddingRight: 15,
    alignItems: 'center',
    display: 'flex'
  },
  searchIcon: {
    color: 'gray'
  },
  rightPanel: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  avatar: {
    background: '#3790ff'
  }
})

const Component = props => {
  const c = useStyles()
  return (
    <div>
      <AppBar 
        elevation={0}
        className={c.appBar}
      >
        <Toolbar>
          <div className={c.inputContainer}>
            <InputBase
              className={c.inputBase}
              defaultValue=""
              placeholder="Search"
              startAdornment={
                <div className={c.searchIconContainer}>
                  <Search
                    className={c.searchIcon}
                  />
                </div>
              }
            />
          </div>
          
          <div className={c.rightPanel}>
            <Avatar className={c.avatar}>F</Avatar>
          </div>
        </Toolbar>
        <Divider className={c.divider}/>
      </AppBar>
      <Toolbar/>

      {props.children}
    </div>
  )
}

export default Component