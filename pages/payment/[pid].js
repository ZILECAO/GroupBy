import { useRouter } from 'next/router'
import { useState } from 'react'

const PaymentPage = () => {
  const router = useRouter()
  const { pid,index } = router.query
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  

  const fromWhom ='fromWhom';//onchain data-> lookup from gid
  const forWhat ='forWhat';//onchain data-> lookup from gid
  const howMuch ='howMuch';//onchain data-> lookup from gid

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
    let instance = await tronWeb.contract().at('TBBp5VF2q73hfMUoyxr138Kx3kbsi6HQRS');
    
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