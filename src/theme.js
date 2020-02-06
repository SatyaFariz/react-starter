import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      contained: { // Name of the rule
        backgroundColor: '#1976d2', // Some CSS
        color: 'white',
        '&:hover': {
          backgroundColor: '#1669bb'
        },
      },
    },
  },
})

export default theme