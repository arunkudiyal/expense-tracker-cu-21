import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1011, transactionTitle: 'Salary', amount: 1000 },
    { id: 1012, transactionTitle: 'Trip', amount: -270 },
    { id: 1013, transactionTitle: 'Rent', amount: -380 },
    { id: 1014, transactionTitle: 'Food', amount: -100 },
    { id: 1014, transactionTitle: 'Freelance', amount: +550 }
  ])

  return (
    <div>
      <Header title="Expense Tracker" />

      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        <TransactionList transactions={transactions} />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
