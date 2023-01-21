import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { Web3Provider } from '@ethersproject/providers';

export function Nav({ connectAccounts, accounts, setAccounts,authenticated }) {



  // Top Navigation Element
  return (
    <header class="py-1 bg-black font-mono">
      <div class="px-6 mx-auto max-w-screen-xl sm:px-6 lg:px-8 items-center">

        <div class="flex items-center justify-between h-16">
          <div class="flex-1 md:flex md:items-center md:gap-12">

            <Link href="/">
              <button>
                <img src={'../Vector3.png'} alt="GroupPay logo" />
              </button>
            </Link>

          </div>

          <div class="flex text-sm items-center gap-6 justify-end pl-4">
            <Link href="/">
              <a class="text-white transition hover:text-white/75">
                Home
              </a>
            </Link>

            <Link href="/">
              <a class="text-white transition hover:text-white/75">
                About
              </a>
            </Link>

            <Link href="/">
              <a class="text-white transition hover:text-white/75">
                Features
              </a>
            </Link>


            
            <a class="px-5 py-2.5 text-sm font-medium text-white bg-violet-900 hover:bg-violet-800 rounded-md shadow">
             {!authenticated?<button onClick={() => connectAccounts()}>Sign in with TronLink</button> :<button>Signed In</button>} 
            </a>

          </div>


        </div>
      </div>
    </header>
  )
}



