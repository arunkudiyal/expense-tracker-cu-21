import React from 'react'
import Transaction from './Transaction'

const TransactionList = ( {transactions, deleted} ) => {
  return (
    <div>
        <h3>Your statement is as follows - </h3>
        <div>
            <ul className='list-unstyled'>
                {
                    transactions.map( (transaction ) => 
                      <Transaction
                        key={transaction.id}
                        clicked={ () => deleted(transaction.id) } 
                        amount={transaction.amount} /> )
                }
            </ul>
        </div>
    </div>
  )
}

export default TransactionList