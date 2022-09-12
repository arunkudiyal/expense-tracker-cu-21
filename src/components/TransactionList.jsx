import React from 'react'

const TransactionList = () => {
  return (
    <div>
        <h3>Your statement is as follows - </h3>
        <div>
            <ul className='list-unstyled'>
                <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f7f7f7', padding: '15px', borderLeft: '5px solid green', margin: '15px' }}>
                    <li style={{ fontSize: '20px' }}>$ +500 </li>
                    <i class="fa-solid fa-x"></i>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f7f7f7', padding: '15px', borderLeft: '5px solid red', margin: '15px' }}>
                    <li style={{ fontSize: '20px' }}>$ -150 </li>
                    <i class="fa-solid fa-x"></i>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default TransactionList