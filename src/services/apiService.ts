import { type ProductData } from "../models/Product.js";
import { ApiError } from "../utils/errorHandler.js";

const BASE_URL = "https://dummyjson.com/products";

interface ProductsEnvelope {
    products: ProductData[];
    total: number;
    skip: number;
    limit: number;
}

// Create API requests using async/await and Promises.

// Implement functions to fetch product data and handle errors using try/catch.
async function fetchJson<T>(url: string): Promise<T> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const message = `Request failed with status ${response.status}`;
            const details = await response.text();
            throw new ApiError(message, response.status, details);
        }
        return (await response.json()) as T;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError("Network error while fetching data", undefined, error);
    }
}

export async function fetchProduct(id: number): Promise<ProductData> {
    return fetchJson<ProductData>(`${BASE_URL}/${id}`);
}

export async function fetchProducts(limit = 5): Promise<ProductData[]> {
    const payload = await fetchJson<ProductsEnvelope>(`${BASE_URL}?limit=${limit}`);
    return payload.products;
}
