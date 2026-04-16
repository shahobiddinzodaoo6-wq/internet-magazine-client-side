import { useEffect } from 'react'
import { useTodo } from '../store/Todo'
import { useParams } from 'react-router-dom'

const Info = () => {
  const { id } = useParams()
  const { product, infoUser } = useTodo()

  useEffect(() => {
    if (id && !isNaN(+id)) {
      infoUser(+id)
    }
  }, [id])


  if (!product) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading...
      </div>
    )
  }
  

  return (
    <div className="max-w-[1200px] mx-auto mt-[100px] px-4">
      <div className="flex gap-[50px] max-sm:flex-col max-sm:items-center">

        <div className='flex gap-[30px] max-sm:flex-col-reverse max-sm:items-center'>
          <img
            src={`https://store-api.softclub.tj/images/${product.images?.[0].images}`}
            alt={product.productName}
            className="w-[100px] h-[100px] mt-[30px] bg-[#f5f5f5] dark:bg-gray-800 rounded"
          />

          <div className="w-[400px] max-sm:w-full h-[400px] max-sm:h-[300px] bg-[#f5f5f5] dark:bg-gray-800 flex items-center justify-center rounded">
            <img
              src={`https://store-api.softclub.tj/images/${product.images?.[0].images}`}
              alt={product.productName}
              className="max-h-[300px] object-contain"
            />
          </div>


        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-[30px] font-bold">
            {product.productName}
          </h1>

          <p className="text-[20px] text-red-500 font-semibold">
            ${product.hasDiscount ? product.discountPrice : product.price}
          </p>

          <p className="text-gray-600">
            {product.description}
          </p>

          <p><b>Brand:</b> {product.brand}</p>
          <p><b>Quantity:</b> {product.quantity}</p>
        </div>

      </div>
    </div>
  )
}

export default Info