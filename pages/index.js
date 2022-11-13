import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { contractABI } from '../components/contractABI.js';
import { Nav } from '../components/navfooter';
import {Landing} from '../components/landing';
import {Dashboard} from '../components/dashboard';
import { Web3Provider } from '@ethersproject/providers';

const contractAddress = '';
let provider;

if (typeof window !== 'undefined' && typeof window.tronWeb !== 'undefined') {
    // we are in the browser and metamask is running
    window.tronWeb.request({ method: "tron_requestAccounts" });
    provider = new ethers.providers.Web3Provider(window.tronWeb);
    
}
else {
    // we are on the server *OR* the user is not running metamask
    // https://medium.com/jelly-market/how-to-get-infura-api-key-e7d552dd396f
    provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/http/tron");
    // provider = new ethers.providers.Web3Provider(provider);
}
// get the end user
const signer = provider.getSigner();

// get the smart contract
const easyAContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
);


export default function Home() {

    //Connecting Wallet
    const [accounts, setAccounts] = useState([]);
    // setAccounts(preRenderAddress);
    const [buttonState, setButtonState] = useState(false);
    const [noteURI, setNoteURI] = useState("");
    const [user, setUser] = useState("");
    const [description, setDescription] = useState("");
    const [URIList, setURIList] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);
    

    const connectAccounts= async () => {
      if (window.tronWeb) {
        const temp_accounts = await window.tronWeb.request({
          method: "tron_requestAccounts"
        });
        const publicAddress = tronWeb.defaultAddress.base58
        setAccounts(publicAddress);
        if (accounts.length > 0) {
            setAuthenticated(true);
        }else{
            setAuthenticated(false);
        }
        
        console.log('auth detected',authenticated)
        console.log('accounts',accounts)
        console.log('temp_accounts',temp_accounts)
      }
    }
    

    useEffect(() => {
      connectAccounts();
      const publicAddress = tronWeb.defaultAddress.base58
        setAccounts(publicAddress);
        if (accounts.length > 0) {
            setAuthenticated(true);
        }else{
            setAuthenticated(false);
        }
    }, [authenticated]);
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
        <section class="text-black bg-white pb-32">

         {/* Nav bar and check that wallet account is connected */}
        <Nav connectAccounts = {connectAccounts} accounts={accounts} setAccounts = {setAccounts}/>
        
        {authenticated ? <Dashboard/>: <Landing/>}
        </section>  


    )
}
