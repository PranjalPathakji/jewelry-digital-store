import { Link } from 'react-router-dom'
import { Box, Container, Stack, Typography } from '@mui/material'
import { siteContent } from '../../data'

export function Footer() {
  return <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', mt: 12, py: 7 }}><Container><Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={4}><Box><Typography variant="h5" sx={{ letterSpacing: '.2em', mb: 1 }}>{siteContent.brand}</Typography><Typography sx={{ opacity: .72 }}>{siteContent.tagline}</Typography></Box><Stack direction="row" spacing={6}><Box><Typography variant="overline">Explore</Typography><Typography component={Link} to="/catalogue" color="inherit" display="block" sx={{ textDecoration: 'none', mt: 1 }}>Shop all</Typography><Typography component={Link} to="/about" color="inherit" display="block" sx={{ textDecoration: 'none', mt: 1 }}>Our story</Typography></Box><Box><Typography variant="overline">Care</Typography><Typography sx={{ mt: 1 }}>Shipping & returns</Typography><Typography sx={{ mt: 1 }}>Contact us</Typography></Box></Stack></Stack></Container></Box>
}
