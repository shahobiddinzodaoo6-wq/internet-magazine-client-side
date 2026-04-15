import axios from 'axios'
import { create } from 'zustand'

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
    product: any | null
    getProducts: () => Promise<void>
    infoUser: (id: number) => Promise<void>
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
            const { data } = await axios.get(`${urlInfo}?id=${id}`)
            set({ product: data.data })
        } catch (error) {
            console.error(error);
        }
    }
}))