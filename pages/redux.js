import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/counterSlice";
import HomeLayout from "../Layouts/HomeLayout";


const Redux = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter.count)

    return <>
        <HomeLayout>
            <div className="container mx-auto p-5">
                <h1 className="text-5xl">Counter: {counter}</h1>
                <button
                    onClick={() => dispatch(increment())}
                    className="bg-red-500 p-3 rounded-full mt-10 text-white">Increase</button>
                <button
                    onClick={() => dispatch(decrement())}
                    className="bg-red-500 p-3 rounded-full mt-10 text-white">Decrease</button>
            </div>
        </HomeLayout>
    </>;
};
export default Redux;