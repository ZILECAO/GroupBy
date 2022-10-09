import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import {donoContractABI} from '../components/donoContractABI.js';

const donoContractAddress = '0x255777fB712C3101559277040D2F4D7050181846';

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




export default function Home() {
  //Connecting Wallet
  const [accounts, setAccounts] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const [noteURI, setNoteURI] = useState("");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");

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

//handle submit form 

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    //***modify below to call ur smart contract */
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
    ////////
    setUser("");
    setDescription("");
    setNoteURI("");
    setButtonState(false);
    
  }
  
  
  


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
            <button  onClick={() => setButtonState(!buttonState) }>Create New Listing</button>
          </a>
          {buttonState ? 
          <div class = "pt-6 pb-6">
          
          <form onSubmit={handleSubmitForm}>
           
             <label  class = "pt-6 pb-6 text-black">
             Name:
              <input type="text"class="text-black" placeholder="john@rhcp.com" value={user} onChange={event =>setUser(event.target.value)} />
            </label>
            <label  class = "pt-6 pb-6 text-black">
             Desscription:
              <input type="text"class="text-black" placeholder="" value={description} onChange={event =>setDescription(event.target.value)} />
            </label>
            <label  class = "pt-6 pb-6 text-black">
             URI:
              <input type="text"class="text-black" placeholder="" value={noteURI} onChange={event =>setNoteURI(event.target.value)} />
            </label>
            
            <button type="submit" class="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">Submit</button>

         </form> 
       </div> : null}
          
           
          <p class="mt-6 text-2xl text-white font-bold">
              Available Notes
          </p>
        </div>

        

        <div class = "mt-10">
            <div className="container">
                <div class ="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Array(5)
                        .fill(1)
                        .map((_, i) => (
                            <div key={i} class ="block p-8 border backdrop-brightness-75 border-gray-500 shadow-xl transition rounded-xl hover:shadow-white hover:border-white">
                               
                            </div>
                            
                        ))}
                </div>
            </div>
        </div>

        
      </div>

    </section>

    
  )
}
