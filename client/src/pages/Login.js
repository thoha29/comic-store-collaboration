import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdVpnKey, MdPerson } from "react-icons/md";

const Login = (props) => {
    const { loginCbHeader } = props

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const loginUser = async () => {
        try {
            let result = await axios({
                method: 'POST',
                url: 'http://localhost:3000/api/users/login',
                data: form
            })

            const access_token = result.data.accessToken
            localStorage.setItem('access_token', access_token)
            loginCbHeader(true)
        } catch (error) {
            console.log(error)
        }
    }

    const submitHandler = () => {
        // console.log(form)
        loginUser()
    }
    return (
        <>
            <h1>Login</h1>
        </>
    )
}

export default Login