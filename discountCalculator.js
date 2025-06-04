function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger;
    let totalPrice = 0;
    
    for (let i = 0; i < quantity; i++) {
        debugger;
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        debugger;
        totalPrice *= 0.9;
    }

    return totalPrice;
}

calculateDiscountedPrice(5,10);

module.exports = calculateDiscountedPrice;