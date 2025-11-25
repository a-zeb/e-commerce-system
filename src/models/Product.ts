import { calculateDiscount } from "../utils/discountCalculator.js";

// Define a Product class that includes the appropriate properties 
// based on data provided in the API response.
export interface ProductData {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export class Product {
    constructor(private readonly props: ProductData) { }

    get category(): string {
        return this.props.category;
    }

    get price(): number {
        return this.props.price;
    }

    get discountPercentage(): number {
        return this.props.discountPercentage;
    }

    get title(): string {
        return this.props.title;
    }

    // Include methods displayDetails() and getPriceWithDiscount(), 
    // and implement them appropriately based on the provided data.
    displayDetails(): void {
        console.log(`\nProduct: ${this.props.title}`);
        console.log(`Category: ${this.props.category} | Brand: ${this.props.brand}`);
        console.log(`Base Price: $${this.props.price.toFixed(2)} | Rating: ${this.props.rating}`);
        console.log(`Description: ${this.props.description}`);
    }

    getPriceWithDiscount(): number {
        const discountAmount = calculateDiscount(this.props.price, this.props.discountPercentage);
        const discountedPrice = this.props.price - discountAmount;
        return Number(discountedPrice.toFixed(2));
    }
}
