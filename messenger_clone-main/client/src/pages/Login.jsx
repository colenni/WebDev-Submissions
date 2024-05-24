import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {

    const nav = useNavigate();

    const [userCreds, setUserCreds] = useState({
        email: '',
        pass: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();
        if (userCreds) {
            try {
                const reg = await fetch('http://localhost:3000/login', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userCreds)
                });
                const res = await reg.json();
                if (reg.ok) {
                    localStorage.setItem('token', res.token);
                    nav('/')
                } else {
                    alert(res.msg);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <div className="bg-gray-900 flex justify-center items-center min-h-screen">
            <div className="wrapper bg-gray-9z00 bg-opacity-50 shadow-2xl text-white rounded-sm p-8 w-96">
                <div className="flex justify-center items-center pt-12">
                    <img className="w-20" src="/logo.png" alt="messenger logo" />
                </div>
                <h1 className="text-2xl font-bold mb-8 text-center">Welcome to Messenger</h1>
                <form name="f1" id="loginForm" onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-box mb-6">
                        <input type="email" name="username" onChange={(e) => setUserCreds({ ...userCreds, email: e.target.value })} id="username" placeholder="Email"
                            className="w-full h-12 bg-gray-700 rounded-full px-5 text-base text-white focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="input-box mb-6">
                        <input type="password" name="password" onChange={(e) => setUserCreds({ ...userCreds, pass: e.target.value })} id="password" placeholder="Password"
                            className="w-full h-12 bg-gray-700 rounded-full px-5 text-base text-white focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit"
                        className="btn w-full h-12 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                        Login
                    </button>
                </form>
                <div className="register-link mt-4 flex gap-2 justify-center">
                    <p>
                        Don't have an account?
                    </p>
                    <a href="/register" className="text-blue-400 font-semibold">Register
                        here</a>
                </div>
            </div>
        </div>
    )
}