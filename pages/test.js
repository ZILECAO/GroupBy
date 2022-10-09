import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import {donoContractABI} from '../components/donoContractABI.js';

const donoContractAddress = '0x39A60e61181b605B81828Ab941Cc1A5145bEbaFF';

let provider;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined')
{
    // we are in the browser and metamask is running
    window.ethereum.request({ method: "eth_requestAccounts" });
    provider = new ethers.providers.Web3Provider(window.ethereum);
}
else
{
    // we are on the server *OR* the user is not running metamask
    // https://medium.com/jelly-market/how-to-get-infura-api-key-e7d552dd396f
    provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/<insert alchemy key or use infura http link>");
    // provider = new ethers.providers.Web3Provider(provider);
}
// get the end user
const signer = provider.getSigner();

// get the dono smart contract
const donoContract = new ethers.Contract(
  donoContractAddress,
  donoContractABI,
  signer
);

async function getNoteURI() {
    const noteURI = await donoContract.getNoteURI(0);
    console.log(noteURI);
}

async function getTotalListed() {
    const totalListed = await donoContract.getTotalListed.call();
    console.log(parseInt(totalListed, 16));
}


function showForm() {
    return (
        <div class = "pt-6 pb-6">
            <label for="UserEmail" class="block text-xs font-medium text-gray-700">
            Email
            </label>
        
            <input
            type="email"
            id="UserEmail"
            placeholder="john@rhcp.com"
            class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
        </div>
      );
  }

export default function Home() {
  //Connecting Wallet
  const [accounts, setAccounts] = useState([]);
  const [buttonState, setButtonState] = useState(false);

  async function connectAccounts() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      setAccounts(accounts);
    }
  }

  useEffect(() => {
    connectAccounts();
  }, []);

  // wallet balance
  const [balance, setBalance] = useState();

  const getBalance = async () => {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(account);
      setBalance(ethers.utils.formatEther(balance));
  };

  


  // ACTUAL render page
  return (
    <section class="text-white ">
      
      {/* Main Body Element */}
      <div class="pb-40 mx-auto max-w-screen-xl lg:items-start">
        

        <div>
          <a class="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">
            <button onClick={() => getBalance()}>Show My Balance</button>
          </a>
          <a class="text-m text-white font-bold">
              {balance}
          </a>

          <a class="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">
            <button onClick={() => getNoteURI()}>Get Note URI</button>
          </a>

          <a class="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">
            <button onClick={() => getTotalListed()}>Get total listed</button>
          </a>


          <a class="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">
            <button  onClick={() => setButtonState(true) }>Create New Listing</button>
          </a>
          {buttonState ? showForm() : null}
          
           
          <p class="mt-6 text-2xl text-white font-bold">
              Available Notes
          </p>
        </div>

        

        <div class = "mt-10">
            <div className="container">
                <div class ="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Array(getTotalListed)
                        .fill(1)
                        .map((_, i) => (
                            <div key={i}>
                                <a
                                    class="block p-8 border backdrop-brightness-75 border-gray-500 shadow-xl transition rounded-xl hover:shadow-white hover:border-white"
                                    href="https://www.metamanor.art/"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 text-purple-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                    </svg>


                                    <h3 class="mt-4 text-xl font-bold text-white">Note 1</h3>

                                    <p class="mt-1 text-sm text-gray-400">
                                        note description

                                    </p>
                                </a>
                            </div>
                            
                        ))}

                        
                </div>
            </div>
        </div>

        
      </div>

    </section>

    
  )
}
