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
export declare class Product {
    private readonly props;
    constructor(props: ProductData);
    get id(): number;
    get title(): string;
    get description(): string;
    get price(): number;
    get discountPercentage(): number;
    get rating(): number;
    get stock(): number;
    get brand(): string;
    get category(): string;
    get thumbnail(): string;
    get images(): string[];
    displayDetails(): void;
    getPriceWithDiscount(): number;
}
//# sourceMappingURL=Product.d.ts.map