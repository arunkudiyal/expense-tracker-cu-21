import React from 'react'

const Balance = ( {transactions} ) => {
  let myBalance = 0

  transactions.forEach(transaction => myBalance += parseInt(transaction.amount) )

  return (
    <div>
        <h3>Your Balance - </h3>
        <p className='lead'>$ {myBalance}</p>
    </div>
  )
}

export default Balance