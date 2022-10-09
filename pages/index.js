import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import {contractABI} from '../components/contractABI.js';
import {donoContractABI} from '../components/donoContractABI.js';

const contractAddress = '0x250F2B55bAD518506114A64f6C73A92934eeE4C0';
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

// get the smart contract
const contract = new ethers.Contract(
  contractAddress,
  contractABI,
  signer
);

// get the dono smart contract
const donoContract = new ethers.Contract(
  donoContractAddress,
  donoContractABI,
  signer
);


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


  // wallet balance
  const [balance, setBalance] = useState();

  const getBalance = async () => {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(account);
      setBalance(ethers.utils.formatEther(balance));
  };


  // get total minted
  const [totalMinted, setTotalMinted] = useState(1);
        useEffect(() => {
            getCount();
        }, []);

  const getCount = async () => {
     const count = await contract.count();
      console.log(parseInt(count));
      setTotalMinted(parseInt(count));
  };
  

  // Get NFT images
  function NFTImage({ tokenId, getCount }) {
      const metadataURI = `https://metamanor.mypinata.cloud/ipfs/QmZNpVp76W927dTJ3pSG2fNotzfgDxzMAq6XVF9d8FTjb9/${tokenId}`;
      const imageURI = `https://metamanor.mypinata.cloud/ipfs/QmVBXTDv51rzy9rPbo6VT69xporuwGF3HJQK68jckYa7LP/MetaManor_${tokenId}.jpg`;


      const [isMinted, setIsMinted] = useState(false);
      useEffect(() => {
          getMintedStatus();
      }, [isMinted]);

      const getMintedStatus = async () => {
          const result = await contract.isContentOwned(metadataURI);
          console.log(result)
          setIsMinted(result);
      };

      const mintToken = async () => {
          const connection = contract.connect(signer);
          const addr = connection.address;
          const result = await contract.payToMint(addr, metadataURI, {
              value: ethers.utils.parseEther('0.001'),
          });

          await result.wait();
          getMintedStatus();
          getCount();
      };

      async function getURI() {
          const uri = await contract.tokenURI(tokenId);
          alert(uri);
      }
      return (
          <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src={isMinted ? imageURI : 'img/placeholder.png'}></img>
              <div className="card-body">
                  <h5 class ="mt-2 mb-2">ID #{tokenId}</h5>
                  {!isMinted ? (
                      <button class ="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow" onClick={mintToken}>
                          Mint
                      </button>
                  ) : (
                      <button class ="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow" onClick={getURI}>
                          Already Minted! Show Metadata URI
                      </button>
                  )}
              </div>
          </div>
      );
    
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
          
           
          <p class="mt-6 text-2xl text-white font-bold">
              Available MetaManors
          </p>
        </div>

        

        <div class = "mt-10">
            <div className="container">
                <div class ="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Array(totalMinted + 1)
                        .fill(1)
                        .map((_, i) => (
                            <div key={i} class ="block p-8 border backdrop-brightness-75 border-gray-500 shadow-xl transition rounded-xl hover:shadow-white hover:border-white">
                                <NFTImage tokenId={i} getCount={NFTImage.getCount} />
                            </div>
                            
                        ))}
                        
                </div>
            </div>
        </div>

        
      </div>

    </section>

    
  )
}
