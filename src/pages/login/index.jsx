import React, { useRef } from 'react';
import "../login/login.scss"
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const login = async (e) => {
        console.log(e);
        await axios({
            url: "https://api.escuelajs.co/api/v1/auth/login",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                email: e.email,
                password: e.password
            }
        }).then((res) => {
            let token = res.data.access_token;
            console.log(token);
            localStorage.setItem("token",token);
            navigate("/")
        })
    }
    return (
        <div className='container'>
            <div className="wrapper">
                <h1>Hush kelibsiz</h1>
                <Form onFinish={login}>
                    <Form.Item name={"email"} rules={[
                        {
                            required: true,
                            message: "iltimos to'g'ri email kiriting"
                        }
                    ]}>
                        <Input placeholder='email' allowClear />
                    </Form.Item>
                    <Form.Item name={"password"} rules={[
                        {
                            required: true,
                            message: "iltimos to'g'ri kod kiriting"
                        }
                    ]}>
                        <Input.Password placeholder='password' allowClear />
                    </Form.Item>
                    <Button className='btn' htmlType='submit'>send</Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;
