export interface IProduct {
  id: number
  productName: string
  image: string
  price: number
  discountPrice?: number
  hasDiscount?: boolean
}

export const getWishlist = (): IProduct[] => {
  const data = localStorage.getItem("wishlist")
  return data ? JSON.parse(data) : []
}

export const toggleWishlist = (product: IProduct): IProduct[] => {
  let wishlist = getWishlist()

  const exist = wishlist.find((item) => item.id === product.id)

  if (exist) {
    wishlist = wishlist.filter((item) => item.id !== product.id)
  } else {
    wishlist.push(product)
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist))
  window.dispatchEvent(new Event("storage"))

  return wishlist
}

export const isInWishlist = (id: number): boolean => {
  const wishlist = getWishlist()
  return wishlist.some((item) => item.id === id)
}