import {} from "../models/Product.js";
import { ApiError } from "../utils/errorHandler.js";
const BASE_URL = "https://dummyjson.com/products";
// Create API requests using async/await and Promises.
// Implement functions to fetch product data and handle errors using try/catch.
async function fetchJson(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const message = `Request failed with status ${response.status}`;
            const details = await response.text();
            throw new ApiError(message, response.status, details);
        }
        return (await response.json());
    }
    catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError("Network error while fetching data", undefined, error);
    }
}
export async function fetchProduct(id) {
    return fetchJson(`${BASE_URL}/${id}`);
}
export async function fetchProducts(limit = 5) {
    const payload = await fetchJson(`${BASE_URL}?limit=${limit}`);
    return payload.products;
}
//# sourceMappingURL=apiService.js.map