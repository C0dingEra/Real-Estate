import React from 'react';
import {Link} from 'react-router-dom';
function SignUp() {
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl my-7 text-center font-semibold'>Sign Up</h1>
            <form className='flex flex-col gap-4'>
                <input type="text" placeholder='username' className='border p-2 rounded-lg' id='username' />
                <input type="text" placeholder='username' className='border p-2 rounded-lg' id='username' />
                <input type="text" placeholder='username' className='border p-2 rounded-lg' id='username' />
                <button className='bg-slate-700 text-white rounded-lg p-3 font-semibold uppercase hover:opacity-95 disabled:80'>Sign up</button>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>have an account?</p>
                <Link to={"/sign-in"}>
                    <span className='text-blue-700'>sign in</span>
                </Link>
            </div>
        </div>
    )
}

export default SignUp