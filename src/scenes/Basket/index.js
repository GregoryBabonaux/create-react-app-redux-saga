import React from 'react';
import { object, array } from 'prop-types';

// redux
import { connect } from 'react-redux';
import { getTotalPriceInBasket } from 'modules/basket/selectors'

// components
import Title from 'components/Title';

class Basket extends React.PureComponent {

  render() {
    const { props: { items, totalPrice, currency } } = this;
    return (
      <div>
        <Title>Mon petit panier</Title>
        <ul>
          {items.map((item, index) => <li key={index}>{item.name}: {item.price} {currency} HT</li>)}
        </ul>

        Montant total TTC : {totalPrice} {currency} TTC
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.basket.items,
  currency: state.basket.currency,
  totalPrice: getTotalPriceInBasket(state),
});

export default connect(mapStateToProps)(Basket);
