import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
function SignUp() {
    const [formData, setFormData] = useState({});
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate();

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value,
            }
        )
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{

            setLoading(true);
            const res=await fetch('/api/auth/signup',{
                method:"POST",
                headers:{
                    'Content-type':"application/json",
                },
                body:JSON.stringify(formData),
            })
            const data =await res.json()
            if(data.success===false){
                setError(data.message);
                setLoading(false);
                return;
            }
            setLoading(false);
            setError(null);
            navigate('/sign-in');
        }
        catch(error){
            setLoading(false);
            setError(error.message);
        }
    }
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl my-7 text-center font-semibold'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input type="text" placeholder='username' className='border p-2 rounded-lg' id='username' onChange={handleChange} />
                <input type="email" placeholder='email' className='border p-2 rounded-lg' id='email' onChange={handleChange} />
                <input type="password" placeholder='password' className='border p-2 rounded-lg' id='password' onChange={handleChange} />
                <button disabled={loading} className='bg-slate-700 text-white rounded-lg p-3 font-semibold uppercase hover:opacity-95 disabled:80'>{loading?"loading...":"sign up"}</button>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>have an account?</p>
                <Link to={"/sign-in"}>
                    <span className='text-blue-700'>sign in</span>
                </Link>
            </div>
            {error && <p className='text-red-600'>{error}</p>}
        </div>
    )
}

export default SignUp;