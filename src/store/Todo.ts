import axios from 'axios'
import { useParams } from 'react-router'
import { create } from 'zustand'

interface SubCategory {
    id: number
    subCategoryName: string
}

interface Category {
    id: number
    pageNumber: number
    pageSize: number
    categoryImage: string
    categoryName: string,
    totalRecord: number,

}

interface CategoryState {
    data: Category[]
}



const urlInfo = "https://store-api.softclub.tj/Product/get-product-by-id"

export const useTodo = create<CategoryState>((set) => ({
    data: [],
    product: null,
    getProducts: async () => {
        try {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/Product/get-products`)
            set({
                data: data.data.products,
            })
        } catch (error) {
            console.error(error)
        }
    },

    infoUser: async (id: number) => {
        try {
            let { data } = await axios.get(`${urlInfo}?id=${id}`)
            set({ product: data.data })
        } catch (error) {
            console.error(error);
        }
    }
}))