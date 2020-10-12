import React from 'react';
import './book-list-item.css';

export default ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">Р.{price}</div>
        <button onClick={onAddedToCart}
          className="btn btn-info add-to-cart">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}