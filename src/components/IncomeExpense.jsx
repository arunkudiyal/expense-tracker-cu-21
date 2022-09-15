import React from 'react'

export const IncomeExpense = ( {transactions} ) => {

  let income = 0
  let expense = 0

  transactions.forEach( transaction => {
    if(transaction.amount >= 0) {
      income += parseInt(transaction.amount)
    } else {
      expense += parseInt(transaction.amount)
    }
  } )

  return (
    <div>
        <h3>Total Expenses & Income - </h3>
        <div style={ {display: 'flex', justifyContent: 'space-evenly', border: '3px solid black', padding: '10px'} }>
            <div style={ {color: 'red'} }> <p className='lead'> $ {expense} </p> </div>
            <div style={ {color: 'green'} }> <p className='lead'> $ + {income}</p> </div>
        </div>
    </div>
  )
}
export default IncomeExpense;