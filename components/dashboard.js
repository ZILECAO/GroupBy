import React from 'react'
import { useState } from 'react';
import Link from 'next/link'



const NodeRSA = require('node-rsa');
const key = new NodeRSA();
const keyData =
  "-----BEGIN RSA PUBLIC KEY-----\n" +
  "MIGJAoGBAIIy3n7DEPUob/X4I0Gm8XvYl1jwUcoSjlKIZF1Ggzx+X9KM4JPL4Flz\n" +
  "KtqmUJbR5vSqqxwNikbe83DdC4oSG+Tzh+BWQRNiMO65BVC4dmw0qMjvazODi3Vf\n" +
  "kohzIUerAdNUiq3Ss+9QjWYeWTrmULSGoisM/+4dNdUifNm+8gSbAgMBAAE=\n"
"-----END RSA PUBLIC KEY-----";
key.setOptions({
  encryptionScheme: "pkcs1"
});

key.importKey(keyData, "pkcs1-public");


export function Dashboard({ instance }) {

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [product, setProduct] = useState("NFT Pass | 25 USD");
  const [groupName, setGroupName] = useState("");
  const [memberEmail1, setMemberEmail1] = useState([]);
  const [memberEmail2, setMemberEmail2] = useState([]);
  const [memberEmail3, setMemberEmail3] = useState([]);
  const [memberEmail4, setMemberEmail4] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault()
    if (!product || !groupName || !memberEmail1 || !memberEmail2 || !memberEmail3 || !memberEmail4) {
      alert('incomplete fields')
      return
    }


    console.log(`product is ${product}`)
    console.log(`group name is ${groupName}`)
    console.log(`member 1 is ${memberEmail1}`)
    console.log(`member 2 is ${memberEmail2}`)
    console.log(`member 3 is ${memberEmail3}`)
    console.log(`member 4 is ${memberEmail4}`)
    let c_memberEmail1 = key.encrypt(memberEmail1, 'base64');
    let c_memberEmail2 = key.encrypt(memberEmail2, 'base64');
    let c_memberEmail3 = key.encrypt(memberEmail3, 'base64');
    let c_memberEmail4 = key.encrypt(memberEmail4, 'base64');
    console.log(`c_member 1 is ${c_memberEmail1}`)
    console.log(`c_member 2 is ${c_memberEmail2}`)
    console.log(`c_member 3 is ${c_memberEmail3}`)
    console.log(`c_member 4 is ${c_memberEmail4}`)
    let price = (product === "NFT Pass | 25 USD ↓" ? (25) : 100)
    //insert smart function call here
    // let returnValue =instance.favoriteNumber().send()
    console.log('returnValue', returnValue)
    setProduct(0)
    setGroupName('')
    setMemberEmail1('')
    setMemberEmail2('')
    setMemberEmail3('')
    setMemberEmail4('')
  }

  return (
    <section class="">
      {/* Main Body Element */}
      <div class=" p-10 mx-auto text-center ">
        <h1 class="p-2 font-mono text-5xl font-medium text-slate-400">
          Hello Julia,
        </h1>
      </div>

      <div class="flex flex-row">
        <nav class="basis-2/6 pl-6 ml-12 flex flex-col gap-5 bg-slate-900 w-64 h-screen px-4 text-black items-center font-mono">

          {/* Model component */}
          <>
            <button
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-mono block w-full mt-4 px-6 py-3 font-xs text-white bg-gray-700 rounded-full sm:w-auto"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Create new group
            </button>

            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold text-white">
                          Create a group
                        </h3>
                        <button
                          className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-gray-200 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto ">
                        <p className="my-2 text-white text-lg leading-relaxed">
                          1. Choose the service
                        </p>

                        <div id="select" className="">
                          <div className="mb-2 block text-white  ">
                            <label
                              htmlFor="countries"
                              value="Select your country"
                            />
                          </div>
                          <select
                            id="countries"
                            required={true}
                            className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                            onChange={(e) => setProduct(e.target.value)}
                          >
                            <option>
                              NFT Pass | 25 USD
                            </option>
                            <option>
                              Concert Tix | 100 USD
                            </option>
                          </select>
                        </div>


                        <p className="my-2 pt-4 text-white text-lg leading-relaxed">
                          2. Name the group
                        </p>

                        <div class="mb-6">

                          <input class="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                            id="name"
                            type="name"
                            placeholder="BlueBarry"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            required={true} />

                        </div>

                        <p className="my-2 pt-4 text-white text-lg leading-relaxed">
                          3. Enter member email address&apos;s
                        </p>

                        <div class="mb-6">

                          <input class="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                            id="email1"
                            type="email"
                            placeholder="name@groupby.com"
                            value={memberEmail1}
                            onChange={(e) => setMemberEmail1(e.target.value)}
                            required={true}
                          />
                          <input class="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                            id="email2"
                            type="email"
                            placeholder="name@groupby.com"
                            value={memberEmail2}
                            onChange={(e) => setMemberEmail2(e.target.value)}
                            required={true}
                          />
                          <input class="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                            id="email3"
                            type="email"
                            placeholder="name@groupby.com"
                            value={memberEmail3}
                            onChange={(e) => setMemberEmail3(e.target.value)}
                            required={true}
                          />
                          <input class="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                            id="email4"
                            type="email"
                            placeholder="name@groupby.com"
                            value={memberEmail4}
                            onChange={(e) => setMemberEmail4(e.target.value)}
                            required={true}
                          />

                        </div>


                        <p className="my-2 pt-4 text-white text-lg leading-relaxed">
                          4. Final amount per person:

                        </p>

                        <p className="my-2 pt-4 text-white text-lg leading-relaxed">
                          {product === "NFT Pass | 25 USD" ? (25) : 100}

                        </p>



                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none justify-center bg-gray-700"
                          type="button"
                          onClick={onSubmit}
                        >
                          Create Group
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>



          {/* column list of events */}

          <>
            <button
              className="mt-4 transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 font-mono pr-8 pl-4 text-white flex flex-row bg-gray-700 rounded-lg items-center"
              type="button"
              onClick={() => setShowModal2(true)}
            >
            <img src={'../spotify.png'} alt="gradient" class = "scale-75"/>
              Apt 402
            </button>

            {showModal2 ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-200 outline-none focus:outline-none">
                      {/*header*/}
                      <div className="mt-8 flex justify-center p-5 border-b border-solid border-slate-200 rounded-t">
              
                        
                        <h3 className="text-3xl font-semibold text-gray-800">
                          
                          Apt 402
                        </h3>

                        <button
                          className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal2(false)}
                        >
                          <span className="text-gray-800 h-6 w-6 text-2xl block">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}

                      <div className="relative pr-32 pl-8 flex-auto ">
                        <p className="mb-4 text-gray-800 text-lg justify-start">
                          Spotify

                        </p>


                        <p className="mb-4 text-green-800 text-lg justify-start">
                          Savings: $50

                        </p>

                        <p className="pt-4 text-gray-800 text-lg justify-start">
                          Members: 5

                        </p>

                        <p className="pt-1 text-gray-800 text-lg justify-start">
                          zile@groupby.com,
                          julia@groupby.com,
                          austin@groupby.com,
                          brandon@groupby.com,
                          intel@groupby.com

                        </p>

                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none justify-center bg-gray-700"
                          type="button"
                          onClick={() => setShowModal2(false)}
                        >
                          Cool!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>

        </nav>


        <div class="basis-4/6 place-self-start">

          <Link href="/">
            <button>
              <img src={'../gradient2.png'} alt="gradient" />
            </button>
          </Link>

        </div>

      </div>



    </section>
  )
}
