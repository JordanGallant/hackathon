import './Dashboard.css';
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  return (
    <>
  <div className='body'>
   <div className='top-div'> <h1>Emmision Coin</h1></div>
   <div className='balance'><h1>0</h1> <h5>Balance</h5></div>
   <div className='button-div'><div className='top-buttons'><button className='claim'>Claim Tokens</button> <button className='send' onClick={connectWallet}>Connect </button></div><div className='bottom-button'><button className='sell'>Sell</button></div></div>

  </div>
    </>
  );
}

export default Dashboard;