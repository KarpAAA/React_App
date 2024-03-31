import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TasksListEndpoints} from "./endpoints/tasks.list.endpoints";
import {TasksEndpoints} from "./endpoints/task.endpoints";
import {HistoryEndpoints} from "./endpoints/history.endpoints";


export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ["Task", "History"],
    endpoints: (builder) => ({
        ...TasksListEndpoints(builder),
        ...TasksEndpoints(builder),
        ...HistoryEndpoints(builder)
    }),
})

export const {
    useGetAllTasksListsQuery,  useEditTaskListMutation, useDeleteTaskListMutation, useCreateTaskListMutation,
    useGetTaskByIdQuery, useGetAllTasksQuery, useCreateTaskMutation, useDeleteTaskMutation, useEditTaskMutation,
    useGetAllHistoryQuery} = taskApi
