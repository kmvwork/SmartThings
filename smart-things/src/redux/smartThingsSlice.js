import {createSlice} from "@reduxjs/toolkit";

export const smartThingsSlice = createSlice({
    name: 'smartThings',
    initialState: {
        listSmartThings: [],
        loading: false,
        error: false,
    },
    reducers: {
        setSmartThings: (state, action) => {
            action.payload.map(item => {
                state.listSmartThings.push(item)
            })
        },
        updateSmartThings: (state, action) => {
            try {
                state.loading = true
                state.listSmartThings = []
                action.payload.map(item => {
                    state.listSmartThings.push(item)
                })
                state.error = false

            } catch (e) {
                state.error = true
            }

        }
    }
})

export const {setSmartThings, updateSmartThings} = smartThingsSlice.actions

export default smartThingsSlice.reducer