import axios from 'axios';

export const GetProducts = async ({limit=30, pageParam=0, sortBy, order}) => {

    const params = new URLSearchParams({
    limit: String(limit),
    skip: String(pageParam),
    });

    if(sortBy) {
    params.set('sortBy', sortBy); // 'title' | 'price'
    params.set('order', order);   // 'asc' | 'desc'
    }

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products?${params}`)
    return response.data
}

export const GetOneProduct = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`)
    return response.data
}

export const GetLastProducts = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
        params: {
            limit: 10
        }
    })
    return response.data
}