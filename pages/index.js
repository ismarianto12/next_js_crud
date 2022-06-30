import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FormLogin from '../components/form_login'
import { useRouter } from "next/router";
import { API_URL } from '../helpers/server'

const Index = () => {
    const router = useRouter()

    const [value, setValue] = useState({
        username: '',
        password: ''
    })
    const Accesslogin = () => {


    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('u handle submit form' + value)
        const configurl = {
            method: 'post',
            url: `${API_URL}/login`,
            data: JSON.parse(JSON.stringify(value)),
            headers: {
                'Content-type': 'applications/json'
            }
        }
        axios(configurl).then(response => {
            localStorage.setItem(send)
            console.log(response)
        }).catch((err) => {
            console.log(err)
        });
        router.push('admin/dashboard')
        // Accesslogin
    }
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    let data = value;
    return <FormLogin handleSubmit={handleSubmit} handleChange={handleChange} data={data} />
}

export default Index;