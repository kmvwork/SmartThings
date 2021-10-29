import {createSlice} from "@reduxjs/toolkit";

export const smartThingsSlice = createSlice({
    name: 'smartThings',
    initialState: {
        listSmartThings: [],
        loading: false,
        error: false,
        countError: 0,
    },
    reducers: {
        setSmartThings: (state, action) => {
            try {
                action.payload.map(item => {
                    state.listSmartThings.push(item)
                })
            } catch (e) {
                state.error = true
                throw new Error(e)
            }
        },
        updateSmartThings: (state, action) => {
            try {
                state.loading = true
                state.listSmartThings = []
                action.payload.map(item => {
                    state.listSmartThings.push(item)
                })
                state.countError % 3 === 0 ? state.error = true : state.error = false
                state.countError++;
            } catch (e) {
                state.error = true
                throw new Error(e)
            }
        },
        refreshSmartThings: (state, action) => {
            try {
                state.loading = true
                state.listSmartThings = []
                action.payload.map(item => {
                    state.listSmartThings.push(item)
                })
                state.error = false
            } catch (e) {
                state.error = true
                throw new Error(e)
            }
        },
        loadedSmartThings: (state, action) => {
            try {
                state.loading = false
            } catch (e) {
                state.error = true
                throw new Error(e)
            }
        },
        deleteSmartThings: (state, action) => {
            try {
                state.listSmartThings = state.listSmartThings.filter((item) => {
                    return item.id !== action.payload
                })
            } catch (e) {
                state.error = true
                throw new Error(e)
            }
        }
    }
})

export const {
    setSmartThings,
    updateSmartThings,
    refreshSmartThings,
    loadedSmartThings,
    deleteSmartThings
} = smartThingsSlice.actions

export default smartThingsSlice.reducer