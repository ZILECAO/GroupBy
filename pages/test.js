import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { donoContractABI } from '../components/donoContractABI.js';

const donoContractAddress = '0x39A60e61181b605B81828Ab941Cc1A5145bEbaFF';

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
    donoContractAddress,
    donoContractABI,
    signer
);




export default function Home() {

    // get total listed
    const [totalListed, setTotalListed] = useState(1);
    useEffect(() => {
        getCount();
        const getCount2 = async (itemId) => {
            const count2 = await donoContract.getNoteURI(itemId);
            // setNoteURILink(count2);
            return count2
        };
    }, []);
    const getCount3 = async (itemId) => {
        const count3 = getCount2(itemId)
        // setNoteURILink(count2);
        return count3
    };
    const getCount = async () => {
        const count = await donoContract.getTotalListed.call();
        setTotalListed(parseInt(count));
    };


    // get note uri 
    // const [noteURILink, setNoteURILink] = useState("");
    // useEffect(() => {
    //     getCount2();
    // }, []);



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

                <div class="max-w-lg mx-auto text-center">
                    <h2 class="pb-10 text-3xl font-extrabold sm:text-5xl text-white">
                        Web3 Student Notes Marketplace {"\n"}
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
                        <button onClick={() => getNoteURI()}>Get Note URI</button>
                    </a>

                    <a class="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">
                        <button onClick={() => getTotalListed()}>Get total listed</button>
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
                        Available Notes
                    </p>
                </div>



                <div class="mt-10">
                    <div className="container">
                        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {Array(totalListed)
                                .fill(1)
                                .map((_, i) => (
                                    <div key={i}>
                                        <a
                                            class="block p-8 border backdrop-brightness-75 border-gray-500 shadow-xl transition rounded-xl hover:shadow-white hover:border-white"
                                            href={getCount3(i)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                            </svg>


                                            <h3 class="mt-4 text-xl font-bold text-white">Note {i}</h3>
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
