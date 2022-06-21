import { XIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from "react-redux";
import { change } from '../store/openLogin';

// const Login = ({ setOpenLogin, openLogin }) => {
const Login = () => {

    const dispatch = useDispatch()
    const openLogin = useSelector(state => state.loginForm.value)

    return <div className="absolute w-screen left-0 top-14 h-screen bg-[#000000e6] flex justify-center items-center">
        <div className="max-w-md absolute -mt-14 bg-white rounded-lg">

            <div className="relative pt-10 pb-5 px-5">
                <h1 className="text-4xl text-rose-600 font-semibold mb-5">Login</h1>
                <div>
                    <input type="email" placeholder="Your Email" className="border-2 border-slate-800 px-2 py-1 text-lg rounded-lg w-full" />
                    <input type="password" placeholder="Your Password" className=" my-2 border-2 border-slate-800 text-lg px-2 py-1 rounded-lg w-full" />
                    <div className="mb-4 text-left">
                        <input type="checkbox" /> <span>Keep Me Logged In</span> <br />
                    </div>
                    <button onClick={() => dispatch(change())} className="bg-green-700 text-white px-3 py-1 text-lg rounded-lg">Login</button>
                </div>
                <div className='absolute top-3 right-3'>
                    <XIcon onClick={() => dispatch(change())} className="h-5 w-5 bg-red-500 hover:bg-red-700 text-white rounded-full p-0.5" />
                </div>
            </div>
        </div>
    </div>;
};
export default Login;