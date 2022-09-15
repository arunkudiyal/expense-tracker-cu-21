import React from 'react'
import { useState } from 'react';

const AddTransaction = ( {transactions, clicked} ) => {
    const [purpose, setPurpose] = useState('')
    const [amount, setAmount] = useState(0)

  return (
    <div>
        <h3>Add your transaction - </h3>
        <form style={{ padding: '15px', margin: '15px', border: '1px solid black' }} >
            <div className='form-group'>
                <input type="text" placeholder='enter the purpose of the transaction...' className='form-control' value={purpose} onChange={ (event) => setPurpose(event.target.value) } />
            </div>
            
            <div className="form-group">
                <input type="text" placeholder='enter the amount of the transaction...' className='form-control' value={amount} onChange={ (event) => setAmount(event.target.value) } />
            </div>
        </form>

        <button onClick={ () => clicked( {transactionTitle: purpose, amount: amount} ) } className='btn btn-success'>Add</button>
    </div>
  )
}

export default AddTransaction;