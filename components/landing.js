// import React from 'react'
import Link from 'next/link'
export function Landing() {

    return (
      <div class="px-6 pt-20 pb-40 mx-auto max-w-screen-xl lg:items-start">
              <div class=" p-10 mx-auto text-center ">
              <h1 class="p-2 text-5xl font-small text-transparent text-blue-700">
                  Group purchase made simple
              </h1>
  
              <h1 class="pb-2 text-5xl font-small text-transparent text-black">
                  for on-chain businesses
              </h1>
  
              <p class="pt-6 max-w-xl mx-auto mt-1 sm:leading-relaxed sm:text-md">
                  Turn every on-chain payment into a group purchase with rebates! {"\n"}
              </p>
  
              <p class="max-w-xl mx-auto sm:leading-relaxed sm:text-md">
                  No instrumentation needed. {"\n"}
              </p>
          
              <div class="flex flex-wrap justify-center mt-8 gap-4">
                  <Link href="/home">
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
    )
  }
  
  