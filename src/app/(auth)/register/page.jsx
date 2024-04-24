import React from 'react'
import Image from 'next/image'

const Login = () => {
  return (
    <main className="pl-10  h-screen  overflow-hidden">
        <section className='px-5 mt-6 w-full'>
            <div className="flex justify-between ml-28">
                <Image src={"/assets/icons/logo.svg"} width={250} height={200} />
                <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
            </div>
            <div className='w-full h-full flex justify-around '>
                <div className='w-[700px] h-auto mt-32'> 
                            <form className='col-span-8 p-5'>
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                                                for="Enter your name..">
                                                First Name
                                            </label>
                                            <input
                                                class="appearance-none block w-full bg-blue-200 text-gray-700 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="Enter your name.." type="text" placeholder="Enter your name.."/>
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <label class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                                                for="grid-last-name">
                                                Last Name
                                            </label>
                                            <input
                                                class="appearance-none block w-full bg-blue-200 text-gray-700 border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-last-name" type="text" placeholder="Enter your name.."/>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                                                for="grid-first-name">
                                                Email : 
                                            </label>
                                            <input
                                                class="appearance-none block w-full bg-blue-200 text-gray-700 border-red-500 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name" type="email" placeholder="info@xyz.com"/>
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <label class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                                                for="grid-last-name">
                                                Mobile No. : 
                                            </label>
                                            <input
                                                class="appearance-none block w-full bg-blue-200 text-gray-700 border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-last-name" type="tel" placeholder="+91 - 98596 58000"/>
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                                                for="grid-first-name">
                                                Password : 
                                            </label>
                                            <input
                                                class="appearance-none block w-full bg-blue-200 text-gray-700 border-red-500 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name" type="password" placeholder="xxxxxxxxxxxxxxx"/>
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <label class="block tracking-wide text-md font-bold mb-2"
                                                for="grid-last-name">
                                                Comfirm Password : 
                                            </label>
                                            <input
                                                class="appearance-none block w-full bg-blue-200 text-gray-700 border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-last-name" type="tel" placeholder="xxxxxxxxxxxxxxx"/>
                                        </div>
                                    </div>

                                    <div class="relative">
                                    <button class="bg-blue-400 text-white text-xl rounded-2xl px-10 py-3 hover:bg-blue-700">Sign Up</button>
                                    </div>

                            </form>
                </div>
                <div className='w-[500px] h-[650px] flex justify-center items-center rounded-xl'>
                    <Image src={"/assets/icons/sign-up.svg"} width={500} height={450}/>
                </div>
            </div>
        </section>
    </main>
  )
}


export default Login