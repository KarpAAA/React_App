import {configureStore} from "@reduxjs/toolkit";
import {taskApi} from "./apis/task.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import uiSlice from "./slices/ui.slice";
import taskFormSlice from "./slices/task.form.slice";
import errorSlice from "./slices/error.slice";
import taskListFormSlice from "./slices/task.list.form.slice";

export const store = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
        ui: uiSlice,
        taskForm: taskFormSlice,
        error: errorSlice,
        taskListForm: taskListFormSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(taskApi.middleware),
})

setupListeners(store.dispatch)
