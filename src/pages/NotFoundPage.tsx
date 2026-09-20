import { Link } from 'react-router-dom'
import { Button, Container, Typography } from '@mui/material'

export function NotFoundPage() {
  return <Container sx={{ py: 12 }}><Typography variant="h2">Page not found</Typography><Button component={Link} to="/catalogue" sx={{ mt: 3 }}>Back to collection</Button></Container>
}
