import React, {useContext, useEffect, useState} from "react";
import Web3 from "web3";

const Web3Context = React.createContext(undefined);

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
}

export function Web3Provider({children}) {

  const [data, setData] = useState({});

  useEffect(() => {
    if (web3) {
      web3.eth.getAccounts()
        .then(accounts => {
          if (accounts.length > 0) {
            setData(prev => ({...prev, address: accounts[0]}))
          }
        })
        .catch(error => console.error(error));
    }
  }, [])

  return <Web3Context.Provider value={{web3, data, setData}}>
    {children}
  </Web3Context.Provider>
}

export function useWeb3() {
  return useContext(Web3Context);
}