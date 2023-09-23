import { useDispatch, useSelector } from "react-redux";
import { DynamycDecrementAction, DynamycIncrementAction } from "../redux/DynamicCounter/actions";

const DynamicHookCounter = () => {

    const count = useSelector((state) => state.dynamicCounter.value);

    const dispatch = useDispatch();

    const increment = (value) => {
        dispatch(DynamycIncrementAction(value));
    }
    const decrement = (value) => {
        dispatch(DynamycDecrementAction(value));
    }

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">
               D {count}
            </div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>increment(5)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>decrement(5)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default DynamicHookCounter;
