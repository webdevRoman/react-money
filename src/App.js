import React from 'react';
import Total from './components/Total';
import History from './components/History';
import Operation from './components/Operation';

class App extends React.Component {
  state = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || [],
    descr: '',
    amount: '',
    income: 0,
    expense: 0,
    balance: 0,
  }

  componentWillMount() {
    this.getBalance();
  }

  addTransaction = add => {
    const transactions = [...this.state.transactions];
    transactions.push({
      id: `rm${(+new Date()).toString(16)}`,
      descr: this.state.descr,
      amount: parseFloat(this.state.amount),
      add,
    });
    this.setState({
      transactions,
      descr: '',
      amount: '',
    }, () => {
      this.getBalance();
      this.updateStorage();
    });
  }
  delTransaction = key => {
    const newTransactions = this.state.transactions.filter(t => t.id !== key);
    this.setState({ transactions: newTransactions, }, () => {
      this.getBalance()
      this.updateStorage()
    });
  }
  addDescr = e => {
    this.setState({ descr: e.target.value });
  }
  addAmount = e => {
    this.setState({ amount: e.target.value });
  }

  getIncome() {
    return this.state.transactions.filter(t => t.add).reduce((acc, t) => acc + t.amount, 0);
  }
  getExpense() {
    return this.state.transactions.filter(t => !t.add).reduce((acc, t) => acc + t.amount, 0);
  }
  getBalance() {
    const income = this.getIncome();
    const expense = this.getExpense();
    const balance = income - expense;
    this.setState({
      income,
      expense,
      balance,
    })
  }

  updateStorage() {
    localStorage.setItem('transactions', JSON.stringify(this.state.transactions));
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
            <Total income={this.state.income} expense={this.state.expense} balance={this.state.balance}/>
            <History transactions={this.state.transactions} delTransaction={this.delTransaction}/>
            <Operation addTransaction={this.addTransaction} addDescr={this.addDescr} addAmount={this.addAmount} descr={this.state.descr} amount={this.state.amount}/>
          </div>
        </main>
      </>
    );
  }
}

export default App;