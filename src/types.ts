export type Product = {
  id: string
  name: string
  slug: string
  category: string
  material: string
  price: number
  salePrice?: number
  rating: number
  reviewCount: number
  tag: string
  image: string
  description: string
  featured: boolean
}

export type CartItem = { productId: string; quantity: number }