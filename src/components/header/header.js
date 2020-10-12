import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';

const Header = ({ count, total }) => {
  return (
    <header className="header row">
      <Link to="/" className="logo-link">
        <div className="logo">BookShop</div>
      </Link>
      <Link to="/cart" className="cart-link">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          ({count}): Р.{total}
        </div>
      </Link>
    </header>
  );
}

const mapStateToProps = ( { shoppingCart: { orderTotal, orderCount }} ) => {
  return {
    count: orderCount,
    total: orderTotal
  }
}

export default connect(mapStateToProps, null)(Header);
