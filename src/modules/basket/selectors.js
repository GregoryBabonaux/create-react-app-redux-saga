import { createSelector } from 'reselect';

const getBasketItems = (state) => state.basket.items;
const getTax = (state) => state.basket.tax;

export const getTotalPriceInBasket = createSelector(
  [getBasketItems, getTax], (items, tax) => {
    const amount = items.reduce((acc, item) => acc + item.price, 0);
    return amount + (amount * (tax / 100));
  }
);