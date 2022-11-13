import { useRouter } from 'next/router'
import { useState } from 'react'
import { testABI } from '../../components/contractABI';

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
const tronWeb = new TronWeb({fullHost:server, solidityNode:server, eventServer:server, privateKey: process.env.PRIVATE_KEY});
let instance = await tronWeb.contract(testABI,address);
tronWeb.setAddress(address);

const PaymentPage = () => {
  const router = useRouter()
  const { pid,index } = router.query
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  
  
  const fromWhom =await instance.getOwner().call();
  const forWhat =await instance.getProvider().call();
  const howMuch =await instance.getXXX().call();

  const onSubmit=(e)=>{
    e.preventDefault()
    if(!username||!password){
        alert('incomplete fields')
        return
    }
    
    
    console.log(`Name is ${username}`)
    console.log(`Post is ${password}`)
    setUsername('')
    setPassword('')
}
const submitTrasaction=async(e)=>{
    e.preventDefault()
    //
    
   
    
    console.log ('callResult',callResult)
    
}
  const getPaidUsers = [1,2];
  const getNotPaidUsers = [1,2];
  return(
    <div>
        <p>GID: {pid} Index: {index}</p>
        <div>
            <p>You've got a new group request from {fromWhom}</p>
        </div>
        <div><h2>Plan information</h2></div>
        <p>--------</p>
        <div>
            <p>Vendor:{forWhat}</p>
            <p>AmountOwed:{howMuch}</p>
        </div>
        <div>
                <form onSubmit={onSubmit} className ='border-black '>
                    <label>
                    Username:
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className ='border-black bg-blue-500 ' />
                    </label>
                    <label>
                    Pasword:
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className ='border-black bg-blue-500 ' />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
                
        </div>
        <div><h2>Funding</h2></div>
        <p>--------</p>
        <p>Funding completed {getPaidUsers.length}/ {getPaidUsers.length+getNotPaidUsers.length}</p>
        <button onClick={submitTrasaction  } className='bg-green-500'> Pay {howMuch} USDT with TronLink</button>
    </div>
  ) 
}

export default PaymentPage