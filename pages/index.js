import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <section class="text-white ">

    <Head>
     <link rel="shortcut icon" href="../favicon.ico" />
    </Head>

      {/* Main Body Element */}
      <div class="px-4 pt-20 pb-60 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div class="max-w-2xl p-10 mx-auto text-center bg-blend-normal backdrop-brightness-75 rounded-3xl">
          <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-500 via-blue-400 to-purple-700">
            Zile Cao {"\n"} 
          </h1>

          <h1 class="pb-6 text-2xl font-extrabold text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-green-500 via-blue-400 to-purple-700">
              Web3 Development Portfolio
          </h1>
    
          <p class="font-medium max-w-xl mx-auto sm:leading-relaxed sm:text-md">
            Hey there, thanks for checking out my site! {"\n"}
            
          </p>

          <p class="pb-6 font-medium max-w-xl mx-auto mt-1 sm:leading-relaxed sm:text-md">
            I am a junior at the University of Pennsylvania currently studying economics and computer science. I am interested in internship opportunities in Web3 development or product management. {"\n"}
            
          </p>
          
          <p class="text-blue-500 font-medium max-w-xl mx-auto sm:leading-relaxed sm:text-md">
            Built with the Next.js and Tailwind CSS framework. {"\n"}
            
          </p>

          <p class="text-blue-500 font-medium max-w-2xl mx-auto mt-4 sm:leading-relaxed sm:text-md">
            Connect your crypto wallet and claim a free NFT! {"\n"}
          </p>

          <p class= "font-medium mt-2 text-yellow-500">
            {"\n"} *work in progress*
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
      </div>

    </section>  

    
  )
}
