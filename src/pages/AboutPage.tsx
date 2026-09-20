import { Link } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { siteContent } from '../data'
import { LeadCapture } from '../components/marketing/LeadCapture'

export function AboutPage() {
  return <Container sx={{ py: { xs: 6, md: 10 } }}><Box sx={{ maxWidth: 780 }}><Typography variant="overline" color="secondary.main">The Ziva story</Typography><Typography variant="h1" sx={{ mt: 2 }}>{siteContent.aboutTitle}</Typography><Typography variant="h6" color="text.secondary" sx={{ mt: 4, fontWeight: 400, lineHeight: 1.7 }}>{siteContent.aboutCopy}</Typography></Box><Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mt: 10 }}><Box component="img" src="https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=1000&q=85" alt="Jewelry displayed in a studio" sx={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover' }} /><Box sx={{ bgcolor: 'primary.light', p: { xs: 4, md: 8 }, display: 'flex', alignItems: 'center' }}><Box><Typography variant="h3">Designed to stay with you.</Typography><Typography color="text.secondary" sx={{ mt: 3, lineHeight: 1.8 }}>From first sketch to final polish, our pieces are made to move through real life. Layer them, gift them, make them yours.</Typography><Button component={Link} to="/catalogue" variant="contained" endIcon={<ArrowForward />} sx={{ mt: 4 }}>Shop the edit</Button></Box></Box></Box><LeadCapture /></Container>
}
