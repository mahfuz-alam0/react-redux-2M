import { connect } from 'react-redux';

import { decrementAction, incrementAction } from "../redux/counter/actions";
import { DynamycDecrementAction, DynamycIncrementAction } from '../redux/DynamicCounter/actions';


const variableCounter = ({ count, increment, decrement, ownProps }) => {

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">
                DV {count}
            </div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        count: ownProps.dynamic
            ? state.dynamicCounter.value
            : state.counter.count,
    };
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: ownProps.dynamic ? () => dispatch(DynamycIncrementAction(5)) : () => dispatch(incrementAction()),
        decrement: ownProps.dynamic ? () => dispatch(DynamycDecrementAction(5)) : () => dispatch(decrementAction()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(variableCounter)
