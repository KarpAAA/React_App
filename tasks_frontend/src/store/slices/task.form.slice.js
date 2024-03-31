import {createSlice} from "@reduxjs/toolkit";
import DateHelpers from "../../utils/helpers/date.helpers";
import {TaskPriority, TaskStatus} from "../../utils/enums";

const initialState = {
    task: {
        title: '',
        content: '',
        date: '2024-03-30',
        priority: 0,
        status: 0,
        tasksListId: null,
    }
};


const taskForm = createSlice({
    name: "taskForm",
    initialState,
    reducers: {
        taskPropertyChange(state, action){
            const {property, value} = action.payload;
            state.task[property] = value;
        },
        clearToInitial(state){
            state.task = {...initialState.task};
        },
        setEditTask(state, action){
            const task = action.payload;
            let {date, priority, status} = task;
            console.log(DateHelpers.formatDate(date));
            date = DateHelpers.formatDate(date);
            Object.keys(TaskPriority).forEach(key => {
                if(TaskPriority[key] === priority) priority = key;
            })
            Object.keys(TaskStatus).forEach(key => {
                if(TaskStatus[key] === status) status = key;
            })
            state.task = {...task, date, priority, status}
        }
    },
});

export const taskFormActions= taskForm.actions;
export default taskForm.reducer;