// Import the product classes, tax calculator, and API service.
import { Product, type ProductData } from "./models/Product.js"
import { calculateTax } from "./utils/taxCalculator.js"
import { handleError } from "./utils/errorHandler.js"
import * as apiService from "./services/apiService.js"

// Create instances of Product by fetching product data from the API.

const renderProduct = (product: Product): void => {
    product.displayDetails();
    const discountedPrice = product.getPriceWithDiscount();
    const taxAmount = calculateTax(discountedPrice, product.category);
    const finalTotal = Number(discountedPrice + taxAmount).toFixed(2);

    console.log(`Discounted Price: $${discountedPrice.toFixed(2)} (after ${product.discountPercentage}% off)`);
    console.log(`Tax: $${taxAmount.toFixed(2)}`);
    console.log(`Final Total: $${finalTotal}`);

    document.body.innerHTML += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
            <h2>${product.title}</h2>
            <p><strong>Discounted Price:</strong> $${discountedPrice.toFixed(2)} (after ${product.discountPercentage}% off)</p>
            <p><strong>Tax:</strong> $${taxAmount.toFixed(2)}</p>
            <p><strong>Final Total:</strong> $${finalTotal}</p>
        </div>
    `;

    //     document.body.innerHTML += `
    //         <div style="border:1px solid #ccc; padding:10px; margin:10px;">
    //             <h2>${product.title}</h2>
    //             <p>Category: ${product.category} | Brand: ${product.props.brand}</p>
    //             <p>Base Price: $${product.price.toFixed(2)} | Rating: ${product.props.rating}</p>
    //             <p>Description: ${product.props.description}</p>
    //             <p><strong>Discounted Price:</strong> $${discountedPrice.toFixed(2)} (after ${product.discountPercentage}% off)</p>
    //             <p><strong>Tax:</strong> $${taxAmount.toFixed(2)}</p>
    //             <p><strong>Final Total:</strong> $${finalTotal}</p>
    //         </div>
    //     `;
};

// Use asynchronous functions to fetch product data and display it.
async function loadProducts(): Promise<void> {
    // Demonstrate error handling and OOP principles in action.
    try {
        const productData: ProductData[] = await apiService.fetchProducts(3);
        const products = productData.map((item) => new Product(item));
        products.forEach(renderProduct);
    } catch (error) {
        handleError(error);
    }
}

loadProducts().catch(handleError);
