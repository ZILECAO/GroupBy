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
        <section class="text-white bg-slate-500">

        <Head>
        <link rel="shortcut icon" href="../favicon.ico" />
        </Head>

        {/* Main Body Element */}
        <div class="px-6 pt-20 pb-40 mx-auto max-w-screen-xl lg:items-start">
            <div class="max-w-2xl p-10 mx-auto text-center bg-blend-normal backdrop-brightness-75 rounded-3xl border border-gray-700 shadow-xl shadow-blue-500/10 border-blue-500/10">
            <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl  text-indigo-800">
                Product Name {"\n"} 
            </h1>

            <h1 class="pb-6 text-2xl font-extrabold text-transparent sm:text-4xl text-indigo-800">
                Find your family plan group!
            </h1>

            <p class="pb-6 font-medium max-w-xl mx-auto mt-1 sm:leading-relaxed sm:text-md">
                insert description TODO {"\n"}
                
            </p>
            
            <p class="text-blue-500 font-medium max-w-xl mx-auto sm:leading-relaxed sm:text-md">
                Built with the Next.js, Ethers.js, and Tailwind CSS framework. {"\n"}
                
            </p>
        
            <div class="flex flex-wrap justify-center mt-8 gap-4">
                <Link href="/listings">
                <a class="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring animate-pulse">
                    Check out listings
                </a>
                </Link>
        
                <a
                class="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-700 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
                href="https://github.com/ZILECAO/easyA-hackathon"
                >
                    View Webpage Code
                </a>
            </div>
            </div>


            

        </div>
        </section>  


    )
}
