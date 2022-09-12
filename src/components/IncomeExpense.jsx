import React from 'react'

export const IncomeExpense = () => {
  return (
    <div>
        <h3>Total Expenses & Income - </h3>
        <div style={ {display: 'flex', justifyContent: 'space-evenly', border: '3px solid black', padding: '10px'} }>
            <div style={ {color: 'red'} }> <p className='lead'> $ -150</p> </div>
            <div style={ {color: 'green'} }> <p className='lead'> $ +500</p> </div>
        </div>
    </div>
  )
}
export default IncomeExpense;