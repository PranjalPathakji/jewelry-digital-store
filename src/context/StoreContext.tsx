import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { getProduct } from '../data'
import type { CartItem } from '../types'

type StoreContextValue = {
  cart: CartItem[]; wishlist: string[]; cartCount: number; subtotal: number
  addToCart: (productId: string) => void; updateQuantity: (productId: string, quantity: number) => void
  removeFromCart: (productId: string) => void; toggleWishlist: (productId: string) => void
  isWishlisted: (productId: string) => boolean
}
const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => JSON.parse(localStorage.getItem('ziva-cart') || localStorage.getItem('lumen-cart') || '[]'))
  const [wishlist, setWishlist] = useState<string[]>(() => JSON.parse(localStorage.getItem('ziva-wishlist') || localStorage.getItem('lumen-wishlist') || '[]'))
  useEffect(() => localStorage.setItem('ziva-cart', JSON.stringify(cart)), [cart])
  useEffect(() => localStorage.setItem('ziva-wishlist', JSON.stringify(wishlist)), [wishlist])
  const value = useMemo(() => ({
    cart, wishlist, cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    subtotal: cart.reduce((total, item) => { const product = getProduct(item.productId); return total + (product?.salePrice || product?.price || 0) * item.quantity }, 0),
    addToCart: (productId: string) => setCart((items) => { const existing = items.find((item) => item.productId === productId); return existing ? items.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { productId, quantity: 1 }] }),
    updateQuantity: (productId: string, quantity: number) => setCart((items) => quantity < 1 ? items.filter((item) => item.productId !== productId) : items.map((item) => item.productId === productId ? { ...item, quantity } : item)),
    removeFromCart: (productId: string) => setCart((items) => items.filter((item) => item.productId !== productId)),
    toggleWishlist: (productId: string) => setWishlist((items) => items.includes(productId) ? items.filter((id) => id !== productId) : [...items, productId]),
    isWishlisted: (productId: string) => wishlist.includes(productId),
  }), [cart, wishlist])
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export { StoreContext }