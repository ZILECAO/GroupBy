import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { contractABI } from '../components/contractABI.js';

const contractAddress = '';

let provider;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // we are in the browser and metamask is running
    window.ethereum.request({ method: "eth_requestAccounts" });
    provider = new ethers.providers.Web3Provider(window.ethereum);
}
else {
    // we are on the server *OR* the user is not running metamask
    // https://medium.com/jelly-market/how-to-get-infura-api-key-e7d552dd396f
    provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/<insert alchemy key or use infura http link>");
    // provider = new ethers.providers.Web3Provider(provider);
}
// get the end user
const signer = provider.getSigner();

// get the smart contract
const donoContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
);


export default function Home() {

    //Connecting Wallet
    const [accounts, setAccounts] = useState([]);
    const [buttonState, setButtonState] = useState(false);
    const [noteURI, setNoteURI] = useState("");
    const [user, setUser] = useState("");
    const [description, setDescription] = useState("");
    const [URIList, setURIList] = useState([]);

    async function connectAccounts() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccounts(accounts);
        }
    }
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

        <Head>
            <link rel="shortcut icon" href="../favicon.ico" />
        </Head>

        {/* Main Body Element */}
        <div class="px-6 pt-20 pb-40 mx-auto max-w-screen-xl lg:items-start">
            <div class="max-w-2xl p-10 mx-auto text-center ">
            <h1 class="p-2 text-5xl font-small text-transparent text-black w-max">
                Group purchase made simple
            </h1>

            <h1 class="text-5xl font-small text-transparent text-black">
                for on-chain businesses
            </h1>

            <p class="pt-6 max-w-xl mx-auto mt-1 sm:leading-relaxed sm:text-md">
                Turn every on-chain payment into a group purchase with rebates! {"\n"}
            </p>

            <p class="max-w-xl mx-auto sm:leading-relaxed sm:text-md">
                No instrumentation needed. {"\n"}
            </p>
        
            <div class="flex flex-wrap justify-center mt-8 gap-4">
                <Link href="/listings">
                <a class="block w-full px-8 py-3 text-xs font-xs text-white bg-black border hover:bg-gray-900 rounded-full sm:w-auto focus:outline-none focus:ring animate-pulse">
                    Learn More
                </a>
                </Link>
        
                <a
                class="block w-full px-8 py-3 text-xs font-xs text-black bg-gray-300 border rounded-full sm:w-auto hover:bg-gray-400 active:bg-blue-500 focus:outline-none focus:ring"
                href="https://github.com/ZILECAO/easyA-hackathon"
                >
                    View Code
                </a>
            </div>

            <p class="pt-8 max-w-xl text-xs font-bold mx-auto sm:leading-relaxed sm:text-md">
                Supports your favorite on-chain vendors {"\n"}
            </p>


        </div>


            

        </div>
        </section>  


    )
}
