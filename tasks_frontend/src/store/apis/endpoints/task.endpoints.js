export const TasksEndpoints = (builder) => {

    return {
        getTaskById: builder.query({
            query: (id) => `/tasks/${id}`,
            providesTags: ["History"]
        }),
        getAllTasks: builder.query({
            query: () => '/tasks',
        }),
        createTask: builder.mutation({
            query: (newTask) => ({
                url: '/tasks',
                method: 'POST',
                body: newTask,
            }),
            invalidatesTags: ["Task", "History"],
        }),
        editTask: builder.mutation({
            query: (newTask) => ({
                url: `/tasks/${newTask.id}`,
                method: 'PATCH',
                body: newTask
            }),
            invalidatesTags: ["Task", "History"]
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Task", "History"]
        }),
    }

}
