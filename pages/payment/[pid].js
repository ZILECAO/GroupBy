import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { testABI } from '../../components/contractABI';
import { Nav } from '../../components/navfooter';
import Link from 'next/link'



const TronWeb = require('tronweb');
const contractAddress = '';

// let provider;
// //no tron wallet case
// if (typeof window !== 'undefined' && typeof window.tronWeb !== 'undefined') {
//     // we are in the browser and metamask is running
//     window.tronWeb.request({ method: "tron_requestAccounts" });
//     // provider = new TronWeb.providers.HttpProvider(window.tronWeb);
//     provider = new TronWeb.providers.HttpProvider("https://rpc.ankr.com/http/tron");
// }
// else {
//     // we are on the server *OR* the user is not running metamask
//     // https://medium.com/jelly-market/how-to-get-infura-api-key-e7d552dd396f
//     provider = new TronWeb.providers.HttpProvider("https://rpc.ankr.com/http/tron");
//     // provider = new ethers.providers.Web3Provider(provider);
// }

const server = "https://api.shasta.trongrid.io";
const address = "TPbCp2b2PEwny7GVKBUtTnyhuUbLN4vNp6";
const tronWeb = new TronWeb({ fullHost: server, solidityNode: server, eventServer: server, privateKey: process.env.PRIVATE_KEY });

tronWeb.setAddress(address);

const PaymentPage = () => {
    const router = useRouter()
    const { pid, index } = router.query
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [favNum, setFavNum] = useState(0)
    //hard coded for demo
    const [fromWhom, setOwner] = useState('THdUVA8Ey33A7P3Z4cfG5M2yEd6iEWZZym');
    const [forWhat, setProvider] = useState('Steam');
    const [howMuch, setHowMuch] = useState('25');

    let instance;

    instance = tronWeb.contract(testABI, address);





    useEffect(() => {
        const getNumber = async () => {
            let result = await instance.favouriteNumber().call();
            setFavNum(result)
            getNumber();

        }
    }, [])


    // useEffect(() => {
    //     const getOwner = async () => {
    //         let fromWhom = await instance.owner().call();
    //         setOwner(fromWhom);
    //       }
    //       const getProvider = async () => {
    //         let forWhat = await instance.getProvider().call();
    //         setProvider(forWhat);
    //         }
    //         //not yet implemented
    //       const getHowMuch = async () => {
    //         let howMuch = await instance.howMuch().call();
    //         setHowMuch(howMuch);
    //       }
    //     getOwner();
    //     getProvider();
    //     getHowMuch();
    // }, [])

    // const fromWhom = '';
    // const forWhat = '';
    // const howMuch = '';


    const onSubmit = (e) => {
        e.preventDefault()
        if (!username || !password) {
            alert('incomplete fields')
            return
        }


        console.log(`Name is ${username}`)
        console.log(`Post is ${password}`)
        setUsername('')
        setPassword('')
    }
    const submitTrasaction = async (e) => {
        e.preventDefault()
        //



        console.log('callResult', callResult)

    }
    const getPaidUsers = [1, 2];
    const getNotPaidUsers = [1, 2];
    return (
        <section class="text-white bg-slate-900 pb-72">
            <div>
                <Nav />

                <p class="p-4 font-mono text-xs font-medium text-slate-400">GID: {pid} Index: {index}</p>

                {/* Main Body Element */}
                <div class=" p-5 mx-auto text-center ">
                    <h1 class=" font-mono text-2xl font-medium text-slate-400">
                        You&apos;ve got a new group request from {fromWhom}
                    </h1>
                </div>


                <div class="text-white font-bold font-mono uppercase text-sm px-6 pt-3 outline-none focus:outline-none justify-center">Plan information</div>
                <p class="text-white font-bold font-mono uppercase text-sm px-6 outline-none focus:outline-none justify-center">--------</p>
                <div class="text-white font-mono text-sm px-6 pb-8 outline-none focus:outline-none justify-center">
                    <p>Vendor: {forWhat}</p>
                    <p>AmountOwed: {howMuch}</p>
                </div>

                

                <div class="text-white font-bold font-mono uppercase text-sm px-6 pt-3 outline-none focus:outline-none justify-center">Platform Login</div>
                <p class="text-white font-bold font-mono uppercase text-sm px-6 outline-none focus:outline-none justify-center">--------</p>

                <div >
                    <form onSubmit={onSubmit} className='border-black '>
                        <label class="text-white font-mono uppercase text-sm px-6 pb-8 outline-none focus:outline-none justify-center">
                            Username: 
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='border-black bg-gray-200 rounded text-black' />
                        </label>
                        <label class="text-white font-mono uppercase text-sm px-6 pb-8 outline-none focus:outline-none justify-center">
                            Pasword:  
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border-black bg-gray-200 rounded text-black' />
                        </label>

                        <input type="submit" value="Submit" class = "mt-3 ml-6 transition ease-in-out hover:-translate-y-1 hover:scale-95 hover:bg-indigo-500 duration-300 font-mono block w-full px-2 py-2 font-xs text-white bg-gray-700 rounded sm:w-auto"/>
                    </form>

                </div>
                <div class="flex justify-between mb-1 ">
                    <span class="text-white font-bold font-mono uppercase text-sm px-6 pt-8 outline-none focus:outline-none justify-center">Funding completed: {getPaidUsers.length} / {getPaidUsers.length + getNotPaidUsers.length}</span>
                </div>
                <div class="ml-6 w-4/12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 justify-center">
                    <div class="bg-blue-600 h-2.5 rounded-full" ></div>
                </div>
                
                <button
              className="mt-6 ml-6 transition ease-in-out hover:-translate-y-1 hover:scale-95 hover:bg-indigo-500 duration-300 font-mono block w-full mt-4 px-6 py-3 font-xs text-white bg-gray-700 rounded sm:w-auto"
              type="button"
              onClick={() => submitTrasaction}
            >
              Pay {howMuch} USDT with TronLink
            </button>
            </div>
        </section>
    )
}

export default PaymentPage