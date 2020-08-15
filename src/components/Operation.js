import React from 'react';

function Operation({ addTransaction, addDescr, addAmount, descr, amount }) {
  return (
    <section className="operation">
      <h3>Новая операция</h3>
      <form id="form">
        <label>
          <input onChange={addDescr} value={descr} type="text" className="operation__fields operation__name" placeholder="Наименование операции" />
        </label>
        <label>
          <input onChange={addAmount} value={amount} type="number" className="operation__fields operation__amount" placeholder="Введите сумму" />
        </label>
        <div className="operation__btns">
          <button onClick={() => { addTransaction(false) }} type="button" className="operation__btn operation__btn-subtract">РАСХОД</button>
          <button onClick={() => { addTransaction(true) }} type="button" className="operation__btn operation__btn-add">ДОХОД</button>
        </div>
      </form>
    </section>
  );
}

export default Operation;