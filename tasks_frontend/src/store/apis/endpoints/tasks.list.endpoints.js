export const TasksListEndpoints = (builder) => {


    return {
        createTaskList: builder.mutation({
            query: (newTaskList) => ({
                url: '/tasks-list',
                method: 'POST',
                body: newTaskList,
            }),
            invalidatesTags: ["Task"]
        }),
        editTaskList: builder.mutation({
            query: (taskList) => ({
                url: `/tasks-list/${taskList.id}`,
                method: 'PATCH',
                body: taskList,
            }),
            invalidatesTags: ["Task"]
        }),
        deleteTaskList: builder.mutation({
            query: (id) => ({
                url: `/tasks-list/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Task"]
        }),
        getAllTasksLists: builder.query({
            query: () => '/tasks-list',
            providesTags: ["Task"]
        }),

    }

}
