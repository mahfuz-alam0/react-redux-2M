import { ADD_MATCH, DECREMENT, INCREMENT, RESET } from "./actionType";

export const addMatchAction = (match) => {
    return {
        type: ADD_MATCH,
        payload: {
            match: match,
        },
    };
};

export const resetAction = () => {
    return {
        type: RESET,
    };
};

export const incrementAction = () => {
    return {
        type: INCREMENT,
    }
};

export const decrementAction = () => {
    return {
        type: DECREMENT,
    }
};
// export const incrementAction = (id, value) => {
//     return {
//         type: INCREMENT,
//         payload: {
//             id: id,
//             value: value,
//         },
//     }
// };


// export const decrementAction = (id, value) => {
//     return {
//         type: DECREMENT,
//         payload: {
//             id: id,
//             value: value,
//         },
//     }
// };