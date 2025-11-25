export function calculateTax(amount: number, category: string): number {
    // This function should return the dollar amount that a product is taxed at. 
    // For example, if a product costs 100 and is taxed at 10 100 and is taxed at 10 10.

    // The product data returned from the API does not include a taxPercentage field
    // like it includes a discountPercentage field

    // Apply a default standard tax rate of 4.75% to each product; 
    // however, products with a category of “groceries” should only be taxed at 3%.
    const STANDARD_RATE = 0.0475;
    const GROCERY_RATE = 0.03;
    const rate = category.toLowerCase() === "groceries" ? GROCERY_RATE : STANDARD_RATE;
    const taxAmount = amount * rate;
    return Number(taxAmount.toFixed(2));
}
