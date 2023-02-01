import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todolist',
    initialState: {
        todoList: [],
        important: false,
        completed: false,
    },
    reducers: {
        addToDo(state, action) {
            const newJob = action.payload;
            state.todoList.push({
                name: newJob.name,
                time: newJob.time,
                important: newJob.important,
                completed: newJob.completed,
            });
        },
    },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
