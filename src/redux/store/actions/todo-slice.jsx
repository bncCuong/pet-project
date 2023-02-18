import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todolist',
    initialState: {
        todoList: [],
        totalJob: 0,
        totalImpotant: 0,
        totalCompleted: 0,
    },

    reducers: {
        addToDo(state, action) {
            const newJob = action.payload;
            state.todoList.push({
                id: Date.now(),
                name: newJob.name,
                time: newJob.time,
                important: false,
                completed: false,
            });
            state.totalJob++;
        },
        deleteTodo(state, action) {
            const idJob = action.payload.id;
            const completed = action.payload.completed;
            const important = action.payload.important;
            state.todoList = state.todoList.filter((job) => job.id !== idJob);
            if (important) {
                state.totalImpotant--;
            }
            if (completed) {
                state.totalCompleted--;
            }
            state.totalJob--;
        },
        setImpotant(state, action) {
            const index = state.todoList.findIndex((todo) => todo.id === action.payload.id);
            state.todoList[index].important = action.payload.important;
            if (state.todoList[index].important === true) {
                state.totalImpotant++;
            } else {
                state.totalImpotant--;
            }
        },
        setCompleted(state, action) {
            const index = state.todoList.findIndex((todo) => todo.id === action.payload.id);
            state.todoList[index].completed = action.payload.completed;
            console.log(state.todoList[index].completed);
            if (state.todoList[index].completed === true) {
                state.totalCompleted++;
            } else {
                state.totalCompleted--;
            }
        },
    },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
