import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1011, transactipnTitle: 'Salary', amount: 1000 },
    { id: 1012, transactipnTitle: 'Trip', amount: -270 },
    { id: 1013, transactipnTitle: 'Rent', amount: -380 },
    { id: 1014, transactipnTitle: 'Food', amount: -100 },
    { id: 1014, transactipnTitle: 'Freelance', amount: +550 }
  ])

  return (
    <div>
      <Header title="Expense Tracker" />

      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
