import React from 'react'

const Transaction = ( {amount, clicked} ) => {
    let color = ''
    amount >= 0 ? color = 'green' : color = 'red'

    let transactionStyles = {
        display: 'flex', 
        justifyContent: 'space-around', 
        backgroundColor: '#f7f7f7', 
        padding: '15px', 
        borderLeft: `5px solid ${color}`, 
        margin: '15px'
    }

  return (
    <div style={transactionStyles}>
        <li style={{ fontSize: '20px' }}>$ {amount} </li>
        <i onClick={clicked} className="fa-solid fa-x"></i>
    </div>
  )
}

export default Transaction