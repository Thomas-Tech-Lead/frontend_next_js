'use client';
import { useState } from "react";
import Image from 'next/image';
import svgIcon from '../app/logo.svg'
import Display from "../pages/display"

export default function Home() {

    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [input, setInput] = useState("")
    const [islog, setIslog] = useState("false")

    async function handleSubmit(e) {
        e.preventDefault()
        
        const submitData = { 
            Phone: phone, 
            Password: password, 
        }
        
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "content-type" : "application/json" },
                body : JSON.stringify( submitData )
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === "true") {
                    setIslog("true")
                } else {
                    setInput('Phone or Password NOT correct.')
                }
            })
            
        } catch (error) {
            setInput(error)
        }
    }

    if (islog === "true") {
        return( <Display />)
    } else {
        
        return (
            <main className="flex min-h-screen flex-col justify-between p-8">

                <section className="bg-transparent dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-0 py-4 mx-0 md:h-screen lg:py-0">
                        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <Image className="w-8 h-8 mr-2" src={svgIcon} alt="logo" />
                            Logo                                       
                        </a>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1> <slot>{input}</slot> </h1>
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Login to your account  
                                </h1>
                                Your Phone = user <br/> Password = password

                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" method="post">
                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>

                                    <button  type="" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</a>
                                    </p>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        )
    }
  
}
