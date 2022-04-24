import Head from 'next/head'
import Layout from '../components/layout'
import { useState } from 'react'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'

export default function Login({ token }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.status + ': ' + result.data.user.username)
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    const loginForm = () => (

        <div className=" bg-amber-300 shadow rounded-lg lg:w-1/3  md:w-1/2 w-full p-4 mt-16 relative m-4   flex flex-col items-center justify-center">
            <div>  <img class="sm:w-1/6 sm:h-1/6 items-center " src="https://cdn-icons.flaticon.com/png/512/2276/premium/2276931.png?token=exp=1650816311~hmac=6d900f76801498d89895213ff3854eb4" /> 
                <h3 class="text-2xl font-bold text-center shadow">Login to your account</h3>
                   
            </div> 
            <br></br><br></br>
            <div className="text-xl font-small">
                Username:
            </div><br></br>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username" className="text-xl font-medium leading-none text-gray-800"
                    onChange={(e) => setUsername(e.target.value)} />
            </div>
            <br></br><br></br>
            <div className="text-xl font-small">
                Password:
            </div><br></br>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password" className="text-xl font-medium leading-none text-gray-800"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
                <br></br><br></br><br></br>
                <div>
                    <button  className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg  font-display" onClick={login}>Login</button>
                </div>
                </div>
    )

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>

                <Navbar />
                
                <div>
                <div className="flex flex-col items-center justify-center">
                    {loginForm()}
        
                <div>
                    Status:  {status}
                </div>
                </div>

             </div>   
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
