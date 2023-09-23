import { ADD_MATCH, DDECREMENT, DINCREMENT, RESET } from "./actionType";

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

export const DynamycIncrementAction = (value) => {
    return {
        type: DINCREMENT,
        payload: {
            value: value,
        },
    }
};

export const DynamycDecrementAction = (value) => {
    return {
        type: DDECREMENT,
        payload: {
            value: value,
        },
    }
};