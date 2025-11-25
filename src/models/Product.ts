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

    get id(): number {
        return this.props.id;
    }

    get title(): string {
        return this.props.title;
    }

    get description(): string {
        return this.props.description;
    }

    get price(): number {
        return this.props.price;
    }

    get discountPercentage(): number {
        return this.props.discountPercentage;
    }

    get rating(): number {
        return this.props.rating;
    }

    get stock(): number {
        return this.props.stock;
    }

    get brand(): string {
        return this.props.brand;
    }

    get category(): string {
        return this.props.category;
    }

    get thumbnail(): string {
        return this.props.thumbnail;
    }

    get images(): string[] {
        return this.props.images;
    }

    // Include methods displayDetails() and getPriceWithDiscount(), 
    // and implement them appropriately based on the provided data.
    displayDetails(): void {
        console.log(`\nProduct: ${this.title}`);
        console.log(`Category: ${this.category} | Brand: ${this.brand}`);
        console.log(`Base Price: $${this.price.toFixed(2)} | Rating: ${this.rating}`);
        console.log(`Description: ${this.description}\n`);
    }

    getPriceWithDiscount(): number {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        const discountedPrice = this.price - discountAmount;
        return Number(discountedPrice.toFixed(2));
    }
}
