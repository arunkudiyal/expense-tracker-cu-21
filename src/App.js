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
    { id: 1015, transactionTitle: 'Freelance', amount: +550 }
  ])

  const deleteTransactionHandler = (transactionId) => {
    const transactionCopy = [ ...transactions ]
    // transactionCopy.splice(transactionId, 1)
    const filteredTransactions = transactionCopy.filter( transaction => transaction.id !== transactionId )
    setTransactions(filteredTransactions) 
  }

  const postTransactionHandler = ( transaction ) => {
    const transactionCopy = [ ...transactions ]
    transactionCopy.push(transaction)
    setTransactions(transactionCopy)
  }

  return (
    <div>
      <Header title="Expense Tracker" />

      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        <TransactionList deleted={deleteTransactionHandler} transactions={transactions} />
        <AddTransaction clicked={postTransactionHandler} />
      </div>
    </div>
  );
}

export default App;
