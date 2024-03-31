export const HistoryEndpoints = (builder) => {


    return {
        getAllHistory: builder.query({
            query: () => '/history',
            providesTags: ["History"]
        }),
    }

}
