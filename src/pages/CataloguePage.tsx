import { useState } from 'react'
import { Alert, Container, MenuItem, Select, Stack, TextField, Typography, Box } from '@mui/material'
import { products } from '../data'
import { ProductCard } from '../components/catalogue/ProductCard'

export function CataloguePage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('Featured')
  const filtered = products.filter((product) => (category === 'All' || product.category === category) && `${product.name} ${product.material}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => sort === 'Price low' ? (a.salePrice || a.price) - (b.salePrice || b.price) : sort === 'Price high' ? (b.salePrice || b.price) - (a.salePrice || a.price) : Number(b.featured) - Number(a.featured))
  return <Container sx={{ py: { xs: 6, md: 10 } }}><Typography variant="overline" color="secondary.main">The collection</Typography><Typography variant="h1" sx={{ mt: 1 }}>Find your everyday.</Typography><Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 6, mb: 5 }}><TextField fullWidth placeholder="Search pieces" value={query} onChange={(event) => setQuery(event.target.value)} /><Select value={category} onChange={(event) => setCategory(event.target.value)} sx={{ minWidth: 150 }}><MenuItem value="All">All categories</MenuItem>{[...new Set(products.map((product) => product.category))].map((item) => <MenuItem value={item} key={item}>{item}</MenuItem>)}</Select><Select value={sort} onChange={(event) => setSort(event.target.value)} sx={{ minWidth: 140 }}><MenuItem value="Featured">Featured</MenuItem><MenuItem value="Price low">Price: low</MenuItem><MenuItem value="Price high">Price: high</MenuItem></Select></Stack><Typography color="text.secondary" sx={{ mb: 3 }}>{filtered.length} pieces</Typography>{filtered.length ? <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: 4, md: 5 } }}>{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</Box> : <Alert severity="info">No pieces match that search. Try another edit.</Alert>}</Container>
}
