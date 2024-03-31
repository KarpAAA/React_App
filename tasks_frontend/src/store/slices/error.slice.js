import {createSlice} from "@reduxjs/toolkit";
import DateHelpers from "../../utils/helpers/date.helpers";
import {TaskPriority, TaskStatus} from "../../utils/enums";

const initialState = {
    error: {
        message: "Some error occurred",
        mills: 3000,
    },
    isError: false
};


const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        setError(state, action){
            state.error = {...state.error, ...action.payload};
        },
        setIsError(state, action){
            state.isError = action.payload;
        }
    },
});

export const errorActions = errorSlice.actions;

export const setErrorAction = (error) => (dispatcher) => {
    dispatcher(errorActions.setError(error));
    dispatcher(errorActions.setIsError(true));
    setTimeout(() => dispatcher(errorActions.setIsError(false)), 3000);
}
export default errorSlice.reducer;