import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { contractABI } from '../components/contractABI.js';
import { Nav } from '../components/navfooter';
import { Landing } from '../components/landing';
import { Dashboard } from '../components/dashboard';
import { Web3Provider } from '@ethersproject/providers';
import { testABI } from '../components/contractABI.js';


const TronWeb = require('tronweb');
const contractAddress = '';
let provider;
const server = "https://api.shasta.trongrid.io";
const address = "TPbCp2b2PEwny7GVKBUtTnyhuUbLN4vNp6";
const tronweb = new TronWeb({ fullHost: server, solidityNode: server, eventServer: server, privateKey: process.env.PRIVATE_KEY });

if (typeof window !== 'undefined' && typeof window.tronWeb !== 'undefined') {

    // window.tronWeb.request({ method: "tron_requestAccounts" });
    provider = new tronweb.providers.HttpProvider("https://rpc.ankr.com/http/tron");

}
else {

    provider = new tronweb.providers.HttpProvider("https://rpc.ankr.com/http/tron");

}


let instance;

instance = tronweb.contract(testABI, address);


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


    const connectAccounts = async () => {
        if (window.tronWeb) {
            const temp_accounts = await window.tronWeb.request({
                method: "tron_requestAccounts"
            });
            const publicAddress = tronWeb.defaultAddress.base58
            setAccounts(publicAddress);
            if (accounts.length > 0) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }

            console.log('auth detected', authenticated)
            console.log('accounts', accounts)
            console.log('temp_accounts', temp_accounts)
        }
    }


    useEffect(() => {
        connectAccounts();
        const publicAddress = tronWeb.defaultAddress.base58
        setAccounts(publicAddress);
        if (accounts.length > 0) {
            setAuthenticated(true);
        } else {
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



    // ACTUAL render page
    return (
        <section class="text-black bg-white pb-32">

            {/* Nav bar and check that wallet account is connected */}
            <Nav connectAccounts={connectAccounts} accounts={accounts} setAccounts={setAccounts} authenticated={authenticated} />

            {authenticated ? <Dashboard instance ={instance} /> : <Landing />}
        </section>


    )
}
