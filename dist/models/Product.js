import { calculateDiscount } from "../utils/discountCalculator.js";
export class Product {
    props;
    constructor(props) {
        this.props = props;
    }
    get id() {
        return this.props.id;
    }
    get title() {
        return this.props.title;
    }
    get description() {
        return this.props.description;
    }
    get price() {
        return this.props.price;
    }
    get discountPercentage() {
        return this.props.discountPercentage;
    }
    get rating() {
        return this.props.rating;
    }
    get stock() {
        return this.props.stock;
    }
    get brand() {
        return this.props.brand;
    }
    get category() {
        return this.props.category;
    }
    get thumbnail() {
        return this.props.thumbnail;
    }
    get images() {
        return this.props.images;
    }
    // Include methods displayDetails() and getPriceWithDiscount(), 
    // and implement them appropriately based on the provided data.
    displayDetails() {
        console.log(`\nProduct: ${this.title}`);
        console.log(`Category: ${this.category} | Brand: ${this.brand}`);
        console.log(`Base Price: $${this.price.toFixed(2)} | Rating: ${this.rating}`);
        console.log(`Description: ${this.description}\n`);
    }
    getPriceWithDiscount() {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        const discountedPrice = this.price - discountAmount;
        return Number(discountedPrice.toFixed(2));
    }
}
//# sourceMappingURL=Product.js.map