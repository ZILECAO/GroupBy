import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { Web3Provider } from '@ethersproject/providers';




export function Nav() {

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



  // Top Navigation Element
    return (
      <header class="py-1 backdrop-brightness-100">
      <div class="px-6 mx-auto max-w-screen-xl sm:px-6 lg:px-8">   
        <div class="m-6 flex items-center gap-4 justify-end">
          <a class="px-5 py-2.5 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">
            <button onClick={connectAccounts}>Connect Wallet</button>
          </a>
        </div>
      </div>
    </header>
  )
}
export function Footer() {
    // Footer Element
    return (
    <footer class="text-center backdrop-brightness-50">
    <div class="px-4 pb-4 pt-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto space-y-2">
        <div class="flex justify-center gap-6 ">
          <p class="max-w-xl mx-auto text-xs text-gray-500">
            <span class="block"> &copy; 2022 Zile Cao | Web3 Builders Hackathon Submission       </span>
          </p>
        </div>
      </div>
    </div>
  </footer>)
}