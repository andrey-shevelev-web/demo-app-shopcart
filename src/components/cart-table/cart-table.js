import React from 'react';
import { connect } from 'react-redux';

import { bookAddedToCart, bookRemovedFromCart, bookRemovedAllFromCart } from '../../actions';
import './cart-table.css';

const CartTable = ({ items, total, count, onIncrease, onDecrease, onDelete }) => {
  
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>Р.{total}</td>
        <td>
          <button 
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    )
  }
  
  return (
    <div className="cart-table">
      <h2>Ваш заказ</h2>
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Товар</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Операции</th>
          </tr>
        </thead>
        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Итого ({count}): Р.{total}
      </div>
    </div>
  );
}

const mapStateToProps = ( { shoppingCart: { cartItems, orderTotal, orderCount }} ) => {
  return {
    items: cartItems,
    total: orderTotal,
    count: orderCount
  }
}

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: bookRemovedAllFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
