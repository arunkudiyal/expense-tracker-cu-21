import React from 'react'
import Transaction from './Transaction'

const TransactionList = ( {transactions} ) => {
  return (
    <div>
        <h3>Your statement is as follows - </h3>
        <div>
            <ul className='list-unstyled'>
                {
                    transactions.map( transaction => <Transaction amount={transaction.amount} /> )
                }
            </ul>
        </div>
    </div>
  )
}

export default TransactionList