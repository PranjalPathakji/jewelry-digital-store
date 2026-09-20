import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Badge, Box, Button, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { Close, Menu, ShoppingBagOutlined } from '@mui/icons-material'
import { promotions, siteContent } from '../../data'
import { useStore } from '../../context/useStore'

export function Header() {
  const { cartCount } = useStore()
  const [open, setOpen] = useState(false)
  const links = [['Shop', '/catalogue'], ['About', '/about']]
  return <>
    <Box sx={{ bgcolor: 'primary.main', color: 'white', textAlign: 'center', py: 1, fontSize: 12, letterSpacing: '.08em' }}>{promotions.announcement}</Box>
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
      <Toolbar sx={{ minHeight: { xs: 68, md: 82 }, justifyContent: 'space-between' }}>
        <IconButton onClick={() => setOpen(true)} sx={{ display: { md: 'none' } }}><Menu /></IconButton>
        <Typography component={Link} to="/" variant="h5" sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 800, letterSpacing: '.2em' }}>{siteContent.brand}</Typography>
        <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>{links.map(([label, href]) => <Button component={Link} to={href} key={href} color="inherit">{label}</Button>)}</Stack>
        <IconButton component={Link} to="/cart" aria-label="Shopping bag"><Badge badgeContent={cartCount} color="secondary"><ShoppingBagOutlined /></Badge></IconButton>
      </Toolbar>
    </AppBar>
    <Drawer open={open} onClose={() => setOpen(false)}><Box sx={{ width: 260, p: 3 }}><IconButton onClick={() => setOpen(false)} sx={{ float: 'right' }}><Close /></IconButton><Typography variant="h5" sx={{ mt: 5, mb: 3, color: 'primary.main', letterSpacing: '.12em' }}>{siteContent.brand}</Typography>{links.map(([label, href]) => <Button fullWidth component={Link} to={href} key={href} onClick={() => setOpen(false)} sx={{ justifyContent: 'flex-start', py: 1.5 }}>{label}</Button>)}</Box></Drawer>
  </>
}
