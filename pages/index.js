import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import {metaManorABI} from '../components/MetaManorABI.js';


const metaManorAddress = "0xc7E145Ef006B1E14CC8bC6aC96C8320Ce2466c37";


export default function Home() {
  //Connecting Wallet
  const [accounts, setAccounts] = useState([]);

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


  //Minting functionality
  const [mintAmount, setMintAmount] =  useState(1);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        metaManorAddress,
        metaManorABI,
        signer
      );

      try {
        const response = await contract.mint(BigNumber.from(mintAmount));
          <div
            class="p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
            role="alert"
          >
            <strong class="text-sm font-medium"> Mint Success! </strong>
          </div>
      } catch {
          <div
            class="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
            role="alert"
          >
            <strong class="text-sm font-medium"> Mint Failed :C </strong>
          </div>
      }
    }
  }  
  
  return (
    <section class="text-white ">

    <Head>
     <link rel="shortcut icon" href="../favicon.ico" />
    </Head>

      {/* Main Body Element */}
      <div class="px-6 pt-20 pb-40 mx-auto max-w-screen-xl lg:items-start">
        <div class="max-w-2xl p-10 mx-auto text-center bg-blend-normal backdrop-brightness-75 rounded-3xl border border-gray-700 shadow-xl shadow-blue-500/10 border-blue-500/10">
          <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-500 via-blue-400 to-purple-700">
            Zile Cao {"\n"} 
          </h1>

          <h1 class="pb-6 text-2xl font-extrabold text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-green-500 via-blue-400 to-purple-700">
              Web3 Development Portfolio
          </h1>
    
          <p class="pb-2 font-medium max-w-xl mx-auto sm:leading-relaxed sm:text-md">
            Hey there, thanks for checking out my site! {"\n"}
            
          </p>

          <p class="pb-6 font-medium max-w-xl mx-auto mt-1 sm:leading-relaxed sm:text-md">
            I am a junior at the University of Pennsylvania currently studying economics and computer science. I am interested in internship opportunities in Web3 development or product management. {"\n"}
            
          </p>
          
          <p class="text-blue-500 font-medium max-w-xl mx-auto sm:leading-relaxed sm:text-md">
            Built with the Next.js, Ethers.js, and Tailwind CSS framework. {"\n"}
            
          </p>
    
          <div class="flex flex-wrap justify-center mt-8 gap-4">
            <Link href="/projects">
              <a class="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring animate-pulse">
                My Projects
              </a>
            </Link>
    
            <a
              class="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-700 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
              href="https://github.com/ZILECAO/zile-portfolio"
              >
                View Webpage Code
            </a>
          </div>
        </div>


        <div class="mt-16 max-w-lg p-6 mx-auto text-center bg-blend-normal backdrop-brightness-75 rounded-3xl border border-gray-700 shadow-xl shadow-purple-500/10 border-purple-500/10">
            <p class="text-purple-500 p-2 font-bold max-w-2xl mx-auto sm:leading-relaxed text-3xl">
              Claim a free MetaManor NFT! {"\n"}
            </p>

            <p class= "font-medium text-xs text-yellow-500">
              {"\n"} * Must have MetaMask installed. Mint button will appear only once wallet is connected. Make sure you are on the Ethereum Mainnet, otherwise it will send ETH to the wrong contract on a different network. Requires a small amount of ETH for gas fees. *
            </p>
            
            <div class = "p-6">
                <Image
                    src={"https://metamanor.mypinata.cloud/ipfs/QmVBXTDv51rzy9rPbo6VT69xporuwGF3HJQK68jckYa7LP/MetaManor_0.jpg"} 
                    alt="MetaManor image"
                    height="150"
                    width="220"
                />
            </div>
      
            <div class="flex flex-wrap justify-center gap-4"> 
                {accounts.length > 0 && (
                  <a class="block w-full px-12 py-3 text-sm font-medium text-white bg-purple-700 border border-purple-700 hover:bg-purple-800 rounded sm:w-auto active:text-opacity-75 focus:outline-none focus:ring">
                    <div>
                      <button onClick={handleMint}>Mint</button>
                    </div>
                  </a>
                  )}
              

              <a
                class="block w-full px-12 py-3 text-sm font-medium bg-purple-700 border border-purple-700 hover:bg-purple-800 rounded sm:w-auto focus:outline-none focus:ring"
                href="https://opensea.io/collection/metamanor-official"
                >
                  OpenSea
              </a> 
            </div>
          </div>

      </div>
    </section>  

    
  )
}
