import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Button, Container, Divider, IconButton, Rating, Stack, Typography } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { getProduct } from '../data'
import { useStore } from '../context/useStore'
import { money } from '../utils/format'

export function ProductDetailsPage() {
  const { productId } = useParams()
  const product = getProduct(productId || '')
  const { addToCart, toggleWishlist, isWishlisted } = useStore()
  const [added, setAdded] = useState(false)
  if (!product) return <Container sx={{ py: 12 }}><Typography variant="h2">Piece not found</Typography><Button component={Link} to="/catalogue" sx={{ mt: 3 }}>Back to collection</Button></Container>
  return <Container sx={{ py: { xs: 5, md: 10 } }}><Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 } }}><Box component="img" src={product.image} alt={product.name} sx={{ width: '100%', aspectRatio: '1 / 1.12', objectFit: 'cover' }} /><Box sx={{ py: { md: 5 } }}><Typography variant="overline" color="secondary.main">{product.category} / {product.tag}</Typography><Typography variant="h1" sx={{ mt: 2 }}>{product.name}</Typography><Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}><Rating value={product.rating} precision={.1} readOnly size="small" /><Typography variant="body2">{product.rating} ({product.reviewCount} reviews)</Typography></Stack><Typography variant="h5" sx={{ mt: 4 }}>{product.salePrice ? <><Box component="span" sx={{ color: 'secondary.main', mr: 2 }}>{money(product.salePrice)}</Box><Box component="span" sx={{ textDecoration: 'line-through', color: 'text.secondary', fontSize: 16 }}>{money(product.price)}</Box></> : money(product.price)}</Typography><Typography color="text.secondary" sx={{ mt: 3, lineHeight: 1.8 }}>{product.description}</Typography><Divider sx={{ my: 4 }} /><Typography variant="body2" sx={{ mb: 1 }}><b>Material</b> {product.material}</Typography><Typography variant="body2"><b>Shipping</b> Complimentary over ₹8,000</Typography><Stack direction="row" spacing={2} sx={{ mt: 5 }}><Button fullWidth variant="contained" onClick={() => { addToCart(product.id); setAdded(true) }}>{added ? 'Added to bag' : 'Add to bag'}</Button><IconButton onClick={() => toggleWishlist(product.id)} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 0 }}>{isWishlisted(product.id) ? <Favorite color="secondary" /> : <FavoriteBorder />}</IconButton></Stack></Box></Box></Container>
}
