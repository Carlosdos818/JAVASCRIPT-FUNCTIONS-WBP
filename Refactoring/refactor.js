function previewFullPrice(itemPrice, salesTax, shippingPrice) {
  const priceAfterTax = itemPrice * (1 + salesTax);
  const priceAfterShipping = priceAfterTax + shippingPrice;
  return priceAfterShipping.toFixed(2);

}
  const items = {
  shirtPrice: 30.99,
  sweatshirtPrice: 40.99,
  smallPosterPrice: 15.99,
  largePosterPrice: 22.99,
  mugPrice: 12.99,
  };

  const salesTax = 0.08;

  const shippingPrice = 4.00;

  for (const item in items) {
    const itemPrice = items[item];
    const fullPrice = previewFullPrice(itemPrice, salesTax, shippingPrice);
    console.log(`${item} ${fullPrice}`);
  }
