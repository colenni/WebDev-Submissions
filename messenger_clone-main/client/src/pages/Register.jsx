import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

export default function Register() {
    const nav = useNavigate();
    const [userCreds, setUserCreds] = useState({
        email: '',
        pass: '',
        conPass: '',
    });

    async function handleSubmit(e) {
        e.preventDefault();
        if (userCreds.pass === userCreds.conPass) {
            try {
                const reg = await fetch('http://localhost:3000/register', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userCreds)
                });
                const res = await reg.json();
                if (reg.ok) {
                    alert(res.msg)
                    setTimeout(() => {
                        nav('/login');
                    }, 2000)
                    
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Error: Passwords do not match!')
        }
    }
    
    return (
        <div className="bg-[#151b2d] min-h-screen min-h-screen w-screen fixed flex justify-center">
            <form className="mt-12 mb-12 text-white shadow-[1px_1px_10px_15px_rgb(20,22,38)] w-1/3 h-1/3" onSubmit={(e) => handleSubmit(e)}>
                <div className="p-[16px] flex flex-col gap-1">
                    <h1 className="text-[2em] font-bold">Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr className="border-[1px] border-solid border-[#f1f1f1] mb-[25px]" />
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="email" placeholder="Enter Email" name="email" className="w-100 p-3 mt-[5px] mb-[22px] bg-[#484E58] opacity-8 rounded-[30px] font-[600] focus:bg-white focus:outline-none text-black" onChange={(e) => setUserCreds({...userCreds, email: e.target.value})} required />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" className="w-100 p-3 mt-[5px] mb-[22px] bg-[#484E58] opacity-8 rounded-[30px] font-[600] focus:bg-white focus:outline-none text-black" onChange={(e) => setUserCreds({...userCreds, pass: e.target.value})} required />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" className="w-100 p-3 mt-[5px] mb-[22px] bg-[#484E58] opacity-8 rounded-[30px] font-[600] focus:bg-white focus:outline-none text-black" onChange={(e) => setUserCreds({...userCreds, conPass: e.target.value})} required />
                        </div>
                    </div>

                    <p className="flex gap-1">
                        By creating an account you agree to our
                        <a className="text-[#1E90FF] underline">Terms & Privacy.</a>
                    </p>

                    <div className="flex justify-center my-2">
                        <button type="submit" className="bg-[#04AA6D] text-white py-2 my-2 cursor-pointer w-1/2 opacity-9 flex justify-center rounded-full hover:opacity-100 hover:bg-[#19af61]">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}