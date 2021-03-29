// import React, { useEffect, useState } from "react";
// import Web3 from "web3";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
// import { createDID } from "./createDid";
// import getWeb3 from "./getWeb3.js";

// function AppInit() {
//   //constants used for displaying on client side
//   const [currentAccount, setCurrentAccount] = useState(null);
//   const [networkType, setNetworkType] = useState(null);
//   const [storageValue, setStorageValue] = useState(0);
//   const [did, setDid] = useState([]);
  
//   //constants used for intermediary steps
//   const [contract, setContract] = useState(null);

//   const privateKey =
//     "b7e2bf51463662888676e086fbadedc1b9a5a9a53f444d194cd485df163442c4";

//   //Initializing web3 object
//   // let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
//   let web3 = getWeb3();
//   console.log("this is web3 object", web3);

//   useEffect(() => {
//     getAccount().then((value) => {
//       setCurrentAccount(value[0]);
//     });

//     getNetworkType().then((value) => {
//       setNetworkType(value);
//     });

//     getContractInstance().then((value) => {
//       setContract(value.methods);
//     });
//   }, [getAccount, getContractInstance, getNetworkType]);

//   //SET value from smart contract once currentAccount 
//   //and contract instance are set up
//   useEffect(() => {
//     if (currentAccount && contract) {
//       contract
//         .set(13)
//         .send({ from: currentAccount })
//         .then((value) => setStorageValue(value.transactionHash));

//       const newDID = createDID(currentAccount, web3.currenProvider);
//       console.log(newDID);
//       setDid(newDID.did);
//     }
//   }, [currentAccount, contract]);

//   //GET value from smart contract once currentAccount 
//   //and contract instance are set up
//   useEffect(() => {
//     if (currentAccount && contract) {
//       contract
//         .get()
//         .call({ from: currentAccount })
//         .then((value) => {
//           console.log(value);
//         });
//     }
//   }, [storageValue]);

//   //getAccount
//   const getAccount = async () => {
//     const tempAccount = await web3.eth.getAccounts();
//     return tempAccount;
//   };

//   //getNetworkType
//   const getNetworkType = async () => {
//     const tempNetworkType = await web3.eth.net.getNetworkType();
//     return tempNetworkType;
//   };

//   //getContractInstance
//   const getContractInstance = async () => {
//     const tempReturnValue = await web3.eth.net.getId();
//     const deployedNetwork = await SimpleStorageContract.networks[
//       tempReturnValue
//     ];
//     const instance = await new web3.eth.Contract(
//       SimpleStorageContract.abi,
//       deployedNetwork.address
//     );
//     return instance;
//   };

//   return (
//     <React.Fragment>
//       <div className="App">
//         <header className="App-header">
//           Creating my first FULL STACK DAPP
//           <h2>
//             Account: <span className="showAccount">{currentAccount}</span>
//           </h2>
//           <div>NetworkType: {networkType}</div>
//           <div>
//             <h2>Demo DID-created</h2>
//             <p>{did}</p>
//           </div>
//         </header>
//       </div>

//       {/* <div className="App">
//         <h1>Good to Go!</h1>
//         <p>Your Truffle Box is installed and ready.</p>
//         <h2>Smart Contract Example</h2>
//         <p>
//           If your contracts compiled and migrated successfully, below will show
//           a stored value of 5 (by default).
//         </p>
//         <p>
//           Try changing the value stored on <strong>line 40</strong> of App.js.
//         </p>
//         <div>The stored value is: {this.state.storageValue}</div>
//       </div> */}
//     </React.Fragment>
//   );
// }

// export default AppInit;
