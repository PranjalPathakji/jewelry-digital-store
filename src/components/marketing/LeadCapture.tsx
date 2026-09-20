import { useState } from 'react'
import { Alert, Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import { siteContent } from '../../data'

export function LeadCapture() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return <Container sx={{ py: 10 }}><Box sx={{ borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider', py: 6, display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}><Box><Typography variant="h3">{siteContent.leadTitle}</Typography><Typography color="text.secondary" sx={{ mt: 1, maxWidth: 500 }}>{siteContent.leadCopy}</Typography></Box>{done ? <Alert severity="success">You are on the list.</Alert> : <Stack direction={{ xs: 'column', sm: 'row' }}><TextField value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" size="small" type="email" /><Button variant="contained" onClick={() => email && setDone(true)}>Sign me up</Button></Stack>}</Box></Container>
}
