import React from 'react'
import { useState } from 'react';

export function Dashboard({instance}) {

  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState("NFT Pass | 25 USD ↓");
  const [groupName,setGroupName] = useState("");
  const [memberEmail1,setMemberEmail1] = useState([]);
  const [memberEmail2,setMemberEmail2] = useState([]);
  const [memberEmail3,setMemberEmail3] = useState([]);
  const [memberEmail4,setMemberEmail4] = useState([]);
  
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
    let price = (product === "NFT Pass | 25 USD ↓" ? (25):100)
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
    <section class="text-black bg-white">
      {/* Main Body Element */}
      <div class=" p-10 mx-auto text-center ">
                <h1 class="p-2 text-5xl font-bold text-blue-700">
                    Dashboard
                </h1>
                </div>

      <div>
        <nav class="flex flex-col bg-white w-64 h-screen px-4 text-black border-purple-900 items-center">

          {/* Model component */}
          <>
            <button
              className="block w-full mt-4 px-6 py-3 font-xs text-white bg-blue-700 border hover:bg-blue-800 rounded-full sm:w-auto"
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
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Create a group
                        </h3>
                        <button
                          className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto ">
                        <p className="my-2 text-slate-500 text-lg leading-relaxed">
                          1. Choose the service
                        </p>

                        <div id="select" className="">
                          <div className="mb-2 block text-white bg-blue-700 ">
                            <label
                              htmlFor="countries"
                              value="Select your country"
                            />
                          </div>
                          <select
                            id="countries"
                            required={true}
                            className="shadow appearance-none border bg-blue-700 rounded w-full py-2 px-3 text-white mb-3 leading-tight"
                            onChange={(e) => setProduct(e.target.value)}
                          >
                            <option>
                              NFT Pass | 25 USD ↓
                            </option>
                            <option>
                              Concert Tix | 100 USD
                            </option>
                          </select>
                        </div>


                        <p className="my-2 pt-4 text-slate-500 text-lg leading-relaxed">
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

                        <p className="my-2 pt-4 text-slate-500 text-lg leading-relaxed">
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


                        <p className="my-2 pt-4 text-slate-500 text-lg leading-relaxed">
                          4. Final amount per person:
                          {product === "NFT Pass | 25 USD ↓" ? (25):100}
                        </p>


                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-blue-700 text-white hover:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none justify-center"
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
          <div class="mt-4 mb-4">
            <ul class="ml-4">
              <li class="mb-2 px-4 py-4 text-black flex flex-row bg-gray-200 border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                <span>
                  <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
                    <path
                      d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                                4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                                4h4v-4h-4M4 8h4V4H4v4z"
                    ></path>
                  </svg>
                </span>
                <a href="#">
                  <span class="ml-2">Group Name </span>
                  <span class="ml-2 text-xs">Vendor</span>
                </a>
              </li>

              <li class="mb-2 px-4 py-4 text-black bg-gray-200 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                <span>
                  <svg
                    class="fill-current h-5 w-5 "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <a href="#">

                  <span class="ml-2">Customers</span>
                </a>
              </li>
              <li class="mb-2 px-4 py-4 text-black flex bg-gray-200 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                <span>
                  <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
                    <path
                      d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                                2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                                00-2-2h-1V1m-1 11h-5v5h5v-5z"
                    ></path>
                  </svg>
                </span>
                <a href="#">

                  <span class="ml-2">Milestones</span>
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>





    </section>
  )
}
