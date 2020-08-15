import React from 'react';
import Total from './components/Total';
import History from './components/History';
import Operation from './components/Operation';

function App() {
  return (
    <>
      <header>
        <h1>Кошелек</h1>
        <h2>Калькулятор расходов</h2>
      </header>

      <main>
        <div className="container">
          <Total/>
          <History/>
          <Operation/>
        </div>
      </main>
    </>
  );
}

export default App;