import { Link } from 'react-router-dom'
import { Box, Button, Container, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Add, Remove, ShoppingBagOutlined } from '@mui/icons-material'
import { getProduct } from '../data'
import { useStore } from '../context/useStore'
import { money } from '../utils/format'

const FREE_SHIPPING_THRESHOLD = 8000
const STANDARD_SHIPPING_FEE = 499

export function CartPage() {
  const { cart, subtotal, updateQuantity, removeFromCart } = useStore()
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE

  return <Container sx={{ py: { xs: 6, md: 10 } }}>
    <Typography variant="overline" color="secondary.main">Your edit</Typography>
    <Typography variant="h1" sx={{ mt: 1, mb: 6 }}>Shopping bag</Typography>
    {cart.length === 0 ? <Box sx={{ textAlign: 'center', py: 8 }}><ShoppingBagOutlined sx={{ fontSize: 48, color: 'text.secondary' }} /><Typography variant="h4" sx={{ mt: 2 }}>Your bag is waiting.</Typography><Button component={Link} to="/catalogue" variant="contained" sx={{ mt: 3 }}>Explore the collection</Button></Box> : <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.3fr .7fr' }, gap: 8 }}>
      <Box>{cart.map((item) => { const product = getProduct(item.productId)!; return <Stack direction="row" spacing={2} key={item.productId} sx={{ py: 3, borderBottom: '1px solid', borderColor: 'divider' }}><Box component="img" src={product.image} alt={product.name} sx={{ width: 110, height: 125, objectFit: 'cover' }} /><Box sx={{ flex: 1 }}><Stack direction="row" justifyContent="space-between"><Box><Typography fontWeight={700}>{product.name}</Typography><Typography color="text.secondary" variant="body2" sx={{ mt: .5 }}>{product.material}</Typography></Box><Typography fontWeight={700}>{money((product.salePrice || product.price) * item.quantity)}</Typography></Stack><Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 3 }}><IconButton size="small" onClick={() => updateQuantity(item.productId, item.quantity - 1)}><Remove fontSize="small" /></IconButton><Typography>{item.quantity}</Typography><IconButton size="small" onClick={() => updateQuantity(item.productId, item.quantity + 1)}><Add fontSize="small" /></IconButton><Button size="small" onClick={() => removeFromCart(item.productId)} sx={{ ml: 2 }}>Remove</Button></Stack></Box></Stack> })}</Box>
      <Box sx={{ bgcolor: 'primary.light', p: 4, height: 'fit-content' }}><Typography variant="h5">Order summary</Typography><Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}><Typography color="text.secondary">Subtotal</Typography><Typography fontWeight={700}>{money(subtotal)}</Typography></Stack><Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}><Typography color="text.secondary">Shipping</Typography><Typography>{shipping === 0 ? 'Free' : money(shipping)}</Typography></Stack><Divider sx={{ my: 3 }} /><Stack direction="row" justifyContent="space-between"><Typography variant="h6">Total</Typography><Typography variant="h6">{money(subtotal + shipping)}</Typography></Stack><Button fullWidth variant="contained" sx={{ mt: 4 }} onClick={() => alert('Demo checkout: no payment is processed.')}>Checkout</Button><Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 2 }}>Demo checkout only. No payment is processed.</Typography></Box>
    </Box>}
  </Container>
}
