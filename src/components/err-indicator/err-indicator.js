import React from 'react';

import './err-indicator.css';
import errIcon from './err_icon.png';

const ErrIndicator = () => {
  return (
    <div className="err-indicator">
      <img src={errIcon} alt="Error icon" />
      <span className="boom">Ошибка!</span>
      <span>Мы прилагаем все усилия чтобы исправить.</span>
      <span>Приносим Вам извинения!</span>
    </div>
  )
}

export default ErrIndicator;
