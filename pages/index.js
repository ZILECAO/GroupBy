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

// get the dono smart contract
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
        <section class="text-white ">

            {/* Main Body Element */}
            <div class="pb-40 mx-auto max-w-screen-xl lg:items-start">

                <div class="max-w-lg mx-auto text-center">
                    <h2 class="pb-10 text-3xl font-extrabold sm:text-5xl text-white">
                        Find Your Family Plan Group! {"\n"}
                    </h2>
                </div>

                <div>
                    <a class="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">
                        <button onClick={() => getBalance()}>Show My Balance</button>
                    </a>
                    <a class="text-m text-white font-bold">
                        {balance}
                    </a>


                    <a class="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">
                        <button onClick={() => setButtonState(!buttonState)}>Create New Listing</button>
                    </a>
                    {buttonState ?
                        <div class="pt-6 pb-6">

                            <form onSubmit={handleSubmitForm}>

                                <label class="pt-6 pb-6 text-white">
                                    Name:
                                    <input type="text" class="text-white" placeholder="john@rhcp.com" value={user} onChange={event => setUser(event.target.value)} />
                                </label>
                                <label class="pt-6 pb-6 text-white">
                                    Description:
                                    <input type="text" class="text-white" placeholder="" value={description} onChange={event => setDescription(event.target.value)} />
                                </label>
                                <label class="pt-6 pb-6 text-white">
                                    URI:
                                    <input type="text" class="text-white" placeholder="" value={noteURI} onChange={event => setNoteURI(event.target.value)} />
                                </label>

                                <button type="submit" class="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">Submit</button>

                            </form>
                        </div> : null}


                    <p class="mt-6 text-2xl text-white font-bold">
                        Available Listings
                    </p>
                </div>

            </div>

        </section>


    )
}
