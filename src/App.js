import React from 'react';
import Total from './components/Total';
import History from './components/History';
import Operation from './components/Operation';

class App extends React.Component {
  state = {
    transactions: [],
    descr: '',
    amount: ''
  }

  addTransaction = add => {
    const transactions = [...this.state.transactions];
    transactions.push({
      id: `rm${(+new Date).toString(16)}`,
      descr: this.state.descr,
      amount: this.state.amount,
      add
    });
    this.setState({
      transactions,
      descr: '',
      amount: ''
    });
  }
  addDescr = e => {
    this.setState({ descr: e.target.value });
  }
  addAmount = e => {
    this.setState({ amount: e.target.value });
  }

  render() {
    return (
      <>
        <header>
          <h1>Кошелек</h1>
          <h2>Калькулятор расходов</h2>
        </header>

        <main>
          <div className="container">
            <Total/>
            <History transactions={this.state.transactions}/>
            <Operation addTransaction={this.addTransaction} addDescr={this.addDescr} addAmount={this.addAmount} descr={this.state.descr} amount={this.state.amount}/>
          </div>
        </main>
      </>
    );
  }
}

export default App;