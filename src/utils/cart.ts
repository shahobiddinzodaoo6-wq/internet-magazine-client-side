export const getCart = () => {
  const data = localStorage.getItem("cart")
  return data ? JSON.parse(data) : []
}

export const addToCart = (product: any) => {
  let cart = getCart()

  const exist = cart.find((item: any) => item.id === product.id)

  if (exist) {
    cart = cart.map((item: any) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  localStorage.setItem("cart", JSON.stringify(cart))

  window.dispatchEvent(new Event("storage"))
}