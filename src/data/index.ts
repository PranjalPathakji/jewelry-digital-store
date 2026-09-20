import productsJson from './products.json'
import categoriesJson from './categories.json'
import testimonialsJson from './testimonials.json'
import promotionsJson from './promotions.json'
import siteContentJson from './site-content.json'
import type { Product } from '../types'

export const products = productsJson as Product[]
export const categories = categoriesJson
export const testimonials = testimonialsJson
export const promotions = promotionsJson
export const siteContent = siteContentJson
export const getProduct = (idOrSlug: string) => products.find((product) => product.id === idOrSlug || product.slug === idOrSlug)