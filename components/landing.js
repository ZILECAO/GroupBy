// import React from 'react'
import Link from 'next/link'
export function Landing() {

    return (
        <div class="px-6 pt-20 pb-44 bg-cover h-screen’">
            <div class=" p-10 mx-auto text-center ">
                <h1 class="p-2 text-5xl font-medium font-mono text-slate-400">
                    Split payment <a class="underline decoration-indigo-500 text-white ">made simple</a>
                </h1>

                <h1 class="pb-2 text-5xl font-medium font-mono text-slate-400">
                    for on-chain and off-chain
                </h1>

                <p class="text-white pt-6 max-w-2xl mx-auto font-mono mt-1 sm:leading-relaxed sm:text-md ">
                   Buying with friends has never been easier. {"\n"}
                </p>

                <p class="text-white max-w-xl mx-auto font-mono sm:leading-relaxed sm:text-md">
                    Create group, get notified via email, pay and the rest is <a class ="animate-pulse">magic</a> {"\n"}
                </p>

                <div class="flex font-mono flex-wrap justify-center mt-8 gap-4">
                    <Link href="/home">
                        <a class="block w-full px-8 py-3 text-xs font-xs text-white bg-black border hover:bg-gray-900 rounded-full sm:w-auto focus:outline-none focus:ring ">
                            Learn More
                        </a>
                    </Link>

                    <a
                        class="block font-mono w-full px-8 py-3 text-xs font-xs text-black bg-gray-300 rounded-full sm:w-auto hover:bg-gray-400  focus:outline-none focus:ring"
                        href="https://github.com/ZILECAO/easyA-hackathon"
                    >
                        View Code
                    </a>
                </div>

                <p class="text-white pt-8 max-w-xl font-mono text-xs font-bold mx-auto sm:leading-relaxed sm:text-md">
                    Use case: Pay your spotify family plan  {"\n"}
                </p>


            </div>




        </div>
    )
}

