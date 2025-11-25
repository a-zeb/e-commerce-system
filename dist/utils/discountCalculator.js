export function calculateDiscount(price, discountPercentage) {
    // This function should return the dollar amount that a product is discounted by. 
    // For example, if a product costs $100 and has a 10% discount, the function should return $10.
    const normalizedPercentage = Math.max(0, discountPercentage);
    const discountAmount = (price * normalizedPercentage) / 100;
    return Number(discountAmount.toFixed(2));
}
//# sourceMappingURL=discountCalculator.js.map