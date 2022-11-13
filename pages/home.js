import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { contractABI } from '../components/contractABI.js';
import { Nav, Footer } from "../components/navfooter"
import React from "react";





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
const easyAContract = new ethers.Contract(
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

    const [showModal, setShowModal] = React.useState(false);


    // ACTUAL render page
    return (
        <section class="text-black bg-white">

            {/* Nav bar and check that wallet account is connected */}
            <Nav connectAccounts={connectAccounts} accounts={accounts} setAccounts={setAccounts} />

            {/* Main Body Element */}

            <div>
                <nav class="flex flex-col bg-white w-64 h-screen px-4 text-black border-purple-900">

                    {/* Model component */}
                    <>
                        <button
                            className="block w-full mt-4 px-3 py-3 text-xs font-xs text-white bg-blue-700 border hover:bg-blue-800 rounded-full sm:w-auto"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            Create new event
                        </button>
                        {showModal ? (
                    <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                    Create a group
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto ">
                                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                    1. Choose the service
                                                </p>
                                                
                                                <div id="select">
                                                <div className="mb-2 block text-white bg-blue-700">
                                                    <label
                                                    htmlFor="countries"
                                                    value="Select your country"
                                                    />
                                                </div>
                                                <select
                                                    id="countries"
                                                    required={true}
                                                >
                                                    <option>
                                                    NFT Pass | 25 USD
                                                    </option>
                                                    <option>
                                                    Concert Tix | 100 USD
                                                    </option>
                                                </select>
                                                </div>


                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="bg-blue-700 text-white hover:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none justify-center"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Create Group
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                    </>



                    {/* column list of events */}
                    <div class="mt-4 mb-4">
                        <ul class="ml-4">
                            <li class="mb-2 px-4 py-4 text-black flex flex-row bg-gray-200 border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                                <span>
                                    <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
                                        <path
                                            d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                                4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                                4h4v-4h-4M4 8h4V4H4v4z"
                                        ></path>
                                    </svg>
                                </span>
                                <a href="#">
                                    <span class="ml-2">Group Name </span>
                                    <span class="ml-2 text-xs">Vendor</span>
                                </a>
                            </li>

                            <li class="mb-2 px-4 py-4 text-black bg-gray-200 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                                <span>
                                    <svg
                                        class="fill-current h-5 w-5 "
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                <a href="#">

                                    <span class="ml-2">Customers</span>
                                </a>
                            </li>
                            <li class="mb-2 px-4 py-4 text-black flex bg-gray-200 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                                <span>
                                    <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
                                        <path
                                            d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                                2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                                00-2-2h-1V1m-1 11h-5v5h5v-5z"
                                        ></path>
                                    </svg>
                                </span>
                                <a href="#">

                                    <span class="ml-2">Milestones</span>
                                </a>
                            </li>
                            <li class="mb-2 px-4 py-4 text-black flex bg-gray-200 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                                <span>
                                    <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                                        <path
                                            d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                                014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                                8-4z"
                                        ></path>
                                    </svg>
                                </span>
                                <a href="#">
                                    <span class="ml-2">Team</span>
                                </a>
                            </li>
                            <li class="mb-2 px-4 py-4 text-black bg-gray-200 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                                <span>
                                    <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
                                        <path
                                            d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                                4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                                9v2h-4v-2h4m2-2h-8v6h8v-6z"
                                        ></path>
                                    </svg>
                                </span>
                                <a href="#">
                                    <span class="ml-2">Tasks</span>
                                </a>
                            </li>
                            <li class="mb-2 px-4 py-4 text-black bg-gray-200 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                                <span>
                                    <svg
                                        class="fill-current h-5 w-5 "
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                <a href="#">
                                    <span class="ml-2">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>


            


        </section>


    )
}
