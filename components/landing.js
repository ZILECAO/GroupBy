// import React from 'react'
import Link from 'next/link'
export function Landing() {

    return (
        <div class="px-6 pt-20 pb-44 bg-cover h-screen’">
            <div class=" p-10 mx-auto text-center ">
                <h1 class="p-2 text-5xl font-medium font-mono text-slate-400">
                    Split payment <a class="underline decoration-indigo-500 text-white ">made simple.</a>
                </h1>

                <h1 class="pb-2 text-5xl font-medium font-mono text-slate-400">
                    Use your crypto. Securely.
                </h1>

                <p class="text-white pt-6 max-w-2xl mx-auto font-mono mt-1 sm:leading-relaxed sm:text-md ">
                Never have to coordinate bill spliting manually again. {"\n"}
                   

                </p>

                <p class="text-white max-w-xl mx-auto font-mono sm:leading-relaxed sm:text-md">
                Use oracles to native integrate with millions of web2 applications, ecommerce..{"\n"}
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
                    Ask us about how to split bill for a GTA5 (via gift card)  {"\n"}
                </p>


            </div>




        </div>
    )
}

