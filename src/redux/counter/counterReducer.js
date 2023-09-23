import { ADD_MATCH, INCREMENT, DECREMENT, RESET } from "./actionType";

const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT:
          return { ...state, value: state.value + 1 };
        case DECREMENT:
          return { ...state, value:  state.value - 1 };
        case RESET:
          return { ...state, value: 0 };
        default:
          return state;
      }

    // switch (action.type) {
    //     case ADD_MATCH:
    //         return [...state, action.payload.match];
    //     case INCRIMENT:
    //         return state.map(match => {
    //             if (match.id === action.payload.id) {
    //                 if (isNaN(action.payload.value)) {
    //                     return match;
    //                 } else {
    //                     return {
    //                         ...match,
    //                         value: match.value + action.payload.value
    //                     };
    //                 }
    //             }
    //             return match;
    //         });
    //     case INCREMENT:
    //         return state.map(match => {
    //             if (match.id === action.payload.id) {
    //                 if (isNaN(action.payload.value)) {
    //                     return match;
    //                 } else {
    //                     if (match.value - action.payload.value < 0) {
    //                         return {
    //                             ...match,
    //                             value: 0
    //                         };
    //                     } else {
    //                         return {
    //                             ...match,
    //                             value: match.value - action.payload.value
    //                         };
    //                     }
    //                 }
    //             }
    //             return match;
    //         });
    //     case RESET:
    //         return state.map(match => ({ ...match, value: 0 }));
    //     default:
    //         return state;
    // }
}

export default counterReducer;