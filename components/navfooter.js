import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import {metaManorABI} from './MetaManorABI.js';

const metaManorAddress = "0xc7E145Ef006B1E14CC8bC6aC96C8320Ce2466c37";

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
      <header class="py-1 backdrop-brightness-75">
      <div class="px-6 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        
        <div class="flex items-center justify-between h-16">
          <div class="flex-1 md:flex md:items-center md:gap-12">

            <Link href="/">
              <a class="block items-center text-blue-600 hover:text-blue-700">
                <span class="sr-only">Home</span>
                <svg class="h-8 w-8 text-blue-600 hover:text-blue-800/75"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
              </a>
            </Link>

          </div>
        
          <div class="flex items-center gap-4 justify-end">
            <a
              class="text-blue-500 hover:text-blue-700/75"
              href="https://twitter.com/zile_cao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                class="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                ></path>
              </svg>
            </a>

            <a
              class="text-gray-700 hover:text-gray-800/75"
              href="https://github.com/ZILECAO/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                class="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              class="text-blue-600 hover:text-blue-700"
              href="https://www.linkedin.com/in/zilecao/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg class="h-8 w-8 text-blue-600 hover:text-blue-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
            </a>

            
            <a class="px-5 py-2.5 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">
              <button onClick={connectAccounts}>Connect Wallet</button>
            </a>
                
          
          </div>
        </div>
      </div>
    </header>
  )
}
export function Footer() {
    // Footer Element
    return (
    <footer class="text-center backdrop-brightness-50">
    <div class="px-4 pb-2 pt-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto space-y-2">
        <div class="flex justify-center gap-6 ">
          <a
            class="text-blue-500 hover:text-blue-700/75"
            href="https://twitter.com/zile_cao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              ></path>
            </svg>
          </a>

          <a
            class="text-gray-700 hover:text-gray-800/75"
            href="https://github.com/ZILECAO/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>

          <a
            class="text-blue-600 hover:text-blue-700"
            href="https://www.linkedin.com/in/zilecao/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg class="h-8 w-8 text-blue-600 hover:text-blue-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
          </a>
          
        </div>

        

        <p class="max-w-xl mx-auto text-xs text-gray-500">
          <span class="block"> &copy; 2022 Zile Cao | Special thanks to my mentor, Adam Sobotka, for his guidance on this project.       </span>
        </p>
      </div>
    </div>
  </footer>)
}