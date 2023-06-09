import React, {useContext, useEffect, useState} from "react";
import Web3 from "web3";
import {accounts} from "../_mock/account";

const Web3Context = React.createContext(undefined);

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
}

export function Web3Provider({children}) {

  const [data, setData] = useState(() => {
    if (localStorage.getItem("address")) {
      const account = accounts[Math.floor(Math.random() * accounts.length)];
      return {
        loggedIn: true,
        address: localStorage.getItem("address"),
        name: account.displayName,
        photoURL: account.photoURL
      }
    }
    return {
      loggedIn: false,
      address: null,
      name: null,
      photoURL: null
    }
  });

  useEffect(() => {
    // if (web3) {
    //   web3.eth.getAccounts()
    //     .then(accounts => {
    //       if (accounts.length > 0) {
    //         console.log(accounts)
    //         const profile = JSON.parse(localStorage.getItem("account"))
    //         // setData(prev => ({
    //         //   ...prev,
    //         //   loggedIn: true,
    //         //   name: profile.displayName,
    //         //   photoURL: profile.photoURL,
    //         //   address: accounts[0]
    //         // }))
    //       }
    //     })
    //     .catch(error => console.error(error));
    // }
  }, [])

  return <Web3Context.Provider value={{web3, data, setData}}>
    {children}
  </Web3Context.Provider>
}

export function useWeb3() {
  return useContext(Web3Context);
}