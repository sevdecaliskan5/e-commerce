export const selectCartList = (state) => state.cart.cartList;

export const selectTotals = (state) => {
  const cart = state.cart.cartList;

  const totalAmount = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.productQuantity * item.price, 0);

  const totalQuantity = cart.filter((item) => item.checked).length;

  return { totalAmount, totalQuantity };
};
