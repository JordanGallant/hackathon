import React from 'react';
import './Dashboard.css'

function Dashboard() {
  return (
    <>
  <div className='body'>
   <div className='top-div'> <h1>Emmision Coin</h1></div>
   <div className='balance'><h1>0</h1> <h5>Balance</h5></div>
   <div className='button-div'><div className='top-buttons'><button className='claim'>Claim Tokens</button> <button className='send'>Send</button></div><div className='bottom-button'><button className='sell'>Sell</button></div></div>

  </div>
    </>
  );
}

export default Dashboard;