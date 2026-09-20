import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import App from './App'
import './index.css'

const theme = createTheme({
  palette: { primary: { main: '#25241f', light: '#f1eee8' }, secondary: { main: '#a1744c' }, background: { default: '#fbfaf7', paper: '#fbfaf7' }, text: { primary: '#25241f', secondary: '#706e68' } },
  typography: { fontFamily: 'DM Sans, sans-serif', h1: { fontFamily: 'Playfair Display, serif', fontSize: 'clamp(3rem, 7vw, 6.8rem)', lineHeight: 1.02, fontWeight: 500, letterSpacing: '-.03em' }, h2: { fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.4rem, 4vw, 4.5rem)', lineHeight: 1.05, fontWeight: 500 }, h3: { fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 'clamp(2rem, 3vw, 3rem)' }, h4: { fontFamily: 'Playfair Display, serif', fontWeight: 500 }, h5: { fontWeight: 600 }, button: { textTransform: 'none', fontWeight: 600, letterSpacing: '.01em' }, overline: { letterSpacing: '.14em', fontWeight: 700, fontSize: 11 } },
  shape: { borderRadius: 0 },
  components: { MuiButton: { defaultProps: { disableElevation: true } }, MuiTextField: { defaultProps: { variant: 'outlined' } }, MuiCard: { styleOverrides: { root: { borderRadius: 0 } } } },
})

createRoot(document.getElementById('root')!).render(<StrictMode><ThemeProvider theme={theme}><CssBaseline /><App /></ThemeProvider></StrictMode>)
