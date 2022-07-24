import axios from "axios";

const resource_uri = "http://localhost:3000/task";

const state = {
  tasks: [],
};

const getters = {
  allTasks: (state) => state.tasks,
};

const actions = {
  async getTasks({ commit }) {
    const response = await axios.get(resource_uri);
    commit("setTasks", response.data);
  },
  async addTask({ commit }, newTask) {
    const response = await axios.post(resource_uri, newTask);
    commit("newTask", response.data);
  },
  async updateTask({ commit }, task) {
    const response = await axios.put(`${resource_uri}/${task.id}`, task);
    commit("updTask", response.data);
  },
  async removeTask({ commit }, taskId) {
    await axios.delete(`${resource_uri}/${taskId}`);
    commit("delTask", taskId);
  },
};

const mutations = {
  setTasks: (state, tasks) => (state.tasks = tasks),
  newTask:  (state, task)  => state.tasks = [ ...state.tasks, task ],
  updTask:  (state, task)  => {
    const index = state.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      state.tasks = [ ...state.tasks.slice(0, index), task, ...state.tasks.slice(index +  1)];
    }
  },
  delTask: (state, taskId) => state.tasks = state.tasks.filter((task) => task.id !== taskId),
};

export default { state, getters, actions, mutations };
