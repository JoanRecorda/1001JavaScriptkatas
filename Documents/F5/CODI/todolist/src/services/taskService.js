import axios from 'axios'
const baseURL = "http://localhost:3000/"

export const taskService = {
    getAll() { // RETRIEVE
        return axios.get(baseURL + "tasks/")
    },
    createTask(newTask) { // CREATE
        axios.post(baseURL + "tasks/", {title: newTask, isDone: false})

        return this.getAll()
    },
    deleteTask(id) { // DELETE
        axios.delete(baseURL + "tasks/" + id)

        return this.getAll()
    },
    updateTask(id) { // UPDATE
        axios.patch(baseURL + "tasks/" + id, {name: updatedTitle, done: updatedStatus})

        return this.getAll();
    }
}