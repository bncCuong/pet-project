import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todolist',
    initialState: {
        todoList: [],
    },
    reducers: {
        addToDo(state, action) {
            const newJob = action.payload;
            state.todoList.push({
                name: newJob.name,
                time: newJob.time,
                important: true,
                completed: false,
            });
        },
        setImpotant(state, action) {},
    },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
