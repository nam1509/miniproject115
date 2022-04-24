
import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
        <div className=" bg-amber-300 shadow rounded-lg lg:w-1/3  md:w-3/2 w-full p-4 mt-16 relative m-4   flex flex-col items-center justify-center">
            <h3 class="text-2xl font-bold text-center shadow">SignUp to your account</h3><br></br><br></br>
            <div className="text-xl font-small">
                Username:
                </div><br></br>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username" className="text-xl font-medium leading-none text-gray-800"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div><br></br>
            <div>
                Email:
            </div><br></br>
            <div>
                <input type="email"
                    name="email"
                    placeholder="email" className="text-xl font-medium leading-none text-gray-800"
                    onChange={(e) => setEmail(e.target.value)} />
            </div><br></br>
            <div>
                Password:
            </div><br></br>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"  className="text-xl font-medium leading-none text-gray-800"
                    onChange={(e) => setPassword(e.target.value)} />
            </div><br></br><br></br>
            <div>
                    <button className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg  font-display"  onClick={register}>Register</button>
             </div>
        </div>
    )


    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
                <Navbar />

                <div>
                <div className="flex flex-col items-center justify-center">
                    {registerForm()}
                </div>
 Status:  {status}
                
            </div>
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
