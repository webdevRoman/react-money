import React from 'react';

function Total({ income, expense, balance }) {
  return(
    <section className="total">
      <header className="total__header">
        <h3>Баланс</h3>
        <p className="total__balance">{balance} ₽</p>
      </header>
      <div className="total__main">
        <div className="total__main-item total__income">
          <h4>Доходы</h4>
          <p className="total__money total__money-income">+{income} ₽</p>
        </div>
        <div className="total__main-item total__expenses">
          <h4>Расходы</h4>
          <p className="total__money total__money-expenses">-{expense} ₽</p>
        </div>
      </div>
    </section>
  );
}

export default Total;